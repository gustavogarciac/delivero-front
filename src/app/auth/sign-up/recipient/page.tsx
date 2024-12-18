import { SignUpRecipientForm } from './_components/form'
import { FormProgress } from './_components/form-progress'

export default function SignUpRecipient() {
  return (
    <div className="flex h-full flex-col gap-5 overflow-y-auto p-2 lg:p-4">
      <h1 className="mx-auto text-3xl font-bold uppercase text-black lg:ml-auto">
        Delivero
      </h1>

      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="flex w-full flex-col gap-px px-4">
          <h2 className="text-center text-2xl font-bold text-theme-dark lg:text-left">
            Sign Up as a Recipient
          </h2>
          <p className="text-sm">
            Please, fill in the form below to create your account, so you can
            start receiving packages. If you already have an order, please sign
            in with the credentials sent to your email.
          </p>
        </div>

        <FormProgress />

        <SignUpRecipientForm />
      </div>
    </div>
  )
}
