import Image from 'next/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import logoDocker from '@/images/logos/docker.svg'
import logoExpress from '@/images/logos/express.svg'
import logoFigma from '@/images/logos/figmalogo.svg'
import logoFlask from '@/images/logos/flask.svg'
import logoGraphql from '@/images/logos/graphql.svg'
import logoNextjs from '@/images/logos/nextJS.svg'
import logoPostgres from '@/images/logos/postgres.svg'
import logoTailwind from '@/images/logos/tailwind.svg'
import logoCloudflare from '@/images/logos/cloudflare.svg'
import logoTradingview from '@/images/logos/tradingview.svg'
import { CarouselHero } from './CarouselHero'

export function Hero() {
  return (
    <div
      id="hero-main"
      className="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36"
    >
      <Container>
        <div
          id="hero-container"
          className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20"
        >
          <div
            id="hero-title"
            className="relative z-10 mx-0 max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6"
          >
            <h1 className="text-4xl font-medium tracking-tight text-gray-900">
              Take <span className="font-bold text-indigo-600">1 tick</span> at
              a time.
            </h1>
            <p className="mt-6 text-justify text-lg text-gray-600">
              Syntrade is an online synthetic indices trading simulator. <br />{' '}
              Online trading has never been more exciting.
              <br />
              <br /> Sign up for free now and start trading!
            </p>
            <div
              id="title-gap"
              className="mt-8 flex flex-wrap gap-x-6 gap-y-4"
            ></div>
          </div>
          <div
            id="hero-carousel-main"
            className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-1 lg:mt-0 xl:col-span-6"
          >
            <div
              id="carousel-container"
              className="-mx-4 h-[448px] px-9 [mask-image:linear-gradient(to_bottom,white_90%,transparent)] sm:mx-0 lg:absolute lg:-inset-x-1 lg:-top-10 lg:-bottom-20 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32"
            >
              <CarouselHero />
            </div>
          </div>
          <div
            id="tools-container"
            className="relative -mt-4 lg:col-span-8 lg:mt-0 xl:col-span-8"
          >
            <p className="text-center text-sm font-semibold text-gray-900 lg:text-left">
              Produced with
            </p>
            <ul
              id="tools-list"
              role="list"
              className="mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-x-10 gap-y-8 lg:mx-0 lg:justify-start"
            >
              {[
                ['Docker', logoDocker],
                ['Express', logoExpress, 'hidden xl:block'],
                ['Figma', logoFigma, 'hidden xl:block'],
                ['Flask', logoFlask, 'hidden xl:block'],
                ['GraphQL', logoGraphql],
                ['NextJS', logoNextjs, 'hidden xl:block'],
                ['Postgres', logoPostgres],
                ['Tailwind', logoTailwind],
                ['Cloudflare', logoCloudflare],
                ['TradingView', logoTradingview],
              ].map(([name, logo, className]) => (
                <li key={name} className={clsx('flex', className)}>
                  <Image
                    src={logo}
                    alt={name}
                    className="h-[72px] w-[72px]"
                    unoptimized
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}
