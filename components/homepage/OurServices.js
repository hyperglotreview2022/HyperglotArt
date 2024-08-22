import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../../styles/ourservices.module.css'

export default function OurServices() {
  return (
    <div className={styles.container}>
    <div className={styles.centretext}>
      <div className={styles.topic}>Our Services</div>
    </div>
      
      <div className={styles.flex}>
        <div className={styles.card}>
        <Link href={'/OurServices/Artists'} className={styles.link}>
        <div className={styles.imgc}>
          <Image src={'/servicesimages/services (5).jpg'} className={styles.img} width={400} height={400} alt='image' />
        </div>
          <div className={`${styles.info} ${styles.color1}`}>
            <h4>Artists</h4>
            <h6></h6>
            <p></p>
          </div>
          </Link>
        </div>

        <div className={styles.card}>
        <Link href={'#'} className={styles.link}>
        <div className={styles.imgc}>
          <Image src={'/servicesimages/3.jpg'} className={styles.img} width={400} height={400} alt='image' />
        </div>
          <div className={`${styles.info} ${styles.color2}`}>
            <h4>Galleries</h4>
            <h6></h6>
            <p></p>
          </div>
          </Link>
        </div>

        <div className={styles.card}>
        <Link href={'/OurServices/Buyers'} className={styles.link}>
        <div className={styles.imgc}>
          <Image src={'/servicesimages/Buyers (2).jpeg'} className={styles.img} width={400} height={400} alt='image' />
        </div>
          <div className={`${styles.info} ${styles.color3}`}>
            <h4>Buyers</h4>
            <h6></h6>
            <p></p>
          </div>
          </Link>
        </div>
        
      </div>
    </div>
  )
}
