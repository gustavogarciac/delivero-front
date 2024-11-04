import Image from 'next/image';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="grid min-h-screen grid-cols-2 bg-theme-light p-3">
      {/* Coluna de imagem fixa */}
      <div className="h-screen fixed w-[48%] top-3 bottom-3 overflow-hidden">
        <div className="absolute inset-0 bg-theme-green/10 max-h-[97vh] rounded-xl" />
        <Image
          src={'/logistics/logistics-10.jpg'}
          width={1000}
          height={1000}
          alt=""
          className="h-full w-full rounded-xl object-cover max-h-[97vh]"
        />
      </div>

      {/* Coluna de conteúdo com rolagem */}
      <div className="flex min-h-screen w-full col-span-2 flex-col overflow-y-auto">
        <div className='flex flex-col min-h-screen w-1/2 overflow-y-auto ml-auto'>
          {children}
        </div>
      </div>
    </div>
  );
}
