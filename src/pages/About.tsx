import { Link } from 'react-router-dom';
import {
  Ban,
  Layers,
  Zap,
  Network,
  Phone,
  ArrowRight,
  Quote,
  CheckCircle2,
  Infinity as InfinityIcon,
  Rocket,
  Clock,
  Code,
} from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const values = [
  {
    icon: Ban,
    title: 'Total Elimination of Low-Value Work',
    desc: 'If a human doesn\'t need to think to do it, a machine should handle it. We systematically liberate your team from repetitive tasks so they can focus on high-leverage growth.',
  },
  {
    icon: Layers,
    title: 'Custom Architecture over Generic Templates',
    desc: 'Off-the-shelf software templates force you to adapt your business to the tool. We build custom-tailored AI systems, websites, and apps designed specifically around your unique operational workflows.',
  },
  {
    icon: Zap,
    title: 'Execution Speed & Zero Fluff',
    desc: 'We measure progress in deployed systems and saved hours, not endless discovery calls or fluff reports. Rapid deployment with zero friction.',
  },
  {
    icon: Network,
    title: 'Integrated Operations',
    desc: 'Solitary automation creates silos. We build interconnected ecosystems where your sales, marketing, and operations communicate seamlessly in real time.',
  },
];

const stats = [
  {
    icon: Code,
    value: '100% Custom Built Stack',
    desc: 'Zero template restrictions',
  },
  {
    icon: InfinityIcon,
    value: 'No Build Too Big',
    desc: 'From single bots to enterprise platforms',
  },
  {
    icon: Rocket,
    value: 'Proven Live Deployments',
    desc: 'Active AI systems serving real clients daily',
  },
  {
    icon: Clock,
    value: 'Hours Reclaimed',
    desc: 'Direct reduction in manual admin and salary waste',
  },
];

