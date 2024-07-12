import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../../styles/standout.module.css'

export default function StandOut() {
  return (
    <div className={styles.container}>
      <div className={styles.topic}>Virtual Gallery</div>
      <div className={styles.imgcont1}>
        <Image src={'/servicesimages/services (5).jpg'} className={styles.img1} width={1200} height={1200} alt='image' />
        <div className={styles.cover1}>
        <div className={styles.border1}>
          <div className={styles.heading1}>Browse our Virtual Gallery</div>
          <div className={styles.desc1}>Experience Art in 3D from the comfort of your home</div>
        </div>
        </div>
      </div>
      <div className={styles.flex}>
        <div>
          <div className={styles.heading}><span>Latest </span>Virtual Gallery</div>
          <div className={styles.info}>
            <div>Choose from a variety of 500+ artworks from our marketplace.</div>
            <div>Add artworks, sculptures, prints, exclusive and limited edition items to your collection. </div>
            <div>Get in touch with us for a quote and experience a seamless process of purchase and shipping. </div>
          </div>
          <Link href={'/ContactUs'} className={styles.btn}>Get in Touch</Link>
        </div>
        <div>
          <Image src={'/servicesimages/services (6).jpg'} className={styles.img} width={400} height={400} alt='image' />
        </div>
      </div>
    </div>
  )
}
