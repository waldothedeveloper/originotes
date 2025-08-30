import { type Metadata } from 'next'
import { Toaster } from 'sonner'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Originotes',
    default: 'Originotes - Grow Your Online Presence & Get More Leads',
  },
  description:
    'We help small businesses grow a stronger online presence with strategic marketing programs, AI automation, and proven lead generation strategies.',
  keywords: [
    'small business marketing',
    'online presence',
    'lead generation',
    'AI automation',
    'digital marketing',
    'business growth',
    'website design',
    'website development',
  ],
  openGraph: {
    title: 'Originotes - Grow Your Online Presence & Get More Leads',
    description:
      'We help small businesses grow a stronger online presence with strategic marketing programs, AI automation, and proven lead generation strategies.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Originotes - Grow Your Online Presence & Get More Leads',
    description:
      'We help small businesses grow a stronger online presence with strategic marketing programs, AI automation, and proven lead generation strategies.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        {children}
        <Toaster richColors closeButton />
      </body>
    </html>
  )
}
