'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { MenuIcon } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'

export function MobileMenu() {
  const [open, setIsOpen] = useState(false)

  function toggleMenu() {
    setIsOpen((prev) => !prev)
  }

  return (
    <div className="md:hidden">
      <Button
        onClick={toggleMenu}
        size={'icon'}
        variant={'ghost'}
        className={open ? 'bg-theme-light text-theme-dark' : ''}
      >
        <MenuIcon className="size-5" />
      </Button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, height: 0, padding: 0 }}
            className="absolute right-2 top-24 flex flex-col gap-4 rounded-xl bg-theme-light p-4"
          >
            <ul className="flex flex-col items-center gap-4">
              <motion.li
                whileHover={{ scale: 1.05 }}
                exit={{ opacity: 0 }}
                className="w-full cursor-pointer rounded-lg border px-2 py-1 text-center text-xs font-semibold uppercase text-theme-dark transition-colors hover:bg-theme-dark hover:text-theme-light"
              >
                Home
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.05 }}
                exit={{ opacity: 0 }}
                className="w-full cursor-pointer rounded-lg border px-2 py-1 text-center text-xs font-semibold uppercase text-theme-dark transition-colors hover:bg-theme-dark hover:text-theme-light"
              >
                Solutions
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.05 }}
                exit={{ opacity: 0 }}
                className="w-full cursor-pointer rounded-lg border px-2 py-1 text-center text-xs font-semibold uppercase text-theme-dark transition-colors hover:bg-theme-dark hover:text-theme-light"
              >
                Features
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.05 }}
                exit={{ opacity: 0 }}
                className="w-full cursor-pointer rounded-lg border px-2 py-1 text-center text-xs font-semibold uppercase text-theme-dark transition-colors hover:bg-theme-dark hover:text-theme-light"
              >
                Pricing
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.05 }}
                exit={{ opacity: 0 }}
                className="w-full cursor-pointer rounded-lg border px-2 py-1 text-center text-xs font-semibold uppercase text-theme-dark transition-colors hover:bg-theme-dark hover:text-theme-light"
              >
                Contact Us
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
