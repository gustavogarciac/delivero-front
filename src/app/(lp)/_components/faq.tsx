'use client'

import { motion } from 'framer-motion'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function FAQ() {
  return (
    <motion.div className="mt-20 flex flex-col items-start justify-center gap-10 md:flex-row">
      <motion.h1
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center text-4xl font-bold uppercase md:text-left"
      >
        Frequently Ask Questions
      </motion.h1>

      <Accordion type="single" className="w-full">
        {accordions.map((acc) => (
          <AccordionItem value={acc.value} key={acc.value} className="w-full">
            <AccordionTrigger className="w-full text-left">
              {acc.title}
            </AccordionTrigger>
            <AccordionContent>{acc.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.div>
  )
}

const accordions = [
  {
    value: 'cargo',
    title: 'What types of cargo does carves handle?',
    content:
      'To begin with, we handle all types of cargo. From small parcels to large containers, we have the capacity to handle it all.',
  },
  {
    value: 'tracking',
    title: 'How can I track my shipment?',
    content:
      'You can track your shipment by visiting our tracking page and entering your tracking number.',
  },
  {
    value: 'insurance',
    title: 'Am I offered insurance for my shipment?',
    content:
      'Yes, we offer insurance for all shipments. You can choose to insure your shipment during the checkout process or by contacting our 24/7 support team.',
  },
  {
    value: 'support',
    title: 'How can I contact customer support?',
    content:
      'You can contact our customer support team through our contact page.',
  },
  {
    value: 'delivery',
    title: 'How long does delivery take?',
    content:
      'Delivery times vary depending on the destination. You can check the estimated delivery time for your shipment by visiting our tracking page.',
  },
]
