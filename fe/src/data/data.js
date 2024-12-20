import { 
    LayoutGrid, 
    Briefcase, 
    Pentagon, 
    Users, 
    Target, 
    FileText, 
    Calculator,
    Award,
    Key,
    LogOut,
  } from 'lucide-react';

export const sidebarLinks = [
    { icon: LayoutGrid, label: 'Dashboard', path: '/dashboard' },
    { icon: Briefcase, label: 'Project', path: '/project' },
    { icon: Pentagon, label: 'Division', path: '/division' },
    { icon: Users, label: 'Members', path: '/members' },
    { icon: Target, label: 'KPI', path: '/kpi' },
    { icon: FileText, label: 'Assesment', path: '/assesment' },
    { icon: Calculator, label: 'KPI Reports', path: '/kpi-reports' },
    { icon: Calculator, label: 'SPK Calculation', path: '/spk-calculation' },
    { icon: Award, label: 'Final Result', path: '/final-result' },
    { icon: Key, label: 'Access', path: '/access' },
    { icon: LogOut, label: 'Keluar', path: '/logout' }
  ];
  