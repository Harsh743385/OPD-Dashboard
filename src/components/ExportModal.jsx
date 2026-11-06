import React, { useRef } from 'react';
import { useDashboard } from '../context/DashboardContext';
import { hospitalInfo, opdManagementKpis, nabhChapters, qualityIndicators } from '../data/mockData';
import { Download, Printer, X, ShieldCheck, CheckCircle2, FileText } from 'lucide-react';

export const ExportModal = () => {
  const { exportModalOpen, setExportModalOpen, notify } = useDashboard();
  const reportRef = useRef();

  if (!exportModalOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadCsv = () => {
    const csvContent = "data:text/csv;charset=utf-8," 
      + "NABH Chapter,Name,Compliance %,Status,Standards,Elements,Pending Docs,Open NC\n"
      + nabhChapters.map(c => `"${c.code}","${c.name}",${c.compliancePct}%,"${c.rag}",${c.standardsCount},${c.elementsCount},${c.docsPending},${c.openNc}`).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `JIKA_Hospital_NABH_Audit_Report_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    notify('JIKA Hospital Compliance CSV Report downloaded successfully.');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-800/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                JIKA Hospital — NABH OPD Quality & Operations Audit Report
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Generated from Live HIS & Quality Management System • Certified Digital Copy
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadCsv}
              className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold flex items-center gap-1.5 transition-all"
            >
              <Download className="w-3.5 h-3.5 text-teal-600" />
              <span>Export CSV</span>
            </button>
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={() => setExportModalOpen(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Report Preview Body */}
        <div ref={reportRef} className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-800 dark:text-slate-200 text-xs font-sans">
          
          {/* Hospital Letterhead */}
          <div className="border-b-2 border-teal-600 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white uppercase tracking-wide">
                {hospitalInfo.name}
              </h3>
              <p className="text-xs text-slate-500">
                {hospitalInfo.branch}
              </p>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1">
                Accreditation Reference: <span className="font-mono font-semibold">{hospitalInfo.nabhId}</span> • Standard: 5th Edition Full Accreditation
              </p>
            </div>
            <div className="text-right sm:text-right">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Audit Readiness: 95.4% (GREEN)
              </span>
              <p className="text-[11px] text-slate-400 font-mono mt-1">
                Date: {new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
              </p>
            </div>
          </div>

          {/* Key Executive Statistics */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px] mb-2 text-teal-700 dark:text-teal-400">
              1. Executive OPD Operational Metrics
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 dark:bg-slate-800/40 p-3 rounded-xl border border-slate-200 dark:border-slate-700">
              <div>
                <p className="text-[11px] text-slate-500">Total Appointments</p>
                <p className="text-base font-bold text-slate-900 dark:text-white font-mono">{opdManagementKpis.totalAppointments.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-[11px] text-slate-500">Completed Rate</p>
                <p className="text-base font-bold text-emerald-600 dark:text-emerald-400 font-mono">{opdManagementKpis.completed}</p>
              </div>
              <div>
                <p className="text-[11px] text-slate-500">Walk-Ins Today</p>
                <p className="text-base font-bold text-teal-600 font-mono">{opdManagementKpis.walkIn}</p>
              </div>
              <div>
                <p className="text-[11px] text-slate-500">No-Show Rate</p>
                <p className="text-base font-bold text-slate-900 dark:text-white font-mono">{opdManagementKpis.noShow} cases</p>
              </div>
            </div>
          </div>

          {/* NABH 10 Chapters Compliance Table */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px] mb-2 text-teal-700 dark:text-teal-400">
              2. NABH 5th Edition 10 Chapters Compliance
            </h4>
            <div className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
              <table className="w-full text-left text-[11px]">
                <thead className="bg-slate-100 dark:bg-slate-800 font-semibold text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700">
                  <tr>
                    <th className="py-2 px-3">Code</th>
                    <th className="py-2 px-3">Chapter Title</th>
                    <th className="py-2 px-3">Compliance</th>
                    <th className="py-2 px-3">RAG</th>
                    <th className="py-2 px-3">Standards</th>
                    <th className="py-2 px-3">Docs Status</th>
                    <th className="py-2 px-3">Open NC</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {nabhChapters.map((ch) => (
                    <tr key={ch.code} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                      <td className="py-1.5 px-3 font-mono font-bold text-teal-600 dark:text-teal-400">{ch.code}</td>
                      <td className="py-1.5 px-3 font-medium text-slate-800 dark:text-slate-200">{ch.name}</td>
                      <td className="py-1.5 px-3 font-bold font-mono">{ch.compliancePct}%</td>
                      <td className="py-1.5 px-3">
                        <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                          ch.rag === 'GREEN' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' :
                          'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                        }`}>
                          {ch.rag}
                        </span>
                      </td>
                      <td className="py-1.5 px-3">{ch.standardsCount} Stds ({ch.elementsCount} OE)</td>
                      <td className="py-1.5 px-3">{ch.docsUploaded} / {ch.docsRequired}</td>
                      <td className="py-1.5 px-3 font-mono font-bold text-rose-600">{ch.openNc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Signatures */}
          <div className="pt-6 border-t border-slate-200 dark:border-slate-700 flex justify-between items-end text-[11px] text-slate-500">
            <div>
              <p className="font-semibold text-slate-800 dark:text-slate-200">Prepared by:</p>
              <p>NABH Quality Coordinator</p>
              <p className="font-mono text-[10px]">JIKA-QMS-4921</p>
            </div>
            <div className="text-center">
              <p className="font-semibold text-slate-800 dark:text-slate-200">Reviewed by:</p>
              <p>Medical Superintendent</p>
            </div>
            <div className="text-right">
              <p className="font-semibold text-slate-800 dark:text-slate-200">Approved by:</p>
              <p>Chief Executive Officer & MD</p>
              <p className="font-mono text-[10px] text-emerald-600">JIKA Hospital Executive Seal</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
