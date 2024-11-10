import { signIn } from '@/http/sign-in'

import { SignInFormSchema } from './_components/form'

export async function SignInAction(data: SignInFormSchema) {
  const state = await signIn(data)

  if (state.success === false) {
    return { success: false, message: state.message, errors: state.errors }
  }

  return { success: true, message: null, errors: null }
}
