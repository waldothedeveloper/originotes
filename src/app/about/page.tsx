import {
  Handshake,
  Heart,
  MessageCircle,
  Shield,
  TrendingUp,
  UserCheck,
  Users,
  Zap,
} from 'lucide-react'
import { type Metadata } from 'next'
import Image from 'next/image'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { RootLayout } from '@/components/RootLayout'
import imageWaldo from '@/images/waldo.jpeg'
import { loadArticles } from '@/lib/mdx'

function WhatWeDo() {
  return (
    <div className="bg-white px-6 py-24 lg:px-8">
      <div className="max-w-3xl text-base/7 text-neutral-700">
        <p className="text-base/7 font-semibold text-neutral-950">What We Do</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-pretty text-neutral-950 sm:text-4xl">
          We&apos;re an online agency that helps local service businesses build
          the online presence they deserve
        </h2>
        <p className="mt-6 text-xl/8">
          Whether you&apos;re a plumber fixing leaks at 2 AM, an HVAC contractor
          keeping families comfortable, or a landscaper making properties
          beautiful, we&apos;ve got your back online.
        </p>
        <div className="mt-10 max-w-2xl">
          <p className="text-neutral-600">Here&apos;s how we help:</p>
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-neutral-600">
            <li className="flex flex-col gap-y-2">
              <div className="flex items-center gap-x-3">
                <Users className="h-5 w-5 flex-none text-neutral-950" />
                <strong className="font-semibold text-neutral-900">
                  Get you more customers
                </strong>
              </div>
              <p className="text-neutral-600">
                Through better online visibility and search engine optimization
                that actually works.
              </p>
            </li>
            <li className="flex flex-col gap-y-2">
              <div className="flex items-center gap-x-3">
                <Zap className="h-5 w-5 flex-none text-neutral-950" />
                <strong className="font-semibold text-neutral-900">
                  Automate the boring stuff
                </strong>
              </div>
              <p className="text-neutral-600">
                So you can focus on what you do best - running your business and
                serving customers.
              </p>
            </li>
            <li className="flex flex-col gap-y-2">
              <div className="flex items-center gap-x-3">
                <TrendingUp className="h-5 w-5 flex-none text-neutral-950" />
                <strong className="font-semibold text-neutral-900">
                  Help you grow steadily
                </strong>
              </div>
              <p className="text-neutral-600">
                Without the headaches of managing complex technology or
                marketing campaigns.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function OurStory() {
  return (
    <div className="bg-neutral-50 px-6 py-24 lg:px-8">
      <div className="max-w-3xl text-base/7 text-neutral-700">
        <p className="text-base/7 font-semibold text-neutral-950">Our Story</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-pretty text-neutral-950 sm:text-4xl">
          Hi, I&apos;m Waldo
        </h2>
        <p className="mt-6 text-xl/8">
          I started this agency because I saw too many hardworking business
          owners struggling to get noticed online. I&apos;ve been building
          websites for years, working with everyone from healthcare companies to
          government services. But my heart is with the local businesses that
          keep our communities running.
        </p>
        <div className="mt-10 max-w-2xl text-neutral-600">
          <p>
            I noticed that while big corporations have entire marketing teams,
            the plumber down the street or the cleaning service that&apos;s been
            family-owned for decades often gets left behind online. I have the
            knowledge and experience to help them succeed.
          </p>
        </div>
        <figure className="mt-16">
          <Image
            src={imageWaldo}
            alt="Waldo Lavaut - CEO and software developer"
            className="aspect-video rounded-xl bg-neutral-100 object-cover"
            sizes="(min-width: 1024px) 48rem, 100vw"
          />
          <figcaption className="mt-4 flex gap-x-2 text-sm/6 text-neutral-500">
            Waldo Lavaut, CEO & Software Developer at Originotes LLC
          </figcaption>
        </figure>
      </div>
    </div>
  )
}

function WhyDifferent() {
  return (
    <div className="bg-white px-6 py-24 lg:px-8">
      <div className="max-w-3xl text-base/7 text-neutral-700">
        <p className="text-base/7 font-semibold text-neutral-950">
          Why We&apos;re Different
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-pretty text-neutral-950 sm:text-4xl">
          We keep it simple, we actually care, and we put you in control
        </h2>
        <div className="mt-10 max-w-2xl">
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-neutral-600">
            <li className="flex flex-col gap-y-2">
              <div className="flex items-center gap-x-3">
                <MessageCircle className="h-5 w-5 flex-none text-neutral-950" />
                <strong className="font-semibold text-neutral-900">
                  We keep it simple
                </strong>
              </div>
              <p className="text-neutral-600">
                No confusing tech talk or lengthy contracts. We explain
                everything in plain English and focus on what actually matters
                for your business.
              </p>
            </li>
            <li className="flex flex-col gap-y-2">
              <div className="flex items-center gap-x-3">
                <UserCheck className="h-5 w-5 flex-none text-neutral-950" />
                <strong className="font-semibold text-neutral-900">
                  We actually care
                </strong>
              </div>
              <p className="text-neutral-600">
                Your success is our success. We&apos;re not just building you a
                website and disappearing – we&apos;re here for the long haul,
                celebrating your wins and solving problems together.
              </p>
            </li>
            <li className="flex flex-col gap-y-2">
              <div className="flex items-center gap-x-3">
                <Shield className="h-5 w-5 flex-none text-neutral-950" />
                <strong className="font-semibold text-neutral-900">
                  We put you in control
                </strong>
              </div>
              <p className="text-neutral-600">
                Our solutions are built for speed, security, and most
                importantly, your independence. You own your online presence,
                not us. No vendor lock-in, no surprises.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function Values() {
  return (
    <div className="bg-neutral-900 px-6 py-24 lg:px-8">
      <div className="max-w-3xl text-base/7 text-neutral-300">
        <p className="text-base/7 font-semibold text-white">Our Values</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-pretty text-white sm:text-4xl">
          Built on trust, loyalty, and compassion
        </h2>
        <p className="mt-6 text-xl/8">
          These aren&apos;t just words on a wall – they&apos;re the principles
          that guide every decision we make and every relationship we build.
        </p>
        <div className="mt-10 max-w-2xl">
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-neutral-300">
            <li className="flex flex-col gap-y-2">
              <div className="flex items-center gap-x-3">
                <Handshake className="h-5 w-5 flex-none text-white" />
                <strong className="font-semibold text-white">Loyalty</strong>
              </div>
              <p className="text-neutral-300">
                We stick with our clients through thick and thin. When you
                succeed, we celebrate. When you face challenges, we
                problem-solve together.
              </p>
            </li>
            <li className="flex flex-col gap-y-2">
              <div className="flex items-center gap-x-3">
                <Shield className="h-5 w-5 flex-none text-white" />
                <strong className="font-semibold text-white">Trust</strong>
              </div>
              <p className="text-neutral-300">
                We do what we say we&apos;ll do, when we say we&apos;ll do it.
                No surprises, no hidden fees, no runaround. Just honest work and
                transparent communication.
              </p>
            </li>
            <li className="flex flex-col gap-y-2">
              <div className="flex items-center gap-x-3">
                <Heart className="h-5 w-5 flex-none text-white" />
                <strong className="font-semibold text-white">Compassion</strong>
              </div>
              <p className="text-neutral-300">
                We understand that behind every business is a person working
                hard to provide for their family and serve their community. That
                drives everything we do.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function WhoWeServe() {
  return (
    <div className="bg-neutral-50 px-6 py-24 lg:px-8">
      <div className="max-w-3xl text-base/7 text-neutral-700">
        <p className="text-base/7 font-semibold text-neutral-950">
          Who We Serve
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-pretty text-neutral-950 sm:text-4xl">
          Local service businesses ready to grow
        </h2>
        <p className="mt-6 text-xl/8">
          We work primarily with local service businesses throughout South
          Florida, but we can help businesses anywhere in the country.
        </p>
        <div className="mt-10 max-w-2xl text-neutral-600">
          <p>
            Whether you&apos;re just starting out or you&apos;ve been in
            business for decades, if you&apos;re ready to grow your online
            presence the right way, we&apos;d love to chat. Our ideal clients
            are hardworking business owners who understand the value of a strong
            online presence but don&apos;t have the time or expertise to build
            it themselves.
          </p>
          <p className="mt-8">
            From HVAC contractors and plumbers to landscapers and cleaning
            services, we help the businesses that keep our communities running
            strong.
          </p>
        </div>
      </div>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'We help small businesses get found online. An online agency helping local service businesses build the online presence they deserve.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <RootLayout>
      <PageIntro
        eyebrow="About us"
        title="We Help Small Businesses Get Found Online"
      >
        <p>
          Every day, people in your neighborhood are searching for the services
          you provide. The problem? Most small business owners are too busy
          actually doing the work to worry about websites, online marketing, or
          complicated tech stuff.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>That&apos;s where we come in.</p>
        </div>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <WhatWeDo />

        <OurStory />

        <WhyDifferent />

        <Values />

        <WhoWeServe />
      </Container>

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="Practical insights and strategies to help your local service business grow online. No fluff, just real advice that works."
        pages={blogArticles}
      />

      <ContactSection />
    </RootLayout>
  )
}
