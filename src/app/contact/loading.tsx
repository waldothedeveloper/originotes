import { Container } from '@/components/Container'
import { RootLayout } from '@/components/RootLayout'

export default function ContactLoading() {
  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        {/* Page intro skeleton */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <div className="animate-pulse">
              <div className="mb-6 h-4 w-24 rounded bg-gray-200"></div>
              <div className="mb-6 h-12 w-3/4 rounded bg-gray-200"></div>
              <div className="h-4 w-1/2 rounded bg-gray-200"></div>
            </div>
          </div>
        </div>
      </Container>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          {/* Contact form skeleton */}
          <div className="animate-pulse">
            <div className="mb-6 h-8 w-32 rounded bg-gray-200"></div>
            <div className="space-y-4 rounded-2xl bg-white/50 p-6">
              <div className="h-16 rounded bg-gray-200"></div>
              <div className="h-16 rounded bg-gray-200"></div>
              <div className="h-16 rounded bg-gray-200"></div>
              <div className="h-16 rounded bg-gray-200"></div>
              <div className="h-24 rounded bg-gray-200"></div>
            </div>
            <div className="mt-6 h-16 rounded bg-gray-200 p-6"></div>
            <div className="mt-6 h-12 w-48 rounded bg-gray-200"></div>
          </div>

          {/* Contact details skeleton */}
          <div className="animate-pulse">
            <div className="mb-6 h-8 w-24 rounded bg-gray-200"></div>
            <div className="mb-2 h-4 w-32 rounded bg-gray-200"></div>
            <div className="mb-8 h-4 w-48 rounded bg-gray-200"></div>

            <div className="mt-16 border-t border-gray-200 pt-16">
              <div className="mb-6 h-8 w-28 rounded bg-gray-200"></div>
              <div className="flex space-x-4">
                <div className="h-6 w-6 rounded bg-gray-200"></div>
                <div className="h-6 w-6 rounded bg-gray-200"></div>
                <div className="h-6 w-6 rounded bg-gray-200"></div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </RootLayout>
  )
}
