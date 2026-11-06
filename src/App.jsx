import React from 'react';
import { DashboardProvider, useDashboard } from './context/DashboardContext';
import { Navbar } from './components/Navbar';
import { SubNavbar } from './components/SubNavbar';
import { ExportModal } from './components/ExportModal';
import { DrilldownDrawer } from './components/DrilldownDrawer';
import { Footer } from './components/Footer';

// Modules
import { Module1Executive } from './components/modules/Module1Executive';
import { ModuleClinicalDiagnostics } from './components/modules/ModuleClinicalDiagnostics';
import { Module2Nabh } from './components/modules/Module2Nabh';
import { Module3Assessment } from './components/modules/Module3Assessment';
import { Module4Safety } from './components/modules/Module4Safety';
import { Module5Hic } from './components/modules/Module5Hic';
import { Module6Experience } from './components/modules/Module6Experience';
import { Module7Digital } from './components/modules/Module7Digital';
import { Module8Doctor } from './components/modules/Module8Doctor';
import { Module9Revenue } from './components/modules/Module9Revenue';
import { Module10Alerts } from './components/modules/Module10Alerts';

import { CheckCircle2 } from 'lucide-react';

const MainDashboard = () => {
  const { activeTab, quickActionNotice } = useDashboard();

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-slate-900">
      
      {/* Top Navbar */}
      <Navbar />

      {/* Filter Bar & Module Navigation */}
      <SubNavbar />

      {/* Main Content Area */}
      <main className="flex-1 max-w-[1920px] w-full mx-auto px-4 sm:px-6 py-5 bg-white">
        
        <div className="animate-fade-in">
          {activeTab === 'executive' && <Module1Executive />}
          {activeTab === 'clinical' && <ModuleClinicalDiagnostics />}
          {activeTab === 'nabh' && <Module2Nabh />}
          {activeTab === 'safety' && <Module4Safety />}
          {activeTab === 'hic' && <Module5Hic />}
          {activeTab === 'experience' && <Module6Experience />}
          {activeTab === 'digital' && <Module7Digital />}
          {activeTab === 'doctor' && <Module8Doctor />}
          {activeTab === 'revenue' && <Module9Revenue />}
          {activeTab === 'alerts' && <Module10Alerts />}
        </div>

      </main>

      {/* Toast Notification */}
      {quickActionNotice && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white border border-teal-500/50 px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-fade-in">
          <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0" />
          <span className="text-xs font-medium">{quickActionNotice}</span>
        </div>
      )}

      {/* Modals & Drawers */}
      <ExportModal />
      <DrilldownDrawer />

      {/* Footer */}
      <Footer />

    </div>
  );
};

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Dashboard caught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
          <div className="max-w-md p-6 bg-slate-50 border border-slate-200 rounded-2xl shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-2">Something went wrong</h2>
            <p className="text-xs text-slate-600 mb-4 font-mono bg-white p-3 rounded-lg border border-slate-200 text-left overflow-auto">
              {this.state.error?.message || "An unexpected error occurred while loading the dashboard."}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold rounded-lg shadow-xs transition-all"
            >
              Reload Dashboard
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  return (
    <ErrorBoundary>
      <DashboardProvider>
        <MainDashboard />
      </DashboardProvider>
    </ErrorBoundary>
  );
}
