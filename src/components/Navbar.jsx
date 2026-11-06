import React, { useState, useEffect } from 'react';
import { useDashboard } from '../context/DashboardContext';
import { hospitalInfo } from '../data/mockData';
import { 
  ShieldCheck, Calendar, RefreshCw, FileSpreadsheet, 
  FileText, Bell, ChevronDown
} from 'lucide-react';

export const Navbar = () => {
  const { 
    role, setRole, 
    setExportModalOpen, 
    lastRefreshed, setLastRefreshed,
    alerts,
    notify
  } = useDashboard();

  const [currentTime, setCurrentTime] = useState(new Date());
  const [showAlertsMenu, setShowAlertsMenu] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleRefresh = () => {
    setLastRefreshed(new Date());
    notify("OPD Dashboard data refreshed successfully.");
  };

  const handleExportExcel = () => {
    notify("Exporting JIKA Hospital OPD Records to Excel (.xlsx)...");
    setTimeout(() => {
      notify("Excel export complete: JIKA_OPD_Report_2026.xlsx");
    }, 1000);
  };

  const activeAlertsCount = alerts.filter(a => a.status !== 'Resolved').length;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-xs">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-3 bg-white">
        
        {/* Left: Title & Live Time indicator (Image 4 reference) */}
        <div>
          <div className="flex items-center gap-2.5">
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
              OPD Management Dashboard
            </h1>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>JIKA Hospital • NABH 5th Ed.</span>
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5 font-medium">
            Friday, 06 November 2026 · Updated {lastRefreshed.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
          </p>
        </div>

        {/* Right: Controls from Image 4 (Role, Calendar, Refresh, Export Excel, Export PDF) */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
          
          {/* Role Dropdown */}
          <div className="relative">
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="appearance-none bg-white border border-slate-200 text-slate-800 text-xs font-semibold rounded-lg pl-3 pr-8 py-2 focus:outline-none focus:ring-1 focus:ring-teal-500 shadow-xs cursor-pointer"
            >
              <option value="Admin">Admin</option>
              <option value="Doctor">Doctor / Clinical Lead</option>
              <option value="Nurse">Nursing Head</option>
              <option value="Quality Lead">Quality & NABH Lead</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          </div>

          {/* Appointment Calendar Button (Image 4 reference: teal button) */}
          <button
            onClick={() => notify("Appointment Calendar view opened.")}
            className="px-3.5 py-2 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold flex items-center gap-1.5 shadow-xs transition-all"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Appointment Calendar</span>
          </button>

          {/* Refresh Button */}
          <button
            onClick={handleRefresh}
            className="px-3 py-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center gap-1.5 shadow-xs transition-all"
          >
            <RefreshCw className="w-3.5 h-3.5 text-teal-600" />
            <span>Refresh</span>
          </button>

          {/* Export Excel Button */}
          <button
            onClick={handleExportExcel}
            className="px-3 py-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center gap-1.5 shadow-xs transition-all"
          >
            <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
            <span>Export Excel</span>
          </button>

          {/* Export PDF Button */}
          <button
            onClick={() => setExportModalOpen(true)}
            className="px-3 py-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center gap-1.5 shadow-xs transition-all"
          >
            <FileText className="w-3.5 h-3.5 text-rose-600" />
            <span>Export PDF</span>
          </button>

          {/* Alert Notifications */}
          <div className="relative">
            <button
              onClick={() => setShowAlertsMenu(!showAlertsMenu)}
              className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 shadow-xs relative"
              title="Active Triage Alerts"
            >
              <Bell className="w-4 h-4" />
              {activeAlertsCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-600 text-white rounded-full text-[10px] font-bold flex items-center justify-center">
                  {activeAlertsCount}
                </span>
              )}
            </button>

            {showAlertsMenu && (
              <div className="absolute right-0 mt-2 w-80 rounded-xl bg-white border border-slate-200 p-3 shadow-xl z-50 animate-fade-in">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-xs font-bold text-slate-900">Active Alerts ({activeAlertsCount})</span>
                  <button onClick={() => setShowAlertsMenu(false)} className="text-xs text-slate-400 hover:text-slate-600">✕</button>
                </div>
                <div className="divide-y divide-slate-100 max-h-60 overflow-y-auto">
                  {alerts.map(a => (
                    <div key={a.id} className="py-2 text-xs">
                      <div className="flex items-center justify-between">
                        <span className={`px-1.5 py-0.2 rounded text-[10px] font-bold ${
                          a.severity === 'critical' ? 'bg-rose-100 text-rose-800' : 'bg-amber-100 text-amber-800'
                        }`}>{a.severity.toUpperCase()}</span>
                        <span className="text-[10px] text-slate-400 font-mono">{a.time}</span>
                      </div>
                      <p className="font-semibold text-slate-800 mt-1">{a.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </header>
  );
};
