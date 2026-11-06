import React from 'react';
import { useDashboard } from '../../context/DashboardContext';
import { digitalFeatures } from '../../data/mockData';
import { 
  Cpu, QrCode, Smartphone, Tv, Sparkles, 
  CheckCircle2, CreditCard, Share2, Server, 
  AlertTriangle, ArrowRight, ShieldCheck, Zap
} from 'lucide-react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';

export const Module7Digital = () => {
  const { notify, callNextQueueToken, digitalQueue } = useDashboard();

  const paymentColors = ['#0d9488', '#0284c7', '#8b5cf6', '#f59e0b'];

  return (
    <div className="space-y-6">
      
      {/* Top Banner: Digital Health & AI Engine */}
      <div className="bg-white dark:bg-slate-800/90 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 border-l-4 border-l-teal-500">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/70 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                <Cpu className="w-6 h-6 stroke-[2.2]" />
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    Digital Healthcare & Hi-Tech OPD Command (ABDM & AI)
                  </h2>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300">
                    ABDM M1, M2, M3 CERTIFIED
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  JIKA Hospital • Ayushman Bharat Digital Mission (ABDM), AI Surge Forecasting, Live Token Queue & Cashless Payments.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 flex-shrink-0">
            <div className="p-3 bg-white/80 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
              <span className="text-[10px] uppercase font-bold text-slate-400">ABHA Linked</span>
              <p className="text-2xl font-extrabold text-teal-600 dark:text-teal-400 font-mono">{digitalFeatures.abdm.abhaLinkedTodayPct}%</p>
              <span className="text-[10px] text-slate-400">218 Created Today</span>
            </div>
            <div className="p-3 bg-white/80 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
              <span className="text-[10px] uppercase font-bold text-slate-400">Digital Rx Adoption</span>
              <p className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">{digitalFeatures.abdm.digitalRxAdoptionPct}%</p>
              <span className="text-[10px] text-emerald-600 font-semibold">Paperless OPD</span>
            </div>
            <div className="p-3 bg-white/80 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
              <span className="text-[10px] uppercase font-bold text-slate-400">Teleconsultations</span>
              <p className="text-2xl font-extrabold text-sky-600 font-mono">{digitalFeatures.abdm.teleconsultsConducted}</p>
              <span className="text-[10px] text-slate-400">{digitalFeatures.abdm.teleconsultSuccessRatePct}% Success Rate</span>
            </div>
            <div className="p-3 bg-white/80 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
              <span className="text-[10px] uppercase font-bold text-slate-400">UPI / Digital Pay</span>
              <p className="text-2xl font-extrabold text-teal-600 dark:text-teal-400 font-mono">94.6%</p>
              <span className="text-[10px] text-slate-400">Only 5.4% Cash</span>
            </div>
          </div>
        </div>
      </div>

      {/* Row 1: AI-Powered Predictive Intelligence (Surge, Re-allocation, Risk flags) */}
      <div className="glass-panel p-5 rounded-2xl shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-teal-500/10 text-teal-600 flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </span>
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                AI-Powered OPD Operational Insights & Early Warnings
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Machine learning models trained on 2+ years of hospital footfall, waiting curves, and clinical acuity triage.
              </p>
            </div>
          </div>
          <span className="text-xs font-mono text-teal-600 dark:text-teal-400 font-semibold">
            Real-Time Inference Active
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {digitalFeatures.aiInsights.map((insight, idx) => {
            const isCrit = insight.severity === 'critical';
            const isWarn = insight.severity === 'warning';
            return (
              <div 
                key={idx}
                className={`p-4 rounded-xl border transition-all ${
                  isCrit ? 'bg-rose-50/60 dark:bg-rose-950/30 border-rose-300 dark:border-rose-800' :
                  isWarn ? 'bg-amber-50/60 dark:bg-amber-950/30 border-amber-300 dark:border-amber-800' :
                  'bg-teal-50/40 dark:bg-teal-950/20 border-teal-200 dark:border-teal-800'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                    isCrit ? 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300' :
                    isWarn ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300' :
                    'bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300'
                  }`}>
                    {insight.type.replace('_', ' ')}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">{insight.confidence}</span>
                </div>
                <h4 className="font-bold text-xs text-slate-900 dark:text-white mt-2">
                  {insight.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                  {insight.desc}
                </p>
                <div className="mt-3 pt-2 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-[11px]">
                  <span className="font-semibold text-teal-700 dark:text-teal-300">Impact: {insight.impact}</span>
                  <button 
                    onClick={() => notify(`AI recommendation '${insight.title}' applied to operations queue.`)}
                    className="text-xs font-bold text-teal-600 hover:text-teal-700 flex items-center gap-0.5"
                  >
                    <span>Execute</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Row 2: Live Digital Queue Display & Digital Payment Adoption */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Live Token Queue Display (Simulation of Lobby TV) */}
        <div className="glass-panel p-5 rounded-2xl shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Tv className="w-4 h-4 text-teal-600" />
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                Live Digital Queue Token Screen
              </h3>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
              1,390 WhatsApp Tokens Sent
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
            {digitalQueue.map((item) => (
              <div key={item.token} className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-800/60 text-center flex flex-col justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 block truncate">{item.room}</span>
                  <p className="text-xl font-extrabold text-teal-600 dark:text-teal-400 font-mono my-0.5">{item.token}</p>
                  <p className="text-[11px] font-semibold text-slate-800 dark:text-slate-200 truncate">{item.doctor}</p>
                </div>
                <div className="mt-2 space-y-1">
                  <span className="inline-block px-1.5 py-0.2 rounded text-[9px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                    {item.waitEstimate}
                  </span>
                  <button
                    onClick={() => callNextQueueToken(item)}
                    className="w-full py-1 rounded bg-teal-50 dark:bg-teal-950/60 hover:bg-teal-100 dark:hover:bg-teal-900 border border-teal-200 dark:border-teal-800 text-[10px] font-bold text-teal-700 dark:text-teal-300 transition-all flex items-center justify-center gap-1"
                    title="Play voice announcement over Hospital PA & Lobby Displays"
                  >
                    <span>📢 Call Voice PA</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-slate-500 italic">
            * Integrated with SMS, WhatsApp & Touchscreen Check-in Kiosks (Uptime: 99.8%).
          </p>
        </div>

        {/* Digital Payment Breakdown */}
        <div className="glass-panel p-5 rounded-2xl shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-sky-600" />
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                Digital Payment Adoption Mix
              </h3>
            </div>
            <span className="text-xs font-mono font-bold text-teal-600">Total: ₹18.42 Lakhs</span>
          </div>

          <div className="space-y-3">
            {digitalFeatures.digitalPaymentMix.map((p) => (
              <div key={p.mode}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-700 dark:text-slate-300 font-medium">{p.mode}</span>
                  <div className="flex items-center gap-2 font-mono">
                    <span className="text-slate-400 text-[11px]">{p.count} txns</span>
                    <span className="font-bold text-slate-900 dark:text-white">{p.pct}%</span>
                  </div>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full bg-teal-500"
                    style={{ width: `${p.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* HIS Integration Health Matrix */}
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
            <span>Core HIS Integrations (LIS/PACS/ERP):</span>
            <strong className="text-emerald-600 font-mono">6 of 6 Systems Operational (100% Uptime)</strong>
          </div>
        </div>

      </div>

    </div>
  );
};

