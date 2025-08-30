import { type Metadata } from 'next'
// import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { RootLayout } from '@/components/RootLayout'
import { RotatingBusinessTypes } from '@/components/RotatingBusinessTypes'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
// import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
// import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
// import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
// import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
// import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
// import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoEncoreAcademyDark from '@/images/clients/encore-academy/logoEncoreAcademyoftheArts.png'
// import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
// import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
// import { type CaseStudy, type MDXEntry } from '@/lib/mdx'

// const clients = [
//   ['Phobia', logoPhobiaLight],
//   ['Family Fund', logoFamilyFund],
//   ['Unseal', logoUnseal],
//   ['Mail Smirk', logoMailSmirk],
//   ['Home Work', logoHomeWork],
//   ['Green Life', logoGreenLife],
//   ['Bright Path', logoBrightPath],
//   ['North Adventures', logoNorthAdventures],
// ]

// function Clients() {
//   return (
//     <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
//       <Container>
//         <FadeIn className="flex items-center gap-x-8">
//           <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
//             We’ve worked with hundreds of amazing people
//           </h2>
//           <div className="h-px flex-auto bg-neutral-800" />
//         </FadeIn>
//         <FadeInStagger faster>
//           <ul
//             role="list"
//             className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
//           >
//             {clients.map(([client, logo]) => (
//               <li key={client}>
//                 <FadeIn>
//                   <Image src={logo} alt={client} unoptimized />
//                 </FadeIn>
//               </li>
//             ))}
//           </ul>
//         </FadeInStagger>
//       </Container>
//     </div>
//   )
// }

// function CaseStudies({
//   caseStudies,
// }: {
//   caseStudies: Array<MDXEntry<CaseStudy>>
// }) {
//   return (
//     <>
//       <SectionIntro
//         title="Harnessing technology for a brighter future"
//         className="mt-24 sm:mt-32 lg:mt-40"
//       >
//         <p>
//           We believe technology is the answer to the world’s greatest
//           challenges. It’s also the cause, so we find ourselves in bit of a
//           catch 22 situation.
//         </p>
//       </SectionIntro>
//       <Container className="mt-16">
//         <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
//           {caseStudies.map((caseStudy) => (
//             <FadeIn key={caseStudy.href} className="flex">
//               <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
//                 <h3>
//                   <Link href={caseStudy.href}>
//                     <span className="absolute inset-0 rounded-3xl" />
//                     <Image
//                       src={caseStudy.logo}
//                       alt={caseStudy.client}
//                       className="h-16 w-16"
//                       unoptimized
//                     />
//                   </Link>
//                 </h3>
//                 <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
//                   <time
//                     dateTime={caseStudy.date.split('-')[0]}
//                     className="font-semibold"
//                   >
//                     {caseStudy.date.split('-')[0]}
//                   </time>
//                   <span className="text-neutral-300" aria-hidden="true">
//                     /
//                   </span>
//                   <span>Case study</span>
//                 </p>
//                 <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
//                   {caseStudy.title}
//                 </p>
//                 <p className="mt-4 text-base text-neutral-600">
//                   {caseStudy.description}
//                 </p>
//               </article>
//             </FadeIn>
//           ))}
//         </FadeInStagger>
//       </Container>
//     </>
//   )
// }

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="Small Business, Big Dreams. Zero Time? We’ve Got You."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          The smarter, simpler way to run your business while you focus on
          actually running your business.
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
            <ListItem title="Online Booking That Works Around the Clock">
              Your calendar fills while you’re off the clock. No more “Sorry, we
              missed your call” moments — just smooth, 24/7 online booking that
              works even when you don’t.
            </ListItem>

            <ListItem title="Get Paid Fast With Online Payments">
              Checks are for your grandma. Accept cards, Apple Pay, and auto-pay
              so you stop chasing cash and start stacking it.
            </ListItem>
            <ListItem title="Stay Connected With Customers (Without the Phone Calls)">
              Send updates, reminders, and review requests automatically. Look
              bigger, sound smarter, and stay top-of-mind without ever picking
              up the phone.
            </ListItem>
            <ListItem title="Never Lose Another Lead Again">
              Every lead gets chased (nicely). Our AI agents capture, track, and
              follow up so no one gets away — unless they ghost you, in which
              case, their loss.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'We help small businesses grow a stronger online presence with strategic marketing programs, AI automation, and proven lead generation strategies.',
}

export default async function Home() {
  // let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <RotatingBusinessTypes />

        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-neutral-950 sm:text-7xl">
            Stop Chasing Customers. Make Them Chase You.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            We get you more jobs without you lifting a finger. Your phone will
            ring, your inbox will fill, and you&apos;ll wonder where all these
            customers came from.
          </p>
          <div className="mt-12 flex items-center gap-x-6">
            <Link
              href="/services"
              className="text-sm leading-6 font-semibold text-neutral-900 transition-colors hover:text-neutral-700"
            >
              Tell me more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </FadeIn>
      </Container>

      {/* <Clients /> */}

      {/* <CaseStudies caseStudies={caseStudies} /> */}

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{
          name: 'Encore Academy of the Arts',
          logo: logoEncoreAcademyDark,
        }}
      >
        Originotes completely transformed our online presence. Our website now
        captures the creativity and passion of our performing arts programs, and
        student enrollment has increased 40% since launch.
      </Testimonial>

      <Services />

      <ContactSection />
    </RootLayout>
  )
}
