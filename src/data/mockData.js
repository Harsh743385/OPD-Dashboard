// JIKA Hospital & Research Institute - NABH Accredited OPD Command Center Dataset
// Clean, Easy to Understand, Enterprise Healthcare Architecture (English Only)

export const hospitalInfo = {
  name: "JIKA Hospital & Research Institute",
  shortName: "JIKA Hospital",
  branch: "JIKA Hospital - Main Campus (Andheri West)",
  nabhId: "NABH-HOSP-2023-0842",
  accreditationLevel: "NABH 5th Edition Full Accreditation",
  validTill: "31 March 2027",
  opdBeds: "64 Consultation Suites | 18 Daycare Beds",
  activeDoctorsToday: 42,
  registeredNursesToday: 38,
  liveTimestamp: new Date().toISOString(),
};

// Image 4 Reference: OPD Management KPI Cards
export const opdManagementKpis = {
  totalAppointments: 1482, // scaled for full hospital, sub-selectable for branch
  totalAppointmentsDelta: "+3% vs previous period (1,438)",
  totalAppointmentsDeltaType: "up",

  scheduled: 380,
  scheduledDelta: "+12% vs previous period (340)",
  scheduledDeltaType: "up",

  checkedIn: 142,
  checkedInDelta: "+5% vs previous period (135)",
  checkedInDeltaType: "up",

  waiting: 96,
  waitingDelta: "-8% vs previous period (104)",
  waitingDeltaType: "down",

  inConsultation: 48,
  inConsultationDelta: "+4% vs previous period (46)",
  inConsultationDeltaType: "up",

  completed: 1035,
  completedDelta: "+7% vs previous period (968)",
  completedDeltaType: "up",

  cancelled: 24,
  cancelledDelta: "-18% vs previous period (29)",
  cancelledDeltaType: "down",

  noShow: 18,
  noShowDelta: "-12% vs previous period (21)",
  noShowDeltaType: "down",

  walkIn: 486,
  walkInDelta: "+9% vs previous period (446)",
  walkInDeltaType: "up",

  followUp: 574,
  followUpDelta: "+15% vs previous period (499)",
  followUpDeltaType: "up",
};

// Image 3 Reference: System Admin & Operational Footprint
export const systemFootprint = {
  totalAdmins: 8,
  hospitalAdminsNote: "Hospital super-admins active",
  todayPending: 34,
  todayComplete: 6,
  totalPendingAppointments: 19983,
  totalCompleteAppointments: 17064,
  totalHospitalStaff: 389,
  totalVisitedPatients: 36934,
  totalOpdPages: 13764,
  totalStorageMb: "2,480 MB",
};

// Image 1 & 2 Reference: Lab, Radiology, Nurse Tasks, Emergency & Staff
export const labAndRadiology = {
  laboratory: {
    pending: 35,
    critical: 0,
    overdue: 35, // >2h
    avgTat: "42 mins",
    targetTat: "45 mins",
  },
  radiology: {
    pending: 12,
    critical: 0,
    overdue: 0, // >4h
    avgTat: "38 mins",
    targetTat: "60 mins",
  }
};

export const nurseTasks = {
  assessmentsToday: 142,
  highFallRisk: 0, // Zero harm target
  highPainCount: 1, // Pain score >= 7
  pressureUlcerRisk: 0,
  notesToday: 138,
};

export const emergencySection = {
  todayEmergency: 36,
  activeEmergency: 4,
  transferredFromOpd: 3,
  statusNote: "Triage Bed 2 and 4 currently active in Daycare",
};

export const staffActivity = {
  totalStaff: 389,
  active24h: 312,
  neverLoggedIn: 4,
  byRole: [
    { role: "Hospital Administrator", count: 8, active: 8 },
    { role: "Consultant Doctor", count: 84, active: 42 },
    { role: "Registered Nurse", count: 142, active: 78 },
    { role: "Laboratory & Radiology Tech", count: 46, active: 38 },
    { role: "Pharmacy Staff", count: 28, active: 18 },
    { role: "Receptionist & Triage Desk", count: 32, active: 24 },
    { role: "Quality & NABH Coordinator", count: 6, active: 6 },
    { role: "Billing & Insurance Executive", count: 43, active: 34 },
  ]
};

// Image 4 Reference: Department Summary Table & Stacked Performance Chart
export const departmentSummary = [
  { department: "General Medicine", total: 226, done: 168, waiting: 18, inConsult: 12, canc: 4, noShow: 3 },
  { department: "Cardiology", total: 184, done: 138, waiting: 16, inConsult: 8, canc: 3, noShow: 2 },
  { department: "Orthopaedics", total: 168, done: 122, waiting: 15, inConsult: 6, canc: 2, noShow: 2 },
  { department: "Obstetrics & Gynaecology", total: 154, done: 114, waiting: 12, inConsult: 6, canc: 3, noShow: 1 },
  { department: "Paediatrics", total: 142, done: 110, waiting: 10, inConsult: 5, canc: 2, noShow: 2 },
  { department: "Dermatology", total: 128, done: 98, waiting: 8, inConsult: 4, canc: 2, noShow: 1 },
  { department: "ENT (Ear, Nose, Throat)", total: 112, done: 86, waiting: 6, inConsult: 3, canc: 2, noShow: 2 },
  { department: "Ophthalmology", total: 104, done: 82, waiting: 5, inConsult: 2, canc: 2, noShow: 1 },
  { department: "Pulmonology", total: 96, done: 74, waiting: 4, inConsult: 2, canc: 2, noShow: 2 },
  { department: "Neurology", total: 92, done: 68, waiting: 4, inConsult: 2, canc: 1, noShow: 1 },
  { department: "Medical Oncology", total: 76, done: 58, waiting: 3, inConsult: 2, canc: 1, noShow: 1 },
];

