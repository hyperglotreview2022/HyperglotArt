import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation"; 
import "swiper/css/pagination";
import styles from "../../styles/eventsslider.module.css";
import Image from "next/image";
import Link from 'next/link';

export default function EventsSlider({ artworks }) {

  return (
    <div className={styles.margintop}>
    <div className="swiper-controller">
    <Swiper
      className={styles.swiper}
      speed={1500}
      autoplay={{ delay: 7000 }}
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
      slidesPerView: 2.5,
    },
  }}
    >       
            <SwiperSlide className={styles.sliderbigcont}>
            <Link href={`/SingleProduct/${artworks[65].id}`} className={styles.link}>
              <div className={styles.slidecontainer}>
                <Image src={"/Artists-Artworks/BalwinderTanwar/1 (3).jpg"} className={styles.img} width={2000} height={2000} alt='image' />
                <div className={styles.info}>
                  <h1 className={styles.sliderheading}>Balwinder Tanwar</h1>
                  <h3 className={styles.subheading}>Dreams of Weeds</h3>
                </div>
              </div>
            </Link>
            </SwiperSlide>
            {/* <SwiperSlide className={styles.sliderbigcont}>
            <Link href={`/SingleProduct/${artworks[77].id}`} className={styles.link}>
              <div className={styles.slidecontainer}>
                <Image src={"/Artists-Artworks/Meenugarg/1 (1).png"} className={styles.img} width={2000} height={2000} alt='image' />
                <div className={styles.info}>
                  <h1 className={styles.sliderheading}>Meenu Garg</h1>
                  <h3 className={styles.subheading}>अनंत</h3>
                </div>
              </div>
              </Link>
            </SwiperSlide> */}

            <SwiperSlide className={styles.sliderbigcont}>
            <Link href={`/SingleProduct/${artworks[54].id}`} className={styles.link}>
              <div className={styles.slidecontainer}>
                <Image src={"/Artists-Artworks/DebangsuBiswas/3.jpg"} className={styles.img} width={2000} height={2000} alt='image' />
                <div className={styles.info}>
                  <h1 className={styles.sliderheading}>Debangsu Biswas</h1>
                  <h3 className={styles.subheading}>Shelter - 3</h3>
                </div>
              </div>
              </Link>
            </SwiperSlide>

            <SwiperSlide className={styles.sliderbigcont}>
            <Link href={`/SingleProduct/${artworks[40].id}`} className={styles.link}>
              <div className={styles.slidecontainer}>
                <Image src={"/Artists-Artworks/PreetiSethi/15.jpg"} className={styles.img} width={2000} height={2000} alt='image' />
                <div className={styles.info}>
                  <h1 className={styles.sliderheading}>Preeti Sethi</h1>
                  <h3 className={styles.subheading}>Restructuring Nature</h3>
                </div>
              </div>
              </Link>
            </SwiperSlide>

            <SwiperSlide className={styles.sliderbigcont}>
            <Link href={`/SingleProduct/${artworks[25].id}`} className={styles.link}>
              <div className={styles.slidecontainer}>
                <Image src={"/Artists-Artworks/PrithujMondal/conversation.jpg"} className={styles.img} width={2000} height={2000} alt='image' />
                <div className={styles.info}>
                  <h1 className={styles.sliderheading}>Prithuj Mondal</h1>
                  <h3 className={styles.subheading}>Conversation</h3>
                </div>
              </div>
              </Link>
            </SwiperSlide>

            <SwiperSlide className={styles.sliderbigcont}>
              <Link href={`/SingleProduct/${artworks[16].id}`} className={styles.link}>
              <div className={styles.slidecontainer}> 
                <Image src={"/Artists-Artworks/ShayaniBoral/discuss.jpg"} className={styles.img} width={2000} height={2000} alt='image' />
                <div className={styles.info}>
                  <h1 className={styles.sliderheading}>Shayani Boral</h1>
                  <h3 className={styles.subheading}>Discuss</h3>
                </div>
              </div>
              </Link>
            </SwiperSlide>

            <SwiperSlide className={styles.sliderbigcont}>
            <Link href={`/SingleProduct/${artworks[13].id}`} className={styles.link}>
              <div className={styles.slidecontainer}>
                <Image src={"/Artists-Artworks/TitasDas/submergedx.jpg"} className={styles.img} width={2000} height={2000} alt='image' />
                <div className={styles.info}>
                  <h1 className={styles.sliderheading}>Titas Das</h1>
                  <h3 className={styles.subheading}>Submerged X</h3>
                </div>
              </div>
              </Link>
            </SwiperSlide>

            {/* <SwiperSlide className={styles.sliderbigcont}>
              <Link href={`/SingleProduct/${artworks[6].id}`} className={styles.link}>
              <div className={styles.slidecontainer}>
                <Image src={"/Artists-Artworks/SusnataChatterjee/evening.jpeg"} className={styles.img} width={2000} height={2000} alt='image' />
                <div className={styles.info}>
                  <h1 className={styles.sliderheading}>Susnata Chatterjee</h1>
                  <h3 className={styles.subheading}>Evening</h3>
                </div>
              </div>
              </Link>
            </SwiperSlide> */}

            {/* <SwiperSlide className={styles.sliderbigcont}>
            <Link href={`/SingleProduct/${artworks[12].id}`} className={styles.link}>
              <div className={styles.slidecontainer}>
                <Image src={"/Artists-Artworks/SubrataGhosh/Bija/price25k/bija (2).jpg"} className={styles.img} width={2000} height={2000} alt='image' />
                <div className={styles.info}>
                  <h1 className={styles.sliderheading}>Subrata Ghosh</h1>
                  <h3 className={styles.subheading}>Bija/ Hope 2</h3>
                </div>
              </div>
              </Link>
            </SwiperSlide> */}
            
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
