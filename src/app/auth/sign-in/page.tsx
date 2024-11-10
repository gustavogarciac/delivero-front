import { SignInForm } from './_components/form'

export default function SignIn() {
  return (
    <div className="flex h-full flex-col p-2 lg:p-4">
      <h1 className="mx-auto text-3xl font-bold uppercase text-black lg:ml-auto">
        Delivero
      </h1>

      <div className="flex flex-1 flex-col items-center lg:justify-center">
        <div className="mt-10 flex w-full flex-col gap-px px-2 lg:mt-0 lg:px-4">
          <h2 className="text-left text-2xl font-bold text-theme-dark">
            Hey, be welcome!
          </h2>
          <p className="text-sm">
            Let&apos;s log in now to access this exclusive platform.
          </p>
        </div>
        <SignInForm />
      </div>
    </div>
  )
}
