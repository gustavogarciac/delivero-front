'use client'

import { BoxIcon, LockIcon, TruckIcon, UsersIcon } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

import { Counter } from './counter'

export function HeroInfoGallery() {
  const [current, setCurrent] = useState(0)

  return (
    <div className="bg-primary-foreground/20 ring-primary flex min-h-80 w-full max-w-64 flex-col gap-2 rounded-xl shadow-inner ring-2">
      <div className="flex flex-row justify-between p-2">
        <div className="bg-muted ring-primary grid size-8 items-center justify-center rounded-full ring-2">
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
    </div>
  )
}

const infoGalleryContent = [
  {
    icon: <BoxIcon className="text-primary size-5 shrink-0" />,
    title: 'Innovative Logistics',
    description:
      'We have the most advanced logistics system that will ensure a fast and secure delivery of your package.',
    image: '/logistics/logistics-3.jpg',
  },
  {
    icon: <TruckIcon className="text-primary size-5 shrink-0" />,
    title: 'Fast Delivery',
    description:
      'We have the fastest delivery system that will ensure your package will arrive on time.',
    image: '/logistics/logistics-2.jpg',
  },
  {
    icon: <LockIcon className="text-primary size-5 shrink-0" />,
    title: 'Secure Packaging',
    description:
      'We have the most secure packaging system that will ensure your package will arrive in perfect condition.',
    image: '/logistics/logistics-4.jpg',
  },
  {
    icon: <UsersIcon className="text-primary size-5 shrink-0" />,
    title: 'Customer Support',
    description:
      'We have the best customer support system that will ensure all your questions and concerns are addressed.',
    image: '/logistics/logistics-1.jpg',
  },
]
