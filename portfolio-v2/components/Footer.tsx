export default function Footer() {
  return (
    <footer className="border-t border-[#1e2d4d] py-8 px-6 text-center">
      <p className="font-mono text-[11px] text-[#8896b3] tracking-wide">
        Built with Next.js · TypeScript · Tailwind CSS · Deployed on{' '}
        <span className="text-[#00d4b8]">Vercel</span>
      </p>
      <p className="font-mono text-[11px] text-[#8896b3] tracking-wide mt-2">
        © 2026 <span className="text-[#00d4b8]">Gabriel Akoi</span> · Monrovia, Liberia
      </p>
    </footer>
  );
}
