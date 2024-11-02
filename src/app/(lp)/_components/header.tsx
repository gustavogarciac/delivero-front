'use client'

import { motion } from 'framer-motion'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

import { MobileMenu } from './mobile-menu'

export function Header() {
  return (
    <>
      <motion.header
        className={cn(
          'flex w-full flex-row items-center justify-between rounded-xl border border-border/20 p-4 shadow-sm',
        )}
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          type: 'spring',
          stiffness: 50,
          bounce: 0.25,
        }}
      >
        <span className="text-2xl font-bold">DELIVERO</span>

        <nav className="hidden md:block">
          <ul className="flex flex-row items-center gap-4">
            <motion.li
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer text-xs font-semibold uppercase text-muted-foreground transition-colors hover:text-muted"
            >
              Home
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer text-xs font-semibold uppercase text-muted-foreground transition-colors hover:text-muted"
            >
              Solutions
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer text-xs font-semibold uppercase text-muted-foreground transition-colors hover:text-muted"
            >
              Features
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer text-xs font-semibold uppercase text-muted-foreground transition-colors hover:text-muted"
            >
              Pricing
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer text-xs font-semibold uppercase text-muted-foreground transition-colors hover:text-muted"
            >
              Contact Us
            </motion.li>
          </ul>
        </nav>

        <Button className="hidden md:block">Get Started</Button>

        <MobileMenu />
      </motion.header>

      {/* <AnimatePresence>
        {scroll > 500 && (
          <motion.header
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 mx-auto flex w-full max-w-[1130px] flex-row items-center justify-between rounded-xl border border-border/20 bg-muted p-4"
          >
            <span className="text-2xl font-bold text-theme-dark">DELIVERO</span>
            <nav>
              <ul className="flex flex-row items-center gap-4">
                <motion.li
                  whileHover={{ scale: 1.05 }}
                  className="cursor-pointer text-xs font-semibold uppercase text-theme-dark transition-colors hover:text-theme-dark/60"
                >
                  Home
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.05 }}
                  className="cursor-pointer text-xs font-semibold uppercase text-theme-dark transition-colors hover:text-theme-dark/60"
                >
                  Solutions
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.05 }}
                  className="cursor-pointer text-xs font-semibold uppercase text-theme-dark transition-colors hover:text-theme-dark/60"
                >
                  Features
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.05 }}
                  className="cursor-pointer text-xs font-semibold uppercase text-theme-dark transition-colors hover:text-theme-dark/60"
                >
                  Pricing
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.05 }}
                  className="cursor-pointer text-xs font-semibold uppercase text-theme-dark transition-colors hover:text-theme-dark/60"
                >
                  Contact Us
                </motion.li>
              </ul>
            </nav>

            <Button variant={'default'} className="bg-theme-green text-muted">
              Get Started
            </Button>
          </motion.header>
        )}
      </AnimatePresence> */}
    </>
  )
}
