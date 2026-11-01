import { Globe, type LucideIcon } from "lucide-react";

export type WorkCategory =
  | "Website"
  | "Digital Card"
  | "WhatsApp Chatbot"
  | "Custom Digital Solution";

export interface Project {
  slug: string;
  title: string;
  category: WorkCategory;
  icon: LucideIcon;
  industry: string;
  /** Outcome-focused one-liner shown on the card. */
  result: string;
  /** Longer supporting description. */
  description: string;
  /** Flat background color behind the mockup, used as a loading backdrop. */
  accent: string;
  /** Static device mockup image (baked-in background). Path under /public. */
  image?: string;
  /** Optional animated mockup that replaces the static image when available. */
  media?: {
    poster: string;
    webm?: string;
    mp4?: string;
  };
  /** Optional live URL. When present, a "Visit site" link is shown. */
  liveUrl?: string;
  /** Marks the hero/featured project rendered large at the top. */
  featured?: boolean;
}

export const categories: { label: string; value: WorkCategory | "All" }[] = [
  { label: "All", value: "All" },
  { label: "Digital Cards", value: "Digital Card" },
  { label: "Websites", value: "Website" },
  { label: "WhatsApp Chatbots", value: "WhatsApp Chatbot" },
  { label: "Custom Solutions", value: "Custom Digital Solution" },
];

export interface DigitalCard {
  slug: string;
  /** Person's name (used for alt text only; card image shows full details). */
  name: string;
  /** Phone mockup image, path under /public. */
  image: string;
}

/**
 * Individual digital business cards, shown together inside one shared
 * "Digital Cards" tile on the Work page (many cards, one container).
 * QR codes in these mockups are decorative/fake for POPIA compliance.
 */
export const digitalCards: DigitalCard[] = [
  {
    slug: "noluthando-dlamini",
    name: "Noluthando Dlamini",
    image: "/work/cards/noluthando-dlamini-card.png",
  },
  {
    slug: "lohu-makgamatha",
    name: "Lohu Makgamatha",
    image: "/work/cards/lohu-makgamatha-card.png",
  },
  {
    slug: "nduduzo-simelane",
    name: "Nduduzo Simelane",
    image: "/work/cards/nduduzo-simelane-card.png",
  },
  {
    slug: "nkambenhle-simelane",
    name: "Nkambenhle Simelane",
    image: "/work/cards/nkambenhle-simelane-card.png",
  },
  {
    slug: "ntokozo-mthembu",
    name: "Ntokozo Mthembu",
    image: "/work/cards/ntokozo-mthembu-card.png",
  },
  {
    slug: "parthenope-maturure",
    name: "Parthenope Maturure",
    image: "/work/cards/parthenope-maturure-card.png",
  },
  {
    slug: "thabiso-mdluli",
    name: "Thabiso Mdluli",
    image: "/work/cards/thabiso-mdluli-card.png",
  },
  {
    slug: "nqobile-thabede",
    name: "Nqobile Thabede",
    image: "/work/cards/nqobile-thabede-card.png",
  },
  {
    // File is spelled "mthimkhulu"; the card itself reads "Mthimkulu".
    slug: "lesedi-mthimkhulu",
    name: "Lesedi Mthimkulu",
    image: "/work/cards/lesedi-mthimkhulu-card.png",
  },
  {
    slug: "lucky-dhlamini",
    name: "Lucky Dhlamini",
    image: "/work/cards/lucky-dhlamini-card.png",
  },
];

export interface ChatbotScreen {
  /** Short step label shown under the phone. */
  label: string;
  /** Phone mockup image, path under /public/work/chatbots. */
  image: string;
  alt: string;
}

export interface ChatbotWork {
  slug: string;
  name: string;
  industry: string;
  /** Outcome-focused one-liner shown on the tile. */
  result: string;
  /** Longer supporting description. */
  description: string;
  /** Backdrop shown while the mockups load (matches their baked-in background). */
  accent: string;
  /** Phone mockups in conversation order. */
  screens: ChatbotScreen[];
}

/**
 * WhatsApp chatbots, shown as shared "WhatsApp Chatbots" tiles on the Work
 * page (one tile per client, a few phone mockups per tile). Mockups contain
 * invented customer data only; see .kiro/steering/chatbot-mockup-prompt.md.
 */
export const chatbots: ChatbotWork[] = [
  {
    slug: "ll-cleaning-solutions",
    name: "LL Cleaning Solutions",
    industry: "Cleaning Services",
    result:
      "Cleaning quote requests handled on WhatsApp, without anyone tied to the phone.",
    description:
      "Customers choose a service, the size of the space and a preferred time, and the team receives the full request by email, ready to quote.",
    accent: "#bef8f8",
    screens: [
      {
        label: "1. Greeting",
        image: "/work/chatbots/ll-cleaning-solutions-1-greeting.png",
        alt: "WhatsApp chatbot greeting a customer and offering the options Book or get a quote, See what we clean, and How it works",
      },
      {
        label: "2. Choose a service",
        image: "/work/chatbots/ll-cleaning-solutions-2-service.png",
        alt: "The chatbot asking which cleaning service is needed and how big the space is, with the customer choosing Deep Cleaning and 2-3 bedroom",
      },
      {
        label: "3. Request sent",
        image: "/work/chatbots/ll-cleaning-solutions-3-result.png",
        alt: "The chatbot summarising the cleaning request and confirming it has been sent, with the team replying with a quote and a time",
      },
    ],
  },
];

export const projects: Project[] = [
  {
    slug: "ntosh-events",
    title: "Ntosh Events",
    category: "Website",
    icon: Globe,
    industry: "MC & Live Entertainment",
    result:
      "A black-tie showcase that helps a top MC get booked for premium weddings, galas and corporate events.",
    description:
      "Dark, dramatic and gold, built to match the showmanship. Services, gallery, and an easy way for clients to book him across every screen.",
    accent: "#2D2D2D",
    image: "/work/ntosh-events.png",
    liveUrl: "https://www.ntoshevents.co.za",
    featured: true,
  },
  {
    slug: "gbm-buhle-park",
    title: "GBM Buhle Park",
    category: "Website",
    icon: Globe,
    industry: "Church / Community",
    result:
      "A warm, reverent home online that helps a Germiston church welcome new visitors.",
    description:
      "Refined gold-and-charcoal design with service times, ministries, sermons and events, inviting people to plan a visit.",
    accent: "#FAF7F2",
    image: "/work/gbm-buhle-park.png",
    liveUrl: "https://www.gbmbuhlepark.co.za",
  },
  {
    slug: "makgamatha-attorneys",
    title: "Makgamatha Attorneys",
    category: "Website",
    icon: Globe,
    industry: "Legal / Law Firm",
    result:
      "A trustworthy, premium presence that positions a black female-owned firm as the confident choice.",
    description:
      "Warm corporate design in sage and greige, spanning personal and corporate practice areas with an easy path to book a consultation.",
    accent: "#6B6560",
    image: "/work/makgamatha-attorneys.png",
    liveUrl: "https://www.makgamatha.co.za",
  },
  {
    slug: "tpm-contracting",
    title: "TPM Contracting",
    category: "Website",
    icon: Globe,
    industry: "HVAC & Refrigeration",
    result:
      "A confident, trustworthy home online for a Boksburg contractor serving corporate, commercial and public sector clients.",
    description:
      "Deep navy and bright blue, built around five services from air conditioning and refrigeration to electric fencing, boom gates and truck stop, with a clear path to request a quote.",
    accent: "#1B2740",
    image: "/work/tpm-contracting.png",
    liveUrl: "https://www.tpmcontracting.co.za",
  },
];
