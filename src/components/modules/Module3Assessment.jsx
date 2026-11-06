import React from 'react';
import { useDashboard } from '../../context/DashboardContext';
import { clinicalDocAudit } from '../../data/mockData';
import { 
  ClipboardCheck, AlertCircle, CheckCircle2, ShieldAlert, 
  FileCheck2, Heart, Activity, AlertTriangle, Pill, UserCheck
} from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

export const Module3Assessment = () => {
  const { setDrilldownData, notify } = useDashboard();

  return (
    <div className="space-y-6">
      
      {/* Top Banner: Clinical Documentation Quality Score */}
      <div className="bg-white dark:bg-slate-800/90 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 border-l-4 border-l-teal-500">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/70 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                <ClipboardCheck className="w-6 h-6 stroke-[2.2]" />
              </span>
              <div>
                <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  Patient Clinical Assessment & Medical Records Audit
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  JIKA Hospital • NABH AAC & COP Standards: Initial triage, digital vitals, allergy screening & e-prescriptions.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 flex-shrink-0">
            <div className="p-3 bg-white/80 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
              <span className="text-[10px] uppercase font-bold text-slate-400">Documentation Score</span>
              <p className="text-2xl font-extrabold text-teal-600 dark:text-teal-400 font-mono">{clinicalDocAudit.overallAuditScore}%</p>
              <span className="text-[10px] text-emerald-600 font-semibold">NABH Benchmark Passed</span>
            </div>
            <div className="p-3 bg-white/80 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
              <span className="text-[10px] uppercase font-bold text-slate-400">2-Identifier Verification</span>
              <p className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">{clinicalDocAudit.twoIdentifierCheckRate}%</p>
              <span className="text-[10px] text-slate-400">UHID + Full Name</span>
            </div>
            <div className="p-3 bg-white/80 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
              <span className="text-[10px] uppercase font-bold text-slate-400">Allergy Screened</span>
              <p className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono">{clinicalDocAudit.allergyStatusDocumented}%</p>
              <span className="text-[10px] text-rose-500 font-semibold">{clinicalDocAudit.allergyPositiveAlertsToday} Alerts Active</span>
            </div>
            <div className="p-3 bg-white/80 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
              <span className="text-[10px] uppercase font-bold text-slate-400">Pending Signoffs</span>
              <p className="text-2xl font-extrabold text-amber-500 font-mono">{clinicalDocAudit.incompleteRecordsPendingDoctorSign}</p>
              <span className="text-[10px] text-slate-400">Auto-notified Doctors</span>
            </div>
          </div>
        </div>
      </div>

      {/* Row 1: Prescription Audit & Clinical Safety Checks */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Prescription Quality Audit Card */}
        <div className="glass-panel p-5 rounded-2xl shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Pill className="w-4 h-4 text-teal-600" />
              <span>Prescription Audit (MOM Standard)</span>
            </h3>
            <span className="text-xs font-mono font-bold text-teal-600">Sample N=250</span>
          </div>

          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-600 dark:text-slate-300">Generic Drug Name Written</span>
                <span className="font-bold font-mono text-emerald-600">{clinicalDocAudit.genericPrescriptionRate}%</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full rounded-full" style={{ width: `${clinicalDocAudit.genericPrescriptionRate}%` }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-600 dark:text-slate-300">Rational Antibiotic Indication</span>
                <span className="font-bold font-mono text-amber-500">{clinicalDocAudit.antibioticRationalRate}%</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-amber-500 h-full rounded-full" style={{ width: `${clinicalDocAudit.antibioticRationalRate}%` }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-600 dark:text-slate-300">Digital Dose, Route & Frequency Clarity</span>
                <span className="font-bold font-mono text-emerald-600">99.4%</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full rounded-full" style={{ width: '99.4%' }} />
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 space-y-1">
            <p className="flex justify-between">
              <span>Drug-Drug Interaction Intercepts:</span>
              <strong className="text-slate-800 dark:text-slate-200 font-mono">{clinicalDocAudit.drugInteractionsFlaggedToday} flagged (2 overridden)</strong>
            </p>
            <p className="flex justify-between">
              <span>Controlled Substance Documentation:</span>
              <strong className="text-emerald-600 font-mono">100% compliant</strong>
            </p>
          </div>
        </div>

        {/* Digital Nursing Assessment & Vitals Card */}
        <div className="glass-panel p-5 rounded-2xl shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Activity className="w-4 h-4 text-sky-600" />
              <span>Digital Nursing Vitals Capture</span>
            </h3>
            <span className="text-xs font-mono font-bold text-sky-600">{clinicalDocAudit.vitalsCapturedRate}% Captured</span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700">
              <span className="text-slate-400 text-[10px]">Blood Pressure (BP)</span>
              <p className="font-bold text-slate-900 dark:text-white font-mono mt-0.5">99.2%</p>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700">
              <span className="text-slate-400 text-[10px]">Pulse / Heart Rate</span>
              <p className="font-bold text-slate-900 dark:text-white font-mono mt-0.5">99.0%</p>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700">
              <span className="text-slate-400 text-[10px]">SpO2 & Temperature</span>
              <p className="font-bold text-slate-900 dark:text-white font-mono mt-0.5">98.4%</p>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700">
              <span className="text-slate-400 text-[10px]">Height, Weight & BMI</span>
              <p className="font-bold text-slate-900 dark:text-white font-mono mt-0.5">94.8%</p>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 text-[11px] text-sky-900 dark:text-sky-200">
            <span className="font-bold block mb-0.5">Fast-Track Vitals Flag:</span>
            <span>Any Systolic BP &gt; 180 or SpO2 &lt; 92% immediately rings the Lead Nurse pager and reroutes to the triage emergency bay.</span>
          </div>
        </div>

        {/* Patient Identification & Integrity Guard */}
        <div className="glass-panel p-5 rounded-2xl shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-emerald-600" />
              <span>UHID & Identity Integrity</span>
            </h3>
            <span className="text-xs font-mono font-bold text-emerald-600">Zero ID Errors</span>
          </div>

          <div className="space-y-2.5 text-xs">
            <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-slate-800/40">
              <span className="text-slate-600 dark:text-slate-300">UHID System Generation Rate</span>
              <span className="font-mono font-bold text-slate-900 dark:text-white">{clinicalDocAudit.uhidGenerationRate}%</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-slate-800/40">
              <span className="text-slate-600 dark:text-slate-300">Two Identifiers (Name + UHID/DOB)</span>
              <span className="font-mono font-bold text-emerald-600">{clinicalDocAudit.twoIdentifierCheckRate}%</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-slate-800/40">
              <span className="text-slate-600 dark:text-slate-300">Duplicate Record Attempts Blocked</span>
              <span className="font-mono font-bold text-slate-900 dark:text-white">{clinicalDocAudit.duplicateRecordAttemptsBlocked} cases</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-slate-800/40">
              <span className="text-slate-600 dark:text-slate-300">Informed Consent for OPD Procedures</span>
              <span className="font-mono font-bold text-emerald-600">{clinicalDocAudit.informedConsentCaptured}%</span>
            </div>
          </div>

          <button
            onClick={() => notify('Medical Records Audit Report downloaded.')}
            className="w-full py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold rounded-lg transition-all"
          >
            Download Medical Records Audit Log
          </button>
        </div>

      </div>

      {/* Row 2: Department-wise Documentation Completeness Scores */}
      <div className="bg-white dark:bg-slate-800/90 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              Department-wise Clinical Documentation Completeness
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Audited against NABH 8 core components: Chief complaint, history, allergy, vitals, exam, provisional diagnosis, plan, and follow-up.
            </p>
          </div>
        </div>

        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={clinicalDocAudit.deptAuditScores} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#94a3b8" opacity={0.15} />
              <XAxis dataKey="dept" tick={{ fontSize: 11 }} stroke="#94a3b8" />
              <YAxis domain={[85, 100]} tick={{ fontSize: 11 }} stroke="#94a3b8" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#0f172a', 
                  borderColor: '#334155', 
                  borderRadius: '8px', 
                  fontSize: '12px',
                  color: '#fff' 
                }} 
              />
              <Bar dataKey="score" fill="#0d9488" radius={[4, 4, 0, 0]} name="Completeness %" />
              <Bar dataKey="genericPct" fill="#0284c7" radius={[4, 4, 0, 0]} name="Generic Rx %" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
};

