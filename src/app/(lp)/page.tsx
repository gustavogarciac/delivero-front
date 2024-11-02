import { AutomateSection } from './_components/automate'
import { E2ELogisticsSection } from './_components/e2e-logistics'
import { FAQ } from './_components/faq'
import { Footer } from './_components/footer'
import { FourCardsSection } from './_components/four-cards'
import { Header } from './_components/header'
import { Hero } from './_components/hero'
import { HowWeShip } from './_components/how-we-ship'
import { LogisticsSimplified } from './_components/logistics-simplified'

export default function Page() {
  return (
    <main className="flex flex-col gap-2 p-3">
      <section className="relative mx-auto flex min-h-[40rem] w-full max-w-6xl flex-col overflow-hidden rounded-xl bg-theme-dark bg-[url('/bg-hero.webp')] bg-right p-3 text-muted">
        <div className="absolute inset-0 bg-theme-dark/90" />
        <div className="relative z-50 flex flex-1 flex-col">
          <Header />

          <Hero />
        </div>
      </section>
      <section className="relative mx-auto mt-10 flex w-full max-w-6xl flex-col overflow-hidden rounded-xl p-3 text-theme-dark">
        <LogisticsSimplified />

        <E2ELogisticsSection />

        <HowWeShip />

        <AutomateSection />

        <FourCardsSection />

        <FAQ />
      </section>

      <Footer />
    </main>
  )
}
