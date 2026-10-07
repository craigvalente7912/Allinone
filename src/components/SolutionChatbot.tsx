import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bot, Send, Sparkles, Phone, ArrowRight } from 'lucide-react';

interface Message {
  role: 'bot' | 'user';
  text: string;
  solution?: { title: string; desc: string };
}

interface ServiceMatch {
  title: string;
  desc: string;
  keywords: string[];
}

const services: ServiceMatch[] = [
  {
    title: 'Inbound & Outbound AI Voice Agents',
    desc: 'Human-sounding AI voice agents that screen leads, handle support, and automate outbound follow-ups 24/7 — so you never miss a lead after hours.',
    keywords: ['voice', 'call', 'phone', 'lead', 'missed', 'after hours', 'outbound', 'inbound', 'screen', 'follow up', 'follow-up'],
  },
  {
    title: 'Financial Auditing & Invoicing Bots',
    desc: 'Automate invoice generation, payment tracking, reconciliation, and financial audits across your accounting stack.',
    keywords: ['invoice', 'financial', 'audit', 'payment', 'reconciliation', 'accounting', 'billing', 'receipt'],
  },
  {
    title: 'Automation & Workflow Bots',
    desc: 'Eliminate repetitive manual tasks and connect disjointed tools into autonomous 24/7 pipelines.',
    keywords: ['manual', 'admin', 'spreadsheet', 'workflow', 'repetitive', 'task', 'automation', 'data entry', 'cross-entering', 'copy', 'paste'],
  },
  {
    title: 'Data-Scraper Bots',
    desc: 'Automate web data collection, market research, and lead extraction straight into structured databases.',
    keywords: ['data', 'scraping', 'scraper', 'web data', 'market research', 'lead extraction', 'collection', 'mining'],
  },
  {
    title: 'Email Automation Pipelines',
    desc: 'Execute cold email outreach, automated lead follow-ups, and instant client transactional updates.',
    keywords: ['email', 'cold', 'outreach', 'follow-up email', 'newsletter', 'transactional', 'drip'],
  },
  {
    title: 'Social Media Marketing Automations',
    desc: 'Automate multi-platform content scheduling, direct networking workflows, and campaign management.',
    keywords: ['social', 'media', 'marketing', 'content', 'scheduling', 'instagram', 'facebook', 'linkedin', 'campaign'],
  },
  {
    title: 'Website Creation',
    desc: 'Build fast, modern, conversion-optimised websites that capture leads and showcase your brand.',
    keywords: ['website', 'web', 'site', 'landing page', 'conversion', 'brand', 'homepage'],
  },
  {
    title: 'App Creation',
    desc: 'Build bespoke web apps, client portals, and custom internal software tailored to your specific workflow.',
    keywords: ['app', 'application', 'mobile', 'portal', 'custom software', 'web app', 'client portal', 'platform'],
  },
  {
    title: 'System & API Integrations',
    desc: 'Stitch together your CRMs, spreadsheets, and backends so data flows seamlessly without manual entry.',
    keywords: ['integration', 'api', 'crm', 'system', 'backend', 'connect', 'sync', 'database', 'interconnect'],
  },
  {
    title: 'Bespoke Enterprise Solutions',
    desc: 'Tailor-made automation architectures designed around your exact business logic and security needs.',
    keywords: ['enterprise', 'bespoke', 'custom', 'complex', 'architecture', 'security', 'large scale', 'business logic'],
  },
];

const presetPills = [
  'Missed leads after hours',
  'Manual admin & spreadsheets',
  'Need a custom web/mobile app',
];

