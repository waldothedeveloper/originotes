import { type Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
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

function Discover() {
  return (
    <Section title="Discover" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We start with a short conversation to learn about your business, your
          services, and your goals. No long forms or corporate jargon — just a
          clear understanding of what you need and where you want to go.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Quick kickoff call</TagListItem>
        <TagListItem>Review of your current online presence</TagListItem>
        <TagListItem>
          Identifying your key services and service areas
        </TagListItem>
        <TagListItem>Clear goals for growth</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Build" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          With your goals in mind, we set up the digital tools that actually
          help your business grow. Everything is built for speed, security, and
          ease of use — so you can start winning more customers right away.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>A professional, conversion-focused website</TagListItem>
        <TagListItem>24/7 online booking system</TagListItem>
        <TagListItem>
          Fast quoting system (so you beat your competitors)
        </TagListItem>
        <TagListItem>
          Simple integrations with your existing calendar
        </TagListItem>
      </TagList>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Deliver" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Once everything is live, we make sure it works for your business and
          your customers. We test, refine, and train you (or your team) so you
          feel in control — not dependent on us.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Launch & setup support">
          We handle the technical launch and make sure everything works smoothly
          from day one.
        </ListItem>
        <ListItem title="Automated text reminders">
          Reduce no-shows with automatic appointment reminders sent to your
          customers.
        </ListItem>
        <ListItem title="Easy customer management tools">
          Simple tools to track customers, bookings, and follow up on leads.
        </ListItem>
        <ListItem title="Clear reporting">
          Know what is working with easy-to-understand reports on bookings,
          leads, and revenue.
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-linear-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full mask-[linear-gradient(to_bottom_left,white_40%,transparent_50%)] fill-neutral-100 stroke-neutral-950/5"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="Balancing simplicity and results"
      >
        <p>
          We do not believe in complicated contracts or confusing tech jargon.
          Our work is guided by values that keep things human and honest.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Meticulous">
            Every detail of your online presence is built to earn trust and
            convert visitors into customers.
          </GridListItem>
          <GridListItem title="Efficient">
            We focus on what actually moves the needle, so you do not waste time
            or money.
          </GridListItem>
          <GridListItem title="Adaptable">
            Your business is not cookie-cutter — we build tools that fit how you
            work.
          </GridListItem>
          <GridListItem title="Honest">
            We are transparent in our process, pricing, and communication. No
            surprises.
          </GridListItem>
          <GridListItem title="Loyal">
            We stick with you as your business grows — celebrating wins and
            solving problems together.
          </GridListItem>
          <GridListItem title="Innovative">
            We use modern tools that save you time and help you stay ahead of
            competitors.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Our Process',
  description:
    'We believe in keeping things simple and effective. Our process is designed to save you time, remove the tech headaches, and get you more customers without unnecessary complexity.',
}

export default function Process() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Our process" title="How we work">
        <p>
          We believe in keeping things simple and effective. Our process is
          designed to save you time, remove the tech headaches, and get you more
          customers without unnecessary complexity.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </RootLayout>
  )
}