export default function About() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="section-label mb-4 justify-center">
            <span className="h-px w-8 bg-matrix-500" />
            About Us
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-heading sm:text-5xl lg:text-6xl">
            Engineering Autonomous Operations
            <br />& <span className="text-gradient glow-text">Modern Digital Systems</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-bodytext">
            We are on a mission to eliminate low-value admin, modernise outdated tech stacks, and
            give growth-focused businesses the exact AI systems and custom applications they need
            to scale.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="https://calendly.com/craig-valente-allinoneai/30min" target="_blank" rel="noopener noreferrer" className="btn-primary">
              <Phone className="h-4 w-4" />
              Book a 15-Minute Call
            </a>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="relative mx-auto max-w-5xl px-6 py-16">
        <div className="card-glow p-8 sm:p-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-matrix-500/10">
              <Quote className="h-6 w-6 text-matrix-400" />
            </div>
            <h2 className="text-2xl font-bold text-heading">
              The <span className="text-matrix-400">All-In-One AI</span> Origin
            </h2>
          </div>
          <p className="text-base leading-relaxed text-bodytext">
            We watched ambitious companies spend 40% of their operational hours on work that
            computers should have been doing: copying data between systems, manual client
            onboarding, and chasing down administrative loose ends. Software was supposed to save
            time, but managing a fragmented stack of a dozen unintegrated tools created a whole new
            bottleneck. We founded All-In-One AI to solve this permanently. We built a single,
            unified agency designed to analyse every operational friction point in your business
            and replace manual workflows with intelligent, scalable AI automation, modern web
            architectures, and custom apps.
          </p>
        </div>
      </section>

      {/* Core Philosophy & Values */}
      <section className="relative mx-auto max-w-7xl px-6 py-16">
        <SectionHeading
          center
          label="Core Philosophy"
          title="What drives everything we build"
          description="Four principles that define how we approach every project, every client, and every line of code."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {values.map((v) => (
            <div key={v.title} className="card-glow group p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-matrix-500/10 transition-all group-hover:bg-matrix-500/20">
                <v.icon className="h-6 w-6 text-matrix-400" />
              </div>
              <h3 className="text-base font-bold text-heading">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-bodytext">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Founder & Leadership */}
      <section className="relative mx-auto max-w-5xl px-6 py-16">
        <SectionHeading
          center
          label="Leadership"
          title="Meet the Founder & Director"
        />

        <div className="mt-12 card-glow overflow-hidden p-8 sm:p-12">
          <div className="grid gap-8 md:grid-cols-[200px_1fr] md:items-start">
            {/* Avatar */}
            <div className="flex flex-col items-center">
              <img
                src="/Website_Photo.jpg"
                alt="Craig Valente, Director and Founder"
                className="w-48 h-48 md:w-56 md:h-56 mx-auto rounded-full object-cover"
              />
              <h3 className="mt-4 text-lg font-bold text-heading">Craig Valente</h3>
              <p className="text-xs font-mono uppercase tracking-wider text-matrix-400">Director & Founder</p>
              <p className="mt-1 text-xs text-bodytext/60">Blackpool, UK</p>
            </div>

            {/* Bio */}
            <div>
              <p className="text-sm leading-relaxed text-white/65">
                Based in Blackpool, UK, Craig founded All-In-One AI with a singular vision: to
                liberate growth-focused businesses from the weight of manual admin and outdated
                technology. Balancing a grueling schedule across multiple roles while pursuing
                night studies in software development, Craig uncovered the transformative power of
                custom AI automation, modern web design, and bespoke app engineering.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/65">
                Driven by the commitment to build a legacy for his family and newborn daughter,
                Craig recognised that countless businesses were losing high-value staff hours to
                manual paperwork, operating on clunky, outdated websites, or sitting on app ideas
                they lacked the technical capability to build. Today, Craig works directly with
                founders and executives globally to eliminate operational bottlenecks, modernise
                digital infrastructure, and engineer autonomous systems that allow businesses to
                scale without limits.
              </p>
            </div>
          </div>

          {/* Direct callout */}
          <div className="mt-8 rounded-xl border border-matrix-500/30 bg-matrix-500/5 p-6 text-center">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
              <div className="flex items-center gap-3 text-left">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-matrix-400" />
                <p className="text-sm font-semibold text-heading">
                  Speak Directly with Craig on a 15-Minute Discovery Call
                </p>
              </div>
              <a href="https://calendly.com/craig-valente-allinoneai/30min" target="_blank" rel="noopener noreferrer" className="btn-primary text-sm whitespace-nowrap">
                <Phone className="h-4 w-4" />
                Speak with Craig
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Authority Stats */}
      <section className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.value} className="card-glow group p-6 text-center">
              <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-matrix-500/10 transition-all group-hover:bg-matrix-500/20">
                <s.icon className="h-6 w-6 text-matrix-400" />
              </div>
              <h3 className="text-sm font-bold leading-snug text-matrix-400 glow-text">
                {s.value}
              </h3>
              <p className="mt-2 text-xs text-bodytext/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="relative overflow-hidden rounded-3xl border border-matrix-500/20 bg-ink-600/50 p-12 text-center sm:p-16">
          <div className="absolute inset-0 cyber-grid opacity-30" />
          <div className="absolute -top-20 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full radial-glow animate-pulse-glow" />
          <div className="relative">
            <h2 className="text-3xl font-extrabold text-heading sm:text-4xl">
              Ready to Scale Without{' '}
              <span className="text-gradient glow-text">Operational Bottlenecks?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-bodytext">
              Book a direct 15-minute call with Craig to audit your workflow and explore what we
              can automate or build for you.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="https://calendly.com/craig-valente-allinoneai/30min" target="_blank" rel="noopener noreferrer" className="btn-primary">
                <Phone className="h-4 w-4" />
                Book a 15-Minute Call
              </a>
              <Link to="/solutions" className="btn-outline">
                View Solutions
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
