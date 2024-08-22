import React from 'react'
import styles from '../../styles/partners.module.css'
import Image from 'next/image'

export default function Partners() {

    const images = ['/Partnerslogo/9.jpeg','/Partnerslogo/1.jpg','/Partnerslogo/2.jpg','/Partnerslogo/3.jpg','/Partnerslogo/4.jpg','/Partnerslogo/10.jpeg','/Partnerslogo/6.jpg','/Partnerslogo/7.jpg','/Partnerslogo/8.jpg']
  return (
    <div className={styles.container}>
        <div className={styles.heading}>Our Partner Brands</div>
        <div className={styles.grid}>
            {images.map(data=><div className={styles.imgcontainer}><Image src={data} className={styles.img} width={400} height={400} alt='image' /></div>)}
        </div>
    </div>
  )
}
