'use client'

import { motion } from 'framer-motion'
import { ChartAreaIcon, DollarSignIcon } from 'lucide-react'

export function E2ELogisticsSection() {
  return (
    <div className="mt-20 grid grid-cols-3 gap-6">
      <motion.img
        initial={{ x: 20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        src="/logistics/logistics-5.jpg"
        alt="End-to-end logistics"
        width={400}
        height={400}
        className="h-full rounded-xl object-cover"
      />

      <div className="col-span-2 flex flex-col gap-20">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex flex-col gap-2"
        >
          <h1 className="text-end text-4xl font-bold text-theme-dark">
            END-TO-END LOGISTICS AND MANAGEMENT
          </h1>
          <p className="text-end">
            So that you can easily and rapidly manage your operation, inventory
            and orders from anywhere
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="grid grid-cols-2 gap-6"
        >
          <div className="flex min-h-64 flex-col justify-between rounded-xl bg-theme-dark bg-[url('/patterns/bg.png')] bg-center p-5">
            <DollarSignIcon className="size-10 text-theme-light" />

            <p className="text-sm text-theme-light">
              Logistics the way you want it. Our software helps you pick the
              right solution to reduce unecessary costs.
            </p>

            <div className="flex flex-row items-center gap-2">
              <span className="rounded-xl border px-2 py-1 text-xs text-theme-light">
                Efficiency
              </span>
              <span className="rounded-xl border px-2 py-1 text-xs text-theme-light">
                Low cost
              </span>
            </div>
          </div>

          <div className="flex min-h-64 flex-col justify-between rounded-xl bg-theme-dark bg-[url('/patterns/bg.png')] p-5 shadow-inner">
            <ChartAreaIcon className="size-10 text-theme-light" />

            <p className="text-sm text-theme-light">
              You can easily know the status of your orders and inventory in
              real time.
            </p>

            <div className="flex flex-row items-center gap-2">
              <span className="rounded-xl border px-2 py-1 text-xs text-theme-light">
                Real-time
              </span>
              <span className="rounded-xl border px-2 py-1 text-xs text-theme-light">
                Easy to use
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
