import React from "react";
import EventsSlider from "./EventsSlider";
import styles from "../../styles/artworksslider.module.css";
import Link from "next/link";

export default function ArtworksSlider({ artworks }) {

  return (
    <div className={styles.container}>
      <div className={styles.topic}>Featured Artists</div>
      <div className={styles.flex}>
        <Link className={styles.link} href="/Medium/paintings"><div className={styles.item}>Paintings</div></Link>
        <Link  className={styles.link} href="/Medium/prints"><div className={styles.item}>Prints</div></Link>
        <Link  className={styles.link} href="/Medium/sculptures"><div className={styles.item}>Sculptures</div></Link>
        <Link  className={styles.link} href='/Genre/figurative'><div className={styles.item}>Figurative</div></Link>
        <Link  className={styles.link} href='/Genre/abstract'><div className={styles.item}>Abstract</div></Link>
        <Link  className={styles.link} href='/Genre/landscape'><div className={styles.item}>Landscape</div></Link>
      </div>
      <EventsSlider artworks={artworks}/>
      {/* <div className={styles.imgcontain} >
      <SmoothScrollimg>
            <div className={`${styles.one}`} id={artworks[0].url}>
            <Image className={`${styles.frame} ${styles.fone}`} src={'/artimages/frame.png'} width={400} height={400} alt="frame" />
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
              <Image className={`${styles.frame} ${styles.ftwo}`} src={'/artimages/frame.png'} width={400} height={400} alt="frame" />
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
      </div> */}
    </div>
  );
}
