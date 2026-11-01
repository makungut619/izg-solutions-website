---
inclusion: manual
---

# WhatsApp Chatbot Mockup — AI Image Prompt

This steering document holds the reusable prompt for turning a live WhatsApp
chatbot's conversation flow into safe, static phone mockups for the "Our Work"
page. Chatbots get their own shared "WhatsApp Chatbots" tile on the Work page
(like Digital Cards), separate from the website grid.

You give the AI the business details and the short, exact message text for 3
stages of the flow. It returns 3 portrait phone mockups, one per stage.

## How to use

1. Get the flow explanation from the client's live bot (what the customer does
   from first hello to the end result).
2. Pick 3 stages that tell the story, for example:
   1. **Greeting / menu** — the bot welcomes the customer and offers options.
   2. **Core step** — the heart of the flow (choosing a service, adding an
      item, describing a job).
   3. **Result** — confirmation of the booking, order or quote request.
3. Write the exact on-screen text for each stage (see **Message text** below).
4. Fill in the **Business context** block and paste the **Prompt** once per
   stage, changing only the stage block.
5. Save the outputs into `public/work/chatbots/` (see naming below).
6. Check every image against the **Reminder before publishing** list.

## Why this prompt exists (POPIA and brand safety)

A real conversation contains real customers. We must NOT publish a real
customer's name, phone number, address, order details or messages. We also
should not use WhatsApp's logo or branding. This prompt exists to neutralise
that:

- **Fake customer data only.** Use invented names, addresses and order details.
  Never paste text from a real customer's chat, even with the name removed.
- **No phone numbers.** Not the customer's, and not the business's WhatsApp
  number. Leave the header as business name plus a generic "online" line.
- **No WhatsApp logo or wordmark.** Use a generic messaging-app look that
  evokes a chat, not the brand.
- **No real status bar details.** Generic and neutral only (no time, battery %,
  carrier or signal that could identify anyone).
- **Business named only with consent.** Use the client's name and logo only if
  they have agreed to be shown. If not, use a generic placeholder name.

## Important guardrails

- **Legible text is the hard part.** AI image tools often garble words. Give the
  generator the exact text, keep each bubble to one short sentence, and keep it
  to roughly 4 to 6 bubbles per screen. After generating, read every word.
  If anything is garbled or misspelled, regenerate. Do not publish mangled text.
- **One phone per image**, upright, no extra devices.
- Keep the text accurate to what the real bot does. Do not show features the bot
  does not have (for example a customer being switched to a live agent inside
  the chat).
- Same background tone and phone style across all 3 stages so they read as one
  set.

## Prompt

```
Create a clean smartphone mockup for a design-studio portfolio showing ONE
screen of a business WhatsApp-style chatbot conversation. Use a generic
messaging-app look that evokes a chat, but do NOT use the WhatsApp logo,
wordmark or any other brand logo.

Phone and scene:
- A single modern smartphone with thin bezels, upright and centered, shown
  straight on.
- Place it on a clean, flat background in a soft tone drawn from [BRAND COLOR].
  No clutter, generous breathing room, soft realistic drop shadow under the
  phone.
- Bright, airy studio lighting. High-end, minimal look.
- Portrait orientation.

Chat screen:
- Header: a round avatar with the first letter of [BUSINESS NAME], the name
  "[BUSINESS NAME]" and the word "online". No phone number, no logo.
- Chat background: light and softly patterned. Customer messages are right-
  aligned in a soft green bubble, bot messages are left-aligned in white.
- Render EXACTLY the following messages, spelled exactly as written, in this
  order. Do not add, remove or change any words:

[STAGE MESSAGES — one per line, labelled Bot: or Customer:, optional quick-
reply buttons labelled Options:]

- Quick-reply options, if any, appear as small rounded pill buttons beneath the
  bot message they belong to.
- Keep all text sharp, horizontal and fully legible.

MUST NOT include (privacy / POPIA — do not skip):
- Any real person's name, any phone number, any email address, any URL or web
  address.
- The WhatsApp logo or any app brand logo.
- Real status bar details (time, battery percentage, carrier, signal). If a
  status bar is shown, make it generic and neutral.
- Extra devices, text overlays, captions, hands, people or busy backgrounds.
  Just one phone on a clean background.

Output: high resolution, portrait, ready to embed in a website portfolio
section.
```

## Business context (fill in per client)

```
Business name:        [NAME — only if the client agreed to be named]
What they do:         [1–2 sentences]
What the bot does:    [e.g. takes bookings / takes orders / captures quotes]
Brand colour:         [flat tone for the background, same across all 3 stages]

Stage 1 — Greeting:
  Bot: [one short sentence]
  Options: [up to 3 short buttons]

Stage 2 — Core step:
  Customer: [short]
  Bot: [one short sentence]
  Options: [optional]
  Customer: [short]

Stage 3 — Result:
  Bot: [one short sentence confirming the booking / order / request]
```

Use invented details only (fake names, fake addresses, example prices).

## Output naming & placement

Save generated files into `public/work/chatbots/` using the pattern:

```
public/work/chatbots/<client-slug>-1-greeting.png
public/work/chatbots/<client-slug>-2-<step>.png
public/work/chatbots/<client-slug>-3-result.png
```

Example: `public/work/chatbots/glow-studio-1-greeting.png`.

These phone mockups are combined into a single shared "WhatsApp Chatbots" tile
on the Work page — one container, not one portfolio tile per stage. The tile's
copy (business, industry, what the bot does, and any result we can honestly
quote) lives in the chatbot data in `app/work/projects.ts`, next to
`digitalCards`.

## Reminder before publishing

Before any chatbot mockup goes live, double-check every image:
- All text is spelled correctly and fully readable.
- No real customer name, phone number, address or order detail is visible.
- No phone number or URL appears anywhere, including the header.
- No WhatsApp logo or other brand logo.
- No real status-bar data.
- The client has agreed to be named, or the name is a generic placeholder.
- The flow shown matches what the live bot actually does.
