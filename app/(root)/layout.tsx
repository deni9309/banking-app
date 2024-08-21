import Image from 'next/image'
import { redirect } from 'next/navigation'

import Sidebar from '@/components/Sidebar'
import MobileNav from '@/components/MobileNav'
import { getLoggedInUser } from '@/lib/actions/user.actions'

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const loggedIn: LoggedInType = await getLoggedInUser()

  if (!loggedIn) redirect('/sign-in')

  return (
    <main className="flex w-full font-inter">
      <Sidebar user={loggedIn} />

      <div className="flex size-full flex-1 flex-col">
        <div className="root-layout">
          <Image
            src="/icons/logo.svg"
            alt="Horizon logo"
            width={30}
            height={30}
          />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  )
}
