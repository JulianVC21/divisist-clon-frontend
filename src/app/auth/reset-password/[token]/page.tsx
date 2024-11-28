import * as React from 'react';
import type { Metadata } from 'next';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { config } from '@/config';
import { GuestGuard } from '@/components/auth/guest-guard';
import { Layout } from '@/components/auth/layout';
import { Alert } from '@mui/material';
import { authClient } from '@/lib/auth/client'
import NotFound from '@/app/not-found';

export const metadata = { title: `Reset password | ${config.site.name}` } satisfies Metadata;


async function validateToken(token: string): Promise<boolean> {
    try {
      const { error } = await authClient.checkRecoveryPasswordToken({ token });
      return error ? false : true;
    } catch (error) {
      console.error("Error al validar el token:", error);
      return false;
    }
}

// Componente principal de la página
export default async function RecoveryPasswordPage( { params }: any) {

  const { token } = await params;

  const isValidToken = await validateToken(token);

  if(!isValidToken){
    console.log('error token');
    
  }
  
    return (
      <Layout>
        <GuestGuard>
          <Alert color="info" sx={{ marginTop: '10px' }}>
            Work in progress...
          </Alert>
        </GuestGuard>
      </Layout>
    );
  }