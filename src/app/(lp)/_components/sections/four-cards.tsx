'use client'

import { motion } from 'framer-motion'
import { Container, CopyIcon, FlagIcon, TruckIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function FourCardsSection() {
  return (
    <motion.div className="mt-20 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-1">
        <span className="text-center font-semibold">
          CREATE DOCUMENTS AND MORE
        </span>
        <h1 className="text-center text-4xl font-bold leading-tight">
          COMBINE TRANSPORT SHIPPING
        </h1>

        <p className="max-w-lg text-center">
          We have onlly one goal, which is that you will never have to worry
          about logistics again. We do the hard work!
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-[800px] grid-cols-1 gap-5 md:grid-cols-2">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 20, opacity: 1 }}
          transition={{ bounce: 100, delay: 0.2 }}
          className="flex flex-col gap-5 rounded-xl bg-theme-dark p-5 text-theme-light"
        >
          <CopyIcon />
          <h2 className="text-2xl font-bold">Door to Door</h2>
          <p>Ship domestically via Parcel, FTL or Truckload</p>

          <Button variant={'ghost'} className="mt-auto w-fit self-end">
            Learn More
          </Button>
        </motion.div>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 20, opacity: 1 }}
          transition={{ bounce: 100, delay: 0.2 }}
          className="flex flex-col gap-5 rounded-xl bg-theme-dark p-5 text-theme-light"
        >
          <TruckIcon />
          <h2 className="text-2xl font-bold">Door to Port</h2>
          <p>Consolidate your shipments for export</p>

          <Button variant={'ghost'} className="mt-auto w-fit self-end">
            Learn More
          </Button>
        </motion.div>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 20, opacity: 1 }}
          transition={{ bounce: 100, delay: 0.2 }}
          className="flex flex-col gap-5 rounded-xl bg-theme-dark p-5 text-theme-light"
        >
          <Container />
          <h2 className="text-2xl font-bold">Port to Port</h2>
          <p>Delivero handles international freight seamlessly</p>

          <Button variant={'ghost'} className="mt-auto w-fit self-end">
            Learn More
          </Button>
        </motion.div>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 20, opacity: 1 }}
          transition={{ bounce: 100, delay: 0.2 }}
          className="flex flex-col gap-5 rounded-xl bg-theme-dark p-5 text-theme-light"
        >
          <FlagIcon />
          <h2 className="text-2xl font-bold">Port to Door</h2>
          <p>Import goods or raw materials and track them all the way in</p>

          <Button variant={'ghost'} className="mt-auto w-fit self-end">
            Learn More
          </Button>
        </motion.div>
      </div>
    </motion.div>
  )
}
