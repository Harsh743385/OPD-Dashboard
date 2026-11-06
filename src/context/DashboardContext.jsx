import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  activeAlerts as initialAlerts, 
  nabhCapaRecords as initialCapa,
  opdManagementKpis as initialKpis,
  livePatientFlow as initialFlow,
  systemFootprint,
  labAndRadiology,
  nurseTasks,
  emergencySection,
  staffActivity,
  departmentSummary,
  hospitalInfo
} from '../data/mockData';

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [role, setRole] = useState('Admin'); // Admin, Doctor, Nurse, Quality Lead
  const [theme, setTheme] = useState('light'); // Pure clean white light mode
  const [isWallboardMode, setIsWallboardMode] = useState(false);
  
  // Enforce light mode on mount
  useEffect(() => {
    document.documentElement.classList.remove('dark');
  }, []);
  const [selectedBranch, setSelectedBranch] = useState('JIKA Hospital - Main Campus');
  const [selectedDateRange, setSelectedDateRange] = useState('This Week');
  const [selectedDepartment, setSelectedDepartment] = useState('All Departments');
  const [selectedDoctor, setSelectedDoctor] = useState('All Doctors');
  const [selectedAppointmentType, setSelectedAppointmentType] = useState('All Appointment Types');
  
  // Navigation Tabs
  const [activeTab, setActiveTab] = useState('executive'); // executive, nabh, clinical, safety, hic, experience, digital, staff, revenue, alerts
  const [searchQuery, setSearchQuery] = useState('');
  
  // Dynamic metrics state
  const [kpis, setKpis] = useState(initialKpis);
  const [patientFlow, setPatientFlow] = useState(initialFlow);
  const [alerts, setAlerts] = useState(initialAlerts);
  const [capaList, setCapaList] = useState(initialCapa);
  
  // Real-time settings
  const [lastRefreshed, setLastRefreshed] = useState(new Date());
  const [autoRefreshInterval, setAutoRefreshInterval] = useState(30);
  const [drilldownData, setDrilldownData] = useState(null);
  const [exportModalOpen, setExportModalOpen] = useState(false);
  const [quickActionNotice, setQuickActionNotice] = useState(null);

  // Sync theme with document class - clean white by default
  useEffect(() => {
    document.documentElement.classList.remove('dark');
  }, []);

  const notify = (msg) => {
    setQuickActionNotice(msg);
    setTimeout(() => setQuickActionNotice(null), 3500);
  };

  const acknowledgeAlert = (id) => {
    setAlerts(prev => prev.map(a => a.id === id ? { ...a, status: 'Acknowledged' } : a));
    notify(`Alert ${id} acknowledged and logged into incident register.`);
  };

  const resolveAlert = (id) => {
    setAlerts(prev => prev.map(a => a.id === id ? { ...a, status: 'Resolved' } : a));
    notify(`Alert ${id} marked as resolved.`);
  };

  const updateCapaStatus = (id, newStatus) => {
    setCapaList(prev => prev.map(c => c.id === id ? { ...c, status: newStatus } : c));
    notify(`CAPA ${id} updated to status: ${newStatus}`);
  };

  // Simulators
  const simulateSurgeArrival = () => {
    setKpis(prev => ({
      ...prev,
      totalAppointments: prev.totalAppointments + 8,
      walkIn: prev.walkIn + 8,
    }));
    notify("Simulated Patient Surge: 8 new walk-in arrivals registered.");
  };

  return (
    <DashboardContext.Provider value={{
      role, setRole,
      theme, setTheme,
      isWallboardMode, setIsWallboardMode,
      selectedBranch, setSelectedBranch,
      selectedDateRange, setSelectedDateRange,
      selectedDepartment, setSelectedDepartment,
      selectedDoctor, setSelectedDoctor,
      selectedAppointmentType, setSelectedAppointmentType,
      activeTab, setActiveTab,
      searchQuery, setSearchQuery,
      kpis, setKpis,
      patientFlow, setPatientFlow,
      alerts, acknowledgeAlert, resolveAlert,
      capaList, updateCapaStatus,
      systemFootprint,
      labAndRadiology,
      nurseTasks,
      emergencySection,
      staffActivity,
      departmentSummary,
      hospitalInfo,
      lastRefreshed, setLastRefreshed,
      autoRefreshInterval, setAutoRefreshInterval,
      drilldownData, setDrilldownData,
      exportModalOpen, setExportModalOpen,
      quickActionNotice, notify,
      simulateSurgeArrival
    }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => useContext(DashboardContext);
