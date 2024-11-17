import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems = [
  { 
    key: 'student-info', 
    title: 'Información Estudiantil', 
    icon: 'user',
    isRoot: true,
    items: [
      { key: 'personal-info', title: 'Datos Personales', href: paths.dashboard.personalInfo, icon: 'address-book' },
      { key: 'my-ufps', title: 'Mi UFPS', href: paths.dashboard.miUfps, icon: 'users' },
      { key: 'tuition-status', title: 'Estado Matrícula', href: paths.dashboard.tuitionStatus, icon: 'info' },
      ],
  },
  { 
    key: 'academic-info', 
    title: 'Información Académica', 
    icon: 'info',
    isRoot: true,
    items: [
      { key: 'subjects', title: 'Materias', href: paths.dashboard.subjects, icon: 'books' },
      { key: 'schedule', title: 'Horario', href: paths.dashboard.schedule, icon: 'calendar-dots' },
      { key: 'grades', title: 'Notas', href: paths.dashboard.grades, icon: 'exam' },
      { key: 'pensum', title: 'Pensum', href: paths.dashboard.pensum, icon: 'student' },
    ],
  },
  { 
    key: 'consult', 
    title: 'Consultas', 
    icon: 'question',
    isRoot: true,
    items: [
      { key: 'subjects-info', title: 'Materias', href: paths.dashboard.subjectsInfo, icon: 'notebook' },
      ],
  },
  { 
    key: 'payments', 
    title: 'Recibos de Pago', 
    icon: 'question',
    isRoot: true,
    items: [
      { key: 'certificates', title: 'Constancias', href: paths.dashboard.certificates, icon: 'invoice' },
      { key: 'payments-history', title: 'Histórico de pagos', href: paths.dashboard.paymentsHistory, icon: 'calendar-check' },
      ],
  },
  { key: 'account', title: 'Account', href: paths.dashboard.account, icon: 'user' },
  { key: 'error', title: 'Error', href: paths.errors.notFound, icon: 'x-square' },
    
] satisfies NavItemConfig[];
