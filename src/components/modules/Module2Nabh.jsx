import React, { useState } from 'react';
import { useDashboard } from '../../context/DashboardContext';
import { 
  nabhChapters, documentControlData, trainingCompliance 
} from '../../data/mockData';
import { 
  ShieldCheck, AlertCircle, FileCheck, Award, 
  Calendar, CheckCircle2, Clock, AlertTriangle, 
  Search, ExternalLink, ArrowRight, UserCheck, RefreshCw, FileText
} from 'lucide-react';

export const Module2Nabh = () => {
  const { setDrilldownData, capaList, updateCapaStatus, notify } = useDashboard();
  const [activeSubTab, setActiveSubTab] = useState('chapters'); // 'chapters' | 'capa' | 'docs' | 'training'
  const [filterRag, setFilterRag] = useState('ALL');

  const filteredChapters = filterRag === 'ALL' 
    ? nabhChapters 
    : nabhChapters.filter(c => c.rag === filterRag);

  const overallScore = (nabhChapters.reduce((acc, c) => acc + c.compliancePct, 0) / nabhChapters.length).toFixed(1);
  const totalStandards = nabhChapters.reduce((acc, c) => acc + c.standardsCount, 0);
  const totalElements = nabhChapters.reduce((acc, c) => acc + c.elementsCount, 0);
  const totalOpenNc = nabhChapters.reduce((acc, c) => acc + c.openNc, 0);
  const totalClosedNc = nabhChapters.reduce((acc, c) => acc + c.closedNc, 0);

  return (
    <div className="space-y-6">
      
      {/* Top Banner: NABH Audit Readiness Gauge & Summary Stats */}
      <div className="bg-white dark:bg-slate-800/90 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 border-l-4 border-l-emerald-500">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 stroke-[2.2]" />
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    NABH 5th Edition OPD Standards Compliance Dashboard
                  </h2>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                    FULL ACCREDITATION READY
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  JIKA Hospital • 10 Core Chapters, 131 Standards, 695 Objective Elements & Statutory Registers.
                </p>
              </div>
            </div>
          </div>

          {/* Key Metric Gauges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 flex-shrink-0">
            <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
              <span className="text-[10px] uppercase font-bold text-slate-400">Overall Readiness</span>
              <p className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">{overallScore}%</p>
              <span className="text-[10px] text-emerald-600 font-semibold">GREEN (Safe Band)</span>
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
              <span className="text-[10px] uppercase font-bold text-slate-400">Standards / Elements</span>
              <p className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono">{totalStandards} / {totalElements}</p>
              <span className="text-[10px] text-slate-400">100% Applicable</span>
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
              <span className="text-[10px] uppercase font-bold text-slate-400">Open NCs / CAPA</span>
              <p className="text-2xl font-extrabold text-amber-500 font-mono">{totalOpenNc}</p>
              <span className="text-[10px] text-slate-400">{totalClosedNc} Closed / Verified</span>
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
              <span className="text-[10px] uppercase font-bold text-slate-400">Next Internal Audit</span>
              <p className="text-lg font-bold text-teal-600 dark:text-teal-400 font-mono mt-1">16 Nov 2026</p>
              <span className="text-[10px] text-slate-400">PSQ & AAC Chapters</span>
            </div>
          </div>

        </div>

        {/* Sub-navigation pills */}
        <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {[
              { id: 'chapters', label: '10 Core Chapters' },
              { id: 'capa', label: 'NC & CAPA Tracker', count: capaList.length },
              { id: 'docs', label: 'Document Control Log', count: documentControlData.length },
              { id: 'training', label: 'Mandatory Staff Training' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveSubTab(tab.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  activeSubTab === tab.id
                    ? 'bg-teal-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700'
                }`}
              >
                <span>{tab.label}</span>
                {tab.count !== undefined && (
                  <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                    activeSubTab === tab.id ? 'bg-white/20' : 'bg-slate-200 dark:bg-slate-700'
                  }`}>
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </div>

          {activeSubTab === 'chapters' && (
            <div className="flex items-center gap-1 text-xs">
              <span className="text-slate-400 text-[11px] mr-1">RAG Filter:</span>
              <button
                onClick={() => setFilterRag('ALL')}
                className={`px-2 py-0.5 rounded text-[11px] font-medium ${filterRag === 'ALL' ? 'bg-slate-700 text-white' : 'text-slate-500'}`}
              >
                All (10)
              </button>
              <button
                onClick={() => setFilterRag('GREEN')}
                className={`px-2 py-0.5 rounded text-[11px] font-medium ${filterRag === 'GREEN' ? 'bg-emerald-600 text-white' : 'text-emerald-600'}`}
              >
                Green (8)
              </button>
              <button
                onClick={() => setFilterRag('AMBER')}
                className={`px-2 py-0.5 rounded text-[11px] font-medium ${filterRag === 'AMBER' ? 'bg-amber-600 text-white' : 'text-amber-600'}`}
              >
                Amber (2)
              </button>
            </div>
          )}
        </div>
      </div>

      {/* View 1: 10 Core Chapters Grid */}
      {activeSubTab === 'chapters' && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filteredChapters.map((ch) => {
            const isGreen = ch.rag === 'GREEN';
            return (
              <div 
                key={ch.code}
                onClick={() => setDrilldownData({
                  title: `${ch.code}: ${ch.name}`,
                  type: 'NABH Chapter Standards',
                  data: {
                    ChapterCode: ch.code,
                    CompliancePercentage: `${ch.compliancePct}%`,
                    RAGStatus: ch.rag,
                    StandardsCount: ch.standardsCount,
                    ObjectiveElements: ch.elementsCount,
                    UploadedDocuments: `${ch.docsUploaded} of ${ch.docsRequired}`,
                    PendingDocuments: ch.docsPending,
                    OpenNonConformities: ch.openNc,
                    LastInternalAudit: ch.lastAuditDate,
                    NextAuditScheduled: ch.nextAuditDate,
                    LeadAuditor: ch.leadAuditor,
                    KeyEvidenceHighlights: ch.highlights
                  }
                })}
                className="bg-white dark:bg-slate-800/90 p-5 rounded-2xl cursor-pointer border border-slate-200 dark:border-slate-700/80 hover:border-teal-500/60 transition-all shadow-sm hover:shadow-md group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="w-9 h-9 rounded-xl font-mono font-extrabold text-sm flex items-center justify-center bg-teal-50 dark:bg-teal-950/70 text-teal-600 dark:text-teal-400 group-hover:scale-105 transition-transform">
                        {ch.code}
                      </span>
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 dark:text-white leading-tight">
                          {ch.name}
                        </h4>
                      </div>
                    </div>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      isGreen ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' :
                      'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                    }`}>
                      {ch.rag}
                    </span>
                  </div>

                  {/* Compliance Progress Bar */}
                  <div className="mt-4">
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span className="text-slate-500">Compliance</span>
                      <span className="font-bold text-slate-900 dark:text-white">{ch.compliancePct}%</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-500 ${isGreen ? 'bg-emerald-500' : 'bg-amber-500'}`}
                        style={{ width: `${ch.compliancePct}%` }}
                      />
                    </div>
                  </div>

                  {/* Standards & Objective Elements breakdown */}
                  <div className="grid grid-cols-3 gap-2 mt-4 text-[11px] text-center bg-slate-50 dark:bg-slate-800/40 p-2 rounded-xl border border-slate-100 dark:border-slate-800">
                    <div>
                      <p className="text-slate-400">Standards</p>
                      <p className="font-bold font-mono text-slate-800 dark:text-slate-200">{ch.standardsCount}</p>
                    </div>
                    <div>
                      <p className="text-slate-400">Obj. Elements</p>
                      <p className="font-bold font-mono text-slate-800 dark:text-slate-200">{ch.elementsCount}</p>
                    </div>
                    <div>
                      <p className="text-slate-400">Open NCs</p>
                      <p className={`font-bold font-mono ${ch.openNc > 0 ? 'text-rose-500' : 'text-emerald-500'}`}>{ch.openNc}</p>
                    </div>
                  </div>

                  {/* Highlights */}
                  <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-3 line-clamp-2 italic bg-slate-50/50 dark:bg-slate-850/50 p-2 rounded-lg">
                    "{ch.highlights}"
                  </p>
                </div>

                {/* Footer with audit dates */}
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                  <span>Next Audit: {ch.nextAuditDate}</span>
                  <span className="text-teal-600 dark:text-teal-400 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-0.5">
                    View OE <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* View 2: Non-Conformity (NC) & CAPA Status Tracker */}
      {activeSubTab === 'capa' && (
        <div className="bg-white dark:bg-slate-800/90 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                Corrective and Preventive Action (CAPA) Tracker
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                NABH audit findings, root cause analysis, target closure dates, evidence verification, and closure status.
              </p>
            </div>
            <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
              Closure Rate: 91.2% (NABH Benchmark &gt; 90%)
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 dark:bg-slate-800/60 font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700">
                <tr>
                  <th className="py-2.5 px-3">CAPA ID</th>
                  <th className="py-2.5 px-3">Chapter & Std</th>
                  <th className="py-2.5 px-3">Identified Deficiency / NC</th>
                  <th className="py-2.5 px-3">Corrective Action Taken</th>
                  <th className="py-2.5 px-3">Owner</th>
                  <th className="py-2.5 px-3">Target Date</th>
                  <th className="py-2.5 px-3">Status</th>
                  <th className="py-2.5 px-3 text-right">Verification</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {capaList.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                    <td className="py-3 px-3 font-mono font-bold text-teal-600 dark:text-teal-400">
                      {item.id}
                    </td>
                    <td className="py-3 px-3 font-semibold">
                      <span className="px-1.5 py-0.5 rounded text-[10px] bg-slate-200 dark:bg-slate-700 font-mono">
                        {item.chapter} ({item.standard})
                      </span>
                    </td>
                    <td className="py-3 px-3 text-slate-800 dark:text-slate-200 max-w-xs">
                      {item.issue}
                    </td>
                    <td className="py-3 px-3 text-slate-600 dark:text-slate-300 max-w-xs">
                      {item.action}
                    </td>
                    <td className="py-3 px-3 text-slate-700 dark:text-slate-300 font-medium">
                      {item.owner}
                    </td>
                    <td className="py-3 px-3 font-mono text-slate-600 dark:text-slate-400">
                      {item.targetDate}
                    </td>
                    <td className="py-3 px-3">
                      <button
                        onClick={() => {
                          const nextStatus = item.status === 'Closed' ? 'In Progress' : 'Closed';
                          updateCapaStatus(item.id, nextStatus);
                        }}
                        className={`px-2 py-0.5 rounded-full text-[10px] font-bold cursor-pointer transition-all ${
                          item.status === 'Closed' 
                            ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' 
                            : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                        }`}
                        title="Click to toggle status"
                      >
                        {item.status}
                      </button>
                    </td>
                    <td className="py-3 px-3 text-right">
                      <span className={`text-[11px] font-medium ${
                        item.verified === 'Auditor Approved' ? 'text-emerald-600 dark:text-emerald-400 font-bold' : 'text-slate-400'
                      }`}>
                        {item.verified}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* View 3: Document Control Tracker */}
      {activeSubTab === 'docs' && (
        <div className="bg-white dark:bg-slate-800/90 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                Controlled Document & SOP Master Register
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                NABH IMS Standard: Version history, periodic review cycles, ownership, and administrative signoffs.
              </p>
            </div>
            <button
              onClick={() => notify('Controlled Document Master List exported to PDF.')}
              className="px-3 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs transition-all shadow-sm flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Export Master List</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 dark:bg-slate-800/60 font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700">
                <tr>
                  <th className="py-2.5 px-3">Doc Number</th>
                  <th className="py-2.5 px-3">Policy / SOP Title</th>
                  <th className="py-2.5 px-3">Version</th>
                  <th className="py-2.5 px-3">Document Owner</th>
                  <th className="py-2.5 px-3">Last Review</th>
                  <th className="py-2.5 px-3">Next Review Due</th>
                  <th className="py-2.5 px-3 text-right">Approval Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {documentControlData.map((doc) => (
                  <tr key={doc.docNo} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                    <td className="py-3 px-3 font-mono font-bold text-teal-600 dark:text-teal-400">
                      {doc.docNo}
                    </td>
                    <td className="py-3 px-3 font-semibold text-slate-800 dark:text-slate-200">
                      {doc.title}
                    </td>
                    <td className="py-3 px-3 font-mono font-bold">
                      {doc.version}
                    </td>
                    <td className="py-3 px-3 text-slate-600 dark:text-slate-300">
                      {doc.owner}
                    </td>
                    <td className="py-3 px-3 font-mono text-slate-500">
                      {doc.reviewDate}
                    </td>
                    <td className="py-3 px-3 font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                      {doc.nextReview}
                    </td>
                    <td className="py-3 px-3 text-right">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                        <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                        {doc.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* View 4: Training Compliance */}
      {activeSubTab === 'training' && (
        <div className="bg-white dark:bg-slate-800/90 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                Mandatory Clinical & Paramedical Training Compliance
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                NABH HRM Standard: 100% target coverage for Fire Safety, BLS CPR, Infection Control, and Biomedical Waste.
              </p>
            </div>
            <span className="text-xs font-mono text-slate-400">Total OPD Staff Roster: 170 Members</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {trainingCompliance.map((course, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/40">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="font-bold text-xs text-slate-900 dark:text-white">
                    {course.course}
                  </h4>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    course.status === 'Compliant' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' :
                    'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                  }`}>
                    {course.status}
                  </span>
                </div>
                <div className="mt-3">
                  <div className="flex justify-between text-[11px] font-mono text-slate-500 mb-1">
                    <span>Staff Certified: {course.trainedCount} / {course.totalStaff}</span>
                    <span className="font-bold text-slate-900 dark:text-white">{course.completedPct}%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${course.completedPct >= 95 ? 'bg-emerald-500' : 'bg-amber-500'}`}
                      style={{ width: `${course.completedPct}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
