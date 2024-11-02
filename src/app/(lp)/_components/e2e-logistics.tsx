'use client'

import { motion } from 'framer-motion'
import { ChartAreaIcon, DollarSignIcon } from 'lucide-react'

export function E2ELogisticsSection() {
  return (
    <div className="mt-20 flex flex-col-reverse gap-6 md:grid md:grid-cols-3">
      <motion.img
        initial={{ x: 20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        src="/logistics/logistics-5.jpg"
        alt="End-to-end logistics"
        width={400}
        height={400}
        className="h-full max-h-96 w-full rounded-xl object-cover md:max-h-none"
      />

      <div className="col-span-2 flex flex-col gap-20">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex flex-col gap-2"
        >
          <h1 className="text-center text-4xl font-bold text-theme-dark md:text-end">
            END-TO-END LOGISTICS AND MANAGEMENT
          </h1>
          <p className="mt-5 text-center md:mt-0 md:text-end">
            So that you can easily and rapidly manage your operation, inventory
            and orders from anywhere
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          <div className="flex min-h-64 flex-col justify-between rounded-xl bg-theme-dark bg-[url('/patterns/bg.png')] bg-center p-5">
            <DollarSignIcon className="size-10 text-theme-light" />

            <p className="text-sm text-theme-light">
              Logistics the way you want it. Our software helps you pick the
              right solution to reduce unecessary costs.
            </p>

            <div className="flex flex-row items-center gap-2">
              <div className="flex h-full items-center justify-center rounded-xl border px-2 py-1">
                <span className="text-center text-xs text-theme-light">
                  Efficiency
                </span>
              </div>
              <div className="flex h-full items-center justify-center rounded-xl border px-2 py-1">
                <span className="text-center text-xs text-theme-light">
                  Low cost
                </span>
              </div>
            </div>
          </div>

          <div className="flex min-h-64 flex-col justify-between rounded-xl bg-theme-dark bg-[url('/patterns/bg.png')] p-5 shadow-inner">
            <ChartAreaIcon className="size-10 text-theme-light" />

            <p className="text-sm text-theme-light">
              You can easily know the status of your orders and inventory in
              real time.
            </p>

            <div className="flex flex-row items-center gap-2">
              <div className="flex items-center justify-center rounded-xl border px-2 py-1">
                <span className="text-center text-xs text-theme-light">
                  Real-time
                </span>
              </div>
              <div className="flex items-center justify-center rounded-xl border px-2 py-1">
                <span className="text-center text-xs text-theme-light">
                  Easy to use
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
