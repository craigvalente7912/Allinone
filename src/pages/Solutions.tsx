import { Link } from 'react-router-dom';
import {
  PhoneCall,
  FileText,
  Workflow,
  Globe,
  Mail,
  Share2,
  MessageSquare,
  Code,
  Plug,
  Building2,
  Search,
  Hammer,
  Rocket,
  ArrowRight,
  Phone,
  Wallet,
} from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const capabilities = [
  {
    icon: PhoneCall,
    title: 'Inbound & Outbound AI Voice Agents',
    desc: 'Deploy natural, human-sounding AI voice agents for inbound lead screening, customer support, and automated outbound sales follow-ups.',
  },
  {
    icon: FileText,
    title: 'Financial Auditing & Invoicing Bots',
    desc: 'Automate invoice generation, payment tracking, reconciliation, and routine financial audits across your accounting stack.',
  },
  {
    icon: Workflow,
    title: 'Automation & Workflow Bots',
    desc: 'Eliminate repetitive manual tasks and connect disjointed tools into autonomous 24/7 pipelines.',
  },
  {
    icon: Globe,
    title: 'Data-Scraper Bots',
    desc: 'Automate web data collection, market research, and lead extraction straight into structured databases.',
  },
  {
    icon: Mail,
    title: 'Email Automation Pipelines',
    desc: 'Execute cold email outreach, automated lead follow-ups, and instant client transactional updates.',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing Automations',
    desc: 'Automate multi-platform content scheduling, direct networking workflows, and campaign management.',
  },
  {
    icon: MessageSquare,
    title: 'Website Creation',
    desc: 'Build fast, modern, conversion-optimised websites that capture leads and showcase your brand with seamless AI-powered integrations.',
  },
  {
    icon: Code,
    title: 'App Creation',
    desc: 'Build bespoke web apps, client portals, and custom internal software tailored to your specific workflow.',
  },
  {
    icon: Plug,
    title: 'System & API Integrations',
    desc: 'Stitch together your CRMs, spreadsheets, and backends so data flows seamlessly without manual entry.',
  },
  {
    icon: Building2,
    title: 'Bespoke Enterprise Solutions',
    desc: 'Tailor-made automation architectures designed around your exact business logic and security needs.',
  },
];

const steps = [
  {
    icon: Search,
    step: '01',
    title: 'Audit & Discovery',
    desc: 'We analyse your daily operations to identify every repetitive task wasting management hours and sales revenue.',
  },
  {
    icon: Hammer,
    step: '02',
    title: 'Custom Engineering',
    desc: 'We design and build your custom bots, web applications, or n8n API integrations tailored to your stack.',
  },
  {
    icon: Rocket,
    step: '03',
    title: 'Deploy & Scale',
    desc: 'We manage complete on-site or remote installation, conduct rigorous testing, and provide ongoing optimisation.',
  },
];

export default function Solutions() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="section-label mb-4 justify-center">
            <span className="h-px w-8 bg-matrix-500" />
            Solutions
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-heading sm:text-5xl lg:text-6xl">
            If You Repeat It,
            <br />
            We <span className="text-gradient glow-text">Automate It.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-bodytext">
            Zero limits on sector, software, or complexity. If your business performs a task more than
            once, we build the automated pipeline, bot, or application to handle it completely.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="https://calendly.com/craig-valente-allinoneai/30min" target="_blank" rel="noopener noreferrer" className="btn-primary">
              <Phone className="h-4 w-4" />
              Book a 15-Minute Call
            </a>
          </div>
        </div>
      </section>

      {/* Core Capabilities Grid */}
      <section className="relative mx-auto max-w-7xl px-6 py-16">
        <SectionHeading
          center
          label="Core Capabilities"
          title="Ten high-value automation systems"
          description="From AI voice agents to bespoke enterprise architecture — every service is custom-engineered for your exact workflow."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {capabilities.map((c) => (
            <div key={c.title} className="card-glow group p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-matrix-500/10 transition-all group-hover:bg-matrix-500/20">
                <c.icon className="h-6 w-6 text-matrix-400" />
              </div>
              <h3 className="text-sm font-bold leading-snug text-heading">{c.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-bodytext">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="relative mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          center
          label="Our Process"
          title="How We Build Your Autonomous Systems"
          description="A proven three-step methodology that takes you from manual inefficiency to fully autonomous operations."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((s, idx) => (
            <div key={s.step} className="relative">
              {idx < steps.length - 1 && (
                <div className="absolute top-7 left-full hidden h-px w-full bg-gradient-to-r from-matrix-500/40 to-transparent md:block" />
              )}
              <div className="card-glow p-8">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-matrix-500/10">
                    <s.icon className="h-6 w-6 text-matrix-400" />
                  </div>
                  <span className="font-mono text-4xl font-bold text-ink-300/40">{s.step}</span>
                </div>
                <h3 className="text-lg font-bold text-heading">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-bodytext">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Banner */}
      <section className="relative mx-auto max-w-7xl px-6 py-12">
        <div className="relative overflow-hidden rounded-3xl border border-matrix-500/20 bg-ink-600/50 p-12 text-center sm:p-16">
          <div className="absolute inset-0 cyber-grid opacity-30" />
          <div className="absolute -top-20 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full radial-glow animate-pulse-glow" />
          <div className="relative">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-matrix-500/10">
              <Wallet className="h-7 w-7 text-matrix-400" />
            </div>
            <h2 className="text-3xl font-extrabold text-heading sm:text-4xl">
              Flexible, <span className="text-gradient glow-text">Tailored Pricing</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-bodytext">
              No cookie-cutter plans. Every solution is custom-engineered with flexible pricing
              structured to fit your specific requirements and operational budget.
            </p>
            <div className="mt-8">
              <a href="https://calendly.com/craig-valente-allinoneai/30min" target="_blank" rel="noopener noreferrer" className="btn-primary">
                <Phone className="h-4 w-4" />
                Book a 15-Minute Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="relative overflow-hidden rounded-3xl border border-matrix-500/20 bg-ink-600/50 p-12 text-center sm:p-16">
          <div className="absolute inset-0 cyber-grid opacity-30" />
          <div className="absolute -bottom-20 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full radial-glow animate-pulse-glow" />
          <div className="relative">
            <h2 className="text-3xl font-extrabold text-heading sm:text-4xl">
              Ready to Automate Your <span className="text-gradient glow-text">Repetitive Work?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-bodytext">
              Jump on a quick 15-minute discovery call to explore what we can automate for your
              business today.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="https://calendly.com/craig-valente-allinoneai/30min" target="_blank" rel="noopener noreferrer" className="btn-primary">
                <Phone className="h-4 w-4" />
                Book a 15-Minute Call
              </a>
              <Link to="/about" className="btn-outline">
                Meet the Team
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
