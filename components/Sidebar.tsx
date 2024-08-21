'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Footer from '@/components/Footer'
import PlaidLink from '@/components/PlaidLink'

const Sidebar = ({ user }: SiderbarProps) => {
  const pathname = usePathname()

  return (
    <section className="sidebar max-w-[270px] px-0">
      <nav className="flex flex-col gap-4 px-0">
        <Link href="/" className="mb-12 flex cursor-pointer items-center gap-2">
          <Image
            src="/icons/logo.svg"
            alt="Horizon logo"
            width={34}
            height={34}
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">Horizon</h1>
        </Link>

        {sidebarLinks.map((link) => {
          const isActive =
            pathname === link.route || pathname.startsWith(`${link.route}/`)

          return (
            <Link
              key={link.label}
              href={link.route}
              className={cn('sidebar-link', { 'bg-bank-gradient': isActive })}
            >
              <div className="relative size-6">
                <Image
                  src={link.imgURL}
                  alt={link.label}
                  fill
                  className={cn({ 'brightness-[3] invert-0': isActive })}
                />
              </div>
              <p className={cn('sidebar-label', { '!text-white': isActive })}>
                {link.label}
              </p>
            </Link>
          )
        })}

        <PlaidLink user={user as User} />
      </nav>

      <Footer user={user} />
    </section>
  )
}

export default Sidebar
