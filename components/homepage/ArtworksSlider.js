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
    </div>
  );
}
