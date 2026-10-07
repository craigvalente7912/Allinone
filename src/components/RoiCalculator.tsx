import { useState } from 'react';
import { Calculator, Clock, PoundSterling, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RoiCalculator() {
  const [hoursPerWeek, setHoursPerWeek] = useState(15);
  const [hourlyRate, setHourlyRate] = useState(50);


  const yearly = hoursPerWeek * hourlyRate * 52;

  const fmt = (n: number) =>
    n.toLocaleString('en-GB', {
      style: 'currency',
      currency: 'GBP',
      maximumFractionDigits: 0,
    });

  return (
    <div className="card-glow p-8">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-matrix-500/10">
          <Calculator className="h-5 w-5 text-matrix-400" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-heading">ROI Calculator</h3>
          <p className="text-xs text-bodytext/70">See what automation could save you</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Hours slider */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm font-medium text-heading/80">
              <Clock className="h-4 w-4 text-matrix-400" />
              Hours on manual admin / week
            </label>
            <span className="font-mono text-sm font-bold text-matrix-400">{hoursPerWeek}h</span>
          </div>
          <input
            type="range"
            min={1}
            max={40}
            value={hoursPerWeek}
            onChange={(e) => setHoursPerWeek(Number(e.target.value))}
            className="w-full accent-matrix-500"
          />
          <div className="mt-1 flex justify-between text-xs text-bodytext/50">
            <span>1h</span>
            <span>40h</span>
          </div>
        </div>

        {/* Rate slider */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm font-medium text-heading/80">
              <PoundSterling className="h-4 w-4 text-matrix-400" />
              Average hourly cost / value
            </label>
            <span className="font-mono text-sm font-bold text-matrix-400">£{hourlyRate}/hr</span>
          </div>
          <input
            type="range"
            min={13}
            max={150}
            step={1}
            value={hourlyRate}
            onChange={(e) => setHourlyRate(Number(e.target.value))}
            className="w-full accent-matrix-500"
          />
          <div className="mt-1 flex justify-between text-xs text-bodytext/50">
            <span>£13</span>
            <span>£150</span>
          </div>
        </div>

        {/* Annual savings result */}
        <div className="rounded-xl border border-matrix-500/30 bg-matrix-500/10 p-6 text-center">
          <p className="flex items-center justify-center gap-2 text-xs font-medium text-matrix-400">
            <TrendingUp className="h-4 w-4" />
            Estimated Annual Savings
          </p>
          <p className="mt-2 font-mono text-4xl font-extrabold text-matrix-400 glow-text">
            {fmt(yearly)}
          </p>
          <p className="mt-2 text-xs text-bodytext/60">
            Based on {hoursPerWeek}h/week at £{hourlyRate}/hr recovered
          </p>
        </div>

        <Link to="/contact" className="btn-primary w-full text-sm">
          Reclaim These Hours
          <ArrowRight className="h-4 w-4" />
        </Link>

        <p className="text-center text-xs text-bodytext/50">
          Estimates based on labour cost recovery. Actual savings vary.
        </p>
      </div>
    </div>
  );
}