export const monthlyAppointmentsData = [
  { month: "Jan", patients: 1240, opdPages: 480 },
  { month: "Feb", patients: 1380, opdPages: 540 },
  { month: "Mar", patients: 1590, opdPages: 680 },
  { month: "Apr", patients: 1420, opdPages: 620 },
  { month: "May", patients: 1280, opdPages: 450 },
  { month: "Jun", patients: 1340, opdPages: 480 },
  { month: "Jul", patients: 1460, opdPages: 510 },
  { month: "Aug", patients: 1520, opdPages: 530 },
  { month: "Sep", patients: 1680, opdPages: 590 },
  { month: "Oct", patients: 2150, opdPages: 680 },
  { month: "Nov (Proj)", patients: 2380, opdPages: 710 },
];

// Live Patient Flow Pipeline (8 Stages)
export const livePatientFlow = [
  { id: 'reg', step: 1, name: 'Registration & Triage', count: 142, avgTat: '4.2m', status: 'optimal', maxThreshold: 200 },
  { id: 'wait', step: 2, name: 'Waiting Lounge', count: 96, avgTat: '18.2m', status: 'optimal', maxThreshold: 120 },
  { id: 'consult', step: 3, name: 'Consultation Suites', count: 48, avgTat: '14.5m', status: 'optimal', maxThreshold: 55 },
  { id: 'investigation', step: 4, name: 'Lab & Imaging', count: 68, avgTat: '24.0m', status: 'warning', maxThreshold: 60 },
  { id: 'billing', step: 5, name: 'Billing & Cashless TPA', count: 32, avgTat: '6.8m', status: 'optimal', maxThreshold: 45 },
  { id: 'pharmacy', step: 6, name: 'Pharmacy Dispensation', count: 54, avgTat: '9.4m', status: 'warning', maxThreshold: 50 },
  { id: 'completed', step: 7, name: 'Completed & Discharged', count: 1035, avgTat: '54.2m', status: 'optimal', maxThreshold: 1500 },
  { id: 'lwbs', step: 8, name: 'Left Without Being Seen (LWBS)', count: 7, avgTat: '41m wait', status: 'critical', maxThreshold: 10 },
];

