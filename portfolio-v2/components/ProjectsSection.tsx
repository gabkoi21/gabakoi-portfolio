import { PROJECTS } from "@/lib/data";
import type { Project } from "@/types";

function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className={`relative bg-[#131d35] border p-7 overflow-hidden group transition-all duration-200 hover:-translate-y-0.5 ${
        project.featured
          ? "border-[#1e2d4d] hover:border-[#00d4b8]/30"
          : "border-[#1e2d4d] hover:border-purple-500/30"
      }`}
    >
      {/* Top accent for featured */}
      {project.featured && (
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00d4b8] to-[#8b5cf6]" />
      )}

      {/* Featured badge */}
      {project.featured && (
        <span className="absolute top-5 right-5 font-mono text-[10px] px-2 py-0.5 bg-purple-500/15 border border-purple-500/30 text-purple-400">
          FEATURED
        </span>
      )}

      {/* Status */}
      <div
        className={`flex items-center gap-1.5 font-mono text-[11px] mb-4 ${
          project.status === "live" ? "text-green-500" : "text-purple-400"
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-current inline-block" />
        {project.statusLabel}
      </div>

      <h3 className="text-lg font-semibold text-[#f0f4ff] mb-2 leading-snug">
        {project.title}
      </h3>
      <p className="text-[0.84rem] text-[#8896b3] leading-relaxed mb-5">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[10px] px-2 py-0.5 border border-[#1e2d4d] text-[#8896b3] tracking-wide"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-6 items-center pt-4 border-t border-[#1e2d4d]">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[0.8rem] text-[#00d4b8] hover:opacity-70 flex items-center gap-1 transition-opacity"
        >
          ↗ View on GitHub
        </a>
        {project.demoUrl && project.demoLabel && (
          <a
            href={project.demoUrl}
            className="text-[0.8rem] text-[#8896b3] hover:text-[#f0f4ff] flex items-center gap-1 transition-colors"
          >
            {project.demoLabel} →
          </a>
        )}
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="reveal px-6 py-10 max-w-6xl mx-auto">
      <div className="flex items-center gap-2 font-mono text-[11px] text-[#00d4b8] tracking-[0.15em] uppercase mb-4">
        <span className="text-purple-400 opacity-60">{"//"}</span>
        Featured Projects
      </div>
      <h2 className="text-[clamp(1.7rem,3.5vw,2.6rem)] font-semibold tracking-tight mb-10">
        Built &amp; <span className="text-[#00d4b8]">Deployed.</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
