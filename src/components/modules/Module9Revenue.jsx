import React from 'react';
import { useDashboard } from '../../context/DashboardContext';
import { revenueData } from '../../data/mockData';
import { 
  IndianRupee, TrendingUp, Clock, CreditCard, 
  ShieldCheck, AlertCircle, CheckCircle2, DollarSign, PieChart as PieChartIcon
} from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

export const Module9Revenue = () => {
  const { notify } = useDashboard();

  return (
    <div className="space-y-6">
      
      {/* Top Banner: Financial Operations & Cashless Flow */}
      <div className="bg-white dark:bg-slate-800/90 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 border-l-4 border-l-emerald-500">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <IndianRupee className="w-6 h-6 stroke-[2.2]" />
              </span>
              <div>
                <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  OPD Revenue & Financial Operations
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  JIKA Hospital • Revenue realization across consultations, lab diagnostics, imaging, day procedures & pharmacy.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 flex-shrink-0">
            <div className="p-3 bg-white/80 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
              <span className="text-[10px] uppercase font-bold text-slate-400">Today's Revenue</span>
              <p className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">₹18.42L</p>
              <span className="text-[10px] text-emerald-600 font-semibold">{revenueData.achievementPct}% of Target</span>
            </div>
            <div className="p-3 bg-white/80 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
              <span className="text-[10px] uppercase font-bold text-slate-400">Billing Counter TAT</span>
              <p className="text-2xl font-extrabold text-teal-600 dark:text-teal-400 font-mono">{revenueData.billingTurnaroundTime.avgTimeMin}m</p>
              <span className="text-[10px] text-slate-400">Target &lt; 8.0 mins</span>
            </div>
            <div className="p-3 bg-white/80 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
              <span className="text-[10px] uppercase font-bold text-slate-400">Revenue / Visit</span>
              <p className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono">₹{revenueData.revenuePerVisit}</p>
              <span className="text-[10px] text-slate-400">Cost: ₹{revenueData.costPerVisit}</span>
            </div>
            <div className="p-3 bg-white/80 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
              <span className="text-[10px] uppercase font-bold text-slate-400">Operating Margin</span>
              <p className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">{revenueData.netMarginPct}%</p>
              <span className="text-[10px] text-emerald-600 font-semibold">Healthy Operating Band</span>
            </div>
          </div>
        </div>
      </div>

      {/* Row 1: Service Stream Revenue Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Revenue by Stream Table */}
        <div className="bg-white dark:bg-slate-800/90 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white">
            Revenue Breakdown by Healthcare Service Stream
          </h3>

          <div className="space-y-3">
            {revenueData.streamBreakdown.map((s) => (
              <div key={s.stream}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-700 dark:text-slate-300 font-semibold">{s.stream}</span>
                  <div className="flex items-center gap-2 font-mono">
                    <span className="font-bold text-slate-900 dark:text-white">₹{(s.amount / 1000).toFixed(0)}k</span>
                    <span className="text-[11px] text-slate-400">({s.pct}%)</span>
                  </div>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full bg-teal-500"
                    style={{ width: `${s.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-slate-500 pt-2 border-t border-slate-100 dark:border-slate-800 italic">
            * Consultations and Diagnostic wings constitute 86.4% of total OPD receipts.
          </p>
        </div>

        {/* TPA & Insurance Pre-Authorization Performance */}
        <div className="bg-white dark:bg-slate-800/90 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              Cashless Insurance & TPA Pre-Authorization Status
            </h3>
            <span className="text-xs font-mono font-bold text-teal-600">96 Claims Processed</span>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/40">
              <span className="text-slate-400 text-[10px]">Avg Pre-Auth TAT</span>
              <p className="text-xl font-extrabold text-slate-900 dark:text-white font-mono mt-0.5">{revenueData.billingTurnaroundTime.insuranceApprovalAvgTatMin}m</p>
              <span className="text-[10px] text-emerald-600 font-semibold">Under 30m SLA</span>
            </div>
            <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/40">
              <span className="text-slate-400 text-[10px]">Claims Rejected</span>
              <p className="text-xl font-extrabold text-amber-500 font-mono mt-0.5">{revenueData.billingTurnaroundTime.rejectedPreAuthsToday}</p>
              <span className="text-[10px] text-slate-400">Policy Exclusion</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 text-xs space-y-1">
            <p className="flex justify-between">
              <span>Digital Billing Slips Sent via WhatsApp:</span>
              <strong className="text-emerald-600 font-mono">{revenueData.billingTurnaroundTime.digitalSlipSentPct}%</strong>
            </p>
            <p className="flex justify-between">
              <span>Refunds / Waivers Processed Today:</span>
              <strong className="text-slate-800 dark:text-slate-200 font-mono">{revenueData.billingTurnaroundTime.refundsProcessedToday} (Doctor Delay Waiver)</strong>
            </p>
          </div>

          <button
            onClick={() => notify('Financial & TPA Audit Report generated.')}
            className="w-full py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-bold text-xs transition-all shadow-sm"
          >
            Download Revenue & Billing Audit Report
          </button>
        </div>

      </div>

    </div>
  );
};

