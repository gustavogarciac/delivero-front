'use client'

import { motion } from 'framer-motion'

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
          <div className="min-h-64 rounded-xl bg-theme-dark" />
          <div className="min-h-64 rounded-xl bg-theme-green" />
        </motion.div>
      </div>
    </div>
  )
}
