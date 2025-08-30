import { type Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { RootLayout } from '@/components/RootLayout'

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
                <h3 className="font-display text-base font-semibold text-neutral-950 mb-4">
                  How this helps you:
                </h3>
                <ul className="space-y-2">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-neutral-400 mr-2">•</span>
                      <span className="text-sm text-neutral-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="bg-neutral-950 text-white p-6 rounded-lg">
              <h4 className="font-display text-sm font-semibold mb-2">
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

function OnlineBooking() {
  return (
    <ServiceSection
      title="Online Booking That Works Around the Clock"
      subtitle="Your customers book appointments on your website anytime, day or night, without calling you."
      benefits={[
        "Book jobs while you sleep - customers don't wait for business hours",
        "No more phone tag or missed calls that turn into lost customers",
        "Customers see exactly when you're available, so no more double bookings",
        "Automatic text reminders mean fewer no-shows (and fewer wasted trips)",
        "Customers choose their service type upfront, so you know what to expect"
      ]}
      impact="Most contractors see 40% more bookings and save 3 hours per week on scheduling"
    >
      <p>
        Stop losing customers to competitors who answer their phones. With 24/7 online booking,
        your customers can schedule appointments whenever it&apos;s convenient for them - not just
        during your business hours.
      </p>
      <p>
        Our booking system integrates with your existing calendar and automatically handles
        scheduling conflicts, service duration estimates, and customer notifications. 
        You focus on the work, we handle the scheduling.
      </p>
    </ServiceSection>
  )
}

function QuickQuotes() {
  return (
    <ServiceSection
      title="Get Quotes Out Fast (Before Your Competition Does)"
      subtitle="Customers upload photos and details about their project. You get organized information and can send quotes quickly."
      benefits={[
        "Send professional quotes in minutes instead of days",
        "See the project before you drive there - no more wasted trips to jobs you can't do",
        "Your pricing stays consistent, which builds trust with customers",
        "Track which quotes turn into jobs so you know what's working",
        "Get to good customers faster while competitors are still playing phone tag"
      ]}
      impact="Win 25% more jobs and stop spending hours on quotes that go nowhere"
    >
      <p>
        Speed wins contracts. While your competitors are scheduling site visits and playing
        phone tag, you&apos;re already sending professional, detailed quotes based on photos
        and project specifications.
      </p>
      <p>
        Our quote system helps you price consistently, track conversion rates, and
        follow up automatically with prospects who haven&apos;t responded. Turn more estimates
        into paying jobs without the back-and-forth hassle.
      </p>
    </ServiceSection>
  )
}

function OnlinePayments() {
  return (
    <ServiceSection
      title="Get Paid Fast With Online Payments"
      subtitle="Customers pay you online with credit cards, debit cards, or apps like Apple Pay - no cash or checks needed."
      benefits={[
        "Get paid right after the job instead of waiting weeks for checks",
        "Customers can pay from their phone - makes it easy for them, faster for you",
        "Look more professional when you offer modern payment options",
        "Everything's tracked digitally, so no more lost payment records",
        "Perfect for maintenance customers who can pay automatically each month"
      ]}
      impact="Get paid 60% faster and eliminate the awkward 'payment conversation'"
    >
      <p>
        Cash flow problems kill small businesses. With online payments, you get paid
        immediately when the job is done - no more waiting weeks for checks or
        chasing down payments.
      </p>
      <p>
        Accept credit cards, debit cards, and digital wallets right from your phone.
        Set up automatic billing for maintenance customers and never chase a payment again.
      </p>
    </ServiceSection>
  )
}

function CustomerCommunication() {
  return (
    <ServiceSection
      title="Stay Connected With Customers (Without the Phone Calls)"
      subtitle="Automatically updates customers throughout the job and follows up afterward."
      benefits={[
        "Customers get 'we're on our way' texts instead of calling to ask where you are",
        "Automatic follow-ups ask for reviews when customers are happiest",
        "Send maintenance reminders so customers think of you first for future work",
        "Handle simple questions 24/7 with smart chatbots (no more after-hours calls)",
        "Professional communication makes you look bigger than you are"
      ]}
      impact="Get 35% higher customer satisfaction and 3x more Google reviews"
    >
      <p>
        Great communication separates good contractors from great ones. Automated updates
        keep customers informed without constant phone calls, and systematic follow-ups
        turn satisfied customers into repeat business and referrals.
      </p>
      <p>
        From arrival notifications to review requests to seasonal service reminders,
        our communication system keeps you top-of-mind with customers while requiring
        minimal effort from you.
      </p>
    </ServiceSection>
  )
}

function LeadManagement() {
  return (
    <ServiceSection
      title="Never Lose Another Lead Again"
      subtitle="Captures every potential customer from your website, Google, and referrals, then follows up automatically until they hire you."
      benefits={[
        "Every person who contacts you gets followed up - no one slips through the cracks",
        "Automatic follow-ups turn more quotes into paying jobs",
        "See which marketing actually brings in customers (and stop wasting money on what doesn't)",
        "Past customers get reminded about seasonal services like gutter cleaning or AC tune-ups",
        "Build a database of customers for future marketing"
      ]}
      impact="Turn 30% more leads into paying customers"
    >
      <p>
        Every missed lead is money left on the table. Our lead management system captures
        every inquiry from every source and follows up systematically until they become
        customers or clearly say no.
      </p>
      <p>
        Track which marketing channels bring the best customers, automate follow-up
        sequences for different types of leads, and turn your customer database into
        a recurring revenue machine.
      </p>
    </ServiceSection>
  )
}

function RecurringServices() {
  return (
    <ServiceSection
      title="Turn One-Time Jobs Into Recurring Income"
      subtitle="Manages maintenance contracts, seasonal reminders, and automatic billing for regular services."
      benefits={[
        "Set up monthly maintenance contracts that pay you every month",
        "Automatically remind customers about seasonal services (spring AC check, fall gutter cleaning)",
        "Customers can subscribe to regular services like weekly pool cleaning or monthly pest control",
        "Automatic billing means you don't chase payments",
        "Happy maintenance customers refer more business"
      ]}
      impact="Create 50% more recurring income and work with better long-term customers"
    >
      <p>
        Stop chasing new customers every month. Recurring service contracts provide
        predictable income and help you build long-term relationships with your
        best customers.
      </p>
      <p>
        From HVAC maintenance plans to regular cleaning services, our system handles
        scheduling, billing, and customer communication automatically. Focus on the
        work while we handle the business side.
      </p>
    </ServiceSection>
  )
}

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
        eyebrow="Why these work"
        title="Built for contractors, not generic businesses"
      >
        <p>
          These aren&apos;t just software features adapted from other industries. 
          Every tool is designed specifically for the unique challenges of 
          running a service business - from managing crews in the field to 
          dealing with emergency calls.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="No Tech Headaches">
            Everything works on your phone. No complicated software or training 
            needed. If you can send a text message, you can use these tools.
          </GridListItem>
          <GridListItem title="Built for Real Work">
            Designed by people who understand service businesses, not generic 
            business software that doesn&apos;t fit how you actually work.
          </GridListItem>
          <GridListItem title="Everything Connects">
            Customer info, scheduling, quotes, and payments all work together 
            automatically. No more juggling multiple apps and spreadsheets.
          </GridListItem>
          <GridListItem title="Start Making Money Fast">
            Most tools start helping within 24-48 hours, not months. You&apos;ll 
            see results immediately while we optimize your setup.
          </GridListItem>
          <GridListItem title="Grows With Your Business">
            Works whether you&apos;re working alone or managing multiple crews. 
            Scale up without changing systems or losing customer data.
          </GridListItem>
          <GridListItem title="Proven Results">
            These systems are used by successful contractors who compete with 
            anyone and consistently grow their revenue year over year.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Digital Services',
  description:
    'Digital tools that help plumbers, electricians, HVAC contractors, landscapers, and other service professionals compete with bigger companies and grow their business.',
}

export default function Services() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Digital Services" title="Digital Tools That Actually Help Your Service Business Grow">
        <p>
          Stop losing customers to bigger companies. Our simple digital solutions help plumbers, 
          electricians, HVAC contractors, landscapers, and other service pros compete with anyone - 
          without the tech headaches.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <OnlineBooking />
        <QuickQuotes />
        <OnlinePayments />
        <CustomerCommunication />
        <LeadManagement />
        <RecurringServices />
      </div>

      <WhyTheseWork />

      <ContactSection />
    </RootLayout>
  )
}