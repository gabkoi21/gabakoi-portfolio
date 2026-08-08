const contacts = [
  { label: 'LinkedIn', value: 'Gabriel Akoi', href: 'https://www.linkedin.com/in/gabriel-akoi-b4b98a24b/', icon: 'in' },
  { label: 'GitHub', value: 'gabkoi21', href: 'https://github.com/gabkoi21', icon: '<>' },
];

export default function ContactSection() {
  return (
    <section id="contact" className="reveal px-6 py-20 max-w-6xl mx-auto scroll-mt-20">
      <div className="section-kicker"><span>{'//'}</span> Contact</div>
      <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
        <div><h2 className="section-title">Let&apos;s <span>connect.</span></h2><p className="text-[#a6b2ca] leading-7 mt-4">I am open to entry-level SOC Analyst and Cybersecurity Analyst opportunities, professional connections, and security-focused collaborations.</p><p className="font-mono text-xs text-[#8896b3] mt-5">Monrovia, Liberia · Contact via LinkedIn or GitHub</p></div>
        <div className="grid gap-3">{contacts.map(contact => <a key={contact.label} href={contact.href} target={contact.href.startsWith('http') ? '_blank' : undefined} rel={contact.href.startsWith('http') ? 'noreferrer' : undefined} className="contact-card"><span className="contact-icon" aria-hidden="true">{contact.icon}</span><span><span className="card-label block">{contact.label}</span><span className="text-[#f0f4ff]">{contact.value}</span></span><span className="ml-auto text-[#00d4b8]" aria-hidden="true">↗</span></a>)}</div>
      </div>
    </section>
  );
}
