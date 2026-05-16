/**
 * skills.ts
 * ─────────────────────────────────────────────────────────────
 * Skills grouped by category. Keys become category labels on the
 * left; values become the chip list on the right.
 *
 * Add, remove, or rename categories freely — the Résumé section
 * iterates over Object.entries(skills), so the UI adapts.
 * ─────────────────────────────────────────────────────────────
 */

export type Skills = Record<string, string[]>

export const skills: Skills = {
  "Languages & Frameworks": ["TypeScript", "JavaScript", "Java", "C", "React.js", "Node.js", "Express.js", "Tailwind CSS"],
  "Databases & Cloud": ["Kubernetes", "PostgreSQL", "MySQL", "MongoDB", "AWS", "Firebase", "Supabase"],
  "Tools & Platforms": ["Docker", "Terraform", "Git", "GitHub Actions", "Playwright"],
}
