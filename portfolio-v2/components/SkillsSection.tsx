import { SKILL_GROUPS } from "@/lib/data";
import type { SkillGroup } from "@/types";

const variantClasses: Record<SkillGroup["variant"], string> = {
  teal: "border-[#00d4b8]/30 text-[#00d4b8] bg-[#00d4b8]/5 hover:bg-[#00d4b8]/12",
  purple:
    "border-purple-500/30 text-purple-400 bg-purple-500/5 hover:bg-purple-500/12",
  blue: "border-blue-400/30 text-blue-400 bg-blue-400/5 hover:bg-blue-400/12",
};

export default function SkillsSection() {
  return (
    <section id="skills" className="reveal px-6 py-10 max-w-6xl mx-auto">
      <div className="flex items-center gap-2 font-mono text-[11px] text-[#00d4b8] tracking-[0.15em] uppercase mb-4">
        <span className="text-purple-400 opacity-60">{"//"}</span>
        Technical Skills &amp; Tools Matrix
      </div>
      <h2 className="text-[clamp(1.7rem,3.5vw,2.6rem)] font-semibold tracking-tight mb-10">
        Capabilities &amp; <span className="text-[#00d4b8]">Tooling</span>
      </h2>

      <div className="space-y-8">
        {SKILL_GROUPS.map((group) => (
          <div key={group.label}>
            <p className="font-mono text-[11px] text-[#8896b3] tracking-[0.1em] uppercase mb-3 pb-3 border-b border-[#1e2d4d]">
              {group.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className={`px-4 py-1.5 text-[0.8rem] font-medium border tracking-wide transition-all duration-200 cursor-default ${variantClasses[group.variant]}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
