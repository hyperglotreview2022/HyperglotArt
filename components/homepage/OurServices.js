import Image from 'next/image'
import React from 'react'
import styles from '../../styles/ourservices.module.css'

export default function OurServices() {
  return (
    <div className={styles.container}>
      <div className={styles.topic}>Our Services</div>
      <div className={styles.flex}>
        <div className={styles.card}>
        <div className={styles.imgc}>
          <Image src={'/servicesimages/services (1).jpg'} className={styles.img} width={400} height={400} alt='image' />
        </div>
          <div className={`${styles.info} ${styles.color1}`}>
            <h4>ART.SPACES</h4>
            <h6>3D EXHIBITIONS</h6>
            <p>The virtual tool to curate, present and archive artworks in outstanding 3D exhibitions.</p>
          </div>
        </div>

        <div className={styles.card}>
        <div className={styles.imgc}>
          <Image src={'/servicesimages/services (2).jpg'} className={styles.img} width={400} height={400} alt='image' />
        </div>
          <div className={`${styles.info} ${styles.color2}`}>
            <h4>ART.SPACES</h4>
            <h6>3D EXHIBITIONS</h6>
            <p>The virtual tool to curate, present and archive artworks in outstanding 3D exhibitions.</p>
          </div>
        </div>

        <div className={styles.card}>
        <div className={styles.imgc}>
          <Image src={'/servicesimages/services (3).jpg'} className={styles.img} width={400} height={400} alt='image' />
        </div>
          <div className={`${styles.info} ${styles.color3}`}>
            <h4>ART.SPACES</h4>
            <h6>3D EXHIBITIONS</h6>
            <p>The virtual tool to curate, present and archive artworks in outstanding 3D exhibitions.</p>
          </div>
        </div>

        <div className={styles.card}>
        <div className={styles.imgc}>
          <Image src={'/servicesimages/services (4).jpg'} className={styles.img} width={400} height={400} alt='image' />
        </div>
          <div className={`${styles.info} ${styles.color4}`}>
            <h4>ART.SPACES</h4>
            <h6>3D EXHIBITIONS</h6>
            <p>The virtual tool to curate, present and archive artworks in outstanding 3D exhibitions.</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}
