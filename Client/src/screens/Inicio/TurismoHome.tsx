import React, { useRef, useState } from 'react'
import SwiperCore, { Virtual, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './turismoHome.css'
import Card from '../../components/Card'
import { CardTurismoHome } from '../../components/CardHome/CardTurismoHome'

// install Virtual module
SwiperCore.use([Virtual, Navigation, Pagination])

export function TurismoHome() {
  // Create array with 500 slides
  return (
    <div className="turismoHome w-full">
      <div className="flex justify-center text-center mb-16">
        <h1 className="text-4xl font-extrabold uppercase">O que fazer?</h1>
      </div>
      <Swiper
        slidesPerView={3}
        navigation={true}
        virtual
        // pagination={{
        //   clickable: true,
        // }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <CardTurismoHome
            title="Santuário de Santa Terezinha do Menino Jesus"
            path="src/assets/img/turismo/02_512x342.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardTurismoHome
            title="Santuário de Santa Terezinha do Menino Jesus"
            path="src/assets/img/turismo/02_512x342.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardTurismoHome
            title="Santuário de Santa Terezinha do Menino Jesus"
            path="src/assets/img/turismo/02_512x342.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardTurismoHome
            title="Santuário de Santa Terezinha do Menino Jesus"
            path="src/assets/img/turismo/02_512x342.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
