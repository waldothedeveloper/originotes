import { type Metadata } from 'next'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { ContactForm } from '@/components/ContactForm'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'
import { SocialMedia } from '@/components/SocialMedia'
import { Phone } from 'lucide-react'

function ContactDetails() {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        Email us
      </h2>
      <dl className="mt-6 text-sm">
        <div>
          <dt className="font-semibold text-neutral-950">General Inquiries</dt>
          <dd>
            <Link
              href="mailto:contact@originotes.com"
              className="text-neutral-600 hover:text-neutral-950"
            >
              contact@originotes.com
            </Link>
          </dd>
        </div>
        <div className="mt-4">
          <dt className="font-semibold text-neutral-950">Phone</dt>
          <dd className="mt-2 flex items-center">
            <Phone className="mr-2 inline-block size-4" />
            <p className="text-neutral-600 hover:text-neutral-950">
              +1 (844) 422-4360
            </p>
          </dd>
        </div>
      </dl>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Follow us
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  )
}

// Structured data for SEO
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Us - Originotes',
  description: 'Let&apos;s work together. We can&apos;t wait to hear from you.',
  url: 'https://originotes.com/contact',
}

export const metadata: Metadata = {
  title: 'Contact Us - Originotes',
  description: 'Let&apos;s work together. We can&apos;t wait to hear from you.',
  openGraph: {
    title: 'Contact Us - Originotes',
    description:
      'Let&apos;s work together. We can&apos;t wait to hear from you.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Contact Us - Originotes',
    description:
      'Let&apos;s work together. We can&apos;t wait to hear from you.',
  },
}

export default function Contact() {
  return (
    <RootLayout>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <PageIntro
        eyebrow="Ready to grow?"
        title="Want to see what's possible for your business?"
      >
        <p>One conversation. Endless possibilities.</p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </RootLayout>
  )
}
