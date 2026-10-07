import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-ink-300/30 bg-ink-800">
      <div className="absolute inset-0 cyber-grid opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center">
              <img src="/Website_Logo.png" alt="All-In-One AI" className="h-10 md:h-12 w-auto max-w-[200px] md:max-w-[240px] object-contain" />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-bodytext/70">
              Custom AI workflows and automation systems engineered for growth-focused companies.
            </p>
          </div>

          {/* Sitemap */}
          <div>
            <h4 className="mb-4 text-xs font-mono uppercase tracking-widest text-matrix-400">Pages</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-sm text-bodytext hover:text-heading transition-colors">Home</Link></li>
              <li><Link to="/solutions" className="text-sm text-bodytext hover:text-heading transition-colors">Solutions</Link></li>
              <li><Link to="/affiliates" className="text-sm text-bodytext hover:text-heading transition-colors">Affiliates</Link></li>
              <li><Link to="/about" className="text-sm text-bodytext hover:text-heading transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-sm text-bodytext hover:text-heading transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Solutions quick links */}
          <div>
            <h4 className="mb-4 text-xs font-mono uppercase tracking-widest text-matrix-400">Solutions</h4>
            <ul className="space-y-3">
              <li><Link to="/solutions" className="text-sm text-bodytext hover:text-heading transition-colors">AI Voice Agents</Link></li>
              <li><Link to="/solutions" className="text-sm text-bodytext hover:text-heading transition-colors">Workflow Automation</Link></li>
              <li><Link to="/solutions" className="text-sm text-bodytext hover:text-heading transition-colors">App Creation</Link></li>
              <li><Link to="/solutions" className="text-sm text-bodytext hover:text-heading transition-colors">Financial Bots</Link></li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="mb-4 text-xs font-mono uppercase tracking-widest text-matrix-400">Get Started</h4>
            <p className="mb-4 text-sm text-bodytext">
              Ready to automate your operations?
            </p>
            <a href="https://calendly.com/craig-valente-allinoneai/30min" target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
              Book 5-Min Strategy Call
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ink-300/30 pt-8 sm:flex-row">
          <p className="text-sm text-bodytext/60">
            &copy; {year} All-In-One AI. All rights reserved.
          </p>
          <p className="font-mono text-sm tracking-widest text-matrix-400/70">
            Automate Your Future
          </p>
        </div>
      </div>
    </footer>
  );
}
