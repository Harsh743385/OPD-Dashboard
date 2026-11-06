import React, { useState } from 'react';
import { useDashboard } from '../../context/DashboardContext';
import { dailyHuddleAgenda } from '../../data/mockData';
import { 
  BellRing, AlertTriangle, AlertCircle, CheckCircle2, 
  Clock, ShieldAlert, ArrowRight, UserCheck, Calendar, FileText, CheckSquare
} from 'lucide-react';

export const Module10Alerts = () => {
  const { alerts, acknowledgeAlert, resolveAlert, notify } = useDashboard();
  const [activeView, setActiveView] = useState('triage'); // 'triage' | 'huddle' | 'monthly'

  return (
    <div className="space-y-6">
      
      {/* Top Banner: Governance, Alerts & Daily Standup */}
      <div className="bg-white dark:bg-slate-800/90 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 border-l-4 border-l-rose-500">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-10 h-10 rounded-xl bg-rose-50 dark:bg-rose-950/70 text-rose-600 dark:text-rose-400 flex items-center justify-center">
                <BellRing className="w-6 h-6 stroke-[2.2]" />
              </span>
              <div>
                <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  OPD Alert Center, Escalation & Governance
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  JIKA Hospital • Real-time operational exception handling, automated escalation matrix & clinical huddle.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setActiveView('triage')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeView === 'triage' ? 'bg-rose-600 text-white shadow-sm' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
              }`}
            >
              Alerts & Triage ({alerts.filter(a => a.status !== 'Resolved').length})
            </button>
            <button
              onClick={() => setActiveView('huddle')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeView === 'huddle' ? 'bg-teal-600 text-white shadow-sm' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
              }`}
            >
              Daily Morning Huddle
            </button>
            <button
              onClick={() => setActiveView('monthly')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeView === 'monthly' ? 'bg-purple-600 text-white shadow-sm' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
              }`}
            >
              Monthly Quality Review
            </button>
          </div>
        </div>
      </div>

      {/* View 1: Real-Time Alert Center */}
      {activeView === 'triage' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {alerts.map((alert) => {
              const isCrit = alert.severity === 'critical';
              const isWarn = alert.severity === 'warning';
              const isResolved = alert.status === 'Resolved';
              return (
                <div 
                  key={alert.id}
                  className={`p-5 rounded-2xl border transition-all ${
                    isResolved ? 'opacity-60 bg-slate-50 dark:bg-slate-850 border-slate-200 dark:border-slate-800' :
                    isCrit ? 'bg-rose-50/70 dark:bg-rose-950/30 border-rose-300 dark:border-rose-800 shadow-sm' :
                    isWarn ? 'bg-amber-50/70 dark:bg-amber-950/30 border-amber-300 dark:border-amber-800' :
                    'bg-sky-50/70 dark:bg-sky-950/30 border-sky-300 dark:border-sky-800'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                        isCrit ? 'bg-rose-600 text-white' :
                        isWarn ? 'bg-amber-500 text-slate-900 font-bold' :
                        'bg-sky-500 text-white'
                      }`}>
                        {alert.severity}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">{alert.id} • {alert.time}</span>
                    </div>
                    <span className={`text-[11px] font-bold ${isResolved ? 'text-emerald-600' : 'text-slate-700 dark:text-slate-300'}`}>
                      {alert.status}
                    </span>
                  </div>

                  <h4 className="font-bold text-sm text-slate-900 dark:text-white mt-2">
                    {alert.title}
                  </h4>

                  <div className="mt-2 text-xs text-slate-600 dark:text-slate-300">
                    <p>Department: <strong className="text-slate-800 dark:text-slate-200">{alert.dept}</strong></p>
                    <p>Assigned Officer: <strong className="text-teal-600 dark:text-teal-400">{alert.assignedTo}</strong></p>
                    <p className="mt-1 text-[11px] italic bg-white/60 dark:bg-slate-800/60 p-2 rounded-lg border border-slate-200/60 dark:border-slate-700/60">
                      Standard Action Protocol: {alert.actionPrompt}
                    </p>
                  </div>

                  {!isResolved && (
                    <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-700 flex items-center justify-end gap-2">
                      {alert.status !== 'Acknowledged' && (
                        <button
                          onClick={() => acknowledgeAlert(alert.id)}
                          className="px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-600 text-xs font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                        >
                          Acknowledge
                        </button>
                      )}
                      <button
                        onClick={() => resolveAlert(alert.id)}
                        className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-sm transition-all flex items-center gap-1"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Mark Resolved</span>
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* View 2: Daily Morning OPD Huddle */}
      {activeView === 'huddle' && (
        <div className="glass-panel p-6 rounded-2xl shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Daily Morning OPD Leadership Huddle Agenda
              </h3>
              <p className="text-xs text-slate-500">{dailyHuddleAgenda.date} • 08:30 AM Briefing</p>
            </div>
            <button
              onClick={() => notify('Daily Huddle Minutes signed and sent to Hospital COO.')}
              className="px-3 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold shadow-sm"
            >
              Sign Huddle Minutes
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Yesterday Review */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-2">
              <h4 className="font-bold text-xs text-teal-600 uppercase tracking-wider">1. Yesterday's Performance</h4>
              <p className="text-xs text-slate-600 dark:text-slate-300">Footfall: <strong>{dailyHuddleAgenda.yesterdayHighlights.totalFootfall}</strong></p>
              <p className="text-xs text-slate-600 dark:text-slate-300">Average TAT: <strong>{dailyHuddleAgenda.yesterdayHighlights.tatAvg}</strong></p>
              <p className="text-xs text-slate-600 dark:text-slate-300">Satisfaction: <strong>{dailyHuddleAgenda.yesterdayHighlights.patientSat}</strong></p>
              <p className="text-xs text-emerald-600 font-bold">Zero Harm Day Achieved</p>
            </div>

            {/* Today's Goals */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-2">
              <h4 className="font-bold text-xs text-sky-600 uppercase tracking-wider">2. Today's Targets</h4>
              <p className="text-xs text-slate-600 dark:text-slate-300">Target Footfall: <strong>{dailyHuddleAgenda.todayTargets.plannedFootfall}</strong></p>
              <p className="text-xs text-slate-600 dark:text-slate-300">Max TAT Target: <strong>{dailyHuddleAgenda.todayTargets.tatTarget}</strong></p>
              <p className="text-xs text-slate-600 dark:text-slate-300">Hand Hygiene Goal: <strong>{dailyHuddleAgenda.todayTargets.handHygieneAuditTarget}</strong></p>
              <p className="text-xs text-slate-600 dark:text-slate-300">Digital Rx Target: <strong>{dailyHuddleAgenda.todayTargets.digitalRxTarget}</strong></p>
            </div>

            {/* Key Risks */}
            <div className="p-4 rounded-xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40 space-y-2">
              <h4 className="font-bold text-xs text-rose-600 uppercase tracking-wider">3. Critical Risk Warnings</h4>
              {dailyHuddleAgenda.keyRisks.map((risk, i) => (
                <p key={i} className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-1.5">
                  <span className="text-rose-500 font-bold">•</span>
                  <span>{risk}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* View 3: Monthly Quality Review View */}
      {activeView === 'monthly' && (
        <div className="glass-panel p-6 rounded-2xl shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Monthly Quality Improvement Committee (QIC) Governance Review
              </h3>
              <p className="text-xs text-slate-500">Executive presentation mode for Board of Directors & NABH Assessors</p>
            </div>
            <button
              onClick={() => notify('Presentation deck exported to PDF.')}
              className="px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-xs font-semibold shadow-sm"
            >
              Export Presentation Deck
            </button>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/60 dark:bg-slate-800/40 text-xs space-y-2">
            <p className="font-bold text-slate-900 dark:text-white">Statutory & NABH Mandates for Current Quarter:</p>
            <p className="text-slate-600 dark:text-slate-300">
              1. All 10 NABH chapters audited internally with 95.4% overall readiness score.
            </p>
            <p className="text-slate-600 dark:text-slate-300">
              2. MOM Chapter action items on Paediatric generic antibiotic indications implemented in EMR v4.8.
            </p>
            <p className="text-slate-600 dark:text-slate-300">
              3. Bio-Medical Waste Barcoding integrated with State Pollution Control Board server.
            </p>
          </div>
        </div>
      )}

    </div>
  );
};

