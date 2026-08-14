---
inclusion: manual
---

# Admin Images Deployment

This steering document guides the deployment of AI-generated admin/meta images into a client's Next.js project. The generated images live in an overarching folder at the Websites root, and this document tells you exactly where each file goes and what code changes are needed.

## Source Folder

All generated admin images are stored in a single shared folder at the Websites root:

```
/Websites/generated-images/
```

This folder contains the output files from the AI image generation prompts (see `website-image-prompts.md` in the Websites root). Images are placed here for whichever client is being worked on at the time — once deployed, they can be cleared out for the next client.

## Target Project

Client projects live at:

```
/Websites/clients/{client-name}/
```

All admin images are deployed into the client's `public/` directory.

## File Placement Map

When given a client project name, copy/move each generated image to the correct location within `clients/{client-name}/public/`:

| Source File | Destination (relative to `public/`) | Notes |
|------------|--------------------------------------|-------|
| `favicon.svg` | `favicon.svg` | Root of public |
| `favicon-32x32.png` | `favicon-32x32.png` | Root of public |
| `favicon-16x16.png` | `favicon-16x16.png` | Root of public |
| `favicon.ico` | `favicon.ico` | Root of public (converted from 32x32) |
| `apple-touch-icon.png` | `apple-touch-icon.png` | Root of public |
| `android-chrome-192x192.png` | `android-chrome-192x192.png` | Root of public |
| `android-chrome-512x512.png` | `android-chrome-512x512.png` | Root of public |
| `icon-512x512-maskable.png` | `icon-512x512-maskable.png` | Root of public |
| `mstile-150x150.png` | `mstile-150x150.png` | Root of public |
| `mstile-310x310.png` | `mstile-310x310.png` | Root of public |
| `mstile-310x150.png` | `mstile-310x150.png` | Root of public |
| `og-image.jpg` | `og-image.jpg` | Root of public |
| `twitter-card.jpg` | `twitter-card.jpg` | Root of public |
| `schema-logo.png` | `schema-logo.png` | Root of public |
| `safari-pinned-tab.svg` | `safari-pinned-tab.svg` | Root of public |
| `publisher-logo.png` | `publisher-logo.png` | Root of public |

All files go directly in `public/` (not in a subfolder) so they're served at the site root — this is required for browser auto-discovery of favicons and for social media crawlers.

## Code Changes Required

After placing the images, the following code updates are needed:

### 1. Create `public/site.webmanifest`

```json
{
  "name": "{Client Full Name}",
  "short_name": "{Client Short Name}",
  "icons": [
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    },
    {
      "src": "/icon-512x512-maskable.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "maskable"
    }
  ],
  "theme_color": "{brand-primary-color}",
  "background_color": "#ffffff",
  "display": "standalone"
}
```

### 2. Create `public/browserconfig.xml`

```xml
<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
  <msapplication>
    <tile>
      <square150x150logo src="/mstile-150x150.png"/>
      <square310x310logo src="/mstile-310x310.png"/>
      <wide310x150logo src="/mstile-310x150.png"/>
      <TileColor>{brand-primary-color}</TileColor>
    </tile>
  </msapplication>
</browserconfig>
```

### 3. Update the root layout `<head>` metadata

In the client's `src/app/layout.tsx` (or wherever the root layout lives), ensure the metadata export includes:

```typescript
export const metadata: Metadata = {
  // ... existing metadata ...
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "{brand-primary-color}" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    // ... existing OG config ...
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "{Client Name}",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/twitter-card.jpg"],
  },
  other: {
    "msapplication-TileColor": "{brand-primary-color}",
    "msapplication-config": "/browserconfig.xml",
  },
};
```

### 4. Add Schema.org structured data

In the root layout or a dedicated component, include JSON-LD:

```typescript
const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "{Client Full Name}",
  url: "{client-site-url}",
  logo: "{client-site-url}/schema-logo.png",
};
```

Render it in the `<head>`:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
/>
```

### 5. Theme color meta tag

Next.js Metadata API handles this via:

```typescript
export const metadata: Metadata = {
  // ...
  themeColor: "{brand-primary-color}",
};
```

## Execution Steps

When asked to deploy admin images for a client:

1. Confirm the client project name (must match a folder in `clients/`)
2. Check that `generated-images/` exists at the Websites root and contains the expected files
3. If any files with the same names already exist in `clients/{client-name}/public/`, delete the old ones first
4. Move (not copy) all image files from `generated-images/` to `clients/{client-name}/public/`
5. Create `site.webmanifest` in public/
6. Create `browserconfig.xml` in public/
7. Update the root layout's metadata export with icons, manifest, OG, and Twitter config
8. Add Schema.org JSON-LD if not already present
9. Verify no existing favicon/meta image references conflict (remove old ones if found)

## Validation Checklist

After deployment, verify:

- [ ] `favicon.svg` loads at `{site-url}/favicon.svg`
- [ ] `apple-touch-icon.png` loads at `{site-url}/apple-touch-icon.png`
- [ ] `site.webmanifest` loads at `{site-url}/site.webmanifest` and is valid JSON
- [ ] `browserconfig.xml` loads at `{site-url}/browserconfig.xml` and is valid XML
- [ ] OG image shows in social media debuggers (Facebook Sharing Debugger, Twitter Card Validator)
- [ ] Schema.org logo validates in Google Rich Results Test
- [ ] No console 404 errors for any icon files
