import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation"; 
import "swiper/css/pagination";
import styles from "../../styles/eventsslider.module.css";
import Image from "next/image";

export default function EventsSlider() {
  return (
    <div className={styles.margintop}>
    <div className="swiper-controller">
    <Swiper
      className={styles.swiper}
      speed={1500}
      autoplay={{ delay: 5000 }}
      loop={true}
      modules={[Autoplay, Navigation, Pagination, A11y]}
      spaceBetween={10}
      slidesPerView={5}
      navigation={{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
      }}
      pagination={{ clickable: true, el:'.swiper-pagination', type:'bullets', }}
      breakpoints={{
    // when window width is >= 640px
    200: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 1,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
    },
    1100: {
      slidesPerView: 4,
    },
  }}
    >    
            <SwiperSlide className={styles.slidecontainer}>
            <div>
            <Image src={'/servicesimages/services (1).jpg'} className={styles.img} width={1200} height={1200} alt='image' />
              <div className={styles.info}>
                <h1 className={styles.sliderheading}>Event 1</h1>
                <h3 className={styles.subheading}>by Artist</h3>
              </div>
            </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slidecontainer}>
            <div>
            <Image src={'/servicesimages/services (2).jpg'} className={styles.img} width={1200} height={1200} alt='image' />
              <div className={styles.info}>
                <h1 className={styles.sliderheading}>Event 2</h1>
                <h3 className={styles.subheading}>by Artist</h3>
              </div>
            </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slidecontainer}>
            <div>
            <Image src={'/servicesimages/services (3).jpg'} className={styles.img} width={1200} height={1200} alt='image' />
              <div className={styles.info}>
                <h1 className={styles.sliderheading}>Event 3</h1>
                <h3 className={styles.subheading}>by Artist</h3>
              </div>
            </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slidecontainer}>
            <div>
            <Image src={'/servicesimages/services (4).jpg'} className={styles.img} width={1200} height={1200} alt='image' />
              <div className={styles.info}>
                <h1 className={styles.sliderheading}>Event 4</h1>
                <h3 className={styles.subheading}>by Artist</h3>
              </div>
            </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slidecontainer}>
            <div>
            <Image src={'/servicesimages/services (1).jpg'} className={styles.img} width={1200} height={1200} alt='image' />
              <div className={styles.info}>
                <h1 className={styles.sliderheading}>Event 5</h1>
                <h3 className={styles.subheading}>by Artist</h3>
              </div>
            </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slidecontainer}>
            <div>
            <Image src={'/servicesimages/services (2).jpg'} className={styles.img} width={1200} height={1200} alt='image' />
              <div className={styles.info}>
                <h1 className={styles.sliderheading}>Event 6</h1>
                <h3 className={styles.subheading}>by Artist</h3>
              </div>
            </div>
            </SwiperSlide>
    </Swiper>
    <div className='button-Arrangement'>
          <div className="button-swiper">
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
            {/* <div className="swiper-pagination"></div> */}
          </div>
    </div>
    </div>
    </div>
  )
}
