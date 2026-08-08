export default function AboutSection() {
  return (
    <section id="about" className="reveal px-6 py-20 max-w-6xl mx-auto scroll-mt-20">
      <div className="section-kicker"><span>{'//'}</span> About Me</div>
      <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-start">
        <h2 className="section-title">Building toward the <span>SOC.</span></h2>
        <div className="space-y-4 text-[#a6b2ca] leading-7">
          <p>I am an aspiring SOC Analyst and cybersecurity professional developing hands-on skills in security monitoring, alert investigation, phishing analysis, incident response, and incident documentation.</p>
          <p>My current SOC investigation work uses Splunk, VirusTotal, and TryHackMe, supported by Linux, SQL, and Python. A full-stack development background gives me an additional advantage: I understand how applications, APIs, databases, and user-facing systems are built—and where security failures can emerge.</p>
          <p>My goal is to contribute as a Cybersecurity Analyst or SOC Analyst, applying disciplined investigation, clear documentation, and a strong systems mindset.</p>
        </div>
      </div>
    </section>
  );
}