// NABH 10 Chapters (English Only)
export const nabhChapters = [
  {
    code: 'AAC',
    name: 'Access, Assessment and Continuity of Care',
    compliancePct: 96.4,
    rag: 'GREEN',
    standardsCount: 14,
    elementsCount: 78,
    docsRequired: 34,
    docsUploaded: 33,
    docsPending: 1,
    lastAuditDate: '2026-10-14',
    nextAuditDate: '2026-11-20',
    closureDueDate: '2026-11-15',
    openNc: 1,
    closedNc: 12,
    leadAuditor: 'Dr. Sunita Kulkarni',
    highlights: 'Initial triage < 5 min achieved across 98% patients; 2 patient identifiers strictly verified.'
  },
  {
    code: 'COP',
    name: 'Care of Patients',
    compliancePct: 94.8,
    rag: 'GREEN',
    standardsCount: 22,
    elementsCount: 112,
    docsRequired: 52,
    docsUploaded: 50,
    docsPending: 2,
    lastAuditDate: '2026-10-18',
    nextAuditDate: '2026-11-22',
    closureDueDate: '2026-11-25',
    openNc: 2,
    closedNc: 19,
    leadAuditor: 'Dr. Tapan Mishra',
    highlights: 'High-risk patient alerts integrated into OPD vitals monitor; resuscitation kit checked daily.'
  },
  {
    code: 'MOM',
    name: 'Management of Medication',
    compliancePct: 92.1,
    rag: 'AMBER',
    standardsCount: 15,
    elementsCount: 84,
    docsRequired: 42,
    docsUploaded: 38,
    docsPending: 4,
    lastAuditDate: '2026-10-22',
    nextAuditDate: '2026-11-18',
    closureDueDate: '2026-11-12',
    openNc: 3,
    closedNc: 14,
    leadAuditor: 'Pharm. Rajesh Goyal',
    highlights: 'Look-Alike Sound-Alike (LASA) OPD stock separation verified; 4 sound-alike warnings recorded.'
  },
  {
    code: 'PRE',
    name: 'Patient Rights and Education',
    compliancePct: 98.2,
    rag: 'GREEN',
    standardsCount: 9,
    elementsCount: 46,
    docsRequired: 24,
    docsUploaded: 24,
    docsPending: 0,
    lastAuditDate: '2026-10-25',
    nextAuditDate: '2026-11-28',
    closureDueDate: '2026-11-30',
    openNc: 0,
    closedNc: 8,
    leadAuditor: 'Adv. Shalini Sharma',
    highlights: 'Patient Rights Charter prominently displayed across all OPD waiting halls and self kiosks.'
  },
  {
    code: 'HIC',
    name: 'Hospital Infection Control',
    compliancePct: 95.7,
    rag: 'GREEN',
    standardsCount: 12,
    elementsCount: 65,
    docsRequired: 38,
    docsUploaded: 37,
    docsPending: 1,
    lastAuditDate: '2026-10-29',
    nextAuditDate: '2026-11-24',
    closureDueDate: '2026-11-20',
    openNc: 1,
    closedNc: 15,
    leadAuditor: 'Dr. Neha Verma (Infection Control Officer)',
    highlights: 'Hand hygiene compliance 89.4% in OPD clinics; biomedical waste segregation at 98.2%.'
  },
  {
    code: 'PSQ',
    name: 'Patient Safety and Quality Improvement',
    compliancePct: 97.0,
    rag: 'GREEN',
    standardsCount: 16,
    elementsCount: 88,
    docsRequired: 45,
    docsUploaded: 44,
    docsPending: 1,
    lastAuditDate: '2026-10-12',
    nextAuditDate: '2026-11-16',
    closureDueDate: '2026-11-14',
    openNc: 1,
    closedNc: 18,
    leadAuditor: 'Dr. Arvind Sharma (Quality Head)',
    highlights: 'Zero sentinel events this quarter; 14 near-misses captured and root-cause resolved.'
  },
  {
    code: 'ROM',
    name: 'Responsibilities of Management',
    compliancePct: 98.5,
    rag: 'GREEN',
    standardsCount: 8,
    elementsCount: 40,
    docsRequired: 28,
    docsUploaded: 28,
    docsPending: 0,
    lastAuditDate: '2026-09-30',
    nextAuditDate: '2026-12-05',
    closureDueDate: '2026-12-10',
    openNc: 0,
    closedNc: 7,
    leadAuditor: 'Col. (Retd.) R. S. Rathore (COO)',
    highlights: 'Monthly quality review meetings documented; statutory licenses 100% updated.'
  },
  {
    code: 'FMS',
    name: 'Facility Management and Safety',
    compliancePct: 93.6,
    rag: 'GREEN',
    standardsCount: 14,
    elementsCount: 72,
    docsRequired: 40,
    docsUploaded: 37,
    docsPending: 3,
    lastAuditDate: '2026-10-08',
    nextAuditDate: '2026-11-27',
    closureDueDate: '2026-11-19',
    openNc: 2,
    closedNc: 11,
    leadAuditor: 'Eng. Vijay Deshmukh',
    highlights: 'Fire safety drill conducted on Oct 15; equipment calibration completed for 94% of OPD tools.'
  },
  {
    code: 'HRM',
    name: 'Human Resource Management',
    compliancePct: 91.8,
    rag: 'AMBER',
    standardsCount: 11,
    elementsCount: 58,
    docsRequired: 35,
    docsUploaded: 31,
    docsPending: 4,
    lastAuditDate: '2026-10-05',
    nextAuditDate: '2026-11-19',
    closureDueDate: '2026-11-15',
    openNc: 3,
    closedNc: 10,
    leadAuditor: 'Ms. Geeta Nair (HR Head)',
    highlights: 'BLS training at 92%; 3 visiting consultant credential files awaiting state council renewal.'
  },
  {
    code: 'IMS',
    name: 'Information Management System',
    compliancePct: 97.9,
    rag: 'GREEN',
    standardsCount: 10,
    elementsCount: 52,
    docsRequired: 30,
    docsUploaded: 30,
    docsPending: 0,
    lastAuditDate: '2026-10-20',
    nextAuditDate: '2026-12-01',
    closureDueDate: '2026-12-05',
    openNc: 0,
    closedNc: 9,
    leadAuditor: 'Mr. Pranav Joshi (CIO)',
    highlights: 'ABDM M1, M2, M3 certified; daily automated encrypted DB backups verified.'
  },
];

export const nabhCapaRecords = [
  { id: 'CAPA-2026-089', chapter: 'MOM', standard: 'MOM.3.b', issue: 'Antibiotic indication not documented in 14% of Paediatric OPD notes', action: 'Mandatory clinical indication field added in EMR antibiotic order screen', owner: 'Dr. Priyadarshini Patel / Pharmacy Lead', targetDate: '2026-11-12', status: 'In Progress', evidence: 'EMR release v4.8 patch notes', verified: 'Pending' },
  { id: 'CAPA-2026-084', chapter: 'FMS', standard: 'FMS.4.a', issue: 'ECG machine in OPD Suite 204 overdue for annual electrical calibration', action: 'Biomedical engineering executed calibration and certified with test sticker', owner: 'Eng. Vijay Deshmukh', targetDate: '2026-10-30', status: 'Closed', evidence: 'Calibration Certificate #BME-2026-771', verified: 'Auditor Approved' },
  { id: 'CAPA-2026-078', chapter: 'AAC', standard: 'AAC.1.d', issue: 'Triage documentation incomplete for 4 walk-in chest pain cases', action: 'Standardized Fast-Track Chest Pain Protocol deployed on nurse tablet', owner: 'Nursing Supervisor Mary Thomas', targetDate: '2026-10-20', status: 'Closed', evidence: 'Nursing Audit Checklist Oct-26', verified: 'Auditor Approved' },
  { id: 'CAPA-2026-092', chapter: 'HRM', standard: 'HRM.3.c', issue: '3 visiting specialists registration renewal pending with Medical Council', action: 'Notices issued; temp practice privileges conditional with counter-signature', owner: 'Ms. Geeta Nair', targetDate: '2026-11-15', status: 'In Progress', evidence: 'Acknowledgment slips from DMC', verified: 'Pending' },
  { id: 'CAPA-2026-095', chapter: 'HIC', standard: 'HIC.2.e', issue: 'Sharps puncture-resistant bin in Minor OT exceeded 3/4th fill line', action: 'Scheduled 2-hourly bin inspection log sheet enforced; HK lead re-trained', owner: 'Dr. Neha Verma', targetDate: '2026-11-18', status: 'Open', evidence: 'Revised HK inspection roster', verified: 'Pending' },
];

export const documentControlData = [
  { docNo: 'SOP-OPD-001', title: 'OPD Patient Registration & UHID Generation', version: 'v4.2', owner: 'OPD Manager', reviewDate: '2026-08-15', nextReview: '2027-08-15', status: 'Approved' },
  { docNo: 'SOP-OPD-014', title: 'Two Patient Identifiers Verification Protocol', version: 'v3.0', owner: 'Nursing Head', reviewDate: '2026-06-10', nextReview: '2027-06-10', status: 'Approved' },
  { docNo: 'POL-MOM-008', title: 'Look-Alike Sound-Alike (LASA) Drug Handling Policy', version: 'v5.1', owner: 'Chief Pharmacist', reviewDate: '2026-09-01', nextReview: '2027-09-01', status: 'Approved' },
  { docNo: 'REG-HIC-003', title: 'Daily OPD Environmental Cleaning & Disinfection Register', version: 'v2.0', owner: 'HIC Officer', reviewDate: '2026-10-01', nextReview: '2027-10-01', status: 'Approved' },
  { docNo: 'SOP-PSQ-011', title: 'Incident & Near-Miss Reporting Framework (RCA/CAPA)', version: 'v3.3', owner: 'Quality Head', reviewDate: '2026-07-20', nextReview: '2027-07-20', status: 'Approved' },
  { docNo: 'POL-PRE-002', title: 'Patient Rights, Responsibilities & Informed Consent', version: 'v4.0', owner: 'Medical Director', reviewDate: '2026-05-18', nextReview: '2027-05-18', status: 'Approved' },
  { docNo: 'REG-FMS-009', title: 'OPD Resuscitation Crash Cart Daily Checklist', version: 'v6.0', owner: 'Chief Nursing Officer', reviewDate: '2026-09-12', nextReview: '2027-09-12', status: 'Approved' },
];

export const trainingCompliance = [
  { course: 'Hospital Fire Safety & Evacuation (Code Red)', target: 100, completedPct: 96.5, trainedCount: 164, totalStaff: 170, status: 'On Track' },
  { course: 'Basic Life Support (BLS / CPR Certification)', target: 100, completedPct: 92.4, trainedCount: 157, totalStaff: 170, status: 'Attention' },
  { course: 'Hand Hygiene & Infection Control (HIC)', target: 100, completedPct: 98.2, trainedCount: 167, totalStaff: 170, status: 'Compliant' },
  { course: 'Biomedical Waste (BMW) Management Rules 2016', target: 100, completedPct: 95.8, trainedCount: 163, totalStaff: 170, status: 'Compliant' },
  { course: 'Patient Rights, Dignity & Soft Skills', target: 100, completedPct: 97.0, trainedCount: 165, totalStaff: 170, status: 'Compliant' },
  { course: 'Prescription Auditing & Rational Drug Usage', target: 100, completedPct: 94.1, trainedCount: 48, totalStaff: 51, status: 'On Track' },
  { course: 'ABDM / ABHA Digital EMR & Data Privacy Protocol', target: 100, completedPct: 98.8, trainedCount: 168, totalStaff: 170, status: 'Compliant' },
];

export const doctorScorecards = [
  { id: 'DOC-01', name: 'Dr. Anand Kulkarni', dept: 'General Medicine', patientsToday: 48, avgTimeMin: 13.8, rxCompleteness: 98.6, genericPct: 94.8, satScore: 4.8, followUpRate: 42, roomNo: 'Suite 104', status: 'Consulting' },
  { id: 'DOC-02', name: 'Dr. Arvind Sharma', dept: 'Cardiology', patientsToday: 42, avgTimeMin: 17.5, rxCompleteness: 99.4, genericPct: 96.2, satScore: 4.9, followUpRate: 38, roomNo: 'Suite 101', status: 'Consulting' },
  { id: 'DOC-03', name: 'Dr. Rajeshwari Rao', dept: 'Obstetrics & Gynaecology', patientsToday: 36, avgTimeMin: 18.2, rxCompleteness: 99.1, genericPct: 95.0, satScore: 4.8, followUpRate: 46, roomNo: 'Suite 201', status: 'Consulting' },
  { id: 'DOC-04', name: 'Dr. Vikramaditya Sen', dept: 'Orthopaedics', patientsToday: 44, avgTimeMin: 14.6, rxCompleteness: 97.8, genericPct: 93.4, satScore: 4.6, followUpRate: 35, roomNo: 'Suite 108', status: 'Consulting' },
  { id: 'DOC-05', name: 'Dr. Priyadarshini Patel', dept: 'Paediatrics', patientsToday: 39, avgTimeMin: 16.0, rxCompleteness: 99.8, genericPct: 97.2, satScore: 4.9, followUpRate: 51, roomNo: 'Suite 204', status: 'In Procedure' },
  { id: 'DOC-06', name: 'Dr. Kabir Mehta', dept: 'Neurology', patientsToday: 31, avgTimeMin: 22.4, rxCompleteness: 99.5, genericPct: 96.8, satScore: 4.8, followUpRate: 44, roomNo: 'Suite 112', status: 'Consulting' },
  { id: 'DOC-07', name: 'Dr. Ananya Sen', dept: 'Dermatology', patientsToday: 45, avgTimeMin: 11.2, rxCompleteness: 96.5, genericPct: 91.0, satScore: 4.7, followUpRate: 30, roomNo: 'Suite 302', status: 'On Break' },
  { id: 'DOC-08', name: 'Dr. Farhan Alvi', dept: 'Pulmonology', patientsToday: 33, avgTimeMin: 16.8, rxCompleteness: 98.9, genericPct: 95.6, satScore: 4.8, followUpRate: 39, roomNo: 'Suite 208', status: 'Consulting' },
];

