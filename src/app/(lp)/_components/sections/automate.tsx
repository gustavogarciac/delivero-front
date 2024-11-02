'use client'

import { motion } from 'framer-motion'
import {
  AudioLines,
  ChartColumnBig,
  CheckIcon,
  InfoIcon,
  Lightbulb,
} from 'lucide-react'
import Image from 'next/image'

export function AutomateSection() {
  return (
    <motion.div className="mt-20 flex flex-col items-center justify-center gap-10 bg-theme-green/10 p-5 md:p-10">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="flex flex-col gap-5 md:gap-3">
          <h1 className="max-w-lg text-center text-3xl font-bold uppercase md:text-left md:text-4xl">
            Automate shipping processes with AI
          </h1>

          <p className="text-center md:text-left">
            No more entering data in multiple systems. We handle it all for you.
            Your workflow will be fully automatic and you&apos;ll receive
            insights from our next generation AI model to ensure profit.
          </p>

          <ul className="flex flex-col gap-2">
            <motion.li
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                damping: 100,
                delay: 0.2,
              }}
              className="flex flex-row items-center gap-2 border-b py-3"
            >
              <CheckIcon className="size-4 text-theme-dark" />
              Automatically print labels, invoices, and BOLS
            </motion.li>
            <motion.li
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                damping: 100,
                delay: 0.2,
              }}
              className="flex flex-row items-center gap-2 border-b py-3"
            >
              <CheckIcon className="size-4 text-theme-dark" />
              Simplify return shipments
            </motion.li>
            <motion.li
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                damping: 100,
                delay: 0.2,
              }}
              className="flex flex-row items-center gap-2 border-b py-3"
            >
              <CheckIcon className="size-4 text-theme-dark" />
              Create rules to help users follow corporate policy
            </motion.li>
            <motion.li
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                damping: 100,
                delay: 0.2,
              }}
              className="flex flex-row items-center gap-2 border-b py-3"
            >
              <CheckIcon className="size-4 text-theme-dark" />
              AI insights to notify flaws of your logistics process.
            </motion.li>
          </ul>
        </div>

        <div className="relative h-full min-h-56 w-full overflow-hidden rounded-xl">
          <Image
            width={300}
            height={300}
            alt=""
            src={'/ai.jpg'}
            className="absolute h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-theme-dark/95" />

          <div className="relative z-30 flex h-full w-full flex-col gap-2 p-2">
            <div className="flex flex-row items-center gap-4">
              <div className="flex w-fit flex-row items-center gap-2 rounded-xl border px-2 py-1 font-bold text-theme-light">
                AI <AudioLines className="size-6 text-theme-green" />
              </div>

              <p className="flex flex-row items-center gap-2 text-xs text-muted-foreground/60">
                Generating insights... <Lightbulb className="size-4" />
              </p>
            </div>

            <div className="flex w-full flex-col gap-2 rounded-xl border border-theme-light/40 bg-theme-light/20 p-3">
              <div className="flex flex-row items-center gap-2">
                <div className="h-fit w-fit rounded-full bg-theme-light p-2">
                  <ChartColumnBig className="size-4" />
                </div>
                <div className="flex flex-col gap-px">
                  <h3 className="font-bold text-theme-light">Your summary</h3>
                  <p className="text-xs text-muted-foreground/80">
                    Your efficiency increased <strong>3%</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              {/* Chart */}
              <div className="flex w-full flex-col gap-2 rounded-xl border border-theme-light/40 bg-theme-light/20 p-2 md:p-3">
                <div className="grid grid-cols-7 items-end gap-1">
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    className="flex flex-col items-center"
                  >
                    <div className="min-h-20 w-full rounded-xl border border-theme-green bg-theme-green/50" />
                    <span className="text-xs font-semibold text-theme-light/70">
                      Mon
                    </span>
                  </motion.div>
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    className="flex flex-col items-center"
                  >
                    <div className="min-h-10 w-full rounded-xl border border-theme-green bg-theme-green/50" />
                    <span className="text-xs font-semibold text-theme-light/70">
                      Tue
                    </span>
                  </motion.div>
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    className="flex flex-col items-center"
                  >
                    <div className="min-h-16 w-full rounded-xl border border-theme-green bg-theme-green/50" />
                    <span className="text-xs font-semibold text-theme-light/70">
                      Wed
                    </span>
                  </motion.div>
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    className="flex flex-col items-center"
                  >
                    <div className="min-h-9 w-full rounded-xl border border-theme-green bg-theme-green/50" />
                    <span className="text-xs font-semibold text-theme-light/70">
                      Thu
                    </span>
                  </motion.div>
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    className="flex flex-col items-center"
                  >
                    <div className="min-h-24 w-full rounded-xl border border-theme-green bg-theme-green/50" />
                    <span className="text-xs font-semibold text-theme-light/70">
                      Fri
                    </span>
                  </motion.div>
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    className="flex flex-col items-center"
                  >
                    <div className="min-h-20 w-full rounded-xl border border-theme-green bg-theme-green/50" />
                    <span className="text-xs font-semibold text-theme-light/70">
                      Sat
                    </span>
                  </motion.div>
                  <motion.div className="flex flex-col items-center">
                    <div className="min-h-16 w-full rounded-xl border border-theme-green bg-theme-green/50" />
                    <span className="text-xs font-semibold text-theme-light/70">
                      Sun
                    </span>
                  </motion.div>
                </div>
              </div>

              {/* Insights */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ bounce: 100, delay: 0.3 }}
                className="flex w-full items-center gap-3 rounded-xl border border-theme-light/40 bg-theme-green/20 px-3 py-2"
              >
                <div className="size-2 shrink-0 rounded-full bg-theme-green" />
                <span className="text-sm font-semibold text-theme-light/70">
                  Expect 15% more orders next quarter—prepare resources.
                </span>
              </motion.div>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ bounce: 100, delay: 0.3 }}
                className="flex w-full items-center gap-3 rounded-xl border border-theme-light/40 bg-theme-green/20 px-3 py-2"
              >
                <div className="size-2 shrink-0 rounded-full bg-theme-green" />
                <span className="text-sm font-semibold text-theme-light/70">
                  Carrier X delays 25% more—switch to reliable options.
                </span>
              </motion.div>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ bounce: 100, delay: 0.3 }}
                className="flex w-full items-center gap-3 rounded-xl border border-theme-light/40 bg-theme-green/20 px-3 py-2"
              >
                <div className="size-2 shrink-0 rounded-full bg-theme-green" />
                <span className="text-sm font-semibold text-theme-light/70">
                  Product Y returned often—check packaging.
                </span>
              </motion.div>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ bounce: 100, delay: 0.3 }}
                className="flex w-full items-center gap-3 rounded-xl border border-theme-light/40 bg-theme-green/20 px-3 py-2"
              >
                <div className="size-2 shrink-0 rounded-full bg-theme-green" />
                <span className="text-sm font-semibold text-theme-light/70">
                  Zone C shipping high—consolidate shipments.
                </span>
              </motion.div>
            </div>

            <span className="inline-flex items-center justify-end gap-1 text-end text-xs text-muted-foreground/50">
              <InfoIcon className="size-3" />
              Check your dashboard for insight details...
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
