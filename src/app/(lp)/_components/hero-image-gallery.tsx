'use client'

import { motion } from 'framer-motion'
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export function HeroImageGallery() {
  const [step, setStep] = useState(1)

  function handleNext() {
    setStep((prev) => (prev === 2 ? 1 : prev + 1))
  }

  function handlePrev() {
    setStep((prev) => (prev === 1 ? 2 : prev - 1))
  }

  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="flex min-h-20 w-fit gap-2 overflow-hidden rounded-xl bg-muted-foreground/20"
    >
      <div className="flex flex-col border-r">
        <button
          onClick={handleNext}
          className="h-full px-3 py-2 hover:bg-muted-foreground/30"
        >
          <ArrowRightIcon className="size-5 shrink-0" />
        </button>
        <button
          onClick={handlePrev}
          className="h-full border-t px-3 py-2 hover:bg-muted-foreground/30"
        >
          <ArrowLeftIcon className="size-5 shrink-0" />
        </button>
      </div>

      <div className="flex h-full max-w-28 flex-col justify-between gap-2 p-2">
        <span className="text-xs font-bold">0{step}/02</span>
        <p className="text-xs font-semibold">
          Enjoy fast delivery on destination
        </p>
      </div>

      <div className="flex items-center justify-center p-1">
        <Image
          src={step === 1 ? '/logistic-city.webp' : '/bg-hero.webp'}
          width={150}
          height={50}
          alt="Logistic City"
          className="rounded-xl"
        />
      </div>
    </motion.div>
  )
}
