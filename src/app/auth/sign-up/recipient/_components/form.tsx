'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import IMask from 'imask'
import {
  Building,
  Building2Icon,
  CalendarIcon,
  GlobeIcon,
  PhoneIcon,
  TriangleAlert,
  UserIcon,
} from 'lucide-react'
import { redirect } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import ReactFlagsSelect from 'react-flags-select'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { useAuthStore } from '@/app/auth/stores/auth-store'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
// import { redirect } from 'next/navigation'
// import { useAuthStore } from '@/app/auth/stores/auth-store'

const signUpRecipientSchema = z.object({
  address: z.string().min(1, { message: 'You must inform your address!' }),
  city: z.string().min(3, { message: 'You must inform your city!' }),
  state: z.string().min(2, { message: 'You must inform your state!' }),
  country: z.string(),
  phone: z.string().min(10, { message: 'You must provide a phone number!' }),
  fullName: z.string().min(3, { message: 'You must inform your full name!' }),
  birthDate: z.date({ message: 'You must inform your birthday.' }).refine(
    (date) => {
      const now = new Date()
      const diff = now.getFullYear() - date.getFullYear()
      return diff >= 18
    },
    { message: 'You must be at least 18 years old to sign up.' },
  ),
})
type SignUpFormSchema = z.infer<typeof signUpRecipientSchema>

export function SignUpRecipientForm() {
  const { initialInfo, finishedInitialStep } = useAuthStore()

  if (!finishedInitialStep) redirect('/auth/sign-up')

  if (!initialInfo) redirect('/auth/sign-up')

  if (initialInfo.role !== 'recipient') redirect('/auth/sign-up')

  const {
    formState: { isSubmitting, errors },
    register,
    handleSubmit,
    setValue,
  } = useForm<SignUpFormSchema>({
    resolver: zodResolver(signUpRecipientSchema),
    defaultValues: {
      address: '',
      city: '',
      country: 'US',
      phone: '',
      state: '',
      fullName: '',
    },
  })

  const [country, setCountry] = useState('US')
  const phoneRef = useRef<HTMLInputElement | null>(null)

  const onSubmit = (data: SignUpFormSchema) => {
    console.log(data)
  }

  useEffect(() => {
    if (phoneRef.current) {
      const maskOptions = {
        mask: '+00 (00) 00000-0000',
      }
      const mask = IMask(phoneRef.current, maskOptions)

      mask.on('accept', () => setValue('phone', mask.value))

      return () => mask.destroy()
    }
  }, [setValue])

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-10 flex w-full flex-col gap-4 px-4"
    >
      <div className="flex flex-col gap-4">
        <h2 className="font-semibold">Identification and address</h2>
        <div className="flex w-full flex-col gap-2">
          <Label htmlFor="country">Country</Label>
          <ReactFlagsSelect
            id="country"
            selected={country}
            onSelect={(code) => {
              setCountry(code)
              setValue('country', country)
            }}
            searchable
            className="country-select"
            selectButtonClassName="country-select-button"
          />

          {errors.country && (
            <span className="flex rounded-xl border-red-400 bg-red-500/10 px-2 py-1 text-xs font-semibold text-red-500">
              <TriangleAlert className="mr-2 size-4 text-red-500" />
              {errors.country.message}
            </span>
          )}
        </div>

        <div className="flex w-full flex-col gap-2">
          <Label htmlFor="state">State</Label>
          <div className="relative">
            <GlobeIcon className="absolute left-2 top-1/2 size-4 -translate-y-1/2 text-theme-green/60" />
            <Input
              className="pl-7"
              id="state"
              placeholder="Your state..."
              {...register('state')}
            />
          </div>

          {errors.state && (
            <span className="flex rounded-xl border-red-400 bg-red-500/10 px-2 py-1 text-xs font-semibold text-red-500">
              <TriangleAlert className="mr-2 size-4 text-red-500" />
              {errors.state.message}
            </span>
          )}
        </div>

        <div className="flex flex-row items-center gap-4">
          <div className="flex w-full flex-col gap-2">
            <Label htmlFor="city">City</Label>
            <div className="relative">
              <Building className="absolute left-2 top-1/2 size-4 -translate-y-1/2 text-theme-green/60" />
              <Input
                className="pl-7"
                id="city"
                placeholder="Your city..."
                {...register('city')}
              />
            </div>

            {errors.city && (
              <span className="flex rounded-xl border-red-400 bg-red-500/10 px-2 py-1 text-xs font-semibold text-red-500">
                <TriangleAlert className="mr-2 size-4 text-red-500" />
                {errors.city.message}
              </span>
            )}
          </div>

          <div className="flex w-full flex-col gap-2">
            <Label htmlFor="city">Address</Label>
            <div className="relative">
              <Building2Icon className="absolute left-2 top-1/2 size-4 -translate-y-1/2 text-theme-green/60" />
              <Input
                className="pl-7"
                id="city"
                placeholder="Type in your full address."
                {...register('city')}
              />
            </div>

            {errors.address && (
              <span className="flex rounded-xl border-red-400 bg-red-500/10 px-2 py-1 text-xs font-semibold text-red-500">
                <TriangleAlert className="mr-2 size-4 text-red-500" />
                {errors.address.message}
              </span>
            )}
          </div>
        </div>

        <div className="flex w-full flex-col gap-2">
          <Label htmlFor="fullName">Full name</Label>
          <div className="relative">
            <UserIcon className="absolute left-2 top-1/2 size-4 -translate-y-1/2 text-theme-green/60" />
            <Input
              className="pl-7"
              id="fullName"
              placeholder="Your full name..."
              {...register('fullName')}
            />
          </div>

          {errors.fullName && (
            <span className="flex rounded-xl border-red-400 bg-red-500/10 px-2 py-1 text-xs font-semibold text-red-500">
              <TriangleAlert className="mr-2 size-4 text-red-500" />
              {errors.fullName.message}
            </span>
          )}
        </div>

        <div className="flex flex-row items-start gap-4">
          <div className="flex w-full flex-col gap-2">
            <Label htmlFor="birthDate">Your birthday</Label>
            <div className="relative">
              <CalendarIcon className="absolute left-2 top-1/2 size-4 -translate-y-1/2 text-theme-green/60" />
              <Input
                className="pl-7"
                id="birthDate"
                placeholder="Your birthday..."
                type="date"
                {...register('birthDate')}
              />
            </div>

            {errors.birthDate && (
              <span className="flex rounded-xl border-red-400 bg-red-500/10 px-2 py-1 text-xs font-semibold text-red-500">
                <TriangleAlert className="mr-2 size-4 text-red-500" />
                {errors.birthDate.message}
              </span>
            )}
          </div>

          <div className="flex w-full flex-col gap-2">
            <Label htmlFor="phone">Phone</Label>
            <div className="relative">
              <PhoneIcon className="absolute left-2 top-1/2 size-4 -translate-y-1/2 text-theme-green/60" />
              <Input
                className="pl-7"
                id="phone"
                placeholder="Your phone number"
                {...register('phone')}
                ref={phoneRef}
              />
            </div>

            {errors.phone && (
              <span className="flex rounded-xl border-red-400 bg-red-500/10 px-2 py-1 text-xs font-semibold text-red-500">
                <TriangleAlert className="mr-2 size-4 text-red-500" />
                {errors.phone.message}
              </span>
            )}
          </div>
        </div>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 rounded-xl bg-theme-green font-bold text-theme-light"
      >
        Submit
      </Button>
    </form>
  )
}
