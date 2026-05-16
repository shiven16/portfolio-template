"use client"

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink, Github } from "lucide-react"
import type { ProjectItem } from "@/config/projects"

interface ProjectModalProps {
  project: ProjectItem | null
  isOpen: boolean
  onClose: () => void
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="p-0 gap-0 overflow-hidden max-w-lg"
        style={{
          background: "var(--widget-bg)",
          border: "1px solid var(--widget-border)",
          borderRadius: 8,
        }}
      >
        {/* Header */}
        <div className="px-6 pt-6 pb-5 flex items-start justify-between gap-4" style={{ borderBottom: "1px solid var(--separator)" }}>
          <div>
            <DialogTitle className="text-[18px] font-semibold text-white mb-2">
              {project.name}
            </DialogTitle>
            <p className="text-[12px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              {project.desc}
            </p>
          </div>
          
          {(project.github || project.live) && (
            <div className="flex flex-col gap-2 pt-1 flex-none">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.08em] px-3 py-1.5 rounded transition-colors"
                  style={{
                    color: "var(--text-secondary)",
                    border: "1px solid var(--widget-border)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                >
                  <Github size={11} /> GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.08em] px-3 py-1.5 rounded transition-colors"
                  style={{
                    color: "var(--text-secondary)",
                    border: "1px solid var(--widget-border)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                >
                  <ExternalLink size={11} /> Live
                </a>
              )}
            </div>
          )}
        </div>

        <div className="px-6 py-5 space-y-5">
          {/* Tech */}
          {project.tech && project.tech.length > 0 && (
            <div>
              <p
                className="font-mono text-[10px] uppercase tracking-[0.12em] mb-2"
                style={{ color: "var(--text-faint)" }}
              >
                Stack
              </p>
              <p className="font-mono text-[12px]" style={{ color: "var(--text-secondary)" }}>
                {project.tech.join(" · ")}
              </p>
            </div>
          )}

          {/* Achievements */}
          {project.achievements && project.achievements.length > 0 && (
            <div>
              <p
                className="font-mono text-[10px] uppercase tracking-[0.12em] mb-3"
                style={{ color: "var(--text-faint)" }}
              >
                Key features
              </p>
              <ul className="space-y-2.5">
                {project.achievements.map((a, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="font-mono text-[10px] flex-none pt-[3px]"
                      style={{ color: "var(--text-faint)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[12px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      {a}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
