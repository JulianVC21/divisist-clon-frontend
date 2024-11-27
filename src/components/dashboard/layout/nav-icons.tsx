import type { Icon } from '@phosphor-icons/react/dist/lib/types';
import { ChartPie as ChartPieIcon } from '@phosphor-icons/react/dist/ssr/ChartPie';
import { GearSix as GearSixIcon } from '@phosphor-icons/react/dist/ssr/GearSix';
import { PlugsConnected as PlugsConnectedIcon } from '@phosphor-icons/react/dist/ssr/PlugsConnected';
import { User as UserIcon } from '@phosphor-icons/react/dist/ssr/User';
import { Users as UsersIcon } from '@phosphor-icons/react/dist/ssr/Users';
import { XSquare } from '@phosphor-icons/react/dist/ssr/XSquare';
import { CaretDown ,Invoice, CalendarCheck, AddressBook, Info, Exam, CalendarDots, Books, Student, Question, Notebook } from '@phosphor-icons/react/dist/ssr';

export const navIcons = {
  'chart-pie': ChartPieIcon,
  'gear-six': GearSixIcon,
  'plugs-connected': PlugsConnectedIcon,
  'x-square': XSquare,
  user: UserIcon,
  users: UsersIcon,
  'address-book': AddressBook,
  'info': Info,
  'exam': Exam,
  'calendar-dots': CalendarDots,
  'books': Books,
  'student': Student,
  'question': Question,
  'notebook': Notebook,
  'invoice': Invoice,
  'calendar-check': CalendarCheck,
  'caret-down': CaretDown,
} as Record<string, Icon>;
