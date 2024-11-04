"use client"
import { motion } from "framer-motion";

import { CheckIcon, ChevronsRight } from "lucide-react";

export function FormProgress() {
  return (
    <div className="mt-10 flex flex-col gap-2">
          <div className="flex flex-row gap-4">
            <div className="flex flex-row items-center justify-evenly gap-4">
              <div className="flex flex-row items-center gap-2">
                <div className="flex w-fit items-center justify-center rounded-full bg-theme-green p-1">
                  <CheckIcon className="size-3 text-theme-light" />
                </div>
                <span className="text-sm font-semibold">
                  1. Basic information
                </span>
              </div>

              <ChevronsRight className="size-4 text-theme-dark" />

              <div className="flex flex-row items-center gap-2">
                <div className="flex w-fit items-center justify-center rounded-full bg-theme-dark/90 px-1.5 py-0.5 outline outline-1">
                  <span className="text-xs font-semibold text-theme-light">
                    2
                  </span>
                </div>
                <span className="text-sm font-semibold">
                  Personal identification
                </span>
              </div>

              <ChevronsRight className="size-4 text-theme-dark" />

              <div className="flex flex-row items-center gap-2">
                <div className="flex w-fit items-center justify-center rounded-full bg-theme-light px-1.5 py-0.5 outline outline-1">
                  <span className="text-xs font-semibold text-theme-dark">
                    3
                  </span>
                </div>
                <span className="text-sm font-semibold">
                  Management approval
                </span>
              </div>
            </div>
          </div>

          <div className="relative h-2 w-full rounded-xl border bg-theme-dark/10">
            <div className="absolute left-[30%] h-full w-px bg-theme-green-foreground" />
            <div className="absolute right-[30%] h-full w-px bg-theme-dark" />
            <motion.div initial={{ width: 0 }} animate={{ width: "50%" }} transition={{ delay: 0.2, duration: 0.75}} className="h-full w-1/2 rounded-xl bg-theme-green"></motion.div>
          </div>
        </div>
  )
}