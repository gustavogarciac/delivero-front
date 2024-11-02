'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, BoxIcon, Container, StarIcon } from 'lucide-react'
import Image from 'next/image'

export function LogisticsSimplified() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="flex flex-col items-center justify-center gap-10"
    >
      <h1 className="text-[2rem] font-extrabold text-theme-dark">
        LOGISTICS SOLUTIONS SIMPLIFIED
      </h1>
      <p className="max-w-[40rem] text-center">
        We are committed to ensuring that your goods are delivered on time and
        in perfect condition. We will work with you to find the perfect solution
        for your needs.
      </p>
      <motion.button
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="flex items-center justify-center gap-2 rounded-full border px-2 py-1"
      >
        Get Started!{' '}
        <ArrowUpRight className="size-5 rounded-full bg-theme-green text-theme-light" />
      </motion.button>

      <div className="relative flex w-full overflow-hidden rounded-xl">
        <Image
          src={'/logistics/logistics-4.jpg'}
          width={900}
          height={400}
          alt="Logistics"
          className="aspect-video max-h-96 w-full rounded-xl object-cover"
        />

        <div className="absolute right-0 top-0 h-full w-[900px] bg-theme-dark/40" />

        <Image
          src={'/logistics/logistics-3.jpg'}
          width={400}
          height={400}
          alt=""
          className="absolute left-0 top-0 h-full max-h-[400px] rounded-xl object-cover"
        />

        <div className="absolute left-0 top-0 h-full w-[400px] rounded-xl border-r-2 border-theme-green/40 bg-theme-dark/80" />

        <div className="absolute left-0 top-0 z-10 h-full w-[400px] rounded-xl p-4">
          <h2 className="mt-5 text-center text-2xl font-extrabold text-muted">
            Effortless Global Shipping
          </h2>

          <p className="mx-auto mt-5 font-semibold text-muted-foreground">
            Utilize our efficient logistics and expansive network to ship your
            goods to any part of the world.
          </p>

          <div className="mt-4 flex flex-row items-center gap-2">
            <BoxIcon className="size-10 rounded-full border px-2 py-1 text-muted" />
            <StarIcon className="size-10 rounded-full border px-2 py-1 text-muted" />
            <Container className="size-10 rounded-full border px-2 py-1 text-muted" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
