import { type Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'
import { StylizedImage } from '@/components/StylizedImage'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-135 flex-none lg:w-180">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-148 lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function StepDiscovery() {
  return (
    <Section title="Discovery & Strategy" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We start by getting to know your practice, your goals, and the
          competitive landscape you’re up against.
        </p>
        <List className="mt-2">
          <ListItem title="Who are your ideal clients?">
            Identify the client profiles, case types, and intents you want more
            of.
          </ListItem>
          <ListItem title="Which cases drive the most value?">
            Prioritize practice areas and matter types with the highest ROI for
            your firm.
          </ListItem>
          <ListItem title="Where are you being out-ranked or out-marketed?">
            Analyze competitors, SERPs, and channels to uncover gaps and quick
            wins.
          </ListItem>
        </List>
        <p>
          From there, we map a strategy that fits your firm — no cookie-cutter
          templates. Every decision is grounded in your practice areas, your
          city, and your growth goals.
        </p>
      </div>
    </Section>
  )
}

function StepFoundation() {
  return (
    <Section
      title="Build a Strong Foundation"
      image={{ src: imageLaptop, shape: 1 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Your website is often the first impression a client gets of your firm.
          We make sure it’s:
        </p>
        <List className="mt-2">
          <ListItem title="Professional and credible">
            Custom design that reflects your firm’s expertise.
          </ListItem>
          <ListItem title="Optimized for conversions">
            Clear calls to action, fast load speeds, mobile-friendly.
          </ListItem>
          <ListItem title="Secure and compliant">
            HTTPS, ADA accessibility, and tools to protect client data.
          </ListItem>
        </List>
        <p>
          We build primarily on WordPress (used by over 65% of law firm sites)
          for flexibility and SEO strength. Every page is designed to not just
          look good, but to earn trust and generate leads.
        </p>
      </div>
    </Section>
  )
}

function StepSEO() {
  return (
    <Section title="Get Found (SEO)" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Once your foundation is solid, we focus on visibility. Our SEO process
          includes:
        </p>
        <List className="mt-2">
          <ListItem title="Local SEO">
            Google Business Profile optimization, legal directory listings, and
            client review strategies to get you into the Local 3-Pack.
          </ListItem>
          <ListItem title="On-site optimization">
            Content tuned to the cases you want most, with clear, plain-language
            explanations your clients understand (and search engines reward).
          </ListItem>
          <ListItem title="Technical SEO">
            Site speed, schema markup, crawlability — all the hidden but
            critical factors that push you up in rankings.
          </ListItem>
          <ListItem title="Authority building">
            Earning backlinks from credible sites and associations to strengthen
            your domain.
          </ListItem>
        </List>
        <p>
          We track rankings, organic traffic, and — most importantly — leads.
        </p>
      </div>
    </Section>
  )
}

function StepMarketing() {
  return (
    <Section
      title="Accelerate Growth (Marketing)"
      image={{ src: imageLaptop, shape: 1 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          For competitive practice areas, SEO alone isn’t enough. That’s where
          paid and outbound marketing comes in:
        </p>
        <List className="mt-2">
          <ListItem title="Google Ads & Local Service Ads">
            Get to the top of search results today, not months from now.
          </ListItem>
          <ListItem title="Conversion optimization">
            Dedicated landing pages, call tracking, and intake optimization so
            no lead is wasted.
          </ListItem>
          <ListItem title="Branding & reputation management">
            From logos to online reviews, we make sure your firm looks
            trustworthy and stands out in a crowded field.
          </ListItem>
        </List>
        <p>
          We monitor cost per lead, cost per client, and return on ad spend — so
          you know exactly how your dollars are working for you.
        </p>
      </div>
    </Section>
  )
}

function StepReview() {
  return (
    <Section
      title="Review, Report, Refine"
      image={{ src: imageMeeting, shape: 2 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>We meet with you regularly to review progress:</p>
        <List className="mt-2">
          <ListItem title="Are leads increasing?">
            Track qualified inquiries, consultations, and signed matters over
            time.
          </ListItem>
          <ListItem title="Which channels bring the most valuable cases?">
            Attribute high‑value matters to SEO, ads, referrals, and local
            profiles.
          </ListItem>
          <ListItem title="Do we need to pivot strategies?">
            Reallocate budget, refine campaigns, or produce new content based on
            results.
          </ListItem>
        </List>
        <p>
          You’ll get transparent reports, not vanity metrics. Every
          recommendation ties back to your ultimate goal: more qualified
          clients, fewer wasted marketing dollars.
        </p>
      </div>
    </Section>
  )
}

function WhatYouGet() {
  return (
    <Container className="mt-24">
      <FadeIn>
        <h2 className="font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
          What You Get
        </h2>
        <div className="mt-8">
          <GridList>
            <GridListItem title="Modern, professional website">
              That actually converts — clear structure, trust signals, and
              speed.
            </GridListItem>
            <GridListItem title="Higher visibility on Google">
              For the cases you care about most and where you practice.
            </GridListItem>
            <GridListItem title="Predictable qualified leads">
              Through SEO and marketing that supports intake and follow‑up.
            </GridListItem>
            <GridListItem title="Clear reporting and partnership">
              Transparent metrics and a long‑term partner invested in growth.
            </GridListItem>
          </GridList>
        </div>
      </FadeIn>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'Our Process',
  description:
    'Discovery, web foundations, SEO, marketing, and continuous refinement — a clear path to more qualified clients and measurable growth for your firm.',
}

export default function Process() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Our Process" title="Our Process">
        A clear, five‑step path: discovery, foundation, SEO, marketing, and
        ongoing refinement — built to earn trust and drive qualified leads.
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <StepDiscovery />
        <StepFoundation />
        <StepSEO />
        <StepMarketing />
        <StepReview />
      </div>

      <WhatYouGet />

      <ContactSection />
    </RootLayout>
  )
}
