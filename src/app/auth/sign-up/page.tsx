import { SignUpForm } from './_components/form'

export default function SignUp() {
  return (
    <div className="flex h-full flex-col p-2 lg:p-4">
      <h1 className="mx-auto text-3xl font-bold uppercase text-black lg:ml-auto">
        Delivero
      </h1>

      <div className="mt-10 flex flex-1 flex-col items-center lg:mt-0 lg:justify-center">
        <div className="flex w-full flex-col gap-px px-4">
          <h2 className="text-left text-2xl font-bold text-theme-dark">
            Let&apos; sign up.
          </h2>
          <p className="text-sm">
            Fill the form with your valid credentials to request a sign up.
          </p>
        </div>
        <SignUpForm />
      </div>
    </div>
  )
}
