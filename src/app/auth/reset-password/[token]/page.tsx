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

// getServerSideProps para manejar la validación y los datos iniciales
export async function getServerSideProps(context: { params: { token: string } }) {
    const { token } = context.params;

    if (!token) {
        return {
            notFound: true, // Muestra una página 404 si el token no está presente
        };
    }

    const isValid = await validateToken(token);

    if (!isValid) {
        return {
            props: {
                isValid: false,
                errorMessage: 'URL de recuperación no válida.',
            },
        };
    }

    return {
        props: {
            isValid: true,
        },
    };
}

// Componente principal de la página
export default function RecoveryPasswordPage() {
  
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