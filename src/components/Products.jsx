import { CardProduct } from '@/components/CardProduct'
import { Container } from './Container'

export function Products() {
  return (
    <section
      id="products"
      aria-label="Features for investing all your money"
      className="bg-indigo-200 py-20 sm:py-32"
    >
      <Container>
        <div
          id="products-container"
          className="mx-auto mb-12 max-w-2xl sm:text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-indigo-600">
            Our products
          </h2>
          <p className="mt-2 text-lg text-gray-800">
            Backed by a cryptographically secure random number generator, these
            indices are available to trade 24/7 and are unaffected by regular
            market hours, global events, or market and liquidity risks.
          </p>
        </div>
        <div id="card-container" className="mx-auto">
          <CardProduct />
        </div>
      </Container>
    </section>
  )
}
