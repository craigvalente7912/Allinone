export default function CyberBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base */}
      <div className="absolute inset-0 bg-ink-900" />

      {/* Cyber grid */}
      <div className="absolute inset-0 cyber-grid bg-grid-fade opacity-40" />

      {/* Radial glows */}
      <div className="absolute -top-40 left-1/4 h-[600px] w-[600px] rounded-full radial-glow animate-pulse-glow" />
      <div className="absolute top-1/3 right-0 h-[500px] w-[500px] rounded-full radial-glow-cyan animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full radial-glow animate-pulse-glow" style={{ animationDelay: '3s' }} />

      {/* Vignette */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)' }} />
    </div>
  );
}
