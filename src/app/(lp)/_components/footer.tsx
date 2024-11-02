import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

import { footerLinks } from './footer-links'

export function Footer() {
  return (
    <footer className="mt-20 flex flex-col gap-20 overflow-hidden rounded-b-xl bg-theme-dark p-5 pb-10 text-theme-light md:pb-5">
      <div className="pointer-events-none absolute inset-x-0 flex flex-row items-center justify-center overflow-hidden">
        <span className="mx-auto bg-gradient-to-b from-theme-light/[10%] to-theme-light/[0%] bg-clip-text text-[4rem] font-black text-transparent sm:text-[8rem] sm:leading-[8rem] md:text-[12rem] md:leading-[8rem]">
          DELIVERO
        </span>
      </div>

      <div className="mt-20 grid grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-5">
        {footerLinks.map((link) => (
          <div className="flex flex-col gap-2" key={link.title}>
            <span className="text-lg font-semibold md:text-lg">
              {link.title}
            </span>
            <ul className="flex flex-col gap-2">
              {link.links.map((item) => (
                <li className="text-xs md:text-base" key={item.title}>
                  <Link href={item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-col-reverse items-center justify-between gap-10 sm:flex-row md:gap-5">
        <div className="flex flex-col items-center gap-4 md:flex-row">
          <h2 className="text-xl font-bold md:text-4xl">Want to be partner?</h2>
          <Button size={'sm'}>Contact us</Button>
        </div>

        <div className="flex flex-col items-center gap-0 md:items-end">
          <h2 className="text-4xl font-black leading-tight">Delivero.</h2>
          <small className="text-muted-foreground/60">
            Copyright {new Date().getFullYear()}. All rights reserved
          </small>
        </div>
      </div>

      <div className="grid grid-cols-1 justify-between gap-10 border-t border-border/30 pt-10 text-center sm:grid-cols-2 md:flex md:flex-row md:items-start">
        <span className="text-sm">
          4725 Washington Ave. <br />
          San Leandro, CA 94577
        </span>

        <span className="text-sm">
          <a href="tel:+1-202-555-0156">+1 (202) 555-0156</a>
          <br />
          <a href="mailto:contact@delivero.com">contact@delivero.com</a>
        </span>

        <ul>
          <li className="text-sm">Our policy</li>
          <li className="text-sm">Privacy Policy</li>
        </ul>

        <div className="mx-auto flex flex-row items-center gap-2 md:mx-0">
          <FacebookIcon size={20} />
          <TwitterIcon size={20} />
          <InstagramIcon size={20} />
          <LinkedinIcon size={20} />
        </div>
      </div>
    </footer>
  )
}
