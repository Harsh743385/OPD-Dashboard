import React from 'react';
import { useDashboard } from '../../context/DashboardContext';
import { 
  FlaskConical, Radio, HeartPulse, Siren, Users, 
  AlertTriangle, CheckCircle2, Zap
} from 'lucide-react';

export const ModuleClinicalDiagnostics = () => {
  const { 
    labAndRadiology, 
    nurseTasks, 
    emergencySection, 
    staffActivity 
  } = useDashboard();

  return (
    <div className="space-y-6 bg-white">
      
      {/* Row 1: OT Dashboard & Lab / Radiology (Exact layout from Image 1 & 2) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* OT Dashboard Card */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="text-purple-600 font-bold">✕</span>
                <h3 className="text-sm font-bold text-slate-900">
                  OT Dashboard
                </h3>
              </div>
              <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-sky-50 text-sky-700">
                0 today
              </span>
            </div>

            {/* OT Metric Columns */}
            <div className="grid grid-cols-5 gap-2 text-center py-4">
              <div className="p-3 bg-slate-50 rounded-xl">
                <span className="text-2xl font-bold font-mono text-slate-900">0</span>
                <p className="text-[10px] text-slate-500 mt-1">Total</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl">
                <span className="text-2xl font-bold font-mono text-slate-900">0</span>
                <p className="text-[10px] text-slate-500 mt-1">Scheduled</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl">
                <span className="text-2xl font-bold font-mono text-slate-900">0</span>
                <p className="text-[10px] text-slate-500 mt-1">In Progress</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl">
                <span className="text-2xl font-bold font-mono text-slate-900">0</span>
                <p className="text-[10px] text-slate-500 mt-1">Completed</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl">
                <span className="text-2xl font-bold font-mono text-rose-600">0</span>
                <p className="text-[10px] text-slate-500 mt-1">Cancelled</p>
              </div>
            </div>
          </div>

          <div className="mt-2 p-3 bg-sky-50/70 rounded-xl flex items-center justify-between text-xs text-sky-900">
            <span className="font-medium">Upcoming (7 days)</span>
            <span className="font-bold font-mono text-base text-slate-900">0</span>
          </div>
        </div>

        {/* Lab & Radiology Card (Image 1 & 2 reference) */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
            <FlaskConical className="w-4 h-4 text-purple-600" />
            <h3 className="text-sm font-bold text-slate-900">
              Lab & Radiology
            </h3>
          </div>

          {/* LABORATORY Section */}
          <div>
            <div className="text-[11px] font-bold text-purple-600 tracking-wider uppercase mb-2 flex items-center gap-1">
              <FlaskConical className="w-3.5 h-3.5" />
              <span>Laboratory</span>
            </div>
            <div className="grid grid-cols-4 gap-2 text-center text-xs">
              <div className="p-2.5 rounded-xl border border-amber-200 bg-amber-50/50">
                <div className="flex items-center justify-center gap-1 font-bold text-amber-700 font-mono text-base">
                  <span className="w-4 h-4 rounded-full bg-amber-200 text-amber-800 text-[10px] flex items-center justify-center">🕒</span>
                  <span>{labAndRadiology.laboratory.pending}</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-0.5">Pending</p>
              </div>

              <div className="p-2.5 rounded-xl border border-rose-200 bg-rose-50/50">
                <div className="flex items-center justify-center gap-1 font-bold text-rose-700 font-mono text-base">
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                  <span>{labAndRadiology.laboratory.critical}</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-0.5">Critical</p>
              </div>

              <div className="p-2.5 rounded-xl border border-rose-200 bg-rose-50/50">
                <div className="flex items-center justify-center gap-1 font-bold text-rose-700 font-mono text-base">
                  <span className="w-4 h-4 rounded-full bg-rose-200 text-rose-800 text-[10px] flex items-center justify-center font-bold">!</span>
                  <span>{labAndRadiology.laboratory.overdue}</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-0.5">Overdue (&gt;2h)</p>
              </div>

              <div className="p-2.5 rounded-xl border border-sky-200 bg-sky-50/50">
                <div className="flex items-center justify-center gap-1 font-bold text-sky-700 font-mono text-base">
                  <span>{labAndRadiology.laboratory.avgTat}</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-0.5">Avg TAT</p>
              </div>
            </div>
          </div>

          {/* RADIOLOGY Section */}
          <div className="pt-2 border-t border-slate-100">
            <div className="text-[11px] font-bold text-purple-600 tracking-wider uppercase mb-2 flex items-center gap-1">
              <Radio className="w-3.5 h-3.5" />
              <span>Radiology</span>
            </div>
            <div className="grid grid-cols-4 gap-2 text-center text-xs">
              <div className="p-2.5 rounded-xl border border-slate-200 bg-slate-50">
                <span className="font-bold text-slate-900 font-mono text-base">0</span>
                <p className="text-[10px] text-slate-500 mt-0.5">Pending</p>
              </div>
              <div className="p-2.5 rounded-xl border border-slate-200 bg-slate-50">
                <span className="font-bold text-slate-900 font-mono text-base">0</span>
                <p className="text-[10px] text-slate-500 mt-0.5">Critical</p>
              </div>
              <div className="p-2.5 rounded-xl border border-slate-200 bg-slate-50">
                <span className="font-bold text-slate-900 font-mono text-base">0</span>
                <p className="text-[10px] text-slate-500 mt-0.5">Overdue (&gt;4h)</p>
              </div>
              <div className="p-2.5 rounded-xl border border-slate-200 bg-slate-50">
                <span className="font-bold text-slate-900 font-mono text-base">{labAndRadiology.radiology.avgTat}</span>
                <p className="text-[10px] text-slate-500 mt-0.5">Avg TAT</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Row 2: Nurse Tasks & Emergency (Exact layout from Image 1 & 2) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Nurse Tasks Card */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-3">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
            <HeartPulse className="w-4 h-4 text-rose-500" />
            <h3 className="text-sm font-bold text-slate-900">
              Nurse Tasks
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
            <div className="p-3 rounded-xl border border-sky-100 bg-sky-50/40">
              <span className="font-mono text-xl font-bold text-slate-900">{nurseTasks.assessmentsToday}</span>
              <p className="text-[11px] text-slate-500 mt-0.5">Assessments Today</p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200 bg-slate-50">
              <span className="font-mono text-xl font-bold text-emerald-600">{nurseTasks.highFallRisk}</span>
              <p className="text-[11px] text-slate-500 mt-0.5">High Fall Risk (0)</p>
            </div>

            <div className="p-3 rounded-xl border border-amber-200 bg-amber-50/60">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xl font-bold text-amber-600">{nurseTasks.highPainCount}</span>
                <Zap className="w-4 h-4 text-amber-500" />
              </div>
              <p className="text-[11px] text-amber-800 font-semibold mt-0.5">High Pain (≥7)</p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200 bg-slate-50">
              <span className="font-mono text-xl font-bold text-slate-900">{nurseTasks.pressureUlcerRisk}</span>
              <p className="text-[11px] text-slate-500 mt-0.5">Pressure Ulcer Risk</p>
            </div>

            <div className="p-3 rounded-xl border border-emerald-100 bg-emerald-50/40">
              <span className="font-mono text-xl font-bold text-emerald-600">{nurseTasks.notesToday}</span>
              <p className="text-[11px] text-slate-500 mt-0.5">Notes Today</p>
            </div>
          </div>
        </div>

        {/* Emergency Card */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-3">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
            <Siren className="w-4 h-4 text-rose-500" />
            <h3 className="text-sm font-bold text-slate-900">
              Emergency
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-xl border border-rose-100 bg-rose-50/40">
              <span className="font-mono text-2xl font-bold text-rose-600">{emergencySection.todayEmergency}</span>
              <p className="text-xs text-slate-500 mt-0.5">Today Emergency</p>
            </div>

            <div className="p-3 rounded-xl border border-amber-100 bg-amber-50/40">
              <span className="font-mono text-2xl font-bold text-amber-600">{emergencySection.activeEmergency}</span>
              <p className="text-xs text-slate-500 mt-0.5">Active Emergency Beds</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 text-center text-xs text-slate-500">
            <p className="font-medium text-slate-700">All Emergency triage stabilized & under consultant monitoring.</p>
            <p className="text-[11px] text-slate-400 mt-0.5">{emergencySection.statusNote}</p>
          </div>
        </div>

      </div>

      {/* Row 3: Staff Activity & By Role Breakdown (Exact layout from Image 1 & 2) */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-purple-600" />
            <h3 className="text-sm font-bold text-slate-900">
              Staff Activity
            </h3>
          </div>
          <span className="text-xs font-mono text-slate-500">
            Real-time biometric & EMR activity log
          </span>
        </div>

        {/* Top 3 Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center flex-shrink-0">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xl font-bold font-mono text-slate-900">{staffActivity.totalStaff}</p>
              <span className="text-[11px] text-slate-500">Total Staff</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xl font-bold font-mono text-emerald-600">{staffActivity.active24h}</p>
              <span className="text-[11px] text-slate-500">Active (24h)</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xl font-bold font-mono text-amber-600">{staffActivity.neverLoggedIn}</p>
              <span className="text-[11px] text-slate-500">Never Logged In</span>
            </div>
          </div>
        </div>

        {/* BY ROLE List (Image 1 & 2 reference) */}
        <div>
          <span className="text-[10px] font-bold text-slate-500 tracking-wider uppercase mb-2 block">
            BY ROLE
          </span>
          <div className="divide-y divide-slate-100 border border-slate-200 rounded-xl overflow-hidden text-xs">
            {staffActivity.byRole.map((item) => (
              <div key={item.role} className="p-3 flex items-center justify-between hover:bg-slate-50 transition-colors">
                <span className="font-semibold text-slate-800">{item.role}</span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-slate-100 text-slate-700 border border-slate-200">
                  {item.count}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
