import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import CarouselDesktop from '@/images/desktopVers.png'
import CarouselMobile from '@/images/mobileVers.png'
import CarouselTablet from '@/images/tabletVers.png'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Autoplay } from 'swiper'

export function CarouselHero() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper w-full rounded-lg bg-transparent
        "
      >
        <SwiperSlide className="items-center justify-center">
          <img
            id="image-1"
            className="object-fit h-1/3 w-full"
            src={CarouselDesktop.src}
            alt="image carousel desktop"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            id="image-2"
            className="object-fit h-1/3 w-full"
            src={CarouselMobile.src}
            alt="image carousel mobile"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            id="image-3"
            className="object-fit h-1/3 w-full"
            src={CarouselTablet.src}
            alt="image carousel tablet"
          />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
