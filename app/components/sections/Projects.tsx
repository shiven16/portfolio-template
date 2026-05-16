"use client"

import { useState } from "react"
import { Star } from "lucide-react"
import { motion } from "framer-motion"
import ProjectModal from "../modals/ProjectModal"
import { projects, type ProjectItem } from "@/config/projects"

export default function Projects({ compact = false }: { compact?: boolean }) {
  const [selected, setSelected] = useState<ProjectItem | null>(null)

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={compact ? "px-6 py-6" : "py-20 px-6"}
      >
        <p
          className="font-mono text-[10px] uppercase tracking-[0.14em] mb-5"
          style={{ color: "var(--text-muted)" }}
        >
          Projects
        </p>

        <div>
          {projects.map((p, i) => (
            <motion.div
              key={i}
              className="group cursor-pointer py-4"
              style={{
                borderTop: i === 0 ? "1px solid var(--separator)" : undefined,
                borderBottom: "1px solid var(--separator)",
              }}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              onClick={() => setSelected(p)}
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[13px] font-semibold text-white group-hover:text-white/75 transition-colors">
                    {p.name}
                  </span>
                  {p.stars !== undefined && (
                    <span
                      className="flex items-center gap-0.5 font-mono text-[10px]"
                      style={{ color: "var(--text-faint)" }}
                    >
                      <Star size={9} className="fill-current" />
                      {p.stars}
                    </span>
                  )}
                  {p.status && (
                    <span
                      className="font-mono text-[9px] uppercase tracking-[0.08em] px-1.5 py-0.5 rounded"
                      style={{
                        color: "var(--text-muted)",
                        border: "1px solid var(--widget-border)",
                      }}
                    >
                      {p.status}
                    </span>
                  )}
                </div>
                <p className="text-[12px] leading-relaxed mb-2" style={{ color: "var(--text-secondary)" }}>
                  {p.desc}
                </p>
                <p className="font-mono text-[10px]" style={{ color: "var(--text-faint)" }}>
                  {p.tech.join(" · ")}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
      
      <ProjectModal 
        project={selected}
        isOpen={!!selected}
        onClose={() => setSelected(null)}
      />
    </>
  )
}
