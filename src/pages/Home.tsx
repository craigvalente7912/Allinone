import { Link } from 'react-router-dom';
import {
  PhoneCall,
  Workflow,
  Code,
  FileText,
  ArrowRight,
  Phone,
  Check,
  X,
  Zap,
  ArrowDown,
  AlertTriangle,
  Sparkles,
  Clock,
  ShieldCheck,
} from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import RoiCalculator from '@/components/RoiCalculator';
import SolutionChatbot from '@/components/SolutionChatbot';

const painPoints = [
  'Spending hours manually updating spreadsheets and cross-entering data.',
  'Losing high-value sales leads due to slow, manual follow-ups.',
  'Management wasting prime working hours on routine administrative tasks.',
];

const solutions = [
  'Instant, automated CRM & spreadsheet sync across all your tools.',
  '24/7 instant lead nurture bots that trigger response in seconds.',
  'Complete operational automation so management focuses 100% on sales & growth.',
];

const services = [
  {
    icon: PhoneCall,
    title: 'Inbound & Outbound AI Voice Agents',
    desc: 'Natural, human-sounding AI voice agents for lead screening, support, and automated outbound follow-ups.',
  },
  {
    icon: Workflow,
    title: 'Workflow & Admin Automation',
    desc: 'Eliminate repetitive manual tasks and connect disjointed tools into autonomous 24/7 pipelines.',
  },
  {
    icon: Code,
    title: 'Custom App & Web Builds',
    desc: 'Bespoke web apps, client portals, and internal software tailored to your specific workflow.',
  },
  {
    icon: FileText,
    title: 'Financial Bots & Data Scraping',
    desc: 'Automate invoicing, reconciliation, audits, and web data extraction into structured databases.',
  },
];

export default function Home() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section id="hero" className="relative mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="badge-cyan mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            AI Automation Agency
          </div>

          <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-heading sm:text-6xl lg:text-7xl">
            Automate Your{' '}
            <span className="text-gradient glow-text">Future</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-bodytext">
            Stop losing management time, sales, and profit to manual admin. We turn repetitive
            spreadsheet tasks and manual data entry into fast, autonomous AI workflows.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="https://calendly.com/craig-valente-allinoneai/30min" target="_blank" rel="noopener noreferrer" className="btn-primary">
              <Phone className="h-4 w-4" />
              Book a 15-Minute Call
            </a>
            <Link to="/solutions" className="btn-outline">
              View Workflow Solutions
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex justify-center">
          <ArrowDown className="h-5 w-5 animate-bounce text-matrix-400/50" />
        </div>
      </section>

      {/* Pain Point vs Solution */}
      <section className="relative mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          center
          label="The Problem & The Solution"
          title="The Admin Trap vs The All-In-One AI Way"
          description="Two paths. One keeps you stuck in manual work. The other sets your operations on autopilot."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Left: The Admin Trap */}
          <div className="rounded-2xl border border-red-500/20 bg-red-950/10 p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-red-500/10">
                <AlertTriangle className="h-5 w-5 text-red-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-heading/80">The Admin Trap</h3>
                <p className="text-xs text-red-400/60">Manual. Slow. Costly.</p>
              </div>
            </div>
            <ul className="space-y-5">
              {painPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red-500/10">
                    <X className="h-3.5 w-3.5 text-red-400" />
                  </div>
                  <span className="text-sm leading-relaxed text-bodytext">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: The All-In-One AI Way */}
          <div className="card-glow p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-matrix-500/10">
                <ShieldCheck className="h-5 w-5 text-matrix-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-heading">
                  The <span className="text-matrix-400">All-In-One AI</span> Way
                </h3>
                <p className="text-xs text-matrix-400/70">Automated. Fast. Scalable.</p>
              </div>
            </div>
            <ul className="space-y-5">
              {solutions.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-matrix-500/15">
                    <Check className="h-3.5 w-3.5 text-matrix-400" />
                  </div>
                  <span className="text-sm leading-relaxed text-heading/75">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Core Services Matrix */}
      <section className="relative mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          center
          label="Core Services"
          title="Your automation stack, built end-to-end"
          description="Four core services that work together to eliminate manual admin and multiply your operational output."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="card-glow group p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-matrix-500/10 transition-all group-hover:bg-matrix-500/20">
                <s.icon className="h-6 w-6 text-matrix-400" />
              </div>
              <h3 className="text-base font-bold text-heading">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-bodytext">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              label="Quantify the Impact"
              title="Calculate your automation ROI"
              description="Drag the sliders to estimate how much time and money AI automation could save your business every year."
            />
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <Zap className="mt-0.5 h-5 w-5 flex-shrink-0 text-matrix-400" />
                <p className="text-sm text-bodytext">Recover hundreds of labour hours per month with zero added headcount.</p>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="mt-0.5 h-5 w-5 flex-shrink-0 text-matrix-400" />
                <p className="text-sm text-bodytext">Reinvest your team's time into high-leverage work that drives growth.</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-matrix-400" />
                <p className="text-sm text-bodytext">Most clients see positive ROI within the first 30 days of deployment.</p>
              </div>
            </div>
          </div>
          <RoiCalculator />
        </div>
      </section>

      {/* Solution Finder Chatbot */}
      <SolutionChatbot />

      {/* Final CTA */}
      <section id="booking" className="relative mx-auto max-w-7xl px-6 py-20 scroll-mt-24">
        <div className="relative overflow-hidden rounded-3xl border border-matrix-500/20 bg-ink-600/50 p-12 text-center sm:p-20">
          <div className="absolute inset-0 cyber-grid opacity-30" />
          <div className="absolute -top-20 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full radial-glow animate-pulse-glow" />
          <div className="relative">
            <h2 className="text-3xl font-extrabold text-heading sm:text-4xl">
              Ready to Eliminate <span className="text-gradient glow-text">Admin Bottlenecks?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-bodytext">
              Jump on a quick 15-minute call to see exactly what we can automate for your business.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="https://calendly.com/craig-valente-allinoneai/30min" target="_blank" rel="noopener noreferrer" className="btn-primary">
                <Phone className="h-4 w-4" />
                Book a 15-Minute Call
              </a>
              <Link to="/solutions" className="btn-outline">
                View Workflow Solutions
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
