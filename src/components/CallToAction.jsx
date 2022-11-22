import { AppStoreLink } from '@/components/AppStoreLink'
import { Button } from '@/components/Button'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'

export function CallToAction() {
  return (
    <section
      id="get-free-shares-today"
      className="relative overflow-hidden bg-[#613DC1] py-20 sm:py-28"
    >
      <div className="absolute top-1/2 left-20 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Trade today!
          </h2>
          <p className="mt-4 text-lg text-gray-100">
            It takes a snap of your fingers to sign up. Click the button and
            create an account today and you are ready to trade!
          </p>
          <div className="mt-8 flex justify-center">
            <Button
              href="https://app.syntrade.xyz/login"
              // variant="outline"
              className="hidden lg:block"
            >
              Trade now
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
