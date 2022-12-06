import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import CarouselImage1 from '@/images/desktopVers.png'
import CarouselImage2 from '@/images/mobileVers.png'
import CarouselImage3 from '@/images/desktop_mobile.png'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
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
            className="h-full w-full object-cover"
            src={CarouselImage1.src}
            alt="image slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            id="image-2"
            className="h-full w-full object-cover"
            src={CarouselImage2.src}
            alt="image slide 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            id="image-3"
            className="h-full w-full object-cover"
            src={CarouselImage3.src}
            alt="image slide 3"
          />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
