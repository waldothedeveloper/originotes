import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-medium text-balance text-white sm:text-4xl">
              Make your online presence great again.
            </h2>
            <p className="mt-6 text-base/7 text-white">
              Every day you wait, another client hires someone else. Let’s flip
              that script.
            </p>

            <div className="mt-12 flex">
              <Button href="/contact" invert>
                Book Your Free Strategy Call
              </Button>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
