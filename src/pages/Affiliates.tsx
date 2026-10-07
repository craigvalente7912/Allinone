import { Link } from 'react-router-dom';
import {
  Users,
  Handshake,
  TrendingUp,
  Percent,
  Phone,
  ArrowRight,
  Sparkles,
  Building2,
  Rocket,
  ShieldCheck,
  Wallet,
} from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/craig-valente-allinoneai/30min';
import SectionHeading from '@/components/SectionHeading';

const standardBenefits = [
  { icon: Percent, title: '15% Recurring Commission', desc: 'Earn 15% on every deal closed through your introduction, paid recurring for the lifetime of the client relationship.' },
  { icon: ShieldCheck, title: 'No Technical Knowledge Required', desc: 'You refer the client — we handle the entire build, deployment, and ongoing support. Your only job is making the introduction.' },
  { icon: TrendingUp, title: 'Goes Live, You Earn', desc: 'Commission activates the moment your referred client successfully goes live with their automation system or custom build.' },
];

const partnerBenefits = [
  { icon: Handshake, title: 'Custom Commission Splits', desc: 'Brokers, agencies, and B2B consultants with established client books qualify for negotiated splits up to 50% on high-volume and enterprise deals.' },
  { icon: Building2, title: 'Priority Client Onboarding', desc: 'Your referred clients skip the standard pipeline queue with fast-tracked onboarding, rapid workflow deployment, and dedicated VIP support.' },
  { icon: Rocket, title: 'Dedicated Partner Support', desc: 'Strategic partners get a direct line to our engineering team, priority deployment slots, and co-branded proposal materials for client pitches.' },
];

const stats = [
  { icon: Percent, value: '50%', label: 'Maximum commission on enterprise deals' },
  { icon: Wallet, value: '15%', label: 'Standard recurring affiliate commission' },
  { icon: Users, value: '100+', label: 'Potential client introductions welcomed' },
  { icon: ShieldCheck, value: '£0', label: 'Cost to join the programme' },
];

export default function Affiliates() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="badge-cyan mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            Partnership Programme
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-heading sm:text-5xl lg:text-6xl">
            Earn Up to{' '}
            <span className="text-gradient glow-text">50% Commission</span>
            <br />
            with All-In-One AI
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-bodytext">
            Turn your network into recurring revenue. Whether you're an individual with
            connections or an established agency with a client book, our partnership programme
            rewards you for every successful introduction.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="https://calendly.com/craig-valente-allinoneai/30min" target="_blank" rel="noopener noreferrer" className="btn-primary">
              <Phone className="h-4 w-4" />
              Book a Partner Discovery Call
            </a>
            <a href="#how-it-works" className="btn-outline">
              See How It Works
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="relative mx-auto max-w-7xl px-6 pb-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="card-glow group p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyanx-500/10 transition-all group-hover:bg-cyanx-500/20">
                <s.icon className="h-6 w-6 text-cyanx-400" />
              </div>
              <p className="text-3xl font-extrabold text-heading glow-text">{s.value}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-bodytext">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Standard Referral Programme */}
      <section id="how-it-works" className="relative mx-auto max-w-7xl px-6 py-20 scroll-mt-24">
        <SectionHeading
          center
          label="For Individuals"
          title="Standard Referral Programme"
          description="Introduce businesses to All-In-One AI and earn recurring commission on every deal that goes live through your connection."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {standardBenefits.map((b) => (
            <div key={b.title} className="card-glow group p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyanx-500/10 transition-all group-hover:bg-cyanx-500/20">
                <b.icon className="h-6 w-6 text-cyanx-400" />
              </div>
              <h3 className="text-base font-bold text-heading">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-bodytext">{b.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 card-glow p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-matrix-500/10">
              <Wallet className="h-6 w-6 text-matrix-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-heading">How It Works</h3>
              <p className="mt-2 text-sm leading-relaxed text-bodytext">
                You introduce a business that could benefit from AI automation, a custom app, or a
                new website. We take the discovery call, scope the project, and handle the full
                build. Once the client successfully goes live and the project is invoiced, you
                receive a <span className="font-semibold text-matrix-400">15% recurring commission</span> on
                the deal value — paid for the lifetime of the client relationship. No caps, no
                minimums, no hidden clauses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic B2B Partnership */}
      <section className="relative mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          center
          label="For Agencies & Brokers"
          title="Strategic B2B & Broker Partnerships"
          description="We actively partner with brokers, agencies, and B2B software consultants who have established client books and regular deal flow."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {partnerBenefits.map((b) => (
            <div key={b.title} className="card-glow group p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyanx-500/10 transition-all group-hover:bg-cyanx-500/20">
                <b.icon className="h-6 w-6 text-cyanx-400" />
              </div>
              <h3 className="text-base font-bold text-heading">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-bodytext">{b.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 card-glow p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-matrix-500/10">
              <Handshake className="h-6 w-6 text-matrix-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-heading">Custom Commission Structures</h3>
              <p className="mt-2 text-sm leading-relaxed text-bodytext">
                If you're an agency, broker, or B2B consultant bringing consistent high-value
                deals, we'll negotiate a bespoke commission structure tailored to your volume and
                deal size. Strategic partners can earn up to{' '}
                <span className="font-semibold text-matrix-400">50% commission</span> on
                enterprise-level or high-volume contracts. We also offer white-label delivery so
                you can present our full automation and development stack under your own brand
                while we handle everything behind the scenes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="relative overflow-hidden rounded-3xl border border-matrix-500/20 bg-ink-600/50 p-12 text-center sm:p-20">
          <div className="absolute inset-0 cyber-grid opacity-30" />
          <div className="absolute -top-20 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full radial-glow animate-pulse-glow" />
          <div className="relative">
            <h2 className="text-3xl font-extrabold text-heading sm:text-4xl">
              Ready to Become a{' '}
              <span className="text-gradient glow-text">Partner?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-bodytext">
              Book a quick partner discovery call to discuss commission structures, white-label
              options, and how we can grow together.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="https://calendly.com/craig-valente-allinoneai/30min" target="_blank" rel="noopener noreferrer" className="btn-primary">
                <Phone className="h-4 w-4" />
                Book a Partner Discovery Call
              </a>
              <Link to="/solutions" className="btn-outline">
                Explore Our Solutions
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
