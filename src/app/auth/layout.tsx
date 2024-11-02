import Image from 'next/image'

interface AuthLayoutProps {
  children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="grid min-h-screen grid-cols-2 bg-theme-light p-3">
      <div className="relative flex h-full flex-col">
        <div className="absolute inset-0 bg-theme-green/10" />
        <Image
          src={'/logistics/logistics-10.jpg'}
          width={1000}
          height={1000}
          alt=""
          className="h-[97vh] rounded-xl object-cover"
        />
      </div>
      <div className="flex h-full w-full flex-col">{children}</div>
    </div>
  )
}
