'use server'

import { AxiosError } from 'axios'
import { cookies } from 'next/headers'

import { SignInFormSchema } from '@/app/auth/sign-in/_components/form'
import { api } from '@/lib/axios'

export async function signIn(data: SignInFormSchema) {
  try {
    const response = await api.post<{ access_token: string }>(
      '/sessions/deliverers',
      {
        email: data.email,
        password: data.password,
      },
    )

    const token = response.data.access_token

    ;(await cookies()).set('token', token, {
      name: 'token',
      value: token,
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })

    return { success: true, message: null, errors: null }
  } catch (error) {
    if (error instanceof AxiosError) {
      const { message } = error.response?.data

      return { success: false, message, errors: null }
    }

    return {
      success: false,
      message: 'An error occurred while trying to sign in.',
      errors: null,
    }
  }
}