export const qualityIndicators = [
  { id: 'PSI-01', metric: 'Patient Identification Verification Errors', target: 0, actual: 0, status: 'Zero Harm', unit: 'cases', trend: 'stable' },
  { id: 'PSI-02', metric: 'OPD Medication Dispensing Errors', target: '<0.1%', actual: '0.02%', status: 'Within Target', unit: '%', trend: 'improving' },
  { id: 'PSI-03', metric: 'Near-Miss Medication Interceptions', target: 'Reporting > 10', actual: '14 events', status: 'High Reporting Culture', unit: 'incidents', trend: 'positive' },
  { id: 'PSI-04', metric: 'Adverse Drug Reactions (ADR) Reported', target: 'Prompt RCA', actual: '1 mild rash', status: 'Resolved', unit: 'cases', trend: 'stable' },
  { id: 'PSI-05', metric: 'OPD Patient Slips / Trips / Falls', target: 0, actual: 0, status: 'Zero Harm', unit: 'cases', trend: 'stable' },
  { id: 'PSI-06', metric: 'Healthcare Worker Needle-Stick Injuries (NSI)', target: 0, actual: 0, status: 'Zero Harm', unit: 'cases', trend: 'stable' },
  { id: 'PSI-07', metric: 'Daycare Transfusion Reactions', target: 0, actual: 0, status: 'Zero Harm', unit: 'cases', trend: 'stable' },
  { id: 'PSI-08', metric: 'Sentinel Events (NABH Category 1)', target: 0, actual: 0, status: 'Zero Incident', unit: 'events', trend: 'stable' },
  { id: 'PSI-09', metric: 'Hand Hygiene Compliance Audit (WHO 5 Moments)', target: '>85%', actual: '89.4%', status: 'Compliant', unit: '%', trend: 'improving' },
  { id: 'PSI-10', metric: 'Bio-Medical Waste Segregation Compliance', target: '>95%', actual: '98.2%', status: 'Compliant', unit: '%', trend: 'improving' },
  { id: 'PSI-11', metric: 'Critical Lab Value Intimation to Doctor < 15 min', target: '100%', actual: '98.8%', status: 'Compliant', unit: '%', trend: 'improving' },
  { id: 'PSI-12', metric: 'Emergency Crash Cart Readiness & Defibrillator Test', target: '100%', actual: '100%', status: 'Audited Daily', unit: '%', trend: 'stable' },
];

export const bmwSegregationStats = [
  { color: 'Yellow (Infectious/Anatomical)', colorCode: '#eab308', countKg: 42.5, compliancePct: 98.5, bagTiedSecuredPct: 100, barcodeScannedPct: 99.1 },
  { color: 'Red (Contaminated Recyclable)', colorCode: '#ef4444', countKg: 68.2, compliancePct: 97.8, bagTiedSecuredPct: 98.4, barcodeScannedPct: 98.8 },
  { color: 'Blue (Glassware & Implants)', colorCode: '#3b82f6', countKg: 19.4, compliancePct: 99.0, bagTiedSecuredPct: 100, barcodeScannedPct: 99.5 },
  { color: 'White (Puncture-Proof Sharps)', colorCode: '#94a3b8', countKg: 8.6, compliancePct: 99.4, bagTiedSecuredPct: 100, barcodeScannedPct: 100.0 },
];

export const patientExperienceData = {
  nps: 71,
  overallCsat: 4.68,
  totalFeedbacksToday: 384,
  captureRatePct: 25.9,
  channelBreakdown: [
    { channel: 'Touchscreen Kiosk (Lobby/Exit)', count: 182, pct: '47.4%', avgScore: 4.7 },
    { channel: 'WhatsApp Automated Survey', count: 134, pct: '34.9%', avgScore: 4.6 },
    { channel: 'QR Code on Prescription / Bill', count: 52, pct: '13.5%', avgScore: 4.8 },
    { channel: 'In-Person / Helpdesk Form', count: 16, pct: '4.2%', avgScore: 4.4 },
  ],
  categorySatisfaction: [
    { category: 'Doctor Consultation & Attention', score: 4.85, rating: 'Outstanding' },
    { category: 'Nursing & Triage Courtesy', score: 4.74, rating: 'Excellent' },
    { category: 'Cleanliness & Restroom Hygiene', score: 4.65, rating: 'Good' },
    { category: 'Billing & Insurance Helpdesk', score: 4.42, rating: 'Satisfactory' },
    { category: 'Pharmacy Waiting Time', score: 4.15, rating: 'Needs Improvement' },
    { category: 'Digital Signage & Wayfinding', score: 4.58, rating: 'Good' },
  ],
  activeComplaints: [
    { id: 'GRV-401', uhid: 'UHID-2026-9812', dept: 'Pharmacy', issue: 'Waiting time exceeded 25 mins due to stock verification', status: 'In Review', tatHours: '1.2h elapsed', priority: 'High', owner: 'Chief Pharmacist' },
    { id: 'GRV-398', uhid: 'UHID-2026-9430', dept: 'Billing', issue: 'TPA approval delay from third-party portal', status: 'Resolved', tatHours: 'Closed in 45m', priority: 'Medium', owner: 'TPA Head' },
    { id: 'GRV-392', uhid: 'UHID-2026-8911', dept: 'Facilities', issue: 'Water dispenser on 2nd floor warm water temperature', status: 'Resolved', tatHours: 'Closed in 30m', priority: 'Low', owner: 'Eng. Vijay' },
  ],
};

export const activeAlerts = [
  {
    id: 'ALT-101',
    severity: 'critical',
    title: 'Pharmacy Queue Bottleneck - Waiting > 25 Mins',
    dept: 'Pharmacy',
    time: '12:44 PM',
    assignedTo: 'Pharm. Rajesh Goyal',
    status: 'Action Required',
    actionPrompt: 'Open Backup Dispensation Counter #4'
  },
  {
    id: 'ALT-102',
    severity: 'critical',
    title: 'Triage Critical Alert: Systolic BP 190 mmHg',
    dept: 'Emergency / Triage',
    time: '12:51 PM',
    assignedTo: 'Dr. Anand Kulkarni / Nurse Mary',
    status: 'In Progress',
    actionPrompt: 'Patient moved to Suite 101 emergency bed'
  },
  {
    id: 'ALT-103',
    severity: 'warning',
    title: 'Orthopaedics Suite 108 Wait Time Reached 28 Mins',
    dept: 'Orthopaedics',
    time: '12:35 PM',
    assignedTo: 'OPD Operations Lead',
    status: 'Monitoring',
    actionPrompt: 'Informing queue via digital display'
  },
  {
    id: 'ALT-104',
    severity: 'warning',
    title: '3 Visiting Specialists License Renewal Expiring in 10 Days',
    dept: 'NABH / HRM',
    time: '10:00 AM',
    assignedTo: 'Ms. Geeta Nair (HR)',
    status: 'Under Process',
    actionPrompt: 'Follow-up with State Medical Council'
  },
  {
    id: 'ALT-105',
    severity: 'info',
    title: 'Fire Drill Q4 Completed - Response Time 2m 14s',
    dept: 'FMS Safety',
    time: '11:15 AM',
    assignedTo: 'Eng. Vijay Deshmukh',
    status: 'Logged & Certified',
    actionPrompt: 'Report uploaded to NABH portal'
  },
];

export const revenueData = {
  totalOpdRevenue: 1842500,
  targetOpdRevenue: 1750000,
  achievementPct: 105.3,
  streamBreakdown: [
    { stream: 'Consultation Fees', amount: 845000, pct: 45.9, target: 800000 },
    { stream: 'Laboratory Diagnostics', amount: 462000, pct: 25.1, target: 440000 },
    { stream: 'Radiology & Imaging', amount: 284000, pct: 15.4, target: 270000 },
    { stream: 'OPD Procedures & Daycare', amount: 148500, pct: 8.0, target: 140000 },
    { stream: 'Pharmacy OPD Counter', amount: 103000, pct: 5.6, target: 100000 },
  ],
  billingTurnaroundTime: {
    avgTimeMin: 6.8,
    targetMin: 8.0,
    digitalSlipSentPct: 98.4,
    insuranceApprovalAvgTatMin: 18.2,
    rejectedPreAuthsToday: 2,
    refundsProcessedToday: 1,
  },
  costPerVisit: 485,
  revenuePerVisit: 1243,
  netMarginPct: 61.0,
};

export const dailyHuddleAgenda = {
  date: 'Friday, 06 November 2026',
  yesterdayHighlights: {
    totalFootfall: 1410,
    tatAvg: '52.8m',
    patientSat: '4.71/5',
    zeroHarmDay: true,
    revenueAchievedPct: 104.2,
  },
  todayTargets: {
    plannedFootfall: 1400,
    tatTarget: '<55m',
    handHygieneAuditTarget: '90%',
    digitalRxTarget: '>98%',
    incidentTarget: 'Zero Harm',
  },
  keyRisks: [
    'Peak patient surge forecasted between 11:30 AM and 1:00 PM.',
    'Pharmacy counter 4 needs additional pharmacist coverage during lunch.',
    'NABH internal audit for MOM (Medication) scheduled tomorrow morning at 09:30 AM.'
  ],
  actionOwners: [
    { task: 'Deploy extra nurse at Triage Desk 2', owner: 'Nurse Sup. Mary', status: 'Done' },
    { task: 'Pre-check LASA drug bins for internal audit', owner: 'Pharm. Rajesh', status: 'In Progress' },
    { task: 'Verify crash cart defibrillator battery seal', owner: 'BME Team', status: 'Done' },
  ]
};


// Module 3: Clinical Documentation Audit Data (English Only)
export const clinicalDocAudit = {
  overallAuditScore: 97.4,
  uhidGenerationRate: 99.8,
  twoIdentifierCheckRate: 98.6,
  demographicsCompleteness: 99.2,
  vitalsCapturedRate: 97.8,
  chiefComplaintDocumented: 99.6,
  allergyStatusDocumented: 99.1,
  allergyPositiveAlertsToday: 48,
  pastHistoryCaptured: 96.8,
  provisionalDiagnosisRate: 98.5,
  genericPrescriptionRate: 96.2,
  antibioticRationalRate: 85.4,
  drugInteractionsFlaggedToday: 14,
  drugInteractionsOverridden: 2,
  informedConsentCaptured: 100.0,
  duplicateRecordAttemptsBlocked: 6,
  incompleteRecordsPendingDoctorSign: 18,
  deptAuditScores: [
    { dept: 'Cardiology', score: 99.1, genericPct: 98.0, vitalsPct: 99.5, allergyPct: 99.8 },
    { dept: 'Paediatrics', score: 98.6, genericPct: 97.4, vitalsPct: 98.9, allergyPct: 99.2 },
    { dept: 'Oncology', score: 99.5, genericPct: 99.0, vitalsPct: 100.0, allergyPct: 100.0 },
    { dept: 'General Medicine', score: 97.2, genericPct: 96.1, vitalsPct: 98.0, allergyPct: 98.8 },
    { dept: 'Orthopaedics', score: 96.4, genericPct: 94.2, vitalsPct: 97.2, allergyPct: 98.5 },
    { dept: 'ENT', score: 95.8, genericPct: 93.5, vitalsPct: 96.4, allergyPct: 98.1 },
    { dept: 'Dermatology', score: 95.0, genericPct: 92.0, vitalsPct: 95.8, allergyPct: 97.9 },
  ]
};

// Module 5: Infection Prevention and Control (HIC) (English Only)
export const hicData = {
  handHygieneScore: 89.4,
  ppeComplianceScore: 94.2,
  cleaningChecklistCompletedPct: 98.0,
  waterSurveillanceStatus: 'All 12 Outlets Negative for Coliforms (Report: 2026-10-28)',
  airBioSurveillance: 'OPD Minor OT & Procedure Rooms Colony Count < 10 CFU/m3',
  staffImmunizationHepBPct: 97.4,
  staffInfluenzaVaccinePct: 95.8,
  sharpsBinsReplacedOnTimePct: 96.5,
  momentsCompliance: [
    { moment: '1. Before Touching Patient', score: 91.2 },
    { moment: '2. Before Clean/Aseptic Procedure', score: 96.5 },
    { moment: '3. After Body Fluid Exposure Risk', score: 98.0 },
    { moment: '4. After Touching Patient', score: 92.4 },
    { moment: '5. After Touching Patient Surroundings', score: 78.8 },
  ],
  clinicCleaningStatus: [
    { clinic: 'Suite 101-110 (Cardiology/Medicine)', morningCleaned: true, midDayCleaned: true, eveningCleaned: 'In Progress', supervisorApproved: true },
    { clinic: 'Suite 201-210 (Obs/Gynae & Paed)', morningCleaned: true, midDayCleaned: true, eveningCleaned: 'Pending', supervisorApproved: true },
    { clinic: 'Minor OT & Dressing Room', morningCleaned: true, midDayCleaned: true, eveningCleaned: 'Completed', supervisorApproved: true },
    { clinic: 'Main OPD Lounge & Restrooms', morningCleaned: true, midDayCleaned: true, eveningCleaned: 'In Progress', supervisorApproved: true },
  ]
};

// Module 7: Digital Features & AI Insights (English Only)
export const digitalFeatures = {
  abdm: {
    milestoneStatus: 'ABDM M1, M2, M3 Certified',
    abhaCreationToday: 218,
    abhaLinkedTodayPct: 82.6,
    teleconsultsConducted: 118,
    teleconsultSuccessRatePct: 98.3,
    digitalPrescriptionsGenerated: 1443,
    digitalRxAdoptionPct: 97.4,
  },
  queueManagement: {
    activeTokensTotal: 1482,
    currentServingTokens: [
      { room: 'Suite 104 (Medicine)', doctor: 'Dr. Anand Kulkarni', token: 'M-048', patientName: 'Suman L.', waitEstimate: 'Now Serving' },
      { room: 'Suite 101 (Cardiology)', doctor: 'Dr. Arvind Sharma', token: 'C-042', patientName: 'Rajesh K.', waitEstimate: 'Now Serving' },
      { room: 'Suite 108 (Ortho)', doctor: 'Dr. Vikramaditya S.', token: 'O-044', patientName: 'Anil G.', waitEstimate: 'Now Serving' },
      { room: 'Suite 201 (Gynae)', doctor: 'Dr. Rajeshwari R.', token: 'G-036', patientName: 'Pooja V.', waitEstimate: 'Now Serving' },
      { room: 'Suite 204 (Paed)', doctor: 'Dr. Priyadarshini P.', token: 'P-039', patientName: 'Master Ayaan', waitEstimate: 'Now Serving' },
      { room: 'Suite 112 (Neuro)', doctor: 'Dr. Kabir Mehta', token: 'N-031', patientName: 'Ramesh C.', waitEstimate: 'Now Serving' },
    ],
    kioskUptimePct: 99.8,
    whatsappTokenNotificationSent: 1390,
  },
  aiInsights: [
    {
      type: 'surge_alert',
      severity: 'warning',
      title: 'Predicted OPD Surge at 11:30 AM - 12:45 PM',
      desc: 'Predictive algorithm forecasts +38% patient arrival spike in Cardiology and Orthopaedics. Recommendation: Open Auxiliary Billing Counter 5 and alert Triage Nurse Team B.',
      impact: '+45 patients above baseline',
      confidence: '94% model confidence'
    },
    {
      type: 'doctor_workload',
      severity: 'info',
      title: 'Doctor Workload Balancing Opportunity',
      desc: 'Dr. Anand Kulkarni has 14 queued patients (est. 42 min wait). Dr. Sameer (Suite 106) has 3 queued patients. Auto-prompting receptionist for elective re-allocation.',
      impact: 'Will reduce wait time by 16 mins',
      confidence: '91% model confidence'
    },
    {
      type: 'clinical_flag',
      severity: 'critical',
      title: 'Abnormal Vitals Immediate Escalation Flag (3 Cases)',
      desc: 'Systolic BP > 185 mmHg flagged in Triage for Token C-052. Fast-tracked to Emergency Daycare bed 3; consultant notified via secure mobile alert.',
      impact: 'Zero delay care delivery',
      confidence: '100% clinical alert'
    },
    {
      type: 'no_show_prediction',
      severity: 'info',
      title: 'No-Show Propensity Model',
      desc: '6 out of 28 evening appointments identified with >65% no-show probability based on distance and past patterns. Automated SMS check-in sent.',
      impact: 'Saved 48 min idle room capacity',
      confidence: '88% model confidence'
    }
  ],
  digitalPaymentMix: [
    { mode: 'UPI (GPay / PhonePe / Paytm / QR)', pct: 64.2, amount: 1182885, count: 1042 },
    { mode: 'Credit / Debit Cards (POS)', pct: 21.0, amount: 386925, count: 284 },
    { mode: 'Cashless Insurance / TPA Pre-Auth', pct: 9.4, amount: 173195, count: 96 },
    { mode: 'Cash Counter', pct: 5.4, amount: 99495, count: 60 },
  ],
};

// Department Performance list for Doctor module
export const departmentPerformance = [
  { id: 'med', name: 'General Medicine', volume: 226, waitTime: 21, consultTime: 14, revenue: 242000, sat: 4.8, doctors: 6, eRxPct: 97.5, abhaPct: 84.8 },
  { id: 'cardio', name: 'Cardiology', volume: 184, waitTime: 24, consultTime: 18, revenue: 345000, sat: 4.8, doctors: 5, eRxPct: 99.2, abhaPct: 86.4 },
  { id: 'ortho', name: 'Orthopaedics', volume: 168, waitTime: 28, consultTime: 15, revenue: 290000, sat: 4.6, doctors: 4, eRxPct: 98.1, abhaPct: 83.2 },
  { id: 'obgyn', name: 'Obstetrics & Gynaecology', volume: 154, waitTime: 26, consultTime: 17, revenue: 218000, sat: 4.6, doctors: 5, eRxPct: 98.5, abhaPct: 85.0 },
  { id: 'paed', name: 'Paediatrics', volume: 142, waitTime: 16, consultTime: 16, revenue: 165000, sat: 4.9, doctors: 4, eRxPct: 96.8, abhaPct: 81.0 },
  { id: 'derm', name: 'Dermatology', volume: 128, waitTime: 18, consultTime: 11, revenue: 138000, sat: 4.7, doctors: 3, eRxPct: 96.0, abhaPct: 79.4 },
  { id: 'ent', name: 'ENT', volume: 112, waitTime: 19, consultTime: 12, revenue: 114000, sat: 4.5, doctors: 3, eRxPct: 95.4, abhaPct: 80.5 },
  { id: 'opht', name: 'Ophthalmology', volume: 104, waitTime: 22, consultTime: 13, revenue: 122000, sat: 4.6, doctors: 3, eRxPct: 97.0, abhaPct: 82.1 },
  { id: 'pulm', name: 'Pulmonology', volume: 96, waitTime: 20, consultTime: 16, revenue: 132000, sat: 4.8, doctors: 3, eRxPct: 98.4, abhaPct: 84.6 },
  { id: 'neuro', name: 'Neurology', volume: 92, waitTime: 31, consultTime: 22, revenue: 210000, sat: 4.7, doctors: 3, eRxPct: 99.0, abhaPct: 88.2 },
  { id: 'onco', name: 'Medical Oncology', volume: 76, waitTime: 25, consultTime: 24, revenue: 285000, sat: 4.9, doctors: 3, eRxPct: 100.0, abhaPct: 91.0 },
];
