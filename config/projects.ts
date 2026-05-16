/**
 * projects.ts
 * ─────────────────────────────────────────────────────────────
 * All projects shown in the Projects and Resume windows.
 * ─────────────────────────────────────────────────────────────
 */

export interface ProjectItem {
  name: string
  desc: string
  tech: string[]
  achievements: string[]
  github?: string
  live?: string
  status?: string
  stars?: number
}

export const projects: ProjectItem[] = [
  {
    name: "VaultBridge",
    desc: "A full-stack file migration platform for server-side transfers across Google Drive, Gmail Attachments, and Google Cloud Storage.",
    tech: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma ORM", "Docker", "Terraform", "AWS"],
    achievements: [
      "Built a full-stack file migration platform for server-side transfers across Google Drive, Gmail Attachments, and Google Cloud Storage; secured with Google OAuth 2.0 and AES-256 encrypted refresh tokens.",
      "Engineered a concurrent file streaming engine with cron-based auto-retry; provisioned AWS infrastructure via Terraform — frontend on S3 (static), backend on ECS via ECR (containerised).",
      "Configured CI/CD pipelines using GitHub Actions for linting (ESLint), formatting (Prettier), automated tests, and deployment workflows for both frontend and backend.",
    ],
    live: "https://vaultbridge-eight.vercel.app/",
    github: "https://github.com/shiven16/vaultbridge",
  },
  {
    name: "EduChain",
    desc: "A decentralized peer-to-peer academic credential verification system enabling universities to issue cryptographically signed certificates.",
    tech: ["Node.js", "Express.js", "REST API", "libp2p", "Docker Compose", "SHA-256", "ECDSA"],
    achievements: [
      "Developed EduChain, a decentralized peer-to-peer academic credential verification system enabling universities to issue cryptographically signed certificates.",
      "Implemented ECDSA digital signature generation and SHA-256 hashing for tamper-proof PDF certificate issuance and verification.",
      "Built decentralized ledger storage across 13 Docker-based nodes (university, employer, and relay) with fault-tolerant replication using libp2p networking.",
      "Exposed a REST API (/issue, /verify, /stats) and built a real-time network visualization dashboard showing live node status.",
    ],
    github: "https://github.com/shiven16/Educhain",
  }
]
