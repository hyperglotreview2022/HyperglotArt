import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "../../styles/artworksslider.module.css";
import Image from "next/image";
import Link from "next/link";
import SmoothScrollimg from "../SmoothScroll/SmoothScrollimg";

export default function ArtworksSlider({ artworks }) {
  const [offsetY, setOffsetY] = useState(1000);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(()=>{
    window.addEventListener("scroll",handleScroll);
  },[]);

  return (
    <div className={styles.container}>
      <div className={styles.topic}>Featured Artists</div>
      <div className={styles.flex}>
        <div className={styles.item}>Show All</div>
        <div className={styles.item}>Sculptures</div>
        <div className={styles.item}>Best Curation</div>
        <div className={styles.item}>Digital Art</div>
        <div className={styles.item}>Marketplace Spaces</div>
        <div className={styles.item}>Custom</div>
      </div>
      <div className={styles.imgcontain} >
      <SmoothScrollimg>
            <div className={`${styles.one}`} id={artworks[0].url}>

              <Image
                src={artworks[0].url}
                className={`${styles.fimg}`}
                width={400}
                height={400}
                alt="image"
              />

            </div>


            <div id={artworks[1].url}>
            <Link href={`/Artistsartworks/${artworks[1].id}`}>
              <Image
                src={artworks[1].url}
                className={`${styles.fimg} ${styles.two}`}
                width={400}
                height={400}
                alt="image"
              />
              </Link>
            </div>
            <div id={artworks[2].url}>
              <Image
                src={artworks[2].url}
                className={`${styles.fimg} ${styles.three}`}
                width={400}
                height={400}
                alt="image"
              />
            </div>
            <div id={artworks[3].url}>
              <Image
                src={artworks[3].url}
                className={`${styles.fimg} ${styles.four}`}
                width={400}
                height={400}
                alt="image"
              />
            </div>
            <div id={artworks[4].url}>
              <Image
                src={artworks[4].url}
                className={`${styles.fimg} ${styles.five}`}
                width={400}
                height={400}
                alt="image"
              />
            </div>
            <div id={artworks[5].url}>
              <Image
                src={artworks[5].url}
                className={`${styles.fimg} ${styles.six}`}
                width={400}
                height={400}
                alt="image"
              />
            </div>
            <div id={artworks[6].url}>
              <Image
                src={artworks[6].url}
                className={`${styles.fimg} ${styles.seven}`}
                width={400}
                height={400}
                alt="image"
              />
            </div>
            <div id={artworks[7].url}>
              <Image
                src={artworks[7].url}
                className={`${styles.fimg} ${styles.eight}`}
                width={400}
                height={400}
                alt="image"
              />
            </div>
            </SmoothScrollimg>
      </div>
    </div>
  );
}
