import { useState } from 'react';
import {
  Calendar,
  Mail,
  User,
  Phone,
  Send,
  Check,
  Clock,
  Video,
  MapPin,
  Globe,
  Building2,
  Target,
} from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const CALENDLY_URL = 'https://calendly.com/craig-valente-allinoneai/30min';

interface FormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

const serviceOptions = [
  'Inbound & Outbound AI Voice Agents',
  'Financial Auditing & Invoicing Bots',
  'Automation & Workflow Bots',
  'Data-Scraper Bots',
  'Email Automation Pipelines',
  'Social Media Marketing Automations',
  'Website Creation',
  'App Creation',
  'System & API Integrations',
  'Bespoke Enterprise Solutions',
  'Other',
];

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError('Please enter a valid business email.');
      return;
    }

    setSubmitted(true);
  };

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="relative mx-auto max-w-7xl px-6 py-16">
        <SectionHeading
          center
          label="Get In Touch"
          title="Book your 15-minute discovery call"
          description="Speak directly with Craig to audit your business processes and explore what we can automate or build for you."
        />
      </section>

      {/* Contact Details + Booking */}
      <section className="relative mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Details & Direct Reach Card */}
          <div className="card-glow p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-matrix-500/10">
                <Mail className="h-5 w-5 text-matrix-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-heading">Direct Reach</h3>
                <p className="text-xs text-bodytext/70">Get in touch directly with Craig</p>
              </div>
            </div>

            <div className="space-y-5">
              {/* Location */}
              <div className="flex items-start gap-4 rounded-lg border border-ink-300/30 bg-ink-700/50 p-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-matrix-500/10">
                  <MapPin className="h-5 w-5 text-matrix-400" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-matrix-400">Location</p>
                  <p className="mt-1 text-sm text-heading/75">Based in Blackpool, UK — Serving Clients Globally</p>
                </div>
              </div>

              {/* Email */}
              <a
                href="mailto:Craig.valente@allinoneai.co.uk"
                className="flex items-start gap-4 rounded-lg border border-ink-300/30 bg-ink-700/50 p-4 transition-all hover:border-matrix-500/40 hover:bg-ink-700"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-matrix-500/10">
                  <Mail className="h-5 w-5 text-matrix-400" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-mono uppercase tracking-wider text-matrix-400">Email</p>
                  <p className="mt-1 truncate text-sm text-heading/75">Craig.valente@allinoneai.co.uk</p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:07472838432"
                className="flex items-start gap-4 rounded-lg border border-ink-300/30 bg-ink-700/50 p-4 transition-all hover:border-matrix-500/40 hover:bg-ink-700"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-matrix-500/10">
                  <Phone className="h-5 w-5 text-matrix-400" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-matrix-400">Phone</p>
                  <p className="mt-1 text-sm text-heading/75">07472838432</p>
                </div>
              </a>

              {/* Quick action buttons */}
              <div className="flex flex-col gap-3 sm:flex-row">
                <a href="tel:07472838432" className="btn-primary flex-1 text-sm">
                  <Phone className="h-4 w-4" />
                  Call Directly
                </a>
              </div>
            </div>
          </div>

          {/* Booking & Calendly Widget Container */}
          <div className="card-glow p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-matrix-500/10">
                <Calendar className="h-5 w-5 text-matrix-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-heading">15-Minute Discovery Call</h3>
                <p className="text-xs text-bodytext/70">Select a time that works for you</p>
              </div>
            </div>

            <p className="mb-6 text-sm leading-relaxed text-bodytext">
              Select a time that works for you to audit your business processes and discuss what we
              can automate or build for you.
            </p>

            {/* Calendly embed container */}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full text-sm"
            >
              <Calendar className="h-4 w-4" />
              Book Your Discovery Call
            </a>
            <div className="mt-4 flex items-center justify-center gap-2 rounded-lg border border-matrix-500/20 bg-matrix-500/5 px-4 py-2">
              <Clock className="h-3.5 w-3.5 text-matrix-400" />
              <span className="font-mono text-xs text-matrix-400">30-minute video call</span>
            </div>
          </div>
        </div>
      </section>

      {/* Fallback Lead Inquiry Form */}
      <section className="relative mx-auto max-w-3xl px-6 pb-20">
        <div className="card-glow p-8 sm:p-10">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-matrix-500/10">
              <Send className="h-5 w-5 text-matrix-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-heading">Send a Direct Inquiry</h3>
              <p className="text-xs text-bodytext/70">Tell Craig what you need built or automated</p>
            </div>
          </div>

          {submitted ? (
            <div className="flex flex-col items-center rounded-xl border border-matrix-500/30 bg-matrix-500/5 p-12 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-matrix-500/15">
                <Check className="h-8 w-8 text-matrix-400" />
              </div>
              <h4 className="text-lg font-bold text-heading">Inquiry sent!</h4>
              <p className="mt-2 max-w-sm text-sm text-bodytext">
                Thanks, {form.name.split(' ')[0]}. Craig will review your project details and get
                back to you directly within 24 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: '', email: '', phone: '', company: '', service: '', message: '' });
                }}
                className="btn-outline mt-6 text-sm"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name + Business Email */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-medium text-heading/80">
                    <User className="h-4 w-4 text-matrix-400" />
                    Full Name <span className="text-matrix-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="Your full name"
                    className="w-full rounded-lg border border-ink-300/40 bg-ink-700/50 px-4 py-3 text-sm text-heading placeholder-bodytext/30 outline-none transition-all focus:border-matrix-500/60 focus:bg-ink-700"
                  />
                </div>

                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-medium text-heading/80">
                    <Mail className="h-4 w-4 text-matrix-400" />
                    Business Email <span className="text-matrix-400">*</span>
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="you@company.com"
                    className="w-full rounded-lg border border-ink-300/40 bg-ink-700/50 px-4 py-3 text-sm text-heading placeholder-bodytext/30 outline-none transition-all focus:border-matrix-500/60 focus:bg-ink-700"
                  />
                </div>
              </div>

              {/* Phone + Company */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-medium text-heading/80">
                    <Phone className="h-4 w-4 text-matrix-400" />
                    Phone Number <span className="text-bodytext/50">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    placeholder="07123 456789"
                    className="w-full rounded-lg border border-ink-300/40 bg-ink-700/50 px-4 py-3 text-sm text-heading placeholder-bodytext/30 outline-none transition-all focus:border-matrix-500/60 focus:bg-ink-700"
                  />
                </div>

                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-medium text-heading/80">
                    <Building2 className="h-4 w-4 text-matrix-400" />
                    Company / Website <span className="text-bodytext/50">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => handleChange('company', e.target.value)}
                    placeholder="Company name or URL"
                    className="w-full rounded-lg border border-ink-300/40 bg-ink-700/50 px-4 py-3 text-sm text-heading placeholder-bodytext/30 outline-none transition-all focus:border-matrix-500/60 focus:bg-ink-700"
                  />
                </div>
              </div>

              {/* Service dropdown */}
              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-medium text-heading/80">
                  <Target className="h-4 w-4 text-matrix-400" />
                  What can we build or automate for you?
                </label>
                <select
                  value={form.service}
                  onChange={(e) => handleChange('service', e.target.value)}
                  className="w-full rounded-lg border border-ink-300/40 bg-ink-700/50 px-4 py-3 text-sm text-heading outline-none transition-all focus:border-matrix-500/60 focus:bg-ink-700"
                >
                  <option value="" className="bg-ink-700">Select a service...</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-ink-700">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-medium text-heading/80">
                  <Globe className="h-4 w-4 text-matrix-400" />
                  Message / Project Details <span className="text-matrix-400">*</span>
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  placeholder="Describe what you'd like to automate or build. What manual processes are draining your time? What app or website do you need?"
                  rows={5}
                  className="w-full resize-none rounded-lg border border-ink-300/40 bg-ink-700/50 px-4 py-3 text-sm text-heading placeholder-bodytext/30 outline-none transition-all focus:border-matrix-500/60 focus:bg-ink-700"
                />
              </div>

              {error && (
                <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2.5 text-sm text-red-400">
                  {error}
                </p>
              )}

              <button type="submit" className="btn-primary w-full text-sm">
                <Send className="h-4 w-4" />
                Send Inquiry to Craig
              </button>

              <p className="text-center text-xs text-bodytext/50">
                Craig personally reviews every inquiry and responds within 24 hours.
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
