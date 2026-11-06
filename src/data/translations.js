// Bilingual translations (English and Hindi) for NABH OPD Command Center

export const translations = {
  // Navigation & Headers
  appTitle: { en: "AURA Health OPD Command Center", hi: "ऑरा हेल्थ ओपीडी कमान केंद्र" },
  subTitle: { en: "NABH 5th Edition Accredited Digital Operations", hi: "एनएबीएच 5वां संस्करण प्रमाणित डिजिटल संचालन" },
  livePulse: { en: "LIVE COMMAND CENTER", hi: "लाइव कमान केंद्र" },
  commandCenterWallboard: { en: "Wallboard View", hi: "वॉलस्क्रीन दृश्य" },
  exportReport: { en: "Export Audit Report", hi: "ऑडिट रिपोर्ट निर्यात" },
  role: { en: "Role", hi: "भूमिका" },
  language: { en: "Language", hi: "भाषा" },
  theme: { en: "Theme", hi: "थीम" },
  allDepts: { en: "All Departments", hi: "सभी विभाग" },
  timeRange: { en: "Date Range", hi: "समय सीमा" },
  autoRefresh: { en: "Auto Refresh", hi: "स्वतः रीफ्रेश" },

  // Tabs
  tabExecutive: { en: "Executive Overview", hi: "कार्यकारी सारांश", icon: "LayoutDashboard" },
  tabNabh: { en: "NABH Compliance", hi: "एनएबीएच अनुपालन", icon: "ShieldCheck" },
  tabAssessment: { en: "Patient Assessment & Docs", hi: "मरीज मूल्यांकन एवं दस्तावेज", icon: "ClipboardCheck" },
  tabSafety: { en: "Patient Safety & PSQ", hi: "मरीज सुरक्षा एवं गुणवत्ता", icon: "HeartPulse" },
  tabHic: { en: "Infection Control (HIC)", hi: "संक्रमण नियंत्रण (HIC)", icon: "Sparkles" },
  tabExperience: { en: "Patient Experience & Rights", hi: "मरीज अनुभव एवं अधिकार", icon: "Smile" },
  tabDigital: { en: "Digital & Hi-Tech OPD", hi: "डिजिटल एवं हाई-टेक ओपीडी", icon: "Cpu" },
  tabDoctor: { en: "Department & Doctors", hi: "विभाग एवं चिकित्सक", icon: "Stethoscope" },
  tabRevenue: { en: "Revenue & Operations", hi: "राजस्व एवं संचालन", icon: "IndianRupee" },
  tabAlerts: { en: "Alerts & Daily Huddle", hi: "अलर्ट एवं दैनिक हडल", icon: "BellRing" },

  // Metrics
  footfallToday: { en: "Today's OPD Footfall", hi: "आज की कुल ओपीडी संख्या" },
  footfallThisWeek: { en: "This Week Footfall", hi: "इस सप्ताह की संख्या" },
  footfallMtd: { en: "Month-to-Date (MTD)", hi: "माह-दर-तारीख (MTD)" },
  footfallYtd: { en: "Year-to-Date (YTD)", hi: "वर्ष-दर-तारीख (YTD)" },
  avgWaitTime: { en: "Avg. Waiting Time", hi: "औसत प्रतीक्षा समय" },
  avgConsultTime: { en: "Avg. Consultation Time", hi: "औसत परामर्श समय" },
  totalTat: { en: "Total OPD Turnaround Time", hi: "कुल ओपीडी चक्र समय (TAT)" },
  patientSat: { en: "Patient Satisfaction", hi: "मरीज संतुष्टि स्कोर" },
  nabhReadiness: { en: "NABH Audit Readiness", hi: "एनएबीएच ऑडिट तत्परता" },
  zeroHarm: { en: "Zero Harm Status", hi: "शून्य हानि स्थिति" },
  activeAlertsCount: { en: "Active Triage Alerts", hi: "सक्रिय ट्राइएज अलर्ट" },
  newVsRepeat: { en: "New vs Repeat Patients", hi: "नए बनाम पुराने मरीज" },
  teleconsultation: { en: "Teleconsultations", hi: "दूरभाष/ऑनलाइन परामर्श" },
  emergencyConversion: { en: "Emergency Conversions", hi: "आपातकालीन भर्ती में परिवर्तित" },
  lwbsRate: { en: "Left Without Being Seen", hi: "बिना जांचे लौटे मरीज" },
  liveFlow: { en: "Real-time Patient Flow Stages", hi: "वास्तविक समय मरीज प्रवाह चरण" },

  // Buttons & Statuses
  filter: { en: "Filter", hi: "फ़िल्टर" },
  refresh: { en: "Refresh", hi: "रीफ्रेश" },
  search: { en: "Search patient, doctor, standard...", hi: "मरीज, डॉक्टर, मानक खोजें..." },
  viewAll: { en: "View All", hi: "सभी देखें" },
  close: { en: "Close", hi: "बंद करें" },
  actionRequired: { en: "Action Required", hi: "कार्रवाई आवश्यक" },
  inProgress: { en: "In Progress", hi: "प्रगति में" },
  resolved: { en: "Resolved", hi: "समाधान संपन्न" },
  optimal: { en: "Optimal", hi: "उत्कृष्ट" },
  warning: { en: "Warning", hi: "चेतावनी" },
  critical: { en: "Critical", hi: "अति-गंभीर" },
};

// Roles configured for role-based views
export const hospitalRoles = [
  { id: "leadership", label: "Hospital Leadership / CEO", labelHindi: "अस्पताल नेतृत्व / सीईओ", badgeColor: "bg-blue-600" },
  { id: "quality", label: "Quality Head & NABH Lead", labelHindi: "गुणवत्ता प्रमुख एवं एनएबीएच समन्वयक", badgeColor: "bg-teal-600" },
  { id: "opdManager", label: "OPD Operations Manager", labelHindi: "ओपीडी संचालन प्रबंधक", badgeColor: "bg-emerald-600" },
  { id: "cmo", label: "Chief Medical Officer / Doctor", labelHindi: "मुख्य चिकित्सा अधिकारी / चिकित्सक", badgeColor: "bg-purple-600" },
  { id: "nursing", label: "Chief Nursing Officer & HIC", labelHindi: "मुख्य नर्सिंग अधिकारी एवं संक्रमण नियंत्रण", badgeColor: "bg-rose-600" },
  { id: "finance", label: "Billing & Finance Head", labelHindi: "बिलिंग एवं वित्त प्रमुख", badgeColor: "bg-amber-600" },
];

