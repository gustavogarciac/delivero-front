import Image from 'next/image'

interface AuthLayoutProps {
  children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="grid min-h-screen grid-cols-1 bg-theme-light p-3 lg:grid-cols-2">
      {/* Coluna de imagem fixa */}
      <div className="fixed bottom-3 top-3 hidden h-screen w-[48%] overflow-hidden lg:block">
        <div className="absolute inset-0 max-h-[97vh] rounded-xl bg-theme-green/10" />
        <Image
          src={'/logistics/logistics-10.jpg'}
          width={1000}
          height={1000}
          alt=""
          className="h-full max-h-[97vh] w-full rounded-xl object-cover"
        />
      </div>

      {/* Coluna de conteúdo com rolagem */}
      <div className="flex min-h-screen w-full flex-col overflow-y-auto lg:col-span-2">
        <div className="flex min-h-screen flex-col overflow-y-auto lg:ml-auto lg:w-1/2">
          {children}
        </div>
      </div>
    </div>
  )
}
