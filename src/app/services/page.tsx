import { type Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'
import { SectionIntro } from '@/components/SectionIntro'

function ServiceSection({
  title,
  subtitle,
  children,
  benefits,
  impact,
}: {
  title: string
  subtitle?: string
  children: React.ReactNode
  benefits?: string[]
  impact: string
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-start lg:justify-between lg:gap-x-8">
        <div className="lg:w-2/3">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-4 text-lg font-medium text-neutral-600">
                {subtitle}
              </p>
            )}
            <div className="mt-6 space-y-6 text-base text-neutral-600">
              {children}
            </div>
          </FadeIn>
        </div>

        <div className="mt-12 lg:mt-0 lg:w-1/3">
          <FadeIn>
            {benefits && (
              <div className="mb-8">
                <h3 className="mb-4 font-display text-base font-semibold text-neutral-950">
                  How this helps your firm:
                </h3>
                <ul className="space-y-2">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 text-neutral-400">•</span>
                      <span className="text-sm text-neutral-600">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="rounded-lg bg-neutral-950 p-6 text-white">
              <h4 className="mb-2 font-display text-sm font-semibold">
                Bottom line:
              </h4>
              <p className="text-sm italic">{impact}</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function WebDesign() {
  return (
    <ServiceSection
      title="Web Design that Builds Trust"
      subtitle="A modern, professional website that reflects your firm and makes it easy for clients to reach you."
      benefits={[
        'Clear pages for each practice area',
        'Attorney bios that build confidence',
        'Simple paths to call, book, or chat',
        'Mobile-first design that looks great everywhere',
        'Accessible and respectful of client privacy',
      ]}
      impact="More qualified consultations from people who feel confident choosing your firm"
    >
      <p>
        Your website is often a client’s first impression of your firm. We
        design clean, credible pages that answer common questions, explain your
        approach, and guide visitors to contact you without friction.
      </p>
      <p>
        We focus on what clients care about: clarity, proof, and an easy way to
        start a conversation. No fluff—just a site that helps people choose you.
      </p>
    </ServiceSection>
  )
}

function WebDevelopment() {
  return (
    <ServiceSection
      title="Web Development that Works for Intake"
      subtitle="Fast, secure, and built to support how your firm actually runs."
      benefits={[
        'Lightning-fast load times for better conversion',
        'Clear intake forms with only what you need',
        'Seamless routing to the right practice or paralegal',
        'Calendar and call options for immediate next steps',
        'Privacy-first approach that respects client data',
      ]}
      impact="Less friction at intake, fewer lost leads, stronger follow-through"
    >
      <p>
        We build websites that do real work for your team—capturing key details,
        routing inquiries, and making follow-up simple. Everything is designed
        to reduce drop‑off and help your staff respond quickly.
      </p>
      <p>
        The result: a site that not only looks good, but supports intake from
        the first click to the scheduled consultation.
      </p>
    </ServiceSection>
  )
}

function SEO() {
  return (
    <ServiceSection
      title="SEO that Puts You on the Map"
      subtitle="Show up where your clients are searching—locally and for your exact practice areas."
      benefits={[
        'Google Business Profile tuned for local visibility',
        'Practice area pages that answer client questions',
        'Clear location signals for the cities you serve',
        'Structured content that helps Google understand your firm',
        'Review strategy that earns trust and clicks',
      ]}
      impact="More qualified calls and consult requests from the right cases"
    >
      <p>
        We organize your site and listings so people find you when it
        matters—“near me” searches, practice‑specific terms, and local intent.
        We focus on clarity and credibility, not jargon.
      </p>
      <p>
        You’ll know what’s working through plain‑English reporting tied to real
        outcomes: calls, forms, and booked consultations.
      </p>
    </ServiceSection>
  )
}

function Marketing() {
  return (
    <ServiceSection
      title="Marketing that Wins the Comparison"
      subtitle="Clear messaging, helpful content, and simple follow‑up that turn searches into signed clients."
      benefits={[
        'Messaging that speaks to client concerns',
        'Content that explains next steps and sets expectations',
        'Targeted ads when you need predictable volume',
        'Email and SMS follow‑up that respects people’s time',
        'Review and reputation support that builds social proof',
      ]}
      impact="Stronger pipeline, better fit matters, and more signed engagements"
    >
      <p>
        We help your firm stand out with simple, direct communication. Prospects
        quickly understand what you do, who you help, and how to get started—so
        choosing your firm feels easy and safe.
      </p>
      <p>
        When ads make sense, we use them responsibly and measure what matters:
        qualified inquiries, not vanity metrics.
      </p>
    </ServiceSection>
  )
}

// (Retired contractor-specific section removed)

// (Retired contractor-specific section removed)

function WhyTheseWork() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-linear-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full mask-[linear-gradient(to_bottom_left,white_40%,transparent_50%)] fill-neutral-100 stroke-neutral-950/5"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Why this works"
        title="Built for how law firms grow"
      >
        <p>
          Everything we deliver supports a single goal: help the right clients
          find you and feel confident choosing you. We keep the process simple
          for your team and respectful for potential clients.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Client‑first">
            Plain language, clear steps, and easy contact options—no confusion,
            no dead ends.
          </GridListItem>
          <GridListItem title="Local visibility">
            Strong presence in the cities you serve so nearby clients can find
            you fast.
          </GridListItem>
          <GridListItem title="Credibility by design">
            Reviews, results, and recognizable proof woven throughout your site,
            not hidden.
          </GridListItem>
          <GridListItem title="Operational fit">
            Intake that matches your staffing and practice areas, so nothing
            gets lost.
          </GridListItem>
          <GridListItem title="Accessible + respectful">
            ADA‑minded and privacy‑aware, because trust starts before someone
            contacts you.
          </GridListItem>
          <GridListItem title="Measured outcomes">
            We track what matters—calls, forms, and booked consults—so you see
            real impact.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Services for Law Firms',
  description:
    'We help law firms get found and chosen online with attorney‑focused web design, development, SEO, and marketing.',
}

export default function Services() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Services" title="More Clients. Fewer Crickets.">
        <p>
          Silence might be golden in court, but it’s terrible for your inbox. We
          help law firms get found and chosen online with websites that convert,
          SEO that ranks, and marketing that doesn’t make you roll your eyes.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <WebDesign />
        <WebDevelopment />
        <SEO />
        <Marketing />
      </div>

      <WhyTheseWork />

      <ContactSection />
    </RootLayout>
  )
}
