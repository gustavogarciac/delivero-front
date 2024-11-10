'use client'

import { format } from 'date-fns'
import {
  Building,
  Building2,
  CakeIcon,
  CarFront,
  CarIcon,
  CheckCircle2Icon,
  MailIcon,
  PhoneIcon,
  UserIcon,
} from 'lucide-react'
import { redirect } from 'next/navigation'

import { useAuthStore } from '@/app/auth/stores/auth-store'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function SignUpDelivererSuccess() {
  const { initialInfo, delivererInfo } = useAuthStore()

  if (!initialInfo || !delivererInfo) redirect('/auth/sign-up/deliverer')

  return (
    <div className="flex h-full flex-col gap-5 overflow-y-auto p-2 lg:p-4">
      <h1 className="mx-auto text-3xl font-bold uppercase text-black lg:ml-auto">
        Delivero
      </h1>

      <div className="flex flex-1 flex-col items-center md:mt-10">
        <span className="mb-5 flex w-full flex-row items-center gap-2 rounded-xl border-2 border-theme-green bg-theme-green/10 px-2 py-1 text-sm font-medium">
          <CheckCircle2Icon className="size-7 text-theme-green" />
          Success! You&apos;ve successfully signed up as a deliverer. 🎉
        </span>

        <div className="mt-2 flex w-full flex-col gap-2">
          <h2 className="text-center text-2xl font-bold text-theme-dark lg:text-left">
            Sign up completed!
          </h2>
          <p className="text-sm">
            Congratulations, you have successfully registered as a deliverer.
            Your registration is now under review. We will contact you very
            soon. Thank you!
          </p>

          <div className="flex flex-col gap-2 rounded-xl border-2 bg-theme-dark/[5%] p-3">
            <h3 className="text-sm font-bold text-theme-dark">
              This is the information you&apos;ve sent to review!
            </h3>

            <div className="mt-2 flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <Label htmlFor="email">E-mail</Label>
                <div className="relative">
                  <MailIcon className="absolute right-2 top-1/2 size-4 -translate-y-1/2 text-theme-green/60" />
                  <Input
                    id="email"
                    placeholder="Your email..."
                    disabled
                    value={initialInfo.email}
                    className="pl-3 opacity-100 disabled:border-theme-dark/50 disabled:bg-theme-light disabled:opacity-100"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <Label htmlFor="email">Your name</Label>
                <div className="relative">
                  <UserIcon className="absolute right-2 top-1/2 size-4 -translate-y-1/2 text-theme-green/60" />
                  <Input
                    id="name"
                    placeholder="Your name..."
                    disabled
                    value={initialInfo.name}
                    className="pl-3 opacity-100 disabled:border-theme-dark/50 disabled:bg-theme-light disabled:opacity-100"
                  />
                </div>
              </div>

              <div className="flex flex-col items-center gap-3 md:flex-row">
                <div className="flex w-full flex-col gap-1">
                  <Label htmlFor="address">Your address</Label>
                  <div className="relative">
                    <Building2 className="absolute right-2 top-1/2 size-4 -translate-y-1/2 text-theme-green/60" />
                    <Input
                      id="address"
                      placeholder="Your address..."
                      disabled
                      value={delivererInfo.address}
                      className="pl-3 opacity-100 disabled:border-theme-dark/50 disabled:bg-theme-light disabled:opacity-100"
                    />
                  </div>
                </div>
                <div className="flex w-full flex-col gap-1">
                  <Label htmlFor="city">Your city</Label>
                  <div className="relative">
                    <Building className="absolute right-2 top-1/2 size-4 -translate-y-1/2 text-theme-green/60" />
                    <Input
                      id="city"
                      placeholder="Your city..."
                      disabled
                      value={delivererInfo.city}
                      className="pl-3 opacity-100 disabled:border-theme-dark/50 disabled:bg-theme-light disabled:opacity-100"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3 md:flex-row">
                <div className="flex w-full flex-col gap-1">
                  <Label htmlFor="phone">Your phone</Label>
                  <div className="relative">
                    <PhoneIcon className="absolute right-2 top-1/2 size-4 -translate-y-1/2 text-theme-green/60" />
                    <Input
                      id="phone"
                      placeholder="Your phone..."
                      disabled
                      value={delivererInfo.phone}
                      className="pl-3 opacity-100 disabled:border-theme-dark/50 disabled:bg-theme-light disabled:opacity-100"
                    />
                  </div>
                </div>
                <div className="flex w-full flex-col gap-1">
                  <Label htmlFor="birthdate">Your birthdate</Label>
                  <div className="relative">
                    <CakeIcon className="absolute right-2 top-1/2 size-4 -translate-y-1/2 text-theme-green/60" />
                    <Input
                      id="birthdate"
                      placeholder="Your birthdate..."
                      disabled
                      value={format(
                        new Date(delivererInfo.birthdate),
                        'dd/MM/yyyy',
                      )}
                      className="pl-3 opacity-100 disabled:border-theme-dark/50 disabled:bg-theme-light disabled:opacity-100"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3 md:flex-row">
                <div className="flex w-full flex-col gap-1">
                  <Label htmlFor="driverLicense">
                    Your driver&apos;s license
                  </Label>
                  <div className="relative">
                    <CarFront className="absolute right-2 top-1/2 size-4 -translate-y-1/2 text-theme-green/60" />
                    <Input
                      id="driverLicense"
                      placeholder="Your driver's license..."
                      disabled
                      value={delivererInfo.driverLicense}
                      className="pl-3 opacity-100 disabled:border-theme-dark/50 disabled:bg-theme-light disabled:opacity-100"
                    />
                  </div>
                </div>
                <div className="flex w-full flex-col gap-1">
                  <Label htmlFor="birthdate">Have a vehicle</Label>
                  <div className="relative">
                    <CarIcon className="absolute right-2 top-1/2 size-4 -translate-y-1/2 text-theme-green/60" />
                    <Input
                      id="birthdate"
                      placeholder="Your birthdate..."
                      disabled
                      value={delivererInfo.hasVehicle ? 'Yes' : 'No'}
                      className="pl-3 opacity-100 disabled:border-theme-dark/50 disabled:bg-theme-light disabled:opacity-100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-5 text-center text-sm font-semibold text-theme-dark">
          Our team will review your application and you will receive an answer
          real soon!
        </p>
      </div>
    </div>
  )
}
