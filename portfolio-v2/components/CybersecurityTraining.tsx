import { TRYHACKME_ACHIEVEMENTS } from '@/data/tryHackMe';
import { TRYHACKME_ROOMS } from '@/data/tryHackMeRooms';

export default function CybersecurityTraining() {
  return (
    <section id="training" className="reveal px-6 py-20 max-w-6xl mx-auto scroll-mt-20">
      <div className="section-kicker"><span>{'//'}</span> Practical Learning</div>
      <div className="training-panel">
        <div>
          <h2 className="section-title">Hands-On Cybersecurity <span>Training.</span></h2>
          <p className="section-intro mt-4">Hands-on SOC and cybersecurity training through TryHackMe, focused on SOC operations, alert triage, defensive security, threat awareness, investigation workflows, and practical security concepts.</p>
        </div>

        <div className="training-summary" aria-label="TryHackMe training summary">
          <div><span>{TRYHACKME_ROOMS.length}</span><small>Completed Rooms</small></div>
          <div><span>{TRYHACKME_ACHIEVEMENTS.length}</span><small>Earned Badges</small></div>
          <div><span>SOC</span><small>Focused Training</small></div>
        </div>

        <div className="completed-scenario"><span aria-hidden="true">✓</span><div><small>Completed SOC Simulator Scenario</small><strong>Introduction to Phishing</strong></div></div>

        <div className="flex flex-wrap gap-3">
          <a href="https://tryhackme.com/p/gabakoi21" target="_blank" rel="noopener noreferrer" className="button-secondary">View TryHackMe Profile ↗</a>
          <a href="https://l1nk.dev/89xchek" target="_blank" rel="noopener noreferrer" className="button-secondary">View Blue Base Cheat Sheet ↗</a>
        </div>
      </div>
    </section>
  );
}