function matchService(input: string): ServiceMatch | null {
  const lower = input.toLowerCase();
  let bestMatch: ServiceMatch | null = null;
  let bestScore = 0;

  for (const service of services) {
    let score = 0;
    for (const keyword of service.keywords) {
      if (lower.includes(keyword)) {
        score += keyword.length;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = service;
    }
  }

  return bestScore > 0 ? bestMatch : null;
}

export default function SolutionChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'bot',
      text: "Hi! I'm your AI solution finder. Tell me what's slowing your business down, and I'll match you with the right automation. Try one of the suggestions below or describe your challenge in your own words.",
    },
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMsg: Message = { role: 'user', text: trimmed };
    const match = matchService(trimmed);

    const botMsg: Message = match
      ? {
          role: 'bot',
          text: `Based on what you've described, here's the solution I'd recommend:`,
          solution: { title: match.title, desc: match.desc },
        }
      : {
          role: 'bot',
          text: "I'd love to help narrow this down. Could you share a bit more detail — for example, are you losing leads, drowning in admin, or need a custom app built? Try one of the suggestions above, or describe your biggest daily bottleneck.",
        };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSend(input);
  };

  return (
    <section className="relative mx-auto max-w-4xl px-6 py-20">
      <div className="text-center">
        <div className="badge-cyan mb-4 inline-flex">
          <Sparkles className="h-3.5 w-3.5" />
          AI-Powered Solution Finder
        </div>
        <h2 className="text-3xl font-extrabold text-heading sm:text-4xl">
          Find Your <span className="text-gradient-cyan glow-cyan">Solution</span>
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-base text-bodytext">
          Tell us what's slowing you down. We'll instantly match you with the right automation from our ten core services.
        </p>
      </div>

      <div className="mt-10 card-glow overflow-hidden">
        {/* Header bar */}
        <div className="flex items-center gap-3 border-b border-ink-300/30 bg-ink-700/50 px-6 py-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyanx-500/10">
            <Bot className="h-5 w-5 text-cyanx-400" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-heading">Solution Finder Bot</h3>
            <p className="text-xs text-bodytext/60">Online — typically replies instantly</p>
          </div>
        </div>

        {/* Messages area */}
        <div ref={scrollRef} className="max-h-[400px] min-h-[280px] space-y-4 overflow-y-auto px-6 py-6">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-matrix-500/15 text-heading rounded-br-sm'
                    : 'bg-ink-700/80 text-bodytext rounded-bl-sm border border-ink-300/30'
                }`}
              >
                {msg.text}
                {msg.solution && (
                  <div className="mt-3 rounded-xl border border-cyanx-500/30 bg-cyanx-500/5 p-4">
                    <p className="text-sm font-bold text-cyanx-400">{msg.solution.title}</p>
                    <p className="mt-1.5 text-xs leading-relaxed text-bodytext">{msg.solution.desc}</p>
                    <a
                      href="https://calendly.com/craig-valente-allinoneai/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 rounded-lg bg-matrix-500 px-4 py-2 text-xs font-semibold text-ink-900 transition-all hover:bg-matrix-400"
                    >
                      <Phone className="h-3.5 w-3.5" />
                      Book a Call
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Preset pills */}
        <div className="flex flex-wrap gap-2 border-t border-ink-300/30 px-6 py-3">
          {presetPills.map((pill) => (
            <button
              key={pill}
              onClick={() => handleSend(pill)}
              className="rounded-full border border-cyanx-500/30 bg-cyanx-500/5 px-3 py-1.5 text-xs font-medium text-cyanx-400 transition-all hover:border-cyanx-500/60 hover:bg-cyanx-500/10"
            >
              {pill}
            </button>
          ))}
        </div>

        {/* Input bar */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-ink-300/30 px-4 py-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Describe your challenge..."
            className="flex-1 rounded-lg border border-ink-300/40 bg-ink-700/50 px-4 py-2.5 text-sm text-heading placeholder-bodytext/40 outline-none transition-all focus:border-cyanx-500/50 focus:bg-ink-700"
          />
          <button
            type="submit"
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-matrix-500 text-ink-900 transition-all hover:bg-matrix-400"
            aria-label="Send message"
          >
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  );
}
