'use client'

import { useEffect } from 'react'
import * as Sentry from '@sentry/nextjs'
import Error from 'next/error'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function GlobalError({ error }: { error: any }) {
  useEffect(() => {
    Sentry.captureException(error)
  }, [error])

  return (
    <html>
      <body>
        <Error statusCode={error?.status ?? 400} />
      </body>
    </html>
  )
}
