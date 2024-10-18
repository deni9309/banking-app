import Image from 'next/image'
import React from 'react'

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {children}

      <div className="auth-asset">
        <div>
          <Image
            src="/icons/auth-image2.svg"
            alt="Auth image"
            width={600}
            height={600}
          />
        </div>
      </div>
    </main>
  )
}
