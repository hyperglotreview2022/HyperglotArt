import Image from 'next/image'
import React from 'react'
import styles from '../../styles/standout.module.css'

export default function StandOut() {
  return (
    <div className={styles.container}>
      <div className={styles.topic}>Stand out with 3D space</div>
      <div className={styles.imgcont1}>
        <Image src={'/servicesimages/services (1).jpg'} className={styles.img1} width={1200} height={1200} alt='image' />
        <div className={styles.cover1}>
        <div className={styles.border1}>
          <div className={styles.heading1}>Stand out with 3D spaces</div>
          <div className={styles.desc1}>Extend the Kunstmatrix experience by adding more spaces and props to your tool kit. From buying spaces to full customizations, we got you covered. No matter the size.</div>
        </div>
        </div>
      </div>
      <div className={styles.flex}>
        <div>
          <div className={styles.heading}>Create <span>3D exhibitions</span> within minutes.</div>
          <div className={styles.info}>
            <div>Choose from a variety of free 3D Spaces or expand the experience through our marketplace.</div>
            <div>Add artworks, sculptures, audio, and video, and place them in your 3D space.</div>
            <div>Share or embed your 3D exhibition on your own website for a seamless integration.</div>
          </div>
          <button className={styles.btn}>Get in Touch</button>
        </div>
        <div>
          <Image src={'/servicesimages/services (1).jpg'} className={styles.img} width={400} height={400} alt='image' />
        </div>
      </div>

      <div className={styles.antiflex}>
        <div>
          <div className={styles.heading}>Create <span>3D exhibitions</span> within minutes.</div>
          <div className={styles.info}>
            <div>Choose from a variety of free 3D Spaces or expand the experience through our marketplace.</div>
            <div>Add artworks, sculptures, audio, and video, and place them in your 3D space.</div>
            <div>Share or embed your 3D exhibition on your own website for a seamless integration.</div>
          </div>
          <button className={styles.btn}>Get in Touch</button>
        </div>
        <div>
          <Image src={'/servicesimages/services (2).jpg'} className={styles.img} width={400} height={400} alt='image' />
        </div>
      </div>
    </div>
  )
}
