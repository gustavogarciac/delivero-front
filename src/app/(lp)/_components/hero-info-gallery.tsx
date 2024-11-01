'use client'

import { motion } from 'framer-motion'
import { BoxIcon, LockIcon, TruckIcon, UsersIcon } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

import { Counter } from './counter'

export function HeroInfoGallery() {
  const [current, setCurrent] = useState(0)

  return (
    <motion.div
      initial={{ x: 20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="flex min-h-80 w-full max-w-64 flex-col gap-2 rounded-xl bg-primary-foreground/20 shadow-inner ring-2 ring-primary"
    >
      <div className="flex flex-row justify-between p-2">
        <div className="grid size-8 items-center justify-center rounded-full bg-muted ring-2 ring-primary">
          {infoGalleryContent[current].icon}
        </div>

        <Counter current={current} setCurrent={setCurrent} />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-2">
        <h3 className="font-semibold">{infoGalleryContent[current].title}</h3>
        <p className="text-xs">{infoGalleryContent[current].description}</p>

        <Image
          src={infoGalleryContent[current].image}
          alt="Logistics"
          width={200}
          height={200}
          className="mt-auto max-h-36 w-full rounded-xl"
        />
      </div>
    </motion.div>
  )
}

const infoGalleryContent = [
  {
    icon: <BoxIcon className="size-5 shrink-0 text-primary" />,
    title: 'Innovative Logistics',
    description:
      'We have the most advanced logistics system that will ensure a fast and secure delivery of your package.',
    image: '/logistics/logistics-3.jpg',
  },
  {
    icon: <TruckIcon className="size-5 shrink-0 text-primary" />,
    title: 'Fast Delivery',
    description:
      'We have the fastest delivery system that will ensure your package will arrive on time.',
    image: '/logistics/logistics-2.jpg',
  },
  {
    icon: <LockIcon className="size-5 shrink-0 text-primary" />,
    title: 'Secure Packaging',
    description:
      'We have the most secure packaging system that will ensure your package will arrive in perfect condition.',
    image: '/logistics/logistics-4.jpg',
  },
  {
    icon: <UsersIcon className="size-5 shrink-0 text-primary" />,
    title: 'Customer Support',
    description:
      'We have the best customer support system that will ensure all your questions and concerns are addressed.',
    image: '/logistics/logistics-1.jpg',
  },
]
