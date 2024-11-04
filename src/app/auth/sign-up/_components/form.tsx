'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import {
  BoxIcon,
  LockIcon,
  MailIcon,
  ShieldIcon,
  TriangleAlert,
  UserIcon,
  Users2Icon,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

import { useAuthStore } from '../../stores/auth-store'

const signUpSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: 'Your name must contain at least 3 characters' })
      .max(255, { message: 'Your name must not exceed 255 characters' }),
    email: z.string().email({ message: 'Invalid email address.' }),
    role: z.enum(['deliverer', 'recipient', 'manager']),
    password: z
      .string({ message: 'Password must not be empty.' })
      .min(6, { message: 'Password must contain at least 6 characters.' }),
    confirmPassword: z
      .string({ message: 'Password must not be empty.' })
      .min(6, { message: 'Password must contain at least 6 characters.' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })

type SignUpFormSchema = z.infer<typeof signUpSchema>

export function SignUpForm() {
  const {
    formState: { isSubmitting, errors },
    register,
    handleSubmit,
    setValue,
    getValues,
  } = useForm<SignUpFormSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      role: 'deliverer',
    },
  })

  const [role, setRole] = useState(getValues('role'))
  const { setFinishedInitialStep, setInitialInfo } = useAuthStore()
  const { push } = useRouter()

  const onSubmit = (data: SignUpFormSchema) => {
    setInitialInfo({
      name: data.name,
      email: data.email,
      password: data.password,
      role: data.role,
    })

    setFinishedInitialStep(true)
    push(`/auth/sign-up/${data.role}`)
  }

  function handleRoleChange(role: 'deliverer' | 'recipient' | 'manager') {
    setValue('role', role)
    setRole(role)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-10 flex w-full flex-col gap-4 px-4"
    >
      <div className="flex flex-col gap-2">
        <Label htmlFor="name">Name</Label>
        <div className="relative">
          <UserIcon className="absolute left-2 top-1/2 size-4 -translate-y-1/2 text-theme-green/60" />
          <Input
            className="pl-7"
            id="name"
            placeholder="Your name..."
            {...register('name')}
          />
        </div>

        {errors.name && (
          <span className="flex rounded-xl border-red-400 bg-red-500/10 px-2 py-1 text-xs font-semibold text-red-500">
            <TriangleAlert className="mr-2 size-4 text-red-500" />
            {errors.name.message}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="email">E-mail</Label>
        <div className="relative">
          <MailIcon className="absolute left-2 top-1/2 size-4 -translate-y-1/2 text-theme-green/60" />
          <Input
            className="pl-7"
            id="email"
            placeholder="Your email..."
            {...register('email')}
          />
        </div>

        {errors.email && (
          <span className="flex rounded-xl border-red-400 bg-red-500/10 px-2 py-1 text-xs font-semibold text-red-500">
            <TriangleAlert className="mr-2 size-4 text-red-500" />
            {errors.email.message}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="passowrd">Password</Label>
        <div className="relative">
          <LockIcon className="absolute left-2 top-1/2 size-4 -translate-y-1/2 text-theme-green/60" />
          <Input
            className="pl-7"
            id="password"
            placeholder="Your password..."
            type="password"
            {...register('password')}
          />
        </div>

        {errors.password && (
          <span className="flex rounded-xl border-red-400 bg-red-500/10 px-2 py-1 text-xs font-semibold text-red-500">
            <TriangleAlert className="mr-2 size-4 text-red-500" />
            {errors.password.message}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="password">Confirm Password</Label>
        <div className="relative">
          <LockIcon className="absolute left-2 top-1/2 size-4 -translate-y-1/2 text-theme-green/60" />
          <Input
            className="pl-7"
            id="confirmPassword"
            placeholder="Your password..."
            type="password"
            {...register('confirmPassword')}
          />
        </div>

        {errors.confirmPassword && (
          <span className="flex rounded-xl border-red-400 bg-red-500/10 px-2 py-1 text-xs font-semibold text-red-500">
            <TriangleAlert className="mr-2 size-4 text-red-500" />
            {errors.confirmPassword.message}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="password">
          Which role do you identify yourself as?
        </Label>

        <div className="grid grid-cols-3 gap-2">
          <button
            type="button"
            onClick={() => handleRoleChange('deliverer')}
            className={cn(
              'flex min-h-16 flex-row items-center justify-center gap-2 rounded-xl border border-border/20 bg-zinc-100 px-3 py-2 hover:outline hover:outline-theme-green',
              role === 'deliverer' &&
                'bg-theme-green/10 outline outline-theme-green',
            )}
          >
            <BoxIcon className="size-6 text-theme-green" />
            Deliverer
          </button>
          <button
            type="button"
            onClick={() => handleRoleChange('recipient')}
            className={cn(
              'flex min-h-16 flex-row items-center justify-center gap-2 rounded-xl border border-border/20 bg-zinc-100 px-3 py-2 hover:outline hover:outline-theme-green',
              role === 'recipient' &&
                'bg-theme-green/10 outline outline-theme-green',
            )}
          >
            <Users2Icon className="size-6 text-theme-green" />
            Recipient
          </button>
          <button
            type="button"
            onClick={() => handleRoleChange('manager')}
            className={cn(
              'flex min-h-16 flex-row items-center justify-center gap-2 rounded-xl border border-border/20 bg-zinc-100 px-3 py-2 hover:outline hover:outline-theme-green',
              role === 'manager' &&
                'bg-theme-green/10 outline outline-theme-green',
            )}
          >
            <ShieldIcon className="size-6 text-theme-green" />
            Manager
          </button>
        </div>

        {errors.role && (
          <span className="flex rounded-xl border-red-400 bg-red-500/10 px-2 py-1 text-xs font-semibold text-red-500">
            <TriangleAlert className="mr-2 size-4 text-red-500" />
            {errors.role.message}
          </span>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 rounded-xl bg-theme-green font-bold text-theme-light"
      >
        Proceed to the next step
      </Button>

      <div className="my-1 flex flex-row items-center gap-2">
        <div className="h-px flex-1 bg-theme-dark/20" />
        <span className="text-xs font-semibold text-theme-dark/60">
          Or continue with
        </span>
        <div className="h-px flex-1 bg-theme-dark/20" />
      </div>

      <div className="flex flex-col gap-2">
        <Button
          variant={'ghost'}
          type="button"
          className="border border-border/40 bg-zinc-100 hover:bg-zinc-50 hover:outline"
        >
          <Image
            src={'/icons/google.png'}
            width={20}
            height={20}
            alt="Google Icon"
          />
          Sign in with Google
        </Button>
        <Button
          variant={'ghost'}
          type="button"
          className="border border-border/40 bg-zinc-100 hover:bg-zinc-50 hover:outline"
        >
          <Image
            src={'/icons/apple.png'}
            width={20}
            height={20}
            alt="Apple Icon"
          />
          Sign in with Apple
        </Button>
      </div>

      <div className="mx-auto mt-5 flex flex-row gap-2 text-xs font-semibold">
        <span>Already have an account?</span>
        <Link
          href={'/auth/sign-in'}
          className="text-theme-green hover:underline"
        >
          Sign In
        </Link>
      </div>
    </form>
  )
}
