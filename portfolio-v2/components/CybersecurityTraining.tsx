import { TRYHACKME_ACHIEVEMENTS, TRYHACKME_LABS } from '@/data/tryHackMe';

export default function CybersecurityTraining() {
  return (
    <section id="training" className="reveal px-6 py-20 max-w-6xl mx-auto scroll-mt-20">
      <div className="section-kicker"><span>{'//'}</span> Practical Learning</div>
      <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
        <div>
          <h2 className="section-title">Hands-On Cybersecurity <span>Training.</span></h2>
          <h3 className="text-xl font-semibold mt-7 mb-3">TryHackMe SOC Training</h3>
          <p className="section-intro">Hands-on SOC training focused on security monitoring, alert investigation, phishing analysis, alert classification, incident documentation, and SOC response workflows.</p>
          <a href="https://tryhackme.com/p/gabakoi21" target="_blank" rel="noopener noreferrer" className="button-secondary mt-6">View TryHackMe Profile ↗</a>
        </div>
        <div>
          <p className="card-label mb-4">TryHackMe Achievements</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {TRYHACKME_ACHIEVEMENTS.map(achievement => (
              <article key={achievement.id} className={`achievement-card ${achievement.category === 'Learning' ? 'achievement-learning' : ''}`}>
                <div className="flex items-center justify-between gap-3 mb-3"><span className="achievement-category">{achievement.category}</span>{achievement.rarity && <span className="font-mono text-[9px] text-[#8896b3]">{achievement.rarity}</span>}</div>
                <h3 className="font-semibold mb-2">{achievement.title}</h3>
                <p className="text-sm text-[#a6b2ca] leading-6">{achievement.description}</p>
              </article>
            ))}
          </div>
          {TRYHACKME_LABS.length > 0 && <div className="mt-10"><p className="card-label mb-4">Completed Rooms &amp; Labs</p><div className="grid gap-3">{TRYHACKME_LABS.map(lab => <article key={lab.id} className="project-card"><h3 className="font-semibold">{lab.title}</h3><p className="text-sm text-[#a6b2ca]">{lab.type} · {lab.status}</p></article>)}</div></div>}
        </div>
      </div>
    </section>
  );
}
