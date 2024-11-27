'use client';

import type { User } from '@/types/user';

function generateToken(): string {
  const arr = new Uint8Array(12);
  window.crypto.getRandomValues(arr);
  return Array.from(arr, (v) => v.toString(16).padStart(2, '0')).join('');
}

const user = {
  id: 'USR-000',
  avatar: '/assets/avatar.png',
  firstName: 'Sofia',
  lastName: 'Rivers',
  email: 'sofia@devias.io',
} satisfies User;

export interface SignUpParams {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface SignInWithOAuthParams {
  provider: 'google' | 'discord';
}

export interface SignInWithPasswordParams {
  code: string;
  dni: string;
  password: string;
}

export interface AuthSessionParams {
  token: string
}

export interface ResetPasswordParams {
  email: string;
}

export interface RecoveryPasswordTokenParams {
  token: string
}

class AuthClient {

  async signUp(_: SignUpParams): Promise<{ error?: string }> {
    // Make API request

    // We do not handle the API, so we'll just generate a token and store it in localStorage.
    const token = generateToken();
    localStorage.setItem('custom-auth-token', token);

    return {};
  }

  async signInWithOAuth(_: SignInWithOAuthParams): Promise<{ error?: string }> {
    return { error: 'Social authentication not implemented' };
  }

  async signInWithPassword(params: SignInWithPasswordParams): Promise<{ error?: string }> {
    const { code, dni, password } = params;

    try {
      // Make API request
      const url = 'http://localhost:8000/api/v1/students/login/'
      const body = {
        'dni': dni,
        'career': code.substring(0, 3),
        'consecutive': code.substring(3),
        'password': password
      }
      const res = fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        }
      })
      const data = await res.then(r => r.json())
      const token = await data.access_token
      if (token) localStorage.setItem('divisist-auth-token', token);
      else throw new Error(data.message)
      return {};

    } catch (err: any) {
      return { error: err.message };
    }
  }

  async authSession(token: string | null): Promise<{ value: { auth: boolean, user?: any } }> {
    const url = 'http://localhost:8000/api/v1/students/auth_login/';
    const res = fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    });

    const data = await res.then(r => r.json())
    return await data
  }

  async checkSession(): Promise<boolean> {
    const token = localStorage.getItem('custom-auth-token');
    const isAuth = (await this.authSession(token)).value.auth;
    if (isAuth) return true;
    return false;
  }

  async resetPassword({ email }: ResetPasswordParams): Promise<{ error?: string }> {
    
    try {
      const url = 'http://localhost:8000/api/v1/users/recovery_password/'
      const body = {
        institutional_email: email,
      }
      const res = fetch(url, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
      const json = (await res).json();
      console.log(json);
      
      return {}
    } catch (error) {
      return {error: 'errorerror'}
    }
    
    return { error: 'Password reset not implemented' };
  }

  async checkRecoveryPasswordToken( { token }: RecoveryPasswordTokenParams): Promise<{ error?: string }> {
    
    const url = 'http://localhost:8000/api/v1/users/check_recovery_token/'
    const body = {
      recovery_token: token
    }
    const res = fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    });
    const json = await res.then(data => data.json());

    console.log(json);
    

    if(json.isValid) {
      return {}
    }

    return {error : ''}
  }

  async updatePassword(_: ResetPasswordParams): Promise<{ error?: string }> {
    return { error: 'Update reset not implemented' };
  }

  async getUser(): Promise<{ data?: User | null; error?: string }> {
    const token = localStorage.getItem('divisist-auth-token');
    
  
    try {
      const session = await this.authSession(token);
      if (!session.value.auth) {
        return { data: null };
      }
  
      const url = `http://localhost:8000/api/v1/students/${session.value.user}`;
      const res = await fetch(url, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!res.ok) {
        throw new Error(`Error: ${res.status} ${res.statusText}`);
      }
  
      const json = await res.json();
      const user: User = {
        id: json.id,
        name: json.name,
        lastname: json.last_name,
        email: json.personal_email,
        institutionalEmail: json.institutional_email,
        dni: json.dni,
        birthday: json.birthday,
        career: json.career,
        consecutive: json.consecutive,
        state: json.state,
      };

      console.log(json);
      
  
      return { data: user };
    } catch (error) {
      return { data: null, error: error instanceof Error ? error.message : 'Unknown error' };
    }
  }
  
  async signOut(): Promise<{ error?: string }> {
    localStorage.removeItem('divisist-auth-token');

    return {};
  }
}

export const authClient = new AuthClient();
