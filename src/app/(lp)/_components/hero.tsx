'use client'

import { motion } from 'framer-motion'

import { HeroImageGallery } from './hero-image-gallery'
import { HeroInfoGallery } from './hero-info-gallery'

export function Hero() {
  return (
    <div className="mt-10 flex flex-1 flex-col gap-4">
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-[3rem] font-extrabold leading-tight tracking-tighter"
      >
        MOST AFFORDABLE AND FASTEST WAY TO SHIP YOUR PRODUCTS
      </motion.h1>

      <div className="mt-auto flex flex-row items-end justify-between">
        <div className="flex flex-col">
          <HeroImageGallery />
          <motion.span
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-4 max-w-[80%] font-semibold"
          >
            Either by land, sea or air, your package will be delivery as fast as
            the wind.
          </motion.span>
        </div>

        <HeroInfoGallery />
      </div>
    </div>
  )
}
