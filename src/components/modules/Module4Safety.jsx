import React from 'react';
import { useDashboard } from '../../context/DashboardContext';
import { qualityIndicators, bmwSegregationStats } from '../../data/mockData';
import { 
  HeartPulse, ShieldCheck, AlertOctagon, Flame, 
  Trash2, Activity, CheckCircle2, Siren, Wrench, FileWarning
} from 'lucide-react';

export const Module4Safety = () => {
  const { setDrilldownData, notify } = useDashboard();

  return (
    <div className="space-y-6">
      
      {/* Top Banner: Zero Harm & Safety Goals Status */}
      <div className="bg-white dark:bg-slate-800/90 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 border-l-4 border-l-emerald-500">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <HeartPulse className="w-6 h-6 stroke-[2.2]" />
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    Patient Safety & Quality Indicators (PSQ Standard)
                  </h2>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                    ZERO HARM ACHIEVED
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  JIKA Hospital • International Patient Safety Goals (IPSG 1-6), Sentinel Event Surveillance & Near-Miss Reporting.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 flex-shrink-0">
            <div className="p-3 bg-white/80 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
              <span className="text-[10px] uppercase font-bold text-slate-400">Sentinel Events</span>
              <p className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">0</p>
              <span className="text-[10px] text-emerald-600 font-semibold">Zero Tolerance</span>
            </div>
            <div className="p-3 bg-white/80 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
              <span className="text-[10px] uppercase font-bold text-slate-400">Near-Miss Intercepts</span>
              <p className="text-2xl font-extrabold text-teal-600 dark:text-teal-400 font-mono">14</p>
              <span className="text-[10px] text-teal-600 font-semibold">Healthy Reporting</span>
            </div>
            <div className="p-3 bg-white/80 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
              <span className="text-[10px] uppercase font-bold text-slate-400">Patient Falls (OPD)</span>
              <p className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">0</p>
              <span className="text-[10px] text-slate-400">Fall Risk Protocol</span>
            </div>
            <div className="p-3 bg-white/80 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
              <span className="text-[10px] uppercase font-bold text-slate-400">Needle-Stick Injury</span>
              <p className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">0</p>
              <span className="text-[10px] text-slate-400">Safety Hub Needles</span>
            </div>
          </div>
        </div>
      </div>

      {/* Row 1: Comprehensive PSQ Quality Indicators Table */}
      <div className="bg-white dark:bg-slate-800/90 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              NABH Mandatory Quality & Safety Indicators Matrix
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Daily monitored clinical performance indicators reported to Quality Improvement Committee (QIC).
            </p>
          </div>
          <button
            onClick={() => notify('PSQ Monthly Summary pushed to NABH Portal.')}
            className="px-3 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs transition-all shadow-sm flex items-center gap-1.5"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Validate PSQ Matrix</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 dark:bg-slate-800/60 font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700">
              <tr>
                <th className="py-2.5 px-3">Indicator Code</th>
                <th className="py-2.5 px-3">Quality & Safety Parameter</th>
                <th className="py-2.5 px-3">NABH Target Threshold</th>
                <th className="py-2.5 px-3">Current Performance</th>
                <th className="py-2.5 px-3">Compliance Status</th>
                <th className="py-2.5 px-3 text-right">Trend Analysis</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {qualityIndicators.map((ind) => (
                <tr key={ind.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                  <td className="py-3 px-3 font-mono font-bold text-teal-600 dark:text-teal-400">
                    {ind.id}
                  </td>
                  <td className="py-3 px-3 font-semibold text-slate-800 dark:text-slate-200">
                    {ind.metric}
                  </td>
                  <td className="py-3 px-3 font-mono text-slate-500">
                    {ind.target}
                  </td>
                  <td className="py-3 px-3 font-mono font-bold text-slate-900 dark:text-white">
                    {ind.actual}
                  </td>
                  <td className="py-3 px-3">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      {ind.status}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-right font-mono text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
                    {ind.trend.toUpperCase()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Row 2: Bio-Medical Waste (BMW) Management & Facility Safety */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* BMW Segregation Card */}
        <div className="glass-panel p-5 rounded-2xl shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Trash2 className="w-4 h-4 text-amber-500" />
              <span>Bio-Medical Waste Segregation (BMW Rules 2016)</span>
            </h3>
            <span className="text-xs font-mono font-bold text-emerald-600">98.2% Compliance</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {bmwSegregationStats.map((bin) => (
              <div 
                key={bin.color}
                className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-800/40 relative overflow-hidden"
              >
                <div 
                  className="absolute top-0 left-0 bottom-0 w-1.5"
                  style={{ backgroundColor: bin.colorCode }}
                />
                <div className="pl-2">
                  <p className="font-bold text-xs text-slate-900 dark:text-white">{bin.color}</p>
                  <div className="mt-1 flex items-baseline justify-between font-mono">
                    <span className="text-sm font-extrabold">{bin.countKg} kg</span>
                    <span className="text-[11px] text-emerald-600 font-bold">{bin.compliancePct}%</span>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-1">Barcode: {bin.barcodeScannedPct}% scanned</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-slate-500 dark:text-slate-400 italic">
            * All containers barcoded and tracked digitally before central disposal transfer.
          </p>
        </div>

        {/* Emergency Codes & Facility Readiness */}
        <div className="glass-panel p-5 rounded-2xl shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Siren className="w-4 h-4 text-rose-500" />
              <span>Hospital Emergency Codes Readiness</span>
            </h3>
            <span className="text-xs font-mono font-bold text-emerald-600">Drill: PASS (2m 14s)</span>
          </div>

          <div className="space-y-2 text-xs">
            <div className="p-2.5 rounded-xl border border-rose-200 dark:border-rose-900/50 bg-rose-50/50 dark:bg-rose-950/20 flex items-center justify-between">
              <div>
                <span className="font-bold text-rose-600 dark:text-rose-400">Code Red (Fire Emergency):</span>
                <p className="text-[11px] text-slate-500">Fire extinguishers inspected • Last evacuation drill 15 Oct 2026</p>
              </div>
              <span className="px-2 py-0.5 rounded font-bold text-[10px] bg-rose-100 dark:bg-rose-900 text-rose-800 dark:text-rose-200">READY</span>
            </div>

            <div className="p-2.5 rounded-xl border border-sky-200 dark:border-sky-900/50 bg-sky-50/50 dark:bg-sky-950/20 flex items-center justify-between">
              <div>
                <span className="font-bold text-sky-600 dark:text-sky-400">Code Blue (Medical Resuscitation):</span>
                <p className="text-[11px] text-slate-500">Crash carts checked daily • Defibrillator battery 100% charged</p>
              </div>
              <span className="px-2 py-0.5 rounded font-bold text-[10px] bg-sky-100 dark:bg-sky-900 text-sky-800 dark:text-sky-200">READY</span>
            </div>

            <div className="p-2.5 rounded-xl border border-amber-200 dark:border-amber-900/50 bg-amber-50/50 dark:bg-amber-950/20 flex items-center justify-between">
              <div>
                <span className="font-bold text-amber-600 dark:text-amber-400">Code Pink (Infant / Child Security):</span>
                <p className="text-[11px] text-slate-500">Paediatric OPD exit gates CCTV surveillance active 24/7</p>
              </div>
              <span className="px-2 py-0.5 rounded font-bold text-[10px] bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200">READY</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-100 dark:border-slate-800">
            <span>Equipment Preventive Maintenance (PM):</span>
            <strong className="text-emerald-600 font-mono">94% OPD tools certified</strong>
          </div>
        </div>

      </div>

    </div>
  );
};

