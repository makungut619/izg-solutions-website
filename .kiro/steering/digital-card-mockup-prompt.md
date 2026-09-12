---
inclusion: manual
---

# Digital Card Mockup — AI Image Prompt

This steering document holds the reusable prompt for turning a real digital
business card screenshot into a safe, animated phone mockup for the "Our Work"
page. You give the AI ONE card screenshot at a time; it returns one phone
mockup.

## How to use

1. Take a screenshot of one client's digital card (as shown in the browser).
2. Attach that single screenshot to the AI image generator.
3. Paste the **Prompt** below.
4. Save the output into `public/work/cards/` (see naming below).

## Why this prompt exists (POPIA safety)

The real card screenshots contain a **working QR code** that resolves to a real
person's contact details, plus the live URL `cards.izgsolutions.co.za`. We must
NOT publish either of those. This prompt exists to neutralise them:

- **Fake the QR code.** The generated QR must be decorative only — a
  realistic-looking but NON-functional QR pattern that does not scan to anything.
- **Remove the URL and browser chrome.** No address bar, no
  `cards.izgsolutions.co.za`, no browser buttons, no phone status bar carrying
  real info.
- Keep it looking like a genuine digital card so it still sells the product,
  just stripped of anything that exposes a real client's data.

## Prompt

```
Recreate the attached digital business card as a clean, animated smartphone
mockup for a design-studio portfolio. Use the screenshot only as a layout and
style reference — reproduce the same look and feel, but apply the changes below.

MUST change (privacy / POPIA — do not skip):
- Replace the QR code with a FAKE, decorative QR pattern. It must look like a
  realistic QR code but must NOT be scannable or encode any real data. Randomise
  the modules so it cannot resolve to anything.
- Remove the browser address bar and any URL text (e.g. any "cards.izgsolutions"
  or similar). No browser chrome, no navigation buttons.
- Remove the phone's real status bar details (time, battery %, carrier, signal).
  If a status bar is shown, make it generic and neutral.
- Keep the "Scan to save contact" line and the small "Powered by IZG Solutions"
  credit if present, but drop anything that reveals a live web address.

Keep the same:
- Overall card layout, colour palette, brand logo placement, portrait photo,
  the person's name, their role/title, and company name.
- The premium, polished digital-card aesthetic.

Presentation:
- Place the card inside a single modern smartphone with thin bezels, shown
  upright and centered.
- Put the phone on a clean flat background in a soft neutral tone (light grey or
  a subtle tint drawn from the card's palette). No clutter, generous breathing
  room, soft realistic drop shadow under the phone.
- Bright, airy studio lighting. High-end, minimal look.

Animation (subtle seamless loop):
- Gentle floating motion — the phone drifts up and down slowly.
- A soft light sweep passing across the screen.
- Optional very subtle shimmer on the fake QR so the screen feels alive.
- Calm and premium, no fast motion, perfectly looping.

Do NOT include: a real/scannable QR code, any URL or web address, browser UI,
real battery/time/carrier info, extra devices, text overlays, captions, or busy
backgrounds. Just one phone on a clean background.

Output: high resolution, portrait orientation, ready to embed in a website
portfolio section.
```

## Output naming & placement

Save generated files into `public/work/cards/` using the pattern:

```
public/work/cards/<firstname-lastname>-card.png     (static mockup)
public/work/cards/<firstname-lastname>-card.mp4      (animated loop, optional)
public/work/cards/<firstname-lastname>-card.webm     (optional smaller loop)
public/work/cards/<firstname-lastname>-poster.jpg    (static fallback for video)
```

Example: `public/work/cards/noluthando-dlamini-card.png`.

These individual card mockups are combined into a single shared "Digital Cards"
tile on the Work page — many cards, one container — rather than one portfolio
tile per person.

## Reminder before publishing

Before any card mockup goes live, double-check the output:
- The QR code is fake and does not scan.
- No URL, address bar, or real status-bar data is visible.
