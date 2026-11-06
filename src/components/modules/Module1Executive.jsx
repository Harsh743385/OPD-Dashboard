import React from 'react';
import { useDashboard } from '../../context/DashboardContext';
import { 
  FileText, Clock, ArrowRight, Hourglass, Stethoscope, 
  CheckCircle2, XCircle, AlertCircle, RotateCcw
} from 'lucide-react';
import { 
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, 
  Tooltip, Legend, CartesianGrid 
} from 'recharts';

export const Module1Executive = () => {
  const { 
    kpis, 
    departmentSummary, 
    selectedDepartment,
    patientFlow,
    setDrilldownData,
    simulateSurgeArrival
  } = useDashboard();

  const filteredSummary = selectedDepartment === 'All Departments'
    ? departmentSummary
    : departmentSummary.filter(d => d.department === selectedDepartment);

  // Exact reference from Image 4
  const cards = [
    {
      title: "Total OPD Appointments",
      value: kpis.totalAppointments.toLocaleString(),
      delta: kpis.totalAppointmentsDelta,
      deltaType: kpis.totalAppointmentsDeltaType,
      icon: FileText,
      iconColor: "text-teal-600",
      iconBg: "bg-teal-50 border border-teal-100",
      borderAccent: "border-l-4 border-l-teal-500",
    },
    {
      title: "Scheduled",
      value: kpis.scheduled.toLocaleString(),
      delta: kpis.scheduledDelta,
      deltaType: kpis.scheduledDeltaType,
      icon: Clock,
      iconColor: "text-purple-600",
      iconBg: "bg-purple-50 border border-purple-100",
      borderAccent: "border-l-4 border-l-purple-500",
    },
    {
      title: "Checked-In",
      value: kpis.checkedIn.toLocaleString(),
      delta: kpis.checkedInDelta,
      deltaType: kpis.checkedInDeltaType,
      icon: ArrowRight,
      iconColor: "text-sky-600",
      iconBg: "bg-sky-50 border border-sky-100",
      borderAccent: "border-l-4 border-l-sky-500",
    },
    {
      title: "Waiting",
      value: kpis.waiting.toLocaleString(),
      delta: kpis.waitingDelta,
      deltaType: kpis.waitingDeltaType,
      icon: Hourglass,
      iconColor: "text-amber-600",
      iconBg: "bg-amber-50 border border-amber-100",
      borderAccent: "border-l-4 border-l-amber-500",
    },
    {
      title: "In Consultation",
      value: kpis.inConsultation.toLocaleString(),
      delta: kpis.inConsultationDelta,
      deltaType: kpis.inConsultationDeltaType,
      icon: Stethoscope,
      iconColor: "text-indigo-600",
      iconBg: "bg-indigo-50 border border-indigo-100",
      borderAccent: "border-l-4 border-l-indigo-500",
    },
    {
      title: "Completed",
      value: kpis.completed.toLocaleString(),
      delta: kpis.completedDelta,
      deltaType: kpis.completedDeltaType,
      icon: CheckCircle2,
      iconColor: "text-emerald-600",
      iconBg: "bg-emerald-50 border border-emerald-100",
      borderAccent: "border-l-4 border-l-emerald-500",
    },
    {
      title: "Cancelled",
      value: kpis.cancelled.toLocaleString(),
      delta: kpis.cancelledDelta,
      deltaType: kpis.cancelledDeltaType,
      icon: XCircle,
      iconColor: "text-rose-600",
      iconBg: "bg-rose-50 border border-rose-100",
      borderAccent: "border-l-4 border-l-rose-500",
    },
    {
      title: "No-Show",
      value: kpis.noShow.toLocaleString(),
      delta: kpis.noShowDelta,
      deltaType: kpis.noShowDeltaType,
      icon: AlertCircle,
      iconColor: "text-slate-500",
      iconBg: "bg-slate-100 border border-slate-200",
      borderAccent: "border-l-4 border-l-slate-400",
    },
    {
      title: "Walk-In",
      value: kpis.walkIn.toLocaleString(),
      delta: kpis.walkInDelta,
      deltaType: kpis.walkInDeltaType,
      icon: ArrowRight,
      iconColor: "text-teal-600",
      iconBg: "bg-teal-50 border border-teal-100",
      borderAccent: "border-l-4 border-l-teal-600",
    },
    {
      title: "Follow-Up",
      value: kpis.followUp.toLocaleString(),
      delta: kpis.followUpDelta,
      deltaType: kpis.followUpDeltaType,
      icon: RotateCcw,
      iconColor: "text-pink-600",
      iconBg: "bg-pink-50 border border-pink-100",
      borderAccent: "border-l-4 border-l-pink-500",
    },
  ];

  return (
    <div className="space-y-6 bg-white">
      
      {/* 10 Clean KPI Cards Row (Image 4 exact architecture) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
        {cards.map((card, idx) => {
          const Icon = card.icon;
          const isUp = card.deltaType === 'up';
          return (
            <div 
              key={idx}
              onClick={() => setDrilldownData({
                title: card.title,
                type: 'OPD Metric Audit',
                data: {
                  Metric: card.title,
                  CurrentCount: card.value,
                  PeriodComparison: card.delta,
                  Hospital: "JIKA Hospital Main Campus"
                }
              })}
              className={`bg-white rounded-2xl p-4 border border-slate-200 shadow-xs hover:shadow-md transition-all cursor-pointer ${card.borderAccent} flex flex-col justify-between`}
            >
              <div className="flex items-start justify-between gap-2">
                <span className="text-xs font-semibold text-slate-600 leading-tight">
                  {card.title}
                </span>
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 ${card.iconBg}`}>
                  <Icon className={`w-4 h-4 ${card.iconColor}`} />
                </div>
              </div>

              {/* Number Value - Explicitly styled for high contrast readability */}
              <div className="mt-3">
                <div 
                  className="text-2xl sm:text-3xl font-extrabold font-mono tracking-tight"
                  style={{ color: '#0f172a' }}
                >
                  {card.value}
                </div>
                <div className="mt-1 flex items-center gap-1 text-[11px] font-medium">
                  <span className={`inline-flex items-center ${isUp ? 'text-emerald-600 font-semibold' : 'text-slate-500'}`}>
                    {isUp ? '▲' : '▼'} {card.delta}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Row 2: Department-wise OPD Performance Chart & Department Summary Table (Image 4 exact architecture) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column (5 Cols): Department-wise OPD Performance Stacked Bar Chart */}
        <div className="lg:col-span-5 bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                Department-wise OPD performance
              </h3>
              <p className="text-xs text-slate-500">Live appointment status distribution</p>
            </div>
            <button
              onClick={simulateSurgeArrival}
              className="px-2.5 py-1 rounded-lg bg-teal-50 border border-teal-200 text-teal-700 text-xs font-semibold hover:bg-teal-100 transition-all cursor-pointer"
              title="Add 8 simulated walk-in appointments"
            >
              + Add Walk-In
            </button>
          </div>

          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={filteredSummary.slice(0, 5)} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.6} />
                <XAxis dataKey="department" tick={{ fontSize: 10, fill: '#64748b' }} stroke="#cbd5e1" />
                <YAxis tick={{ fontSize: 10, fill: '#64748b' }} stroke="#cbd5e1" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#0f172a', 
                    borderColor: '#334155', 
                    borderRadius: '8px', 
                    fontSize: '12px',
                    color: '#fff' 
                  }} 
                />
                <Legend iconType="circle" wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                <Bar dataKey="done" stackId="a" fill="#10b981" name="Completed" />
                <Bar dataKey="waiting" stackId="a" fill="#f59e0b" name="Waiting" />
                <Bar dataKey="inConsult" stackId="a" fill="#8b5cf6" name="In Consultation" />
                <Bar dataKey="canc" stackId="a" fill="#ef4444" name="Cancelled" />
                <Bar dataKey="noShow" stackId="a" fill="#64748b" name="No Show" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right Column (7 Cols): Department Summary Table (Image 4 exact architecture) */}
        <div className="lg:col-span-7 bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                Department summary
              </h3>
              <p className="text-xs text-slate-500">Cross-specialty clinical throughput at JIKA Hospital</p>
            </div>
            <span className="text-xs font-mono font-semibold text-teal-600">
              {filteredSummary.length} Departments
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 font-semibold text-slate-600 border-b border-slate-200">
                <tr>
                  <th className="py-2.5 px-3">Department</th>
                  <th className="py-2.5 px-3">Total</th>
                  <th className="py-2.5 px-3 text-emerald-600">Done</th>
                  <th className="py-2.5 px-3 text-amber-600">Waiting</th>
                  <th className="py-2.5 px-3 text-indigo-600">In consult</th>
                  <th className="py-2.5 px-3 text-rose-600">Canc.</th>
                  <th className="py-2.5 px-3 text-slate-500">No show</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredSummary.map((dept) => (
                  <tr key={dept.department} className="hover:bg-slate-50 transition-colors">
                    <td className="py-2.5 px-3 font-semibold text-slate-900">
                      {dept.department}
                    </td>
                    <td className="py-2.5 px-3 font-mono font-bold text-slate-900">
                      {dept.total}
                    </td>
                    <td className="py-2.5 px-3 font-mono text-emerald-600 font-semibold">
                      {dept.done}
                    </td>
                    <td className="py-2.5 px-3 font-mono text-amber-600">
                      {dept.waiting}
                    </td>
                    <td className="py-2.5 px-3 font-mono text-indigo-600">
                      {dept.inConsult}
                    </td>
                    <td className="py-2.5 px-3 font-mono text-rose-600">
                      {dept.canc}
                    </td>
                    <td className="py-2.5 px-3 font-mono text-slate-500">
                      {dept.noShow}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* Row 3: Live Patient Flow Pipeline (8 Stages) */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <h3 className="text-sm font-bold text-slate-900">
              Live Patient Flow Pipeline (Real-Time Stages)
            </h3>
            <p className="text-xs text-slate-500">
              Live RFID & digital token sync from registration desks, suites, diagnostic wings, billing & pharmacy.
            </p>
          </div>
          <span className="text-xs font-mono text-emerald-600 font-semibold flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-live-dot"></span>
            <span>HIS Live Sync: Active</span>
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
          {patientFlow.map((stage) => {
            const isCritical = stage.status === 'critical';
            const isWarning = stage.status === 'warning';
            return (
              <div 
                key={stage.id}
                onClick={() => setDrilldownData({
                  title: `${stage.name} Stage Audit`,
                  type: 'Flow Stage',
                  data: {
                    Stage: stage.name,
                    ActiveCount: stage.count,
                    AvgTat: stage.avgTat,
                    MaxThreshold: stage.maxThreshold,
                    Hospital: "JIKA Hospital"
                  }
                })}
                className={`p-3 rounded-xl border transition-all cursor-pointer hover:shadow-md ${
                  isCritical ? 'bg-rose-50 border-rose-200' :
                  isWarning ? 'bg-amber-50 border-amber-200' :
                  'bg-white border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
                  <span>Step {stage.step}</span>
                  <span className="font-semibold text-slate-600">{stage.avgTat}</span>
                </div>
                <div className="mt-1">
                  <div 
                    className="text-lg font-bold font-mono"
                    style={{ color: '#0f172a' }}
                  >
                    {stage.count}
                  </div>
                  <div className="text-[11px] font-semibold text-slate-700 leading-tight truncate mt-0.5">
                    {stage.name}
                  </div>
                </div>
                <div className="w-full bg-slate-100 h-1 rounded-full mt-2 overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${isCritical ? 'bg-rose-500' : isWarning ? 'bg-amber-500' : 'bg-teal-500'}`} 
                    style={{ width: `${Math.min(100, (stage.count / stage.maxThreshold) * 100)}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Row 4: Aggregate System Metrics & Monthly Analytics (Exact Reference from Image 3) */}
      <div className="space-y-4 pt-2">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-slate-900">
              System Administration & Cumulative OPD Records
            </h3>
            <p className="text-xs text-slate-500">Historical throughput, staffing and cloud digitized records</p>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-teal-50 text-teal-700 border border-teal-200">
            JIKA Hospital Core HIS
          </span>
        </div>

        {/* Top Mini Card: Total Admins */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200 border-l-4 border-l-emerald-500 shadow-xs flex items-center justify-between">
          <div>
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">TOTAL ADMINS</p>
            <p className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900 mt-0.5" style={{ color: '#0f172a' }}>8</p>
            <p className="text-xs text-emerald-600 font-medium mt-0.5 flex items-center gap-1">
              <span>👥</span> Hospital admins
            </p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
            <Users className="w-5 h-5" />
          </div>
        </div>

        {/* 4 Cards Row 1: Today's Pending, Today's Complete, Total Pending, Total Complete */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {/* Today's Pending */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200 border-l-4 border-l-amber-500 shadow-xs flex items-center justify-between">
            <div>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">TODAY'S PENDING</p>
              <p className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900 mt-1" style={{ color: '#0f172a' }}>34</p>
              <button 
                onClick={() => notify("Drilling into 34 pending consultations today.")}
                className="text-xs text-amber-600 font-semibold mt-1 hover:underline flex items-center gap-1"
              >
                View →
              </button>
            </div>
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100">
              <Clock className="w-5 h-5" />
            </div>
          </div>

          {/* Today's Complete */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200 border-l-4 border-l-rose-500 shadow-xs flex items-center justify-between">
            <div>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">TODAY'S COMPLETE</p>
              <p className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900 mt-1" style={{ color: '#0f172a' }}>6</p>
              <button 
                onClick={() => notify("Drilling into 6 completed consultations today.")}
                className="text-xs text-rose-600 font-semibold mt-1 hover:underline flex items-center gap-1"
              >
                View →
              </button>
            </div>
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center border border-rose-100">
              <CheckCircle2 className="w-5 h-5" />
            </div>
          </div>

          {/* Total Pending Appointments */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200 border-l-4 border-l-sky-500 shadow-xs flex items-center justify-between">
            <div>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">TOTAL PENDING APPOINTMENTS</p>
              <p className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900 mt-1" style={{ color: '#0f172a' }}>19,983</p>
              <p className="text-xs text-sky-600 font-medium mt-1">Pending till date</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center border border-sky-100">
              <Clock className="w-5 h-5" />
            </div>
          </div>

          {/* Total Complete Appointments */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200 border-l-4 border-l-blue-600 shadow-xs flex items-center justify-between">
            <div>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">TOTAL COMPLETE APPOINTMENTS</p>
              <p className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900 mt-1" style={{ color: '#0f172a' }}>17,064</p>
              <p className="text-xs text-blue-600 font-medium mt-1">Complete till date</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
              <CheckCircle2 className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* 4 Cards Row 2: Hospital Staff, Visited Patients, OPD Pages, AWS Storage */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {/* Total Hospital Staff */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200 border-l-4 border-l-purple-500 shadow-xs flex items-center justify-between">
            <div>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">TOTAL HOSPITAL STAFF</p>
              <p className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900 mt-1" style={{ color: '#0f172a' }}>389</p>
              <p className="text-xs text-purple-600 font-medium mt-1">All staff combined</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-100">
              <Users className="w-5 h-5" />
            </div>
          </div>

          {/* Total Visited Patients */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200 border-l-4 border-l-teal-500 shadow-xs flex items-center justify-between">
            <div>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">TOTAL VISITED PATIENTS</p>
              <p className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900 mt-1" style={{ color: '#0f172a' }}>36,934</p>
              <button 
                onClick={() => notify("Accessing patient visit master registry.")}
                className="text-xs text-teal-600 font-semibold mt-1 hover:underline flex items-center gap-1"
              >
                View →
              </button>
            </div>
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center border border-teal-100">
              <Stethoscope className="w-5 h-5" />
            </div>
          </div>

          {/* Total OPD Pages */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200 border-l-4 border-l-amber-500 shadow-xs flex items-center justify-between">
            <div>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">TOTAL OPD PAGES</p>
              <p className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900 mt-1" style={{ color: '#0f172a' }}>13,764</p>
              <p className="text-xs text-amber-600 font-medium mt-1">Digitized OPD pages</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100">
              <FileText className="w-5 h-5" />
            </div>
          </div>

          {/* Total AWS Storage */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200 border-l-4 border-l-red-500 shadow-xs flex items-center justify-between">
            <div>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">TOTAL AWS STORAGE</p>
              <p className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900 mt-1" style={{ color: '#0f172a' }}>0 MB</p>
              <p className="text-xs text-rose-600 font-medium mt-1">Cumulative size</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center border border-rose-100">
              <AlertCircle className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Side-by-side Monthly Bar Charts (Image 3 exact reference) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
          {/* Chart 1: Patient Appointments - Monthly */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-sky-500 font-bold">📊</span>
                <h4 className="text-sm font-bold text-slate-900">Patient Appointments — Monthly</h4>
              </div>
              <span className="px-2.5 py-1 text-xs font-mono font-bold bg-slate-50 border border-slate-200 rounded-lg text-slate-700">
                2026
              </span>
            </div>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={[
                    { month: 'Jan', Patients: 1200 },
                    { month: 'Feb', Patients: 1350 },
                    { month: 'Mar', Patients: 1420 },
                    { month: 'Apr', Patients: 1600 },
                    { month: 'May', Patients: 1750 },
                    { month: 'Jun', Patients: 1900 },
                    { month: 'Jul', Patients: 1850 },
                    { month: 'Aug', Patients: 1700 },
                    { month: 'Sep', Patients: 2050 },
                    { month: 'Oct', Patients: 2380 },
                    { month: 'Nov', Patients: 1438 },
                    { month: 'Dec', Patients: 0 }
                  ]}
                  margin={{ top: 10, right: 10, left: -15, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.6} />
                  <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#64748b' }} stroke="#cbd5e1" />
                  <YAxis tick={{ fontSize: 11, fill: '#64748b' }} stroke="#cbd5e1" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#0f172a', 
                      borderColor: '#334155', 
                      borderRadius: '8px', 
                      fontSize: '12px',
                      color: '#fff' 
                    }} 
                  />
                  <Legend iconType="circle" wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                  <Bar dataKey="Patients" fill="#38bdf8" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Chart 2: OPD Pages - Monthly */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-amber-500 font-bold">📄</span>
                <h4 className="text-sm font-bold text-slate-900">OPD Pages — Monthly</h4>
              </div>
              <span className="px-2.5 py-1 text-xs font-mono font-bold bg-slate-50 border border-slate-200 rounded-lg text-slate-700">
                2026
              </span>
            </div>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={[
                    { month: 'Jan', Pages: 310 },
                    { month: 'Feb', Pages: 380 },
                    { month: 'Mar', Pages: 420 },
                    { month: 'Apr', Pages: 490 },
                    { month: 'May', Pages: 540 },
                    { month: 'Jun', Pages: 680 },
                    { month: 'Jul', Pages: 620 },
                    { month: 'Aug', Pages: 450 },
                    { month: 'Sep', Pages: 390 },
                    { month: 'Oct', Pages: 530 },
                    { month: 'Nov', Pages: 280 },
                    { month: 'Dec', Pages: 0 }
                  ]}
                  margin={{ top: 10, right: 10, left: -15, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.6} />
                  <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#64748b' }} stroke="#cbd5e1" />
                  <YAxis tick={{ fontSize: 11, fill: '#64748b' }} stroke="#cbd5e1" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#0f172a', 
                      borderColor: '#334155', 
                      borderRadius: '8px', 
                      fontSize: '12px',
                      color: '#fff' 
                    }} 
                  />
                  <Legend iconType="circle" wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                  <Bar dataKey="Pages" fill="#fb923c" name="OPD Pages" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
