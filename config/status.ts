/**
 * status.ts
 * ─────────────────────────────────────────────────────────────
 * Data for the StatusWidget shown in the desktop's top-right
 * corner. Flip `available` to false to render a muted indicator.
 *
 * The `currently` rows are free-form "label + value" pairs — add
 * or remove as many as you want.
 * ─────────────────────────────────────────────────────────────
 */

export interface StatusRow {
  /** Short label (5-10 chars reads best). */
  label: string
  value: string
}

export interface StatusConfig {
  available: boolean
  label: string
  currently: StatusRow[]
}

export const status: StatusConfig = {
  available: true,
  label: "Open to work",
  currently: [
    { label: "Building", value: "NodeWatch: Decentralized uptime verification powered by distributed validators" },
    { label: "Exploring", value: "Distributed systems, Rust, and decentralized infrastructure through blockchain and Solana development." },
  ],
}
