import { Container } from '@/components/Container'
import { RootLayout } from '@/components/RootLayout'
import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <RootLayout>
      <Container className="mx-auto mt-24 flex sm:mt-32 md:mt-56">
        <SignIn />
      </Container>
    </RootLayout>
  )
}
