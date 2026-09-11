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
  { label: "Websites", value: "Website" },
  { label: "Digital Cards", value: "Digital Card" },
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
    slug: "sean-zimunya",
    name: "Sean Zimunya",
    image: "/work/cards/sean-zimunya-card.png",
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
];
