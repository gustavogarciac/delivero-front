import { CheckIcon, ChevronsRight } from 'lucide-react'

import { SignUpDelivererForm } from './_components/form'
import { FormProgress } from './_components/form-progress'

export default function SignUpDeliverer() {
  return (
    <div className="flex h-full flex-col overflow-y-auto p-4 gap-5">
      <h1 className="ml-auto text-3xl font-bold uppercase text-black">
        Delivero
      </h1>

      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="flex w-full flex-col gap-px px-4">
          <h2 className="text-left text-2xl font-bold text-theme-dark">
            Sign Up as a Deliverer
          </h2>
          <p className="text-sm">
            You have finished the first step of the registration process. Please
            fill in the form below to complete your registration.
          </p>
        </div>

        <FormProgress />

        <SignUpDelivererForm />
      </div>
    </div>
  )
}
