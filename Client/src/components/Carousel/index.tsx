import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import banner1 from '../../assets/img/inicio/banner1.jpg'
import banner2 from '../../assets/img/inicio/banner2.jpg'
import banner3 from '../../assets/img/inicio/banner3.png'

import './styles.css'
import { Navigation, Autoplay } from 'swiper'

export function Carousel() {
  const params = {
    slide1: {
      img: banner1,
      title: 'Santuario São Miguel Arcanjo',
    },
    slide2: {
      img: banner2,
      title: 'Castelo Vinícola La Dorni',
    },
    slide3: {
      img: banner3,
      title: 'Praça Brasil/Japão e Centro Cultural',
    },
  }
  function textCarousel(id: number) {
    const title = document.getElementById('carousel-title') as HTMLElement
    switch (id) {
      case 0:
        return (
          (title.innerHTML = params.slide1.title),
          (title.style.animation = 'fade forwards 2s;')
        )
      case 1:
        return (title.innerHTML = params.slide2.title)
      case 2:
        return (title.innerHTML = params.slide3.title)
      default:
        return (title.innerHTML = 'eeee')
    }
  }

  return (
    <>
      <div className="absolute left-0 mt-10 z-50 bg-green-brasao2 p-2 pr-5 shadow-md w-3/4 md:w-auto">
        <h4 id="carousel-title" className="m-0 ml-16 text-white">
          Santuario São Miguel Arcanjo
        </h4>
      </div>
      <Swiper
        loop={true}
        pagination={{
          type: 'fraction',
        }}
        autoplay={true}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="carousel-swiper"
        onSlideChange={(swiperCore) => textCarousel(swiperCore.realIndex)}
      >
        <SwiperSlide>
          <img
            className="bg-no-repeat object-center"
            src={params.slide1.img}
            alt="Slide Image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="bg-no-repeat object-center"
            src={params.slide2.img}
            alt="Slide Image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="bg-no-repeat object-center"
            src={params.slide3.img}
            alt="Slide Image"
          />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
