import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import carmen from '@/images/team/carmen.jpeg'
import gabi from '@/images/team/gabi.jpeg'
import waldo from '@/images/team/waldo.jpeg'
import { type Metadata } from 'next'
import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { RootLayout } from '@/components/RootLayout'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import { loadArticles } from '@/lib/mdx'

function WhoWeServe() {
  return (
    <Container>
      <div className="px-6 py-24 lg:px-8">
        <div className="max-w-3xl text-base/7 text-neutral-700">
          <p className="text-base/7 font-semibold text-neutral-950">
            Who We Serve
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-pretty text-neutral-950 sm:text-4xl">
            If you practice law, we’re ready to help you get found and chosen.
          </h2>
          <p className="mt-6 text-xl/8">
            It doesn’t matter what kind of law you practice — one thing is true
            across the board: if potential clients can’t find you online,
            they’ll call someone else. That’s exactly the problem we love
            solving.
          </p>
          <div className="mt-10 max-w-2xl text-neutral-600">
            <p>
              We built this agency with one goal:
              <strong className="text-neutral-900">
                {' '}
                to give law firms of every size a stronger online presence that
                actually brings in clients.
              </strong>
            </p>
            <p className="mt-8">
              Here are just some of the practice areas we know need visibility
              the most:
            </p>
            <ul role="list" className="mt-4 list-disc space-y-2 pl-5">
              <li>Personal Injury</li>
              <li>Family Law &amp; Divorce</li>
              <li>Criminal Defense &amp; DUI</li>
              <li>Corporate &amp; Mergers &amp; Acquisitions</li>
              <li>Employment &amp; Labor Law</li>
              <li>Real Estate &amp; Construction Law</li>
              <li>Immigration</li>
              <li>Tax &amp; Bankruptcy</li>
              <li>Estate Planning &amp; Probate</li>
              <li>Business Litigation &amp; Civil Rights</li>
              <li>Medical Malpractice &amp; Product Liability</li>
              <li>Intellectual Property, Trademarks &amp; Contracts</li>
              <li>Environmental &amp; Securities</li>
            </ul>
            <p className="mt-8">
              The way we see it, every lawyer has a story to tell — why you do
              what you do, and why clients should trust you. We help bring that
              story online so it connects, convinces, and converts.
            </p>
            <p className="mt-8">Because here’s the cause and effect:</p>
            <ul role="list" className="mt-4 space-y-2">
              <li>
                <strong>More visibility → more calls and consultations.</strong>
              </li>
              <li>
                <strong>Clearer messaging → more clients choosing you.</strong>
              </li>
              <li>
                <strong>
                  Consistent presence → steady growth you can count on.
                </strong>
              </li>
            </ul>
            <p className="mt-8">
              So whether you’re fighting for justice in court, guiding families
              through tough times, or helping businesses close their biggest
              deals — we’d love to be the team that makes sure the right people
              find you.
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}

const team = [
  {
    title: 'Team',
    people: [
      {
        name: 'Waldo Lavaut',
        role: 'CEO - Software Developer',
        image: { src: waldo },
      },
      {
        name: 'Gabriella Suarez',
        role: 'Marketing Lead',
        image: { src: gabi },
      },
      {
        name: 'Carmen Carvajal',
        role: 'Web Design Lead',
        image: { src: carmen },
      },
    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our culture"
        title="Small Team. Big Results."
        invert
      >
        <p>
          We may be a small team — a web developer, a web designer and a
          marketing expert — but that’s our strength. No bureaucracy, no layers
          of red tape, just three people obsessed with helping law firms stand
          out online and win more clients. Every decision we make is rooted in
          values that directly serve your success.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Precision" invert>
            We cut through noise with sharp, tailored strategies. In a crowded
            legal market, you don’t have time for guesswork — our precision
            ensures your website, SEO, and marketing are laser-focused on
            attracting the right clients.
          </GridListItem>
          <GridListItem title="Reliability" invert>
            You can’t afford delays or broken promises. We show up when we say
            we will, deliver on time, and stay consistent — so you can trust
            your digital presence is always moving forward while you focus on
            practicing law.
          </GridListItem>
          <GridListItem title="Advocacy" invert>
            We advocate for your firm the way you advocate for your clients.
            That means fighting for visibility, pushing for growth, and treating
            your success as our own case to win.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Miami-based legal marketing team helping law firms with web design, web development, SEO, and marketing — practical work that brings in better cases.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <RootLayout>
      <PageIntro
        eyebrow="About us"
        title="We Help Law Firms Get Found — and Chosen — Online"
      >
        <p>
          Originotes is a Miami-based legal marketing agency helping law firms
          grow with conversion-focused web design and development,
          results-driven SEO, and targeted marketing.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Here’s the thing: the legal market online is chaos. Picture
            rush-hour on I-95, but instead of cars it’s law firms, all honking
            at once hoping someone notices. Most attorneys know they need to
            stand out online, but “knowing” and “doing” are two very different
            things. That’s where we slide in. With years of web development
            chops and a not-so-secret obsession with how the internet works, we
            help your firm skip the traffic and get straight to the clients.
          </p>
          <p>
            We’re not just here to build a website and disappear. Our role is to
            be your long-term partner — the team that handles your online
            presence so you can focus on practicing law. With three dedicated
            people who move fast and care deeply, we’re built to deliver results
            now and scale with you as your firm grows.
          </p>
        </div>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <StatList>
          <StatListItem
            value="9 years"
            label="Combined web & marketing experience on our team."
          />
          <StatListItem
            value="24/7 visibility focus"
            label="Because clients search at all hours, not just from 9 AM to 5 PM."
          />
          <StatListItem
            value="1 clear mission"
            label="Help law firms be found and chosen online. Your growth is our only priority."
          />
        </StatList>
      </Container>

      <Culture />
      <Team />

      <WhoWeServe />

      <PageLinks
        title="From the blog"
        intro="Practical tips for law firms — websites, SEO, and marketing that actually help you win better cases."
        pages={blogArticles}
      />

      <ContactSection />
    </RootLayout>
  )
}
