export const paths = {
  home: '/',
  auth: { signIn: '/auth/sign-in', signUp: '/auth/sign-up', resetPassword: ['/auth/reset-password', '/auth/reset-password/[token]'], },
  dashboard: {
    overview: '/dashboard',
    account: '/dashboard/account',
    customers: '/dashboard/customers',
    integrations: '/dashboard/integrations',
    settings: '/dashboard/settings',
    personalInfo: '/dashboard/personal-info',
    miUfps: '/dashboard/my-ufps',
    tuitionStatus: '/dashboard/tuition-status',
    subjects: '/dashboard/subjects',
    schedule: '/dashboard/schedule',
    grades: '/dashboard/grades',
    pensum: '/dashboard/pensum',
    subjectsInfo: '/dashboard/subjects-info',
    certificates: '/dashboard/certificates',
    paymentsHistory: '/dashboard/payments-history',

  },
  errors: { notFound: '/errors/not-found' },
} as const;
