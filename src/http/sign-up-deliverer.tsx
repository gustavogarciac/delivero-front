'use server'

import { AxiosError } from 'axios'

import { SignUpDelivererFormSchemaType } from '@/app/auth/sign-up/deliverer/_components/form'
import { api } from '@/lib/axios'

type SignUpDelivererProps = SignUpDelivererFormSchemaType & {
  name: string
  password: string
  email: string
}

export async function signUpDeliverer(data: SignUpDelivererProps) {
  try {
    await api.post<{ access_token: string }>('/deliverers', {
      name: data.name,
      email: data.email,
      password: data.password,
      phone: data.phone,
      // TODO: ADDRESS INFO
    })

    return { success: true, message: null, errors: null }
  } catch (error) {
    if (error instanceof AxiosError) {
      const { message } = error.response?.data

      return { success: false, message, errors: null }
    }

    return {
      success: false,
      message: 'An error occurred while trying to sign up a deliverer.',
      errors: null,
    }
  }
}
