'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { useAuthStore } from '../../stores/deliverer-auth-store'

export default function SignUpRecipient() {
  const { initialInfo, finishedInitialStep } = useAuthStore()

  const { push } = useRouter()

  useEffect(() => {
    if (!finishedInitialStep || initialInfo.role !== 'recipient') {
      push('/auth/sign-up')
    }
  }, [finishedInitialStep, initialInfo.role, push])

  // Retorna null se as condições de navegação não forem atendidas
  if (!finishedInitialStep || initialInfo.role !== 'recipient') {
    return null
  }

  return (
    <div className="flex flex-col gap-5 p-10">
      <span>{initialInfo.name}</span>
      <span>{initialInfo.email}</span>
      <span>{initialInfo.password}</span>
      <span>{initialInfo.role}</span>
    </div>
  )
}
