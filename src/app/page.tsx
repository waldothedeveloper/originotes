import { type Metadata } from 'next'
// import Image from 'next/image'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { RootLayout } from '@/components/RootLayout'
import { RotatingBusinessTypes } from '@/components/RotatingBusinessTypes'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import gazelleLawyer from '@/images/gazelle-lawyer.png'
import imageLaptop from '@/images/laptop.jpg'
import Link from 'next/link'

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="Fancy words aside, here’s how we help."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          {' '}
          The only way to succeed is to understand your audience and craft a
          message that resonates with them.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-135 flex-none lg:w-180">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-132 lg:pl-4">
            <ListItem title="Websites that Convert">
              Your website shouldn’t look like it was built in 2009 (unless
              that’s your brand, in which case… we need to talk). We design
              modern, credible sites that make clients choose you.
            </ListItem>
            <ListItem title="SEO for Lawyers">
              Not the snake-oil version. The actual, steady, long-game kind that
              makes you show up when someone Googles “best personal injury
              lawyer in Miami” at 2 a.m.
            </ListItem>
            <ListItem title="Marketing Content & Visibility">
              From practice-area pages to thought-leadership blogs, we position
              you as the authority clients (and Google) trust.
            </ListItem>
            <ListItem title="Ongoing Growth Support">
              We don’t “build and ghost.” We stay on retainer to help you grow,
              adapt, and keep winning cases online.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

const RealityCheck = () => {
  return (
    <div className="mt-24 sm:mt-32 lg:mt-40">
      <Container>
        <div className="rounded-4xl bg-neutral-950 p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <FadeIn className="max-w-2xl">
              <h2 className="font-display text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
                The internet is a jungle. Right now, you’re the gazelle.
              </h2>
              <p className="mt-6 text-xl text-neutral-300">
                Miami’s legal market is packed tighter than a South Beach
                parking lot. Every lawyer is shouting “Pick me!” online. Some
                firms fade into the background, while others with deep pockets
                buy their way to the top.
              </p>
              <p className="mt-6 text-xl text-neutral-300">
                We get it. Standing out feels impossible. That’s why finding the
                right marketing team isn’t just important — it feels like
                survival instinct. Especially if your law firm is battling it
                out in a hyper-competitive city.
              </p>
            </FadeIn>
            <FadeIn className="w-full">
              <div className="mx-auto w-full max-w-xl">
                <StylizedImage
                  src={gazelleLawyer}
                  // src="https://images.unsplash.com/photo-1650419259707-8e9790b88509?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0"
                  alt="Gazelle running across a grassland"
                  sizes="(min-width: 1024px) 32rem, 100vw"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </div>
  )
}

function OriginotesDifference() {
  return (
    <div className="mt-24 bg-neutral-50 py-16 sm:mt-32 sm:py-24 lg:mt-40">
      <Container>
        <FadeIn className="max-w-3xl">
          <p className="mb-3 font-display text-sm font-semibold text-neutral-950">
            The Originotes Difference
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-balance text-neutral-950 sm:text-4xl">
            What makes us your preferred choice for legal marketing
          </h2>
          <p className="mt-6 text-lg text-neutral-600">
            The legal field is one of the most competitive markets online.
            Achieving visibility — and maintaining it — takes more than a basic
            website or occasional advertising. With our combined years of
            experience in web development, search strategy, and digital
            marketing, we help law firms establish a strong foundation and build
            a path to long-term growth.
          </p>
        </FadeIn>

        <div className="mt-16 space-y-10 sm:space-y-12 lg:mt-24">
          <div>
            <h3 className="font-display text-2xl font-semibold tracking-tight text-balance text-neutral-950 sm:text-3xl">
              Our Approach
            </h3>
            <p>
              We focus on the essentials that matter most to clients searching
              for legal help:
            </p>
            <dl className="mt-10 grid grid-cols-1 gap-4 space-y-8 text-base text-neutral-600 sm:mt-12 sm:space-y-12 md:grid-cols-3 lg:mt-16">
              <div>
                <dt className="font-semibold text-neutral-950">
                  Professional Website
                </dt>
                <dd>
                  A credible, modern presence that reflects your firm’s
                  expertise and builds trust from the first visit.
                </dd>
              </div>

              <div>
                <dt className="font-semibold text-neutral-950">
                  Strong Visibility
                </dt>
                <dd>
                  Strategies designed to improve your chances of being found
                  when clients are searching for your practice areas.
                </dd>
              </div>

              <div>
                <dt className="font-semibold text-neutral-950">
                  Consistent Presence
                </dt>
                <dd>
                  Social and online profiles that strengthen your reputation and
                  reinforce your credibility.
                </dd>
              </div>
            </dl>
          </div>
          <div>
            <h3 className="font-display text-2xl font-semibold tracking-tight text-balance text-neutral-950 sm:text-3xl">
              An Ongoing Partnership
            </h3>
            <p className="mt-6">
              Digital marketing is never static — especially in law. We meet
              with you regularly to review performance, align with your goals,
              and adjust strategies when needed. This ensures your firm stays
              competitive and adaptable in a fast-changing market. We don’t
              promise overnight results. Instead, we deliver a structured,
              transparent process designed to give your firm the best
              opportunity to be found — and chosen — online.
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  description:
    'Originotes is a Miami-based legal marketing agency helping law firms grow through custom websites, SEO, content, and targeted advertising. Stop chasing customers. Let them chase you.',
}

export default async function Home() {
  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <RotatingBusinessTypes />

        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-neutral-950 sm:text-7xl">
            Your next client is searching for a lawyer. Let’s make sure they
            find you.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            We’re a Miami-based legal marketing agency that helps law firms get
            found — <strong>and chosen</strong> — online.
          </p>
          <div className="mt-12 flex items-center gap-x-6">
            <Link
              href="/contact"
              className="text-lg leading-6 font-semibold text-neutral-900 transition-colors hover:text-neutral-700"
            >
              Book a Free Strategy Call<span aria-hidden="true">→</span>
            </Link>
          </div>
        </FadeIn>
      </Container>

      <RealityCheck />

      <OriginotesDifference />

      <Services />

      <ContactSection />
    </RootLayout>
  )
}
