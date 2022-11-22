import { CardProduct } from '@/components/CardProduct'
import { Container } from './Container'

export function PrimaryFeatures() {
  return (
    <section
      id="features"
      aria-label="Features for investing all your money"
      className="bg-[#A6A6E0] py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto mb-12 max-w-2xl sm:text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-black">
            Our products
          </h2>
          <p className="mt-2 text-lg text-gray-900">
            Backed by a cryptographically secure random number generator, these
            indices are available to trade 24/7 and are unaffected by regular
            market hours, global events, or market and liquidity risks.
          </p>
        </div>
        <div className="mx-auto">
          <CardProduct />
        </div>
      </Container>
    </section>
  )
}
