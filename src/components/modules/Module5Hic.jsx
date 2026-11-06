import React from 'react';
import { useDashboard } from '../../context/DashboardContext';
import { hicData } from '../../data/mockData';
import { 
  Sparkles, ShieldCheck, Droplet, CheckCircle2, 
  Wind, Shield, Syringe, Clock, AlertTriangle, FileCheck
} from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

export const Module5Hic = () => {
  const { notify } = useDashboard();

  return (
    <div className="space-y-6">
      
      {/* Top Banner: Infection Prevention & Control Overview */}
      <div className="bg-white dark:bg-slate-800/90 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 border-l-4 border-l-teal-500">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/70 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                <Sparkles className="w-6 h-6 stroke-[2.2]" />
              </span>
              <div>
                <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  Hospital Infection Prevention & Control (HIC Chapter)
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  JIKA Hospital • WHO 5 Moments of Hand Hygiene, Environmental Surveillance, Staff Immunization & Sanitization.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 flex-shrink-0">
            <div className="p-3 bg-white/80 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
              <span className="text-[10px] uppercase font-bold text-slate-400">Hand Hygiene Audit</span>
              <p className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">{hicData.handHygieneScore}%</p>
              <span className="text-[10px] text-emerald-600 font-semibold">Target &gt; 85%</span>
            </div>
            <div className="p-3 bg-white/80 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
              <span className="text-[10px] uppercase font-bold text-slate-400">PPE Compliance</span>
              <p className="text-2xl font-extrabold text-teal-600 dark:text-teal-400 font-mono">{hicData.ppeComplianceScore}%</p>
              <span className="text-[10px] text-slate-400">Minor OT & Daycare</span>
            </div>
            <div className="p-3 bg-white/80 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
              <span className="text-[10px] uppercase font-bold text-slate-400">Cleaning Log Done</span>
              <p className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono">{hicData.cleaningChecklistCompletedPct}%</p>
              <span className="text-[10px] text-emerald-600 font-semibold">Supervisor Verified</span>
            </div>
            <div className="p-3 bg-white/80 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
              <span className="text-[10px] uppercase font-bold text-slate-400">Staff Immunization</span>
              <p className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">{hicData.staffImmunizationHepBPct}%</p>
              <span className="text-[10px] text-slate-400">Hep-B & Influenza</span>
            </div>
          </div>
        </div>
      </div>

      {/* Row 1: WHO 5 Moments of Hand Hygiene & Clinic Cleaning Checklist */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Hand Hygiene Moments Breakdown */}
        <div className="glass-panel p-5 rounded-2xl shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Droplet className="w-4 h-4 text-teal-600" />
              <span>WHO 5 Moments of Hand Hygiene Compliance</span>
            </h3>
            <span className="text-xs font-mono font-bold text-teal-600">Observation Sample: 120</span>
          </div>

          <div className="space-y-3">
            {hicData.momentsCompliance.map((m) => (
              <div key={m.moment}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-700 dark:text-slate-300 font-medium">{m.moment}</span>
                  <span className={`font-mono font-bold ${m.score >= 85 ? 'text-emerald-600' : 'text-amber-500'}`}>
                    {m.score}%
                  </span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${m.score >= 85 ? 'bg-emerald-500' : 'bg-amber-500'}`}
                    style={{ width: `${m.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-slate-500 italic">
            * Moment 5 (Surroundings) identified for refresher training in the next nursing huddle.
          </p>
        </div>

        {/* Environmental & Water Surveillance */}
        <div className="glass-panel p-5 rounded-2xl shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Wind className="w-4 h-4 text-sky-600" />
              <span>Environmental & Microbiological Surveillance</span>
            </h3>
            <span className="text-xs font-mono font-bold text-emerald-600">Surveillance: Clear</span>
          </div>

          <div className="space-y-3 text-xs">
            <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/40">
              <div className="flex items-center justify-between font-bold text-slate-900 dark:text-white">
                <span>Drinking Water Bacteriology Test</span>
                <span className="text-emerald-600 font-mono">NEGATIVE (0 Coliforms)</span>
              </div>
              <p className="text-[11px] text-slate-500 mt-1">
                {hicData.waterSurveillanceStatus}
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/40">
              <div className="flex items-center justify-between font-bold text-slate-900 dark:text-white">
                <span>Air Bio-load Settle Plate Testing</span>
                <span className="text-emerald-600 font-mono">PASS (&lt;10 CFU/m³)</span>
              </div>
              <p className="text-[11px] text-slate-500 mt-1">
                {hicData.airBioSurveillance}
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/40">
              <div className="flex items-center justify-between font-bold text-slate-900 dark:text-white">
                <span>Sharps Disposal & Puncture-Proof Bins</span>
                <span className="text-emerald-600 font-mono">{hicData.sharpsBinsReplacedOnTimePct}% on-time</span>
              </div>
              <p className="text-[11px] text-slate-500 mt-1">
                Strict adherence to 3/4th fill line replacement before transfer.
              </p>
            </div>
          </div>

          <button
            onClick={() => notify('HIC Microbiology Surveillance Certificate downloaded.')}
            className="w-full py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-bold text-xs transition-all shadow-sm flex items-center justify-center gap-1.5"
          >
            <FileCheck className="w-3.5 h-3.5" />
            <span>Download Surveillance Certificate</span>
          </button>
        </div>

      </div>

      {/* Row 2: Clinic Cleaning & Disinfection Roster */}
      <div className="bg-white dark:bg-slate-800/90 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3">
          Daily OPD Cleaning & Disinfection Verification Roster
        </h3>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 dark:bg-slate-800/60 font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700">
              <tr>
                <th className="py-2.5 px-3">Clinic / Zone</th>
                <th className="py-2.5 px-3">Morning Shift (07:30 AM)</th>
                <th className="py-2.5 px-3">Mid-Day Shift (01:30 PM)</th>
                <th className="py-2.5 px-3">Evening Shift (07:30 PM)</th>
                <th className="py-2.5 px-3 text-right">Infection Control Signoff</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {hicData.clinicCleaningStatus.map((c, i) => (
                <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                  <td className="py-3 px-3 font-semibold text-slate-900 dark:text-white">
                    {c.clinic}
                  </td>
                  <td className="py-3 px-3">
                    <span className="inline-flex items-center gap-1 text-emerald-600 font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Cleaned
                    </span>
                  </td>
                  <td className="py-3 px-3">
                    <span className="inline-flex items-center gap-1 text-emerald-600 font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Cleaned
                    </span>
                  </td>
                  <td className="py-3 px-3">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      c.eveningCleaned === 'Completed' ? 'bg-emerald-100 text-emerald-800' :
                      c.eveningCleaned === 'In Progress' ? 'bg-sky-100 text-sky-800' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {c.eveningCleaned}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-right font-mono text-emerald-600 font-bold">
                    Supervisor Verified
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

