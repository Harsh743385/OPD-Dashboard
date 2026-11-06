import React from 'react';
import { useDashboard } from '../context/DashboardContext';
import { 
  LayoutDashboard, Activity, ShieldCheck, HeartPulse, 
  Sparkles, Smile, Cpu, Users, IndianRupee, BellRing,
  ChevronDown
} from 'lucide-react';
import { departmentSummary, doctorScorecards } from '../data/mockData';

export const SubNavbar = () => {
  const {
    activeTab, setActiveTab,
    selectedBranch, setSelectedBranch,
    selectedDateRange, setSelectedDateRange,
    selectedDepartment, setSelectedDepartment,
    selectedDoctor, setSelectedDoctor,
    selectedAppointmentType, setSelectedAppointmentType,
    notify
  } = useDashboard();

  const tabs = [
    { id: 'executive', name: 'OPD Executive Overview', icon: LayoutDashboard },
    { id: 'clinical', name: 'Lab, Radiology & Nursing', icon: Activity },
    { id: 'nabh', name: 'NABH 10 Chapters (95.4%)', icon: ShieldCheck },
    { id: 'safety', name: 'Patient Safety & PSQ', icon: HeartPulse },
    { id: 'hic', name: 'Infection Control (HIC)', icon: Sparkles },
    { id: 'experience', name: 'Patient Experience (NPS 71)', icon: Smile },
    { id: 'digital', name: 'Digital OPD & ABHA', icon: Cpu },
    { id: 'doctor', name: 'Doctors & Staff Activity', icon: Users },
    { id: 'revenue', name: 'Revenue & Operations', icon: IndianRupee },
    { id: 'alerts', name: 'Alerts & Daily Huddle', icon: BellRing },
  ];

  return (
    <div className="bg-white border-b border-slate-200">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6">
        
        {/* Row 1: Image 4 Reference Filters (Branch, Time, Department, Doctor, Appointment Type) */}
        <div className="py-3 flex flex-wrap items-center gap-2 sm:gap-3 border-b border-slate-100 text-xs bg-white">
          
          {/* Branch Dropdown */}
          <div className="relative min-w-[200px] flex-1 sm:flex-none">
            <select
              value={selectedBranch}
              onChange={(e) => {
                setSelectedBranch(e.target.value);
                notify(`Branch switched to: ${e.target.value}`);
              }}
              className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-800 font-semibold rounded-xl pl-3 pr-8 py-2 focus:outline-none focus:ring-1 focus:ring-teal-500 shadow-xs cursor-pointer"
            >
              <option value="JIKA Hospital - Main Campus">JIKA Hospital - Main Campus</option>
              <option value="JIKA Clinic - Andheri West">JIKA Clinic - Andheri West</option>
              <option value="JIKA Care - Bandra Center">JIKA Care - Bandra Center</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          </div>

          {/* Date Range Dropdown */}
          <div className="relative min-w-[130px]">
            <select
              value={selectedDateRange}
              onChange={(e) => {
                setSelectedDateRange(e.target.value);
                notify(`Date filter updated: ${e.target.value}`);
              }}
              className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-800 font-semibold rounded-xl pl-3 pr-8 py-2 focus:outline-none focus:ring-1 focus:ring-teal-500 shadow-xs cursor-pointer"
            >
              <option value="Today">Today</option>
              <option value="This Week">This Week</option>
              <option value="This Month">This Month</option>
              <option value="Year-to-Date">Year-to-Date</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          </div>

          {/* Department Dropdown */}
          <div className="relative min-w-[160px] flex-1 sm:flex-none">
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-800 font-semibold rounded-xl pl-3 pr-8 py-2 focus:outline-none focus:ring-1 focus:ring-teal-500 shadow-xs cursor-pointer"
            >
              <option value="All Departments">All Departments</option>
              {departmentSummary.map(d => (
                <option key={d.department} value={d.department}>{d.department}</option>
              ))}
            </select>
            <ChevronDown className="w-3.5 h-3.5 absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          </div>

          {/* Doctor Dropdown */}
          <div className="relative min-w-[170px] flex-1 sm:flex-none">
            <select
              value={selectedDoctor}
              onChange={(e) => setSelectedDoctor(e.target.value)}
              className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-800 font-semibold rounded-xl pl-3 pr-8 py-2 focus:outline-none focus:ring-1 focus:ring-teal-500 shadow-xs cursor-pointer"
            >
              <option value="All Doctors">All Doctors</option>
              {doctorScorecards.map(doc => (
                <option key={doc.id} value={doc.name}>{doc.name}</option>
              ))}
            </select>
            <ChevronDown className="w-3.5 h-3.5 absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          </div>

          {/* Appointment Type (Image 4 reference: bordered badge style) */}
          <div className="relative min-w-[180px]">
            <select
              value={selectedAppointmentType}
              onChange={(e) => setSelectedAppointmentType(e.target.value)}
              className="w-full appearance-none bg-white border-2 border-teal-600 text-teal-800 font-bold rounded-xl pl-3 pr-8 py-2 focus:outline-none shadow-xs cursor-pointer"
            >
              <option value="All Appointment Types">All Appointment Types</option>
              <option value="Walk-In">Walk-In</option>
              <option value="Scheduled">Scheduled</option>
              <option value="Follow-Up">Follow-Up</option>
              <option value="Emergency">Emergency</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 absolute right-2.5 top-1/2 -translate-y-1/2 text-teal-600 pointer-events-none" />
          </div>

        </div>

        {/* Row 2: Clean Tabs with Icons and Active Highlighting */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-2.5 scrollbar-none bg-white">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-150 flex-shrink-0 ${
                  isActive
                    ? 'bg-teal-600 text-white shadow-xs'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-teal-600'}`} />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
};
