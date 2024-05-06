'use client';
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname();

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image src="/icons/hamburger.svg" alt="menu" width={30} height={30} className="cursor-pointer" />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-white">
          <Link href="/" className="flex items-center gap-1 px-4 cursor-pointer">
            <Image
              src="/icons/logo.svg"
              alt="Horizon logo"
              width={34}
              height={34}
            />
            <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Horizon</h1>
          </Link>

          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex flex-col gap-6 h-full text-white pt-16">
                {sidebarLinks.map((link, index) => {
                  const isActive = pathname === link.route || pathname.startsWith(`${link.route}/`);

                  return (
                    <SheetClose asChild key={`${index}${link.route}`}>
                      <Link
                        href={link.route}
                        className={cn('mobilenav-sheet_close w-full', { 'bg-bank-gradient': isActive })}
                      >
                        <Image
                          src={link.imgURL}
                          alt={link.label}
                          width={20}
                          height={20}
                          className={cn({ 'brightness-[3] invert-0': isActive })}
                        />
                        <p className={cn('text-16 font-semibold text-black-2', { '!text-white': isActive })}>
                          {link.label}
                        </p>
                      </Link>
                    </SheetClose>
                  );
                })}

               TODO: USER DATA
              </nav>
            </SheetClose>

            TODO: FOOTER
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;