"use client";

import { useState } from "react";
import { CS50_COURSES, GOOGLE_COURSES } from "@/lib/data";

function EducationCard() {
  const [cs50Open, setCs50Open] = useState(false);

  return (
    <div className="relative  bg-[#131d35] border border-[#1e2d4d] p-8 overflow-hidden flex flex-col">
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00d4b8] to-[#8b5cf6]" />

      <span className="inline-flex items-center gap-1.5 bg-[#00d4b8]/10 border border-[#00d4b8]/25 px-3 py-1 font-mono text-[11px] text-[#00d4b8] tracking-wide mb-5">
        🎓 CERTIFIED COURSE
      </span>

      <h3 className="text-xl font-semibold text-[#f0f4ff] mb-1">
        CS50’s Introduction to Cybersecurity
      </h3>
      <p className="font-mono text-sm text-[#00d4b8] mb-1">
        Harvard OpenCourseWare
      </p>
      <p className="text-sm text-[#8896b3]">
        Instructor: David J. Malan · Verified OpenCourseWare curriculum
      </p>

      <p className="text-[0.84rem] text-[#8896b3] mt-4 leading-relaxed">
        A foundational cybersecurity course from Harvard covering account, data,
        systems, software, and privacy security through modern defensive and
        offensive techniques.
      </p>

      {/* Toggle for CS50 course list */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setCs50Open((p) => !p);
        }}
        className="w-full bg-white/[0.03] border border-[#1e2d4d] text-[#8896b3] px-4 py-2.5 text-[0.78rem] flex justify-between items-center hover:border-purple-500/50 hover:text-[#f0f4ff] transition-all duration-200 my-4"
      >
        <span>{cs50Open ? "Hide Course Modules" : "View Course Modules"}</span>
        <span
          className="text-[10px] transition-transform duration-300"
          style={{ transform: cs50Open ? "rotate(180deg)" : "none" }}
        >
          ▼
        </span>
      </button>

      {cs50Open && (
        <div className="mt-2 border border-[#1e2d4d]">
          {CS50_COURSES.map((course, idx) => (
            <div
              key={course.number}
              className={`flex items-start gap-3 px-4 py-3 text-[0.8rem] text-[#8896b3] ${
                idx < CS50_COURSES.length - 1
                  ? "border-b border-white/[0.04]"
                  : ""
              }`}
            >
              <span className="font-mono text-[11px] text-purple-400 min-w-[1.5rem] mt-0.5">
                {course.number}
              </span>
              <span className="leading-snug">{course.title}</span>
            </div>
          ))}
        </div>
      )}

      <div className="flex gap-6 mt-auto pt-5 border-t border-[#1e2d4d]">
        {[
          { val: "05", lbl: "Weeks" },
          { val: "Harvard", lbl: "Provider" },
          { val: "CS50", lbl: "Program" },
        ].map(({ val, lbl }) => (
          <div key={lbl} className="text-center">
            <div className="font-mono text-2xl font-bold text-purple-400 leading-none">
              {val}
            </div>
            <div className="font-mono text-[10px] text-[#8896b3] uppercase tracking-wide mt-1">
              {lbl}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function UniversityCard() {
  return (
    <div className="relative bg-[#131d35] border border-[#1e2d4d] p-8 overflow-hidden flex flex-col">
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00d4b8] to-[#8b5cf6]" />

      <span className="inline-flex items-center gap-1.5 bg-[#00d4b8]/10 border border-[#00d4b8]/25 px-3 py-1 font-mono text-[11px] text-[#00d4b8] tracking-wide mb-5">
        🎓 ACADEMIC PROGRAM
      </span>

      <h3 className="text-xl font-semibold text-[#f0f4ff] mb-1">
        University of Liberia
      </h3>
      <p className="font-mono text-sm text-[#00d4b8] mb-1">
        B.Sc. in Cybersecurity
      </p>
      <p className="text-sm text-[#8896b3]">
        Senior — Final Year · Monrovia, Liberia
      </p>

      <p className="text-[0.84rem] text-[#8896b3] mt-4 leading-relaxed">
        Structured degree program blending cybersecurity theory, network
        defense, digital forensics, secure software development, and practical
        lab work.
      </p>

      <div className="flex gap-6 whitespace-nowrap mt-auto pt-5 border-t border-[#1e2d4d]">
        {[
          { val: "4", lbl: "Years" },
          { val: "CyberSec", lbl: "Focus" },
          { val: "2026", lbl: "Grad Year" },
        ].map(({ val, lbl }) => (
          <div key={lbl} className="text-center">
            <div className="font-mono text-2xl font-bold text-purple-400 leading-none">
              {val}
            </div>
            <div className="font-mono text-[10px] text-[#8896b3] uppercase tracking-wide mt-1">
              {lbl}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CredlyBadgeCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative border border-purple-500/30 p-8 overflow-hidden flex flex-col"
      style={{
        background:
          "linear-gradient(135deg, #1a0533 0%, #0d1428 50%, #001a1a 100%)",
      }}
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-5">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 font-mono text-[11px] font-bold text-white text-center leading-tight"
          style={{ background: "linear-gradient(135deg, #8b5cf6, #00d4b8)" }}
        >
          G<br />
          CERT
        </div>
        <div>
          <p className="font-mono text-[10px] text-[#8896b3] tracking-widest uppercase mb-1">
            Issued by Google · via Coursera
          </p>
          <h3 className="text-base font-semibold text-[#f0f4ff] leading-snug">
            Google Cybersecurity
            <br />
            Professional Certificate
          </h3>
          <span className="inline-flex items-center gap-1 bg-[#00d4b8]/10 border border-[#00d4b8]/25 px-2.5 py-0.5 font-mono text-[10px] text-[#00d4b8] mt-2">
            ✓ Verifiable Credential
          </span>
        </div>
      </div>

      <p className="text-[0.8rem] text-[#8896b3] leading-relaxed mb-4">
        A rigorous 8-course specialization covering the full spectrum of modern
        cybersecurity practice — from SIEM tools and Python automation to
        incident response and career readiness.
      </p>

      {/* Toggle */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen((prev) => !prev);
        }}
        className="w-full bg-white/[0.03] border border-[#1e2d4d] text-[#8896b3] px-4 py-2.5 text-[0.78rem] flex justify-between items-center hover:border-purple-500/50 hover:text-[#f0f4ff] transition-all duration-200"
      >
        <span>{isOpen ? "Hide Course Modules" : "View Course Modules"}</span>
        <span
          className="text-[10px] transition-transform duration-300"
          style={{ transform: isOpen ? "rotate(180deg)" : "none" }}
        >
          ▼
        </span>
      </button>

      {/* Courses list */}
      {isOpen && (
        <div className="mt-2 border border-[#1e2d4d]">
          {GOOGLE_COURSES.map((course, idx) => (
            <div
              key={course.number}
              className={`flex items-start gap-3 px-4 py-3 text-[0.8rem] text-[#8896b3] ${
                idx < GOOGLE_COURSES.length - 1
                  ? "border-b border-white/[0.04]"
                  : ""
              }`}
            >
              <span className="font-mono text-[11px] text-purple-400 min-w-[1.5rem] mt-0.5">
                {course.number}
              </span>
              <span className="leading-snug">{course.title}</span>
            </div>
          ))}
        </div>
      )}
      <div className="flex gap-6 mt-auto pt-5 border-t border-[#1e2d4d]">
        {[
          { val: "06", lbl: "Months" },
          { val: "Google", lbl: "Provider" },
          { val: "CyberSec", lbl: "Program" },
        ].map(({ val, lbl }) => (
          <div key={lbl} className="text-center">
            <div className="font-mono text-2xl font-bold text-purple-400 leading-none">
              {val}
            </div>
            <div className="font-mono text-[10px] text-[#8896b3] uppercase tracking-wide mt-1">
              {lbl}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CredentialsSection() {
  return (
    <section id="credentials" className="reveal px-6 py-10 max-w-6xl mx-auto">
      <div className="flex items-center gap-2 font-mono text-[11px] text-[#00d4b8] tracking-[0.15em] uppercase mb-4">
        <span className="text-purple-400 opacity-60">{"//"}</span>
        Education &amp; Verified Credentials
      </div>
      <h2 className="text-[clamp(1.7rem,3.5vw,2.6rem)] font-semibold tracking-tight mb-10">
        Academically Grounded.
        <br />
        <span className="text-[#00d4b8]">Professionally Certified.</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-start">
        <UniversityCard />
        <CredlyBadgeCard />
        <EducationCard />
      </div>
    </section>
  );
}
