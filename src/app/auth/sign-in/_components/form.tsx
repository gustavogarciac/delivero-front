'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { LockIcon, MailIcon, TriangleAlert } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signInSchema = z.object({
  email: z.string().email({ message: 'Invalid email address.' }),
  password: z
    .string({ message: 'Password must not be empty.' })
    .min(6, { message: 'Password must contain at least 6 characters.' }),
  rememberMe: z.boolean().optional(),
})

type SignInFormSchema = z.infer<typeof signInSchema>

export function SignInForm() {
  const {
    formState: { isSubmitting, errors },
    register,
    handleSubmit,
    setValue,
  } = useForm<SignInFormSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  })

  const onSubmit = (data: SignInFormSchema) => {
    toast("You're signed in!", {
      description: 'Welcome back!',
      richColors: true,
    })
    console.log(data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-10 flex w-full flex-col gap-4 px-4"
    >
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

      <Button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 rounded-xl bg-theme-green font-bold text-theme-light"
      >
        Sign in
      </Button>

      <div className="flex flex-row items-center justify-between gap-2">
        <div className="flex flex-row items-center gap-1">
          <Checkbox
            id="remember-me"
            {...register('rememberMe')}
            onCheckedChange={(value) =>
              setValue('rememberMe', value as boolean)
            }
          />
          <span className="text-xs font-semibold text-theme-dark/60">
            Remember me
          </span>
        </div>
        <Link
          href={'/auth/forgot-password'}
          className="text-xs font-semibold text-theme-dark/60 hover:underline"
        >
          Forgot your password?
        </Link>
      </div>

      <div className="my-3 flex flex-row items-center gap-2">
        <div className="h-px flex-1 bg-theme-dark/20" />
        <span className="text-xs font-semibold text-theme-dark/60">
          Or sign in with
        </span>
        <div className="h-px flex-1 bg-theme-dark/20" />
      </div>

      <div className="flex flex-col gap-3">
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
        <span>Don&apos;t have an account yet?</span>
        <Link
          href={'/auth/sign-up'}
          className="text-theme-green hover:underline"
        >
          Sign Up
        </Link>
      </div>
    </form>
  )
}
