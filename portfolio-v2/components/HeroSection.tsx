"use client";

import { HERO_STATS, HERO_TAGS } from "@/lib/data";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 pt-20 max-w-6xl mx-auto"
    >
      {/* Section label */}
      <div className="flex items-center gap-2 font-mono text-[11px] text-[#00d4b8] tracking-[0.15em] uppercase mb-5">
        <span className="text-purple-400 opacity-60">{"//"}</span>
        Security Analyst &amp; Developer
      </div>

      {/* Headline */}
      <h1 className="text-[clamp(2.4rem,6vw,4.2rem)] font-semibold leading-[1.08] tracking-tight mb-6">
        Akoi
        <span className="text-[#00d4b8]">.</span>
        <br />
        <span className="text-[#8896b3] font-light">Cybersecurity Analyst</span>
        <br />
        <span className="text-purple-400">&amp; Full-Stack</span> Developer
      </h1>

      {/* Bio */}
      <p className="text-[clamp(0.95rem,2vw,1.15rem)] text-[#8896b3] max-w-[620px] leading-relaxed font-light mb-8">
        Securing the software that powers communities. Combining full-stack
        development with cybersecurity expertise to build resilient
        applications, defend networks, and automate security at scale.
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-10">
        {HERO_TAGS.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[11px] px-3 py-1 border border-[#1e2d4d] text-[#8896b3] tracking-wide"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* CTAs */}
      <div className="flex flex-wrap gap-4 mb-14">
        <a
          href="#Credentials"
          onClick={(e) => {
            e.preventDefault();
            document
              .querySelector("#credentials")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="inline-flex items-center gap-2 bg-[#00d4b8] text-[#0a0f1e] px-7 py-3 font-semibold text-sm tracking-wide hover:bg-[#00b89e] transition-all duration-200 hover:-translate-y-px"
        >
          ↓ Explore Portfolio
        </a>
        <a
          href="https://www.linkedin.com/in/gabriel-akoi-b4b98a24b/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-purple-500 text-purple-400 px-7 py-3 font-medium text-sm hover:bg-purple-500/10 transition-all duration-200"
        >
          Connect on LinkedIn ↗
        </a>
      </div>

      {/* Stats */}
      <div className="flex flex-wrap gap-10 pt-6 border-t border-[#1e2d4d]">
        {HERO_STATS.map((stat) => (
          <div key={stat.label}>
            <div className="font-mono text-[1.9rem] font-bold text-[#00d4b8] leading-none">
              {stat.value}
            </div>
            <div className="font-mono text-[10px] text-[#8896b3] uppercase tracking-[0.12em] mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
