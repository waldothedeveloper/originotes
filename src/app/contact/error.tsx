'use client'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { RootLayout } from '@/components/RootLayout'
import { useEffect } from 'react'

export default function ContactError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Contact page error:', error)
  }, [error])

  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="flex flex-col items-center text-center">
          <h2 className="mb-4 text-xl font-semibold text-red-900">
            Something went wrong with the contact form
          </h2>
          <p className="mb-6 max-w-md text-red-700">
            We&apos;re having trouble loading the contact form. Please try
            refreshing the page or contact us directly at
            contact@originotes.com.
          </p>
          <Button onClick={reset} className="bg-red-600 hover:bg-red-700">
            Try again
          </Button>
        </div>
      </Container>
    </RootLayout>
  )
}
