import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

import './styles.css'
import { Pagination, Navigation, Autoplay } from 'swiper'

export function Carousel() {
  return (
    <>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        autoplay={true}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="bg-no-repeat object-center"
            src="https://images.unsplash.com/photo-1588200908342-23b585c03e26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="pc"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="bg-no-repeat object-center"
            src="https://images.unsplash.com/photo-1588200908342-23b585c03e26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="aaaa"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="bg-no-repeat object-center"
            src="https://images.unsplash.com/photo-1603684470419-9f41146fddac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="sss"
          />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
