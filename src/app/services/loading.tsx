import { Container } from '@/components/Container'
import { RootLayout } from '@/components/RootLayout'

export default function ServicesLoading() {
  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        {/* Page intro skeleton */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <div className="animate-pulse">
              <div className="mb-6 h-4 w-32 rounded bg-gray-200"></div>
              <div className="mb-6 h-12 w-4/5 rounded bg-gray-200"></div>
              <div className="h-4 w-3/4 rounded bg-gray-200"></div>
            </div>
          </div>
        </div>
      </Container>

      {/* Service sections skeleton */}
      <div className="mt-24 space-y-24 sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        {[...Array(6)].map((_, index) => (
          <Container key={index} className="animate-pulse">
            <div className="lg:flex lg:items-start lg:justify-between lg:gap-x-8">
              <div className="lg:w-2/3">
                <div className="mb-2 h-4 w-8 rounded bg-gray-200"></div>
                <div className="mb-4 h-10 w-3/4 rounded bg-gray-200"></div>
                <div className="mb-6 h-6 w-5/6 rounded bg-gray-200"></div>
                <div className="space-y-4">
                  <div className="h-4 w-full rounded bg-gray-200"></div>
                  <div className="h-4 w-11/12 rounded bg-gray-200"></div>
                  <div className="h-4 w-4/5 rounded bg-gray-200"></div>
                </div>
              </div>
              
              <div className="mt-12 lg:mt-0 lg:w-1/3">
                <div className="mb-8">
                  <div className="mb-4 h-4 w-32 rounded bg-gray-200"></div>
                  <div className="space-y-2">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="h-3 w-11/12 rounded bg-gray-200"></div>
                    ))}
                  </div>
                </div>
                
                <div className="h-24 w-full rounded-lg bg-gray-300"></div>
              </div>
            </div>
          </Container>
        ))}
      </div>

      {/* Why these work section skeleton */}
      <Container className="mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <div className="animate-pulse">
            <div className="mb-6 h-4 w-24 rounded bg-gray-200"></div>
            <div className="mb-6 h-10 w-3/4 rounded bg-gray-200"></div>
            <div className="h-4 w-5/6 rounded bg-gray-200"></div>
          </div>
        </div>
        
        <div className="mt-24 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="mb-4 h-6 w-32 rounded bg-gray-200"></div>
              <div className="space-y-2">
                <div className="h-3 w-full rounded bg-gray-200"></div>
                <div className="h-3 w-11/12 rounded bg-gray-200"></div>
                <div className="h-3 w-4/5 rounded bg-gray-200"></div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Contact section skeleton */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="animate-pulse">
          <div className="mb-6 h-10 w-3/4 rounded bg-gray-200"></div>
          <div className="mb-8 h-4 w-5/6 rounded bg-gray-200"></div>
          <div className="h-12 w-48 rounded bg-gray-200"></div>
        </div>
      </Container>
    </RootLayout>
  )
}