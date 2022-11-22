import { CardProduct } from '@/components/CardProduct'
import { Container } from './Container'

export function PrimaryFeatures() {
  return (
    <section
      id="features"
      aria-label="Features for investing all your money"
      className="bg-[#613DC1] py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto mb-12 max-w-2xl sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white">
            Our products
          </h2>
          <p className="mt-2 text-lg text-gray-200">
            betting on underlining synthetic asset, direction of future price
          </p>
        </div>
        <div className="mx-auto">
          <CardProduct />
        </div>
      </Container>
    </section>
  )
}
