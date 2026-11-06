import React from 'react';
import { useDashboard } from '../context/DashboardContext';
import { X, ExternalLink, ShieldCheck, CheckCircle2, Clock, AlertTriangle, User, FileText } from 'lucide-react';

export const DrilldownDrawer = () => {
  const { drilldownData, setDrilldownData, notify } = useDashboard();

  if (!drilldownData) return null;

  const { title, type, data } = drilldownData;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex justify-end animate-fade-in">
      <div className="bg-white dark:bg-slate-900 w-full max-w-xl h-full shadow-2xl border-l border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden">
        
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-850">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300">
                {type || 'Granular Drill-Down'}
              </span>
              <span className="text-[11px] font-mono text-slate-400">JIKA Hospital Audit Trail</span>
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mt-1">
              {title}
            </h3>
          </div>

          <button
            onClick={() => setDrilldownData(null)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5 text-xs text-slate-700 dark:text-slate-300">
          
          {/* Key metrics cards */}
          {data && (
            <div className="grid grid-cols-2 gap-3">
              {Object.entries(data).slice(0, 6).map(([key, value]) => {
                if (typeof value === 'object' || Array.isArray(value)) return null;
                return (
                  <div key={key} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                    <p className="text-[11px] text-slate-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white font-mono mt-0.5">
                      {String(value)}
                    </p>
                  </div>
                );
              })}
            </div>
          )}

          {/* Detailed Audit & NABH Evidence Checklist */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider text-teal-600 dark:text-teal-400 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              <span>NABH Objective Elements & Verification Points</span>
            </h4>

            <div className="space-y-2">
              <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-700 flex items-start gap-2.5 bg-slate-50/50 dark:bg-slate-800/30">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">Documented Policy & Standard Operating Procedure</p>
                  <p className="text-[11px] text-slate-500">Controlled document uploaded with version control, reviewer and approver signoff.</p>
                </div>
              </div>

              <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-700 flex items-start gap-2.5 bg-slate-50/50 dark:bg-slate-800/30">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">Staff Competency & Induction Records</p>
                  <p className="text-[11px] text-slate-500">100% of involved clinical and paramedical staff completed orientation and annual retraining.</p>
                </div>
              </div>

              <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-700 flex items-start gap-2.5 bg-slate-50/50 dark:bg-slate-800/30">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">Internal Audit Sample Verification</p>
                  <p className="text-[11px] text-slate-500">Monthly sample size of 50 patient records audited; non-conformances registered in CAPA tracker.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Action Button */}
          <div className="p-4 rounded-xl bg-teal-50 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-800 text-teal-900 dark:text-teal-200">
            <h5 className="font-bold text-xs mb-1">NABH Auditor Recommendation</h5>
            <p className="text-[11px] opacity-90 mb-3">
              To maintain full compliance score, ensure next internal cross-audit is scheduled before due date and supervisor signs off closing evidence.
            </p>
            <button
              onClick={() => {
                notify('Audit inspection note saved to QMS log.');
                setDrilldownData(null);
              }}
              className="w-full py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-bold text-xs transition-all shadow-sm"
            >
              Sign & Validate Audit Note
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
