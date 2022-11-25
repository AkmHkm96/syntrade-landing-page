import Head from 'next/head'

import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Products } from '@/components/Products'
import { Reviews } from '@/components/Reviews'
import { TradeTypes } from '@/components/TradeTypes'
import { BackToTop } from '@/components/BackToTopButton'

export default function Home() {
  return (
    <>
      <Head>
        <title>Syntrade - Synthetic Indices Trading Simulator</title>
        <meta
          name="description"
          content="It is never too late to learn and start trading. Syntrade provides traders, new or old,with a platform for them to practice online trading with synthetic indices."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <Products />
        <TradeTypes />
        <Reviews />
        <Faqs />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
