import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

import { logoutAccount } from '@/lib/actions/user.actions'

const Footer = ({ user, type = 'desktop' }: FooterProps) => {
  const router = useRouter()

  const handleLogout = async () => {
    await logoutAccount()

    router.push('/sign-in')
  }

  return (
    <footer className="footer">
      <div className={type === 'mobile' ? 'footer_name-mobile' : 'footer_name'}>
        <p className="text-xl font-bold text-gray-700">{user?.firstName[0]}</p>
      </div>

      <div
        className={type === 'mobile' ? 'footer_email-mobile' : 'footer_email'}
      >
        <h1 className="text-14 truncate font-semibold text-gray-700">
          {user?.firstName}
        </h1>
        <p className="truncate text-[13px] font-normal text-gray-600">
          {user?.email}
        </p>
      </div>

      <div className="footer_image" onClick={handleLogout}>
        <Image src="/icons/logout.svg" fill alt="logout" />
      </div>
    </footer>
  )
}

export default Footer
