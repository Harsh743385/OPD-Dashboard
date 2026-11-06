import React from 'react';
import { hospitalInfo } from '../data/mockData';
import { ShieldCheck, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="mt-12 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
        
        {/* Left: Hospital Accreditation Statement */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-teal-50 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center flex-shrink-0">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <p className="font-semibold text-slate-800 dark:text-slate-200">
              {hospitalInfo.name} • {hospitalInfo.accreditationLevel}
            </p>
            <p className="text-[11px] text-slate-400">
              Accreditation Ref: {hospitalInfo.nabhId} • Valid Till: {hospitalInfo.validTill}
            </p>
          </div>
        </div>

        {/* Center/Right: Requested Signature */}
        <div className="flex items-center gap-2 text-center sm:text-right">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-300">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
            <span>by <strong className="text-slate-900 dark:text-white font-semibold">Harsh</strong></span>
            <span className="text-slate-400">|</span>
            <span className="text-teal-600 dark:text-teal-400 font-semibold">Lead Architect</span>
            <span className="text-slate-400">·</span>
            <span className="font-mono">© 2026</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
