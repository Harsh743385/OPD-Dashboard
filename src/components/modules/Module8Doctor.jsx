import React, { useState } from 'react';
import { useDashboard } from '../../context/DashboardContext';
import { doctorScorecards, departmentPerformance } from '../../data/mockData';
import { 
  Stethoscope, Award, Star, Clock, 
  FileCheck2, CheckCircle2, ChevronRight, UserCheck, CalendarOff
} from 'lucide-react';

export const Module8Doctor = () => {
  const { setDrilldownData, selectedDept } = useDashboard();
  const [filterStatus, setFilterStatus] = useState('ALL');

  const filteredDoctors = doctorScorecards.filter(doc => {
    if (filterStatus !== 'ALL' && doc.status !== filterStatus) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      
      {/* Top Banner: Clinical Performance & Productivity */}
      <div className="bg-white dark:bg-slate-800/90 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 border-l-4 border-l-purple-500">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/70 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                <Stethoscope className="w-6 h-6 stroke-[2.2]" />
              </span>
              <div>
                <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  Department & Doctor Clinical Performance Scorecard
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  JIKA Hospital • NABH Medical Staff Metrics: Volume, consultation duration, prescription quality & retention.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 flex-shrink-0">
            <div className="p-3 bg-white/80 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
              <span className="text-[10px] uppercase font-bold text-slate-400">Doctors on Duty</span>
              <p className="text-2xl font-extrabold text-purple-600 dark:text-purple-400 font-mono">42</p>
              <span className="text-[10px] text-slate-400">64 Suites Active</span>
            </div>
            <div className="p-3 bg-white/80 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
              <span className="text-[10px] uppercase font-bold text-slate-400">Avg Consult Time</span>
              <p className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono">14.2m</p>
              <span className="text-[10px] text-emerald-600 font-semibold">Optimal Band (12-18m)</span>
            </div>
            <div className="p-3 bg-white/80 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
              <span className="text-[10px] uppercase font-bold text-slate-400">Rx Completeness</span>
              <p className="text-2xl font-extrabold text-teal-600 dark:text-teal-400 font-mono">98.4%</p>
              <span className="text-[10px] text-emerald-600 font-semibold">NABH Compliant</span>
            </div>
            <div className="p-3 bg-white/80 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
              <span className="text-[10px] uppercase font-bold text-slate-400">Consultant Rating</span>
              <p className="text-2xl font-extrabold text-amber-500 font-mono">★ 4.85</p>
              <span className="text-[10px] text-slate-400">Patient Feedback</span>
            </div>
          </div>
        </div>
      </div>

      {/* Doctor Performance Scorecards Grid */}
      <div className="bg-white dark:bg-slate-800/90 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              Doctor-wise Consultation & Clinical Quality Matrix
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Real-time synchronization with EMR notes, electronic prescriptions & consultation room occupancy.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-400 text-[11px]">Status:</span>
            {['ALL', 'Consulting', 'In Procedure', 'On Break'].map(status => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all ${
                  filterStatus === status
                    ? 'bg-purple-600 text-white'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredDoctors.map((doc) => (
            <div 
              key={doc.id}
              onClick={() => setDrilldownData({
                title: `${doc.name} - Clinical Audit`,
                titleHindi: `${doc.name} - विस्तृत नैदानिक ऑडिट`,
                type: 'Doctor Quality Scorecard',
                data: doc
              })}
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-800/40 hover:border-purple-500 transition-all cursor-pointer shadow-sm hover:shadow-md group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 className="font-bold text-xs text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {doc.name}
                    </h4>
                    <span className="text-[11px] text-teal-600 dark:text-teal-400 font-medium">
                      {doc.dept}
                    </span>
                  </div>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    doc.status === 'Consulting' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' :
                    doc.status === 'In Procedure' ? 'bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300' :
                    'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                  }`}>
                    {doc.status}
                  </span>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800/80 grid grid-cols-2 gap-2 text-[11px]">
                  <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/60">
                    <span className="text-slate-400 text-[10px]">Patients Today</span>
                    <p className="font-bold font-mono text-slate-900 dark:text-white mt-0.5">{doc.patientsToday}</p>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/60">
                    <span className="text-slate-400 text-[10px]">Avg Time/Patient</span>
                    <p className="font-bold font-mono text-slate-900 dark:text-white mt-0.5">{doc.avgTimeMin}m</p>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/60">
                    <span className="text-slate-400 text-[10px]">Rx Quality</span>
                    <p className="font-bold font-mono text-emerald-600 mt-0.5">{doc.rxCompleteness}%</p>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/60">
                    <span className="text-slate-400 text-[10px]">Rating</span>
                    <p className="font-bold font-mono text-amber-500 mt-0.5">★ {doc.satScore}</p>
                  </div>
                </div>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[10px] text-slate-400">
                <span className="font-mono">{doc.roomNo}</span>
                <span className="text-purple-600 dark:text-purple-400 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center">
                  Audit <ChevronRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

