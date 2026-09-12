---
inclusion: manual
---

# Work Portfolio Mockup — AI Image Prompt

This steering document holds the reusable prompt for generating animated device mockups for the "Our Work" page. Each project on the Work page is represented by one of these mockups: a two-device scene (laptop + phone) on a flat colored background, with subtle looping animation.

## How to use

1. Take a screenshot of the client's site in desktop/web view and one in mobile view.
2. Attach both screenshots to the AI image generator.
3. Fill in the **Business context** block below with that client's details.
4. Paste the **Prompt** into the generator.
5. Save the output into `public/work/` (see naming below), then it gets wired into the Work page.

## Important guardrails

- **Two devices only** — a laptop and a smartphone. Do NOT generate three devices or add a desktop monitor.
- **Inspired by, not copied.** The screenshots are reference for vibe, colors, and layout feel only. The generator must create fresh, generic-looking on-screen content in the same spirit — NOT a pixel-accurate reproduction of the client's actual UI. This keeps us clear of copying/IP concerns.
- **No logos, brand names, or real copy** on the screens. Use abstract or placeholder-style UI content that merely evokes the design direction.
- Keep one flat background color per project (or per category) so the portfolio grid looks intentional.

## Prompt

```
Create a modern, professional product-showcase mockup for a web-design studio
portfolio. The scene contains exactly TWO devices — a laptop and a smartphone —
composited together as one hero image.

Devices:
- A modern thin-bezel laptop, front and center-left, at a slight angle.
- A modern smartphone, front-right, slightly overlapping the laptop, standing
  upright.
- Arrange them as a cohesive floating group with the phone slightly in front.

On-screen content (IMPORTANT — do not copy the reference exactly):
- I am attaching a desktop/web screenshot and a mobile screenshot ONLY as a
  style reference for color palette, layout rhythm, and overall vibe.
- Do NOT reproduce the actual interface. Instead, invent fresh, generic UI that
  captures the same feeling: similar colors, similar type of layout (hero
  section, product blocks, buttons), but abstract and original.
- No real logos, no readable brand names, no exact copy. Placeholder-style text
  and shapes only.
- Make the laptop show a web-style layout and the phone show a mobile-style
  layout of the same imagined product.

Style & mood:
- Solid flat background in [BRAND COLOR] — single flat color, no gradients, no
  clutter, generous breathing room around the devices.
- Clean, high-end agency aesthetic. Bright, airy studio lighting.
- Soft realistic drop shadows beneath the devices for depth.
- Matte, premium, modern devices. Subtle screen glow and light reflection.
- Landscape orientation, centered composition.

Animation (subtle seamless loop):
- Gentle floating parallax — the two devices drift up and down slowly at
  slightly different speeds.
- A soft light sweep passing across the screens.
- Very subtle content shimmer/scroll to suggest the screens are alive.
- Calm and premium — no fast or distracting motion. Perfectly looping.

Do NOT include: a third device, desktop monitor, text overlays, logos, captions,
people, extra props, or busy backgrounds. Just the two devices on the flat
colored background.

Output: high resolution, landscape, ready to embed in a website portfolio
section.
```

## Business context (fill in per project)

```
Business name:        [NAME]
What they do:         [1–2 sentences]
What we built:        [website / chatbot / catalogue / etc.]
Vibe / brand feeling: [e.g. bold and playful / clean corporate / warm premium]
Background color:     [flat color, kept consistent across the project]
```

## Output naming & placement

Save generated files into `public/work/` using the pattern:

```
public/work/<project-slug>-mockup.mp4     (animated loop)
public/work/<project-slug>-mockup.webm    (optional smaller loop)
public/work/<project-slug>-poster.jpg     (static poster/fallback frame)
```

Example: `public/work/platinum-projects-mockup.mp4`, `platinum-projects-poster.jpg`.

Keep a static poster image for every animated mockup so the Work page has a
fast, non-animated fallback.
