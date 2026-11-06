import React from 'react';
import { useDashboard } from '../../context/DashboardContext';
import { patientExperienceData } from '../../data/mockData';
import { 
  Smile, Star, HeartHandshake, MessageSquare, 
  CheckCircle2, Clock, Smartphone, QrCode, AlertTriangle, ShieldCheck
} from 'lucide-react';

export const Module6Experience = () => {
  const { notify } = useDashboard();

  return (
    <div className="space-y-6">
      
      {/* Top Banner: Patient Experience & NPS Score */}
      <div className="bg-white dark:bg-slate-800/90 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 border-l-4 border-l-amber-500">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/70 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                <Smile className="w-6 h-6 stroke-[2.2]" />
              </span>
              <div>
                <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  Patient Experience, Rights & Feedback (PRE Standard)
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  JIKA Hospital • Real-time CSAT, Net Promoter Score (NPS), PREMs/PROMs & Grievance Redressal.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 flex-shrink-0">
            <div className="p-3 bg-white/80 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
              <span className="text-[10px] uppercase font-bold text-slate-400">Net Promoter Score</span>
              <p className="text-2xl font-extrabold text-teal-600 dark:text-teal-400 font-mono">+{patientExperienceData.nps}</p>
              <span className="text-[10px] text-teal-600 font-semibold">World-Class (&gt;70)</span>
            </div>
            <div className="p-3 bg-white/80 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
              <span className="text-[10px] uppercase font-bold text-slate-400">CSAT Score</span>
              <p className="text-2xl font-extrabold text-amber-500 font-mono">★ {patientExperienceData.overallCsat}</p>
              <span className="text-[10px] text-slate-400">Out of 5.0 (384 responses)</span>
            </div>
            <div className="p-3 bg-white/80 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
              <span className="text-[10px] uppercase font-bold text-slate-400">Feedback Capture</span>
              <p className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono">{patientExperienceData.captureRatePct}%</p>
              <span className="text-[10px] text-emerald-600 font-semibold">NABH Target &gt; 20%</span>
            </div>
            <div className="p-3 bg-white/80 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
              <span className="text-[10px] uppercase font-bold text-slate-400">Grievance TAT</span>
              <p className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">&lt; 45m</p>
              <span className="text-[10px] text-slate-400">100% Closure Today</span>
            </div>
          </div>
        </div>
      </div>

      {/* Row 1: Satisfaction by Touchpoint & Multichannel Feedback Capture */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Category-wise Satisfaction */}
        <div className="glass-panel p-5 rounded-2xl shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span>Touchpoint Satisfaction Breakdown</span>
            </h3>
            <span className="text-xs font-mono font-bold text-amber-500">Avg 4.68 / 5.0</span>
          </div>

          <div className="space-y-3">
            {patientExperienceData.categorySatisfaction.map((cat) => (
              <div key={cat.category}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-700 dark:text-slate-300 font-medium">{cat.category}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold text-slate-400">{cat.rating}</span>
                    <span className="font-mono font-bold text-slate-900 dark:text-white">★ {cat.score}</span>
                  </div>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${
                      cat.score >= 4.6 ? 'bg-emerald-500' :
                      cat.score >= 4.3 ? 'bg-teal-500' : 'bg-amber-500'
                    }`}
                    style={{ width: `${(cat.score / 5) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Multichannel Capture Channels & PREMs/PROMs */}
        <div className="glass-panel p-5 rounded-2xl shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-teal-600" />
              <span>Multichannel Digital Feedback Inflow</span>
            </h3>
            <span className="text-xs font-mono font-bold text-teal-600">384 Feedbacks Today</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {patientExperienceData.channelBreakdown.map((ch) => (
              <div key={ch.channel} className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/40">
                <span className="text-[11px] font-semibold text-slate-800 dark:text-slate-200 block truncate">
                  {ch.channel}
                </span>
                <div className="flex items-baseline justify-between mt-1">
                  <span className="text-lg font-bold font-mono text-slate-900 dark:text-white">{ch.count}</span>
                  <span className="text-xs font-mono text-teal-600">{ch.pct}</span>
                </div>
                <p className="text-[10px] text-amber-500 font-mono mt-0.5">★ {ch.avgScore} avg</p>
              </div>
            ))}
          </div>

          {/* Bilingual Rights Charter Compliance Badge */}
          <div className="p-3 rounded-xl bg-teal-50 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-800 flex items-center justify-between text-xs">
            <div>
              <span className="font-bold text-teal-900 dark:text-teal-200">Bilingual Patient Rights Charter:</span>
              <p className="text-[11px] text-teal-700 dark:text-teal-400">Displayed in Hindi + English across all 14 OPD zones</p>
            </div>
            <span className="px-2 py-0.5 rounded font-bold text-[10px] bg-teal-600 text-white">100% PASS</span>
          </div>
        </div>

      </div>

      {/* Row 2: Patient Grievance & Escalation Tracker */}
      <div className="bg-white dark:bg-slate-800/90 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              Patient Grievance Redressal & Escalation Tracker
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              NABH PRE.5 Standard: Every verbal or written patient dissatisfaction logged with root cause and supervisor resolution.
            </p>
          </div>
          <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
            Average Resolution TAT: 38 mins
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 dark:bg-slate-800/60 font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700">
              <tr>
                <th className="py-2.5 px-3">Grievance ID</th>
                <th className="py-2.5 px-3">Patient UHID</th>
                <th className="py-2.5 px-3">Department</th>
                <th className="py-2.5 px-3">Concern / Complaint</th>
                <th className="py-2.5 px-3">Priority</th>
                <th className="py-2.5 px-3">Resolution TAT</th>
                <th className="py-2.5 px-3">Assigned Owner</th>
                <th className="py-2.5 px-3 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {patientExperienceData.activeComplaints.map((c) => (
                <tr key={c.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                  <td className="py-3 px-3 font-mono font-bold text-teal-600 dark:text-teal-400">
                    {c.id}
                  </td>
                  <td className="py-3 px-3 font-mono text-slate-700 dark:text-slate-300">
                    {c.uhid}
                  </td>
                  <td className="py-3 px-3 font-semibold">
                    {c.dept}
                  </td>
                  <td className="py-3 px-3 text-slate-800 dark:text-slate-200 max-w-xs">
                    {c.issue}
                  </td>
                  <td className="py-3 px-3">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      c.priority === 'High' ? 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300' :
                      c.priority === 'Medium' ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300' :
                      'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300'
                    }`}>
                      {c.priority}
                    </span>
                  </td>
                  <td className="py-3 px-3 font-mono text-slate-500">
                    {c.tatHours}
                  </td>
                  <td className="py-3 px-3 text-slate-700 dark:text-slate-300">
                    {c.owner}
                  </td>
                  <td className="py-3 px-3 text-right">
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold ${
                      c.status === 'Resolved' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' :
                      'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                    }`}>
                      {c.status}
                    </span>
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

