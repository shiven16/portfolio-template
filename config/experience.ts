/**
 * experience.ts
 * ─────────────────────────────────────────────────────────────
 *  - `experience`        → full cards shown in the Experience window
 *                          (click one to open a modal with achievements + links).
 *  - `resumeExperience`  → condensed bullets shown on the Résumé window.
 *  - `education`         → single degree entry for the Résumé.
 *  - `teaching`          → free-form bullets for the Teaching section.
 *
 * The two experience lists are separate on purpose: the main site shows
 * every role, while the résumé groups multiple roles into summaries.
 * ─────────────────────────────────────────────────────────────
 */

export interface ExperienceItem {
  company: string
  role: string
  /** e.g. "Jun 2024 – Present" or "2023". */
  period: string
  /** One-line summary shown on the card. */
  description: string
  tech: string[]
  /** Bullet points shown in the modal. */
  achievements: string[]
  /** Optional related links shown at the bottom of the modal. */
  links?: { type: string; url: string; label: string }[]
}

export const experience: ExperienceItem[] = [
  {
    company: "Allen Digital",
    role: "SDET Intern",
    period: "Jan 2025 – Jul 2025",
    description: "Built UI/API automation frameworks, productionized AI-driven test analysis, and managed on-call infrastructure.",
    tech: ["Playwright", "TypeScript", "Python", "AWS", "MongoDB", "SQL"],
    achievements: [
      "Built and scaled UI and API automation frameworks using Playwright, TypeScript, and YAML, increasing test coverage and reducing flaky test failures by 30-35%.",
      "Productionized an AI-driven test failure analysis system by deploying an AWS Lambda + SQS pipeline to process test reports and store structured logs in MongoDB, reducing debugging time by 50% and enabling faster root cause analysis.",
      "Automated test data setup and database workflows using SQL and Python scripts, eliminating manual effort and ensuring consistent test environments.",
      "Owned on-call test infrastructure, analyzed failures, and managed issues via JIRA, accelerating bug triaging and improving coordination between QA and development teams.",
      "Contributed 8-10 PRs per week, fixing automation issues and improving overall code quality and test stability.",
    ],
  },
]

// ── Résumé-only condensed version ────────────────────────────────────

export interface ResumeExperienceItem {
  company: string
  role: string
  period: string
  /** Optional list of sub-companies (e.g. for a contractor umbrella). */
  subRoles?: string[]
  bullets: string[]
}

export const resumeExperience: ResumeExperienceItem[] = [
  {
    company: "Allen Digital",
    role: "SDET Intern",
    period: "Jan 2025 – Jul 2025",
    bullets: [
      "Built and scaled UI and API automation frameworks using Playwright, TypeScript, and YAML, increasing test coverage and reducing flaky test failures by 30-35%.",
      "Productionized an AI-driven test failure analysis system by deploying an AWS Lambda + SQS pipeline to process test reports and store structured logs in MongoDB, reducing debugging time by 50% and enabling faster root cause analysis.",
      "Automated test data setup and database workflows using SQL and Python scripts, eliminating manual effort and ensuring consistent test environments.",
      "Owned on-call test infrastructure, analyzed failures, and managed issues via JIRA, accelerating bug triaging and improving coordination between QA and development teams.",
      "Contributed 8-10 PRs per week, fixing automation issues and improving overall code quality and test stability.",
    ],
  },
]

// ── Education + Teaching ─────────────────────────────────────────────

export interface EducationItem {
  school: string
  degree: string
  period: string
}

export const education: EducationItem = {
  school: "Newton School of Technology, Rishihood University",
  degree: "B.Tech. — Computer Science (CGPA: 8.07)",
  period: "2023 – 2027",
}

export const teaching: string[] = []
