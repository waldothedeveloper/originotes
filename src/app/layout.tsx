import { ClerkProvider } from '@clerk/nextjs'
import { type Metadata } from 'next'
import { Toaster } from 'sonner'

import '@/styles/tailwind.css'
export const metadata: Metadata = {
  title: {
    template: '%s - Originotes',
    default: 'Originotes - Miami based Legal Marketing Agency',
  },
  description:
    'Originotes is a Miami-based legal marketing agency helping law firms grow through custom websites, SEO, content, and targeted advertising. Stop chasing customers. Let them chase you.',
  keywords: [
    'law firm marketing',
    'legal marketing agency',
    'lawyer SEO',
    'law firm SEO',
    'web design for law firms',
    'law firm advertising',
    'law firm lead generation',
    'Miami law firm marketing',
    'law firm website design',
    'digital marketing for lawyers',
  ],
  openGraph: {
    title: 'Originotes - Miami based Legal Marketing Agency',
    description:
      'Originotes is a Miami-based legal marketing agency helping law firms grow through custom websites, SEO, content, and targeted advertising. Stop chasing customers. Let them chase you.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Originotes - Miami based Legal Marketing Agency',
    description:
      'Originotes is a Miami-based legal marketing agency helping law firms grow through custom websites, SEO, content, and targeted advertising. Stop chasing customers. Let them chase you.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
        <body className="flex min-h-full flex-col">
          {children}
          <Toaster richColors closeButton />
        </body>
      </html>
    </ClerkProvider>
  )
}
