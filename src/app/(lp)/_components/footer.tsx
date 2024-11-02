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
    <footer className="flex flex-col gap-20 rounded-b-xl bg-theme-dark p-5 text-theme-light">
      <div className="pointer-events-none absolute inset-x-0 flex flex-row items-center justify-center">
        <span className="mx-auto bg-gradient-to-b from-theme-light/[10%] to-theme-light/[0%] bg-clip-text text-[12rem] font-black leading-[8rem] text-transparent">
          DELIVERO
        </span>
      </div>

      <div className="mt-20 grid grid-cols-5">
        {footerLinks.map((link) => (
          <div className="flex flex-col gap-2" key={link.title}>
            <span className="text-lg font-semibold">{link.title}</span>
            <ul className="flex flex-col gap-2">
              {link.links.map((item) => (
                <li key={item.title}>
                  <Link href={item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-4">
          <h2 className="text-4xl font-bold">Want to be partner?</h2>
          <Button>Contact us</Button>
        </div>

        <div className="flex flex-col items-end gap-0">
          <h2 className="text-4xl font-black leading-tight">Delivero.</h2>
          <small className="text-muted-foreground/60">
            Copyright {new Date().getFullYear()}. All rights reserved
          </small>
        </div>
      </div>

      <div className="flex flex-row justify-between gap-10 border-t border-border/30 pt-10">
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

        <div className="flex flex-row items-center gap-2">
          <FacebookIcon size={20} />
          <TwitterIcon size={20} />
          <InstagramIcon size={20} />
          <LinkedinIcon size={20} />
        </div>
      </div>
    </footer>
  )
}
