'use client'

import { motion } from 'framer-motion'
import { LayoutGrid } from 'lucide-react'
import Image from 'next/image'

export function HowWeShip() {
  return (
    <motion.div className="mt-20 flex flex-col items-center justify-center gap-10">
      <h1 className="text-center text-4xl font-extrabold md:text-start">
        HOW WE SHIP
      </h1>

      <p className="max-w-lg text-center">
        We ship our products via air, sea, and ground. We take care of the
        entire shipping process from packaging to delivery.
      </p>

      <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-3">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{
            duration: 1,
            type: 'spring',
          }}
          className="relative h-full min-h-56 w-full overflow-hidden rounded-xl"
        >
          <LayoutGrid className="absolute right-2 top-2 size-6 rounded-full bg-theme-light fill-theme-dark px-0.5" />

          <Image
            src={'/logistics/logistics-6.jpg'}
            width={500}
            height={500}
            className="h-full min-h-56 w-full rounded-xl object-cover"
            alt=""
          />

          <span className="absolute bottom-2 left-2 rounded-xl bg-theme-light px-3 py-1 text-xs font-bold text-theme-dark">
            Plane
          </span>
        </motion.div>
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{
            duration: 1,
            type: 'spring',
          }}
          className="relative h-full min-h-56 w-full overflow-hidden rounded-xl"
        >
          <LayoutGrid className="absolute right-2 top-2 size-6 rounded-full bg-theme-light fill-theme-dark px-0.5" />

          <Image
            src={'/logistics/logistics-7.jpg'}
            width={500}
            height={500}
            className="h-full min-h-56 w-full rounded-xl object-cover"
            alt=""
          />

          <span className="absolute bottom-2 left-2 rounded-xl bg-theme-light px-3 py-1 text-xs font-bold text-theme-dark">
            Sea
          </span>
        </motion.div>
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{
            duration: 1,
            type: 'spring',
          }}
          className="relative h-full min-h-56 w-full overflow-hidden rounded-xl"
        >
          <LayoutGrid className="absolute right-2 top-2 size-6 rounded-full bg-theme-light fill-theme-dark px-0.5" />

          <Image
            src={'/logistics/logistics-8.jpg'}
            width={500}
            height={500}
            className="h-full min-h-56 w-full rounded-xl object-cover"
            alt=""
          />

          <span className="absolute bottom-2 left-2 rounded-xl bg-theme-light px-3 py-1 text-xs font-bold text-theme-dark">
            Ground
          </span>
        </motion.div>
      </div>
    </motion.div>
  )
}
