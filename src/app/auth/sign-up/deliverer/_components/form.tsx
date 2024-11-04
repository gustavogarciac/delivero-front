'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import IMask from 'imask'
import {
  Building,
  Building2Icon,
  Calendar,
  CarIcon,
  PersonStanding,
  PhoneIcon,
  TriangleAlert
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import ReactFlagsSelect from 'react-flags-select'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { useAuthStore } from '@/app/auth/stores/auth-store'
import { redirect } from 'next/navigation'

const signUpDelivererSchema = z.object({
  address: z.string().min(1, { message: "You must inform your address!"}),
  city: z.string().min(3, { message: "You must inform your city!"}),
  country: z.string(),
  phone: z.string().min(10, { message: "You must provide a phone number!"}),
  birthdate:z.date().refine((date) => {
    const now = new Date()
    const diff = now.getFullYear() - date.getFullYear()
    return diff >= 18
  }, { message: "You must be at least 18 years old."}),
  driverLicense: z.string({ message: "You must inform your driver's license." }).min(5, { message: "You must inform your driver's license."}),
  hasVehicle: z.boolean(),
})
type SignUpFormSchema = z.infer<typeof signUpDelivererSchema>

export function SignUpDelivererForm() {
  const { initialInfo, finishedInitialStep } = useAuthStore()

  if(!finishedInitialStep) redirect('/auth/sign-up')

  if(!initialInfo) redirect('/auth/sign-up')

  if(initialInfo.role !== 'deliverer') redirect('/auth/sign-up')

  const {
    formState: { isSubmitting, errors },
    register,
    handleSubmit,
    setValue,
  } = useForm<SignUpFormSchema>({
    resolver: zodResolver(signUpDelivererSchema),
    defaultValues: {
      address: '',
      city: '',
      country: 'US',
      phone: '',
      birthdate: new Date(),
      driverLicense: '',
      hasVehicle: false,
    },
  })

  const [country, setCountry] = useState('US')
  const [hasVehicle, setHasVehicle] = useState(false)
  const phoneRef = useRef<HTMLInputElement | null>(null)

  const onSubmit = (data: SignUpFormSchema) => {
    console.log(data)
  }

  const handleHasOwnVehicle = (has: boolean) => {
    setHasVehicle(has)
    setValue('hasVehicle', has)
  }

  useEffect(() => {
    if (phoneRef.current) {
      const maskOptions = {
        mask: '(00) 00000-0000', // Formato para número de telefone brasileiro, por exemplo.
      }
      const mask = IMask(phoneRef.current, maskOptions)

      mask.on('accept', () => setValue('phone', mask.value)) // Atualiza o valor do formulário ao aceitar o input.

      return () => mask.destroy()
    }
  }, [setValue])

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-10 flex w-full flex-col gap-4 px-4"
    >
      <div className="flex flex-col gap-4">
        <h2 className="font-semibold">1. Address information</h2>

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
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="font-semibold">2. Profile information</h2>

        {errors.phone && (
          <span className="flex rounded-xl border-red-400 bg-red-500/10 px-2 py-1 text-xs font-semibold text-red-500">
            <TriangleAlert className="mr-2 size-4 text-red-500" />
            {errors.phone.message}
          </span>
        )}

        {errors.birthdate && (
          <span className="flex rounded-xl border-red-400 bg-red-500/10 px-2 py-1 text-xs font-semibold text-red-500">
            <TriangleAlert className="mr-2 size-4 text-red-500" />
            {errors.birthdate.message}
          </span>
        )}

        <div className="flex flex-row items-center gap-4">
          <div className="flex w-full flex-col gap-2">
            <Label htmlFor="birthday">Your birthday</Label>
            <div className="relative">
              <Calendar className="absolute left-2 top-1/2 size-4 -translate-y-1/2 text-theme-green/60" />
              <Input
                className="pl-7"
                id="birthdate"
                placeholder="Your birthday..."
                type="date"
                {...register('birthdate')}
              />
            </div>
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
          </div>
        </div>

        <div className="flex w-full flex-col gap-2">
          <Label htmlFor="driverLicense">Your driver&apos;s license</Label>
          <div className="relative">
            <CarIcon className="absolute left-2 top-1/2 size-4 -translate-y-1/2 text-theme-green/60" />
            <Input
              className="pl-7"
              id="driverLicense"
              placeholder="Your driver license..."
              {...register('driverLicense')}
            />
          </div>

            {errors.driverLicense && (
            <span className="flex rounded-xl border-red-400 bg-red-500/10 px-2 py-1 text-xs font-semibold text-red-500">
              <TriangleAlert className="mr-2 size-4 text-red-500" />
              {errors.driverLicense.message}
            </span>
          )}
        </div>

        <div className="flex w-full flex-col gap-2">
          <Label htmlFor="driverLicense">Do you own a vehicle?</Label>
          <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => handleHasOwnVehicle(false)}
            className={cn(
              'flex min-h-10 flex-row items-center justify-center gap-2 text-sm rounded-xl border border-border/20 bg-zinc-100 px-3 py-2 hover:outline hover:outline-theme-green',
              !hasVehicle &&
                'bg-theme-green/10 outline outline-theme-green',
            )}
          >
            <PersonStanding className='size-4 text-theme-green'/>
            I don't have my own vehicle
          </button>
          <button
            type="button"
            onClick={() => handleHasOwnVehicle(true)}
            className={cn(
              'flex min-h-10 flex-row items-center justify-center gap-2 text-sm rounded-xl border border-border/20 bg-zinc-100 px-3 py-2 hover:outline hover:outline-theme-green',
              hasVehicle &&
                'bg-theme-green/10 outline outline-theme-green',
            )}
          >
            <CarIcon className='size-4 text-theme-green'/>
            I have my own vehicle
          </button>
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