"use client";

import { useState } from "react";
import { ACTIVITY_ITEMS } from "@/lib/data";
import type { ContactFormData } from "@/types";

const dotColors = {
  teal: "bg-[#00d4b8]",
  purple: "bg-purple-400",
  blue: "bg-blue-400",
};

const INITIAL_FORM: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function LinkedInActivity() {
  return (
    <div>
      <p className="font-mono text-[11px] text-[#8896b3] tracking-[0.1em] uppercase mb-4">
        LinkedIn Insights &amp; Professional Activity
      </p>
      <div className="bg-[#131d35] border border-[#1e2d4d] p-6 flex flex-col gap-4">
        {/* Placeholder widget area */}
        <div className="h-20 border border-dashed border-[#1e2d4d] flex items-center justify-center font-mono text-[11px] text-[#1e2d4d] tracking-widest">
          [ LINKEDIN FEED WIDGET ]
        </div>

        {/* Activity items */}
        {ACTIVITY_ITEMS.map((item, i) => (
          <div
            key={i}
            className={`flex gap-3 py-3 ${
              i < ACTIVITY_ITEMS.length - 1 ? "border-b border-[#1e2d4d]" : ""
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full ${dotColors[item.color]} flex-shrink-0 mt-1.5`}
            />
            <div>
              <p className="text-[0.83rem] text-[#8896b3] leading-relaxed">
                {item.text}
              </p>
              <p className="font-mono text-[10px] text-[#1e2d4d] mt-1">
                {item.time}
              </p>
            </div>
          </div>
        ))}

        {/* Social links */}
        <div className="grid:col-2 md:flex gap-3 pt-4 border-t border-[#1e2d4d]">
          <a
            href="https://github.com/gabkoi21"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-[#1e2d4d] text-[#8896b3] text-[0.82rem] font-medium hover:border-[#00d4b8] hover:text-[#00d4b8] transition-all duration-200"
          >
            <GitHubIcon />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/gabriel-akoi-b4b98a24b/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-[#1e2d4d] text-[#8896b3] text-[0.82rem] font-medium hover:border-[#00d4b8] hover:text-[#00d4b8] transition-all duration-200"
          >
            <LinkedInIcon />
            LinkedIn
          </a>

          <a
            href="https://wa.me/2310555925437"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-[#1e2d4d] text-[#8896b3] text-[0.82rem] font-medium hover:border-[#00d4b8] hover:text-[#00d4b8] transition-all duration-200"
          >
            <WhatsAppIcon />
            WhatsApp
          </a>

          {/* <a
            href="https://gabrielakoi.medium.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-[#1e2d4d] text-[#8896b3] text-[0.82rem] font-medium hover:border-[#00d4b8] hover:text-[#00d4b8] transition-all duration-200"
          >
            <span className="font-mono text-sm"></span>
            Medium
          </a> */}
        </div>
      </div>
    </div>
  );
}

function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(INITIAL_FORM);
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate send — wire up EmailJS or API route here
    setTimeout(() => {
      setStatus("success");
      setForm(INITIAL_FORM);
    }, 1000);
  };

  const inputClass =
    "w-full bg-[#131d35] border border-[#1e2d4d] text-[#f0f4ff] px-4 py-3 text-[0.9rem] placeholder:text-[#8896b3]/50 focus:border-[#00d4b8] outline-none transition-colors duration-200";

  return (
    <div>
      <p className="font-mono text-[11px] text-[#8896b3] tracking-[0.1em] uppercase mb-4">
        Send a Message
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="font-mono text-[10px] text-[#8896b3] tracking-[0.12em] uppercase">
              Full Name
            </label>
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className={inputClass}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-mono text-[10px] text-[#8896b3] tracking-[0.12em] uppercase">
              Email
            </label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
              className={inputClass}
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="font-mono text-[10px] text-[#8896b3] tracking-[0.12em] uppercase">
            Subject
          </label>
          <input
            name="subject"
            type="text"
            value={form.subject}
            onChange={handleChange}
            placeholder="Collaboration / Opportunity / General"
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="font-mono text-[10px] text-[#8896b3] tracking-[0.12em] uppercase">
            Message
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell me about your project or opportunity..."
            required
            rows={5}
            className={`${inputClass} resize-y min-h-[120px]`}
          />
        </div>

        {status !== "success" && (
          <button
            type="submit"
            disabled={status === "loading"}
            className="self-start bg-[#00d4b8] text-[#0a0f1e] px-7 py-3 font-semibold text-sm tracking-wide hover:bg-[#00b89e] transition-all duration-200 hover:-translate-y-px disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
          >
            {status === "loading" ? "Sending..." : "Send Message →"}
          </button>
        )}

        {status === "success" && (
          <div className="font-mono text-[0.8rem] text-[#00d4b8] px-4 py-3 border border-[#00d4b8]/30 bg-[#00d4b8]/5">
            ✓ Message sent! I&apos;ll get back to you shortly.
          </div>
        )}
      </form>
    </div>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.149-.672.149-.198.297-.768.967-.942 1.165-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.131-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.672-1.611-.92-2.205-.242-.579-.487-.5-.672-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.792.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.877 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.693.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z" />
      <path d="M20.52 3.48A10.246 10.246 0 0012.072 0 10.084 10.084 0 005.74 2.5 10.121 10.121 0 001.5 12.073c0 1.79.466 3.525 1.352 5.065L0 24l6.955-1.826a10.105 10.105 0 005.118 1.34h.003c5.696 0 10.322-4.626 10.322-10.323 0-2.754-1.08-5.34-3.006-7.392zM12.071 21.75h-.002c-1.62 0-3.216-.436-4.593-1.262l-.33-.197-4.127 1.084 1.1-4.028-.214-.346a8.299 8.299 0 01-1.266-4.265c0-4.59 3.733-8.323 8.324-8.323 2.225 0 4.317.867 5.889 2.44a8.265 8.265 0 012.441 5.882c-.003 4.59-3.736 8.324-8.327 8.324z" />
    </svg>
  );
}

export default function ContactSection() {
  return (
    <section id="contact" className="reveal px-6 py-24 max-w-6xl mx-auto">
      <div className="flex items-center gap-2 font-mono text-[11px] text-[#00d4b8] tracking-[0.15em] uppercase mb-4">
        <span className="text-purple-400 opacity-60">//</span>
        Activity &amp; Contact
      </div>
      <h2 className="text-[clamp(1.7rem,3.5vw,2.6rem)] font-semibold tracking-tight mb-10">
        Let&apos;s <span className="text-[#00d4b8]">Connect.</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <LinkedInActivity />
        <ContactForm />
      </div>
    </section>
  );
}
