import { Button } from '@/components/ui/button'

import { HeroImageGallery } from './_components/hero-image-gallery'
import { HeroInfoGallery } from './_components/hero-info-gallery'

export default function Page() {
  return (
    <main className="flex flex-col gap-2 p-3">
      <div className="bg-theme-dark text-muted relative mx-auto flex min-h-[40rem] w-full max-w-6xl flex-col overflow-hidden rounded-xl bg-[url('/bg-hero.webp')] bg-right p-3">
        <div className="bg-theme-dark/90 absolute inset-0" />
        <div className="relative z-50 flex flex-1 flex-col">
          <header className="border-border/20 flex w-full flex-row items-center justify-between rounded-xl border p-4">
            <span className="text-2xl font-bold">DELIVERO</span>
            <nav>
              <ul className="flex flex-row items-center gap-4">
                <li className="text-muted-foreground hover:text-muted text-xs font-semibold uppercase transition-colors">
                  Home
                </li>
                <li className="text-muted-foreground hover:text-muted text-xs font-semibold uppercase transition-colors">
                  Solutions
                </li>
                <li className="text-muted-foreground hover:text-muted text-xs font-semibold uppercase transition-colors">
                  Features
                </li>
                <li className="text-muted-foreground hover:text-muted text-xs font-semibold uppercase transition-colors">
                  Pricing
                </li>
                <li className="text-muted-foreground hover:text-muted text-xs font-semibold uppercase transition-colors">
                  Contact Us
                </li>
              </ul>
            </nav>

            <Button>Get Started</Button>
          </header>

          <div className="mt-10 flex flex-1 flex-col gap-4">
            <h1 className="text-[3rem] font-extrabold leading-tight tracking-tighter">
              MOST AFFORDABLE AND FASTEST WAY TO SHIP YOUR PRODUCTS
            </h1>

            <div className="mt-auto flex flex-row items-end justify-between">
              <div className="flex flex-col">
                <HeroImageGallery />
                <span className="mt-4 max-w-[80%] font-semibold">
                  Either by land, sea or air, your package will be delivery as
                  fast as the wind.
                </span>
              </div>

              <HeroInfoGallery />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
