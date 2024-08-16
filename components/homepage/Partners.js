import React from 'react'
import styles from '../../styles/partners.module.css'
import Image from 'next/image'

export default function Partners() {

    const images = ['/Partnerslogo/1.jpg','/Partnerslogo/2.jpg','/Partnerslogo/3.jpg','/Partnerslogo/4.jpg','/Partnerslogo/5.jpg','/Partnerslogo/6.jpg','/Partnerslogo/7.jpg','/Partnerslogo/8.jpg']
  return (
    <div>
        <div>Our Partner Brands</div>
        <div>
            {images.map(data=><Image src={data} className={styles.img5} width={400} height={400} alt='image' />)}
        </div>
    </div>
  )
}
