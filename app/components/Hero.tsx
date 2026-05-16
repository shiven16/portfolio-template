"use client"


// Text + social links come from /config/siteConfig.ts.
import { siteConfig } from '@/config/siteConfig'

export default function Hero({ compact = false }: { compact?: boolean }) {
  const { personal } = siteConfig

  return (
    <section className="px-6 pt-7 pb-6 flex flex-col h-full" style={{ minHeight: 0 }}>

      {/* Name — edit siteConfig.personal.firstName / lastName */}
      <div className="mb-5">
        <h1
          className="font-semibold tracking-tight text-white leading-[0.92] mb-3"
          style={{ fontSize: compact ? 46 : 56 }}
        >
          {personal.firstName}<br />{personal.lastName}
        </h1>
      </div>

      <div style={{ height: 1, background: "var(--separator)", marginBottom: 20 }} />

      {/* Bio — edit siteConfig.personal.tagline */}
      <p className="text-[13px] leading-[1.75]" style={{ color: "var(--text-secondary)" }}>
        {personal.tagline}
      </p>


    </section>
  )
}
