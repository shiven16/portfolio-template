/**
 * siteConfig.ts
 * ─────────────────────────────────────────────────────────────
 * Identity, social profiles, contact details, and page metadata.
 *
 * 👉 This is the FIRST file to edit when forking the template.
 * Everything else (projects, experience, skills, blogs) lives in
 * its own file inside /config so the data stays easy to maintain.
 * ─────────────────────────────────────────────────────────────
 */

// ── Types ───────────────────────────────────────────────────────────

export interface Personal {
  firstName: string
  lastName: string
  fullName: string
  /** Two-letter badge shown in the mobile status bar (e.g. "JD"). */
  initials: string
  /** Short role shown under your name in the Hero (e.g. "Frontend Engineer"). */
  role: string
  /** Longer title shown on the résumé header. */
  shortRole: string
  /** One-paragraph bio shown in the Hero. */
  tagline: string
  /** "City, Country" — displayed in Hero footer and résumé header. */
  location: string
  age: number | string
  /** Path (in /public) to your avatar image. */
  avatar: string
  /** Handle shown next to the avatar (no @). */
  username: string
}

export interface Social {
  github: string
  twitter: string
  /** Medium, Hashnode, personal blog, etc. */
  blog: string
  /** Bare GitHub username used in labels + API calls. */
  githubUsername: string
  /** Twitter/X handle, no @. */
  twitterHandle: string
}

export interface ContactRow {
  icon: "mail" | "calendar" | "linkedin" | "github"
  href: string
  label: string
  /** Short monospaced value shown on the right of each row. */
  mono: string
}

export interface Contact {
  email: string
  calendar: string
  heading: string
  subheading: string
  rows: ContactRow[]
}

export interface Seo {
  title: string
  description: string
}

export interface Features {
  /** If true, the arrow-arrow-b-a Konami code triggers an easter egg overlay. */
  konami: boolean
}

export interface SiteConfig {
  personal: Personal
  social: Social
  contact: Contact
  seo: Seo
  /** URL to an external résumé (Notion page, Google Doc, hosted PDF). */
  resumeLink: string
  features: Features
}

// ── EDIT BELOW ──────────────────────────────────────────────────────

export const siteConfig: SiteConfig = {
  personal: {
    firstName: "Shiven",
    lastName: "Ahuja",
    fullName: "Shiven Ahuja",
    initials: "SA",
    role: "",
    shortRole: "",
    tagline:
      "Passionate about software engineering, system design, and emerging technologies, with a strong interest in building scalable applications, developer-focused tools, and efficient digital experiences through thoughtful architecture and problem-solving.",
    location: "",
    age: 20,
    avatar: "/avatar.svg",
    username: "shiven16",
  },

  social: {
    github: "https://github.com/shiven16",
    twitter: "https://www.linkedin.com/in/shiven-ahuja-13238427b/",
    blog: "",
    githubUsername: "shiven16",
    twitterHandle: "shivenahuja",
  },

  contact: {
    email: "shivenahuja2004@gmail.com",
    calendar: "https://cal.com/shiven16",
    heading: "Let's Connect",
    subheading: "Open to collaborations, freelance work, or just a conversation.",
    rows: [
      { icon: "mail", href: "mailto:shivenahuja2004@gmail.com", label: "Email", mono: "shivenahuja2004@gmail.com" },
      { icon: "linkedin", href: "https://www.linkedin.com/in/shiven-ahuja-13238427b/", label: "LinkedIn", mono: "shivenahuja" },
      { icon: "github", href: "https://github.com/shiven16", label: "GitHub", mono: "shiven16" },
    ],
  },

  seo: {
    title: "Shiven Ahuja — Portfolio",
    description: "Personal portfolio and writing by Shiven Ahuja.",
  },

  resumeLink: "https://drive.google.com/file/d/1MI0kiS5V8Li505cIiQ33Sp3gMEgfv8d9/view?usp=sharing",

  features: {
    konami: false,
  },
}
