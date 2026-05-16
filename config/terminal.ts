/**
 * terminal.ts
 * ─────────────────────────────────────────────────────────────
 * Payloads for the interactive Terminal window. Each entry is the
 * content printed by a command or a virtual file. Lines are shown
 * verbatim — an empty string renders as a blank line.
 * ─────────────────────────────────────────────────────────────
 */

export interface TerminalConfig {
  /** Content of `cat about.txt`. */
  about: string[]
  /** Content of `cat skills.txt`. */
  skills: string[]
  /** Content of `cat experience.txt`. */
  experience: string[]
  /** Content of `cat contact.txt`. */
  contact: string[]
  /** Content of `cat resume.pdf`. */
  resume: string[]
  /** Output of `whoami`. */
  whoami: string[]
  /** Fake JSON returned by `curl github.com/<user>`. */
  githubJson: string
}

export const terminal: TerminalConfig = {
  about: [
    "Name:   Shiven Ahuja",
    "Age:    22",
    "",
    "Passionate about software engineering, system design,",
    "and emerging technologies.",
  ],
  skills: [
    "Languages & Frameworks:  TypeScript · JavaScript · Java · C · React.js · Node.js · Express.js · Tailwind CSS",
    "Databases & Cloud:  Kubernetes · PostgreSQL · MySQL · MongoDB · AWS · Firebase · Supabase",
    "Tools & Platforms:  Docker · Terraform · Git · GitHub Actions · Playwright",
  ],
  experience: [
    "Allen Digital    Jan 2025 – Jul 2025   SDET Intern",
  ],
  contact: [
    "email:     shivenahuja2004@gmail.com",
    "github:    github.com/shiven16",
    "linkedin:  https://www.linkedin.com/in/shiven-ahuja-13238427b/",
  ],
  resume: [
    "Opening resume…",
  ],
  whoami: [
    "Shiven Ahuja",
    "Software Engineer · Bengaluru, India",
    "",
    "Passionate about scalable applications,",
    "and developer-focused tools.",
  ],
  githubJson: `{"login":"shiven16","name":"Shiven Ahuja","bio":"Software Engineer","public_repos":42}`,
}
