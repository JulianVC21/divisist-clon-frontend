import * as React from 'react';
import type { Metadata } from 'next';

import { config } from '@/config';
import { GuestGuard } from '@/components/auth/guest-guard';
import { Layout } from '@/components/auth/layout';
import { Alert } from '@mui/material';
import { ResetPasswordForm } from '@/components/auth/reset-password-form';

export const metadata = { title: `Reset password | ${config.site.name}` } satisfies Metadata;

export default function RecoveryPasswordPage({ params }: { params: { token: string } }): React.JSX.Element {

    return (
        <Layout>
            <GuestGuard>
                <h1>Token: </h1>{params.token}
                <Alert color='info' sx={{marginTop: '10px'}}>Work in progress...</Alert>
            </GuestGuard>
        </Layout>
    );
}