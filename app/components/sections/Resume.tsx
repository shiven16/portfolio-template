"use client"

import { motion } from "framer-motion"
import { ExternalLink, Mail, Github, Linkedin } from "lucide-react"
// Résumé content is split across a few config modules — each maps 1:1 to a section below.
import { siteConfig } from "@/config/siteConfig"
import { skills } from "@/config/skills"
import { resumeExperience as experience, education } from "@/config/experience"
import { projects } from "@/config/projects"

export default function Resume({ compact = false }: { compact?: boolean }) {
  const { personal, social, contact, resumeLink } = siteConfig

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={compact ? "px-5 py-5" : "py-10"}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <h1 className="text-[22px] font-semibold text-white leading-tight">{personal.fullName}</h1>
          <div className="flex items-center gap-3 mt-2 flex-wrap">
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-1 text-[11px] text-[var(--text-muted)] hover:text-white transition-colors"
            >
              <Mail size={10} /> {contact.email}
            </a>
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[11px] text-[var(--text-muted)] hover:text-white transition-colors"
            >
              <Github size={10} /> {social.githubUsername}
            </a>
            <a
              href={social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[11px] text-[var(--text-muted)] hover:text-white transition-colors"
            >
              <Linkedin size={10} /> {social.twitterHandle}
            </a>
          </div>
        </div>
        {/* External resume (Notion / PDF) — edit siteConfig.resumeLink */}
        <a
          href={resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-[11px] px-3 py-1.5 rounded-lg transition-colors flex-none"
          style={{
            background: "var(--widget-border)",
            border: "1px solid var(--widget-border)",
            color: "var(--text-secondary)",
          }}
        >
          <ExternalLink size={11} />
          View Pdf
        </a>
      </div>

      <div className="space-y-5">
        {/* Skills */}
        <section>
          <h2
            className="text-[11px] font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--text-secondary)" }}
          >
            Skills
          </h2>
          <div className="space-y-2">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="flex gap-3">
                <span
                  className="text-[10px] w-32 flex-none pt-0.5"
                  style={{ color: "var(--text-muted)" }}
                >
                  {category}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] px-2 py-0.5 rounded-full"
                      style={{
                        background: "var(--separator)",
                        border: "1px solid var(--widget-border)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div style={{ height: "1px", background: "var(--separator)" }} />

        {/* Experience */}
        {experience && experience.length > 0 && (
          <>
            <section>
              <h2
                className="text-[11px] font-semibold uppercase tracking-widest mb-4"
                style={{ color: "var(--text-secondary)" }}
              >
                Experience
              </h2>
              <div className="space-y-4">
                {experience.map((job, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-[13px] font-semibold text-white">{job.company}</span>
                          <span className="text-[11px]" style={{ color: "var(--text-secondary)" }}>
                            {job.role}
                          </span>
                        </div>
                        {job.subRoles && (
                          <p className="text-[10px] mt-0.5" style={{ color: "var(--text-muted)" }}>
                            via {job.subRoles.join(" · ")}
                          </p>
                        )}
                      </div>
                      <span
                        className="text-[10px] flex-none mt-0.5"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {job.period}
                      </span>
                    </div>
                    <ul className="space-y-1 pl-3">
                      {job.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span
                            className="mt-[6px] w-1 h-1 rounded-full flex-none"
                            style={{ background: "var(--text-faint)" }}
                          />
                          <span
                            className="text-[11px] leading-relaxed"
                            style={{ color: "var(--text-secondary)" }}
                          >
                            {b}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </section>
            <div style={{ height: "1px", background: "var(--separator)" }} />
          </>
        )}

        {/* Projects */}
        <section>
          <h2
            className="text-[11px] font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--text-secondary)" }}
          >
            Projects
          </h2>
          <div className="space-y-4">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="flex items-start justify-between gap-2 mb-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-[13px] font-semibold text-white">{p.name}</span>
                  </div>
                  {(p.github || p.live) && (
                    <div className="flex items-center gap-3 mt-0.5">
                      {p.github && (
                        <a href={p.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[10px] text-[var(--text-muted)] hover:text-white transition-colors">
                          <Github size={10} /> GitHub
                        </a>
                      )}
                      {p.live && (
                        <a href={p.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[10px] text-[var(--text-muted)] hover:text-white transition-colors">
                          <ExternalLink size={10} /> Live
                        </a>
                      )}
                    </div>
                  )}
                </div>
                <p className="text-[11px] mb-2" style={{ color: "var(--text-secondary)" }}>
                  {p.desc}
                </p>
                {p.achievements && p.achievements.length > 0 && (
                  <ul className="space-y-1 pl-3">
                    {p.achievements.map((a, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span
                          className="mt-[6px] w-1 h-1 rounded-full flex-none"
                          style={{ background: "var(--text-faint)" }}
                        />
                        <span
                          className="text-[11px] leading-relaxed"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {a}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </section>



        {/* Education */}
        <section>
          <h2
            className="text-[11px] font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--text-secondary)" }}
          >
            Education
          </h2>
          <div className="flex items-baseline justify-between">
            <div>
              <span className="text-[13px] font-semibold text-white">
                {education.school}
              </span>
              <p className="text-[11px] mt-0.5" style={{ color: "var(--text-secondary)" }}>
                {education.degree}
              </p>
            </div>
            <span className="text-[10px] flex-none" style={{ color: "var(--text-muted)" }}>
              {education.period}
            </span>
          </div>
        </section>
      </div>
    </motion.div>
  )
}
