import * as React from 'react'
import { authClient } from '@/lib/auth/client'

async function validateToken(token: string) {
    try {
      const { error } = await authClient.checkRecoveryPasswordToken({ token });
      return error? false : true;
    } catch (error) {
      console.error("Error al validar el token:", error);
      return false;
    }
}

export async function NewPasswordForm({ params }: { params: { token: string} }): Promise<React.JSX.Element> {
    
    const isValid = await validateToken(params.token)
    if(!isValid) {
        return ( 
        <>
            <h1>Token not found</h1>
        </> 
        )
    } 
    
    return (
        <>
            <h1>{params.token}</h1>
        </>
    )
}