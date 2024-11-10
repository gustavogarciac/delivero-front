import { SignUpDelivererForm } from './_components/form'
import { FormProgress } from './_components/form-progress'

export default function SignUpDeliverer() {
  return (
    <div className="flex h-full flex-col gap-5 overflow-y-auto p-2 lg:p-4">
      <h1 className="mx-auto text-3xl font-bold uppercase text-black lg:ml-auto">
        Delivero
      </h1>

      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="mt-2 flex w-full flex-col gap-2 px-4">
          <h2 className="text-center text-2xl font-bold text-theme-dark lg:text-left">
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
