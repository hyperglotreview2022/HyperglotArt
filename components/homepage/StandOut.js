import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../../styles/standout.module.css'

export default function StandOut() {
  return (
    <div className={styles.container}>
      <div className={styles.topic}>Virtual Gallery</div>
      <div className={styles.imgcont1}>
        <Image src={'/servicesimages/1.jpg'} className={styles.img1} width={1200} height={1200} alt='image' />
        <div className={styles.cover1}>
        <div className={styles.border1}>
          <div className={styles.heading1}>Our Upcoming Shows</div>
          <div className={styles.desc1}>Experience Art in 3D from the comfort of your home</div>
        </div>
        </div>
      </div>
      <div className={styles.flex}>
        <div>
         <div className={styles.heading}><span>Recent </span>3D <span>Virtual Galleries</span></div>
          <div className={styles.info}>
             <Link className={styles.link} href={'/Amorphicchasms'}><div className={styles.eventname}>AMORPHIC CHASMS</div></Link>
            <div className={styles.eventdesc}>Hyperglot Review is extremely proud to present AMORPHIC CHASMS, a show that has been more than six months in the making. In keeping with the thematic and aesthetic motifs of our previous shows, this show revisits how artistic expressions and processes evolve over time both for individual artists and for their audiences. 
<br/>
What truly distinguishes art from other fields is the conscious effort to dismantle and create anew in each and every artistic creation the very principles that determine the viewer’s perception of and response to an artist’s work. Definitions, genres and styles become mere amorphic chasms and fluid in anature. They transgress against and coalesce into each other. Recursive artistic and creative evolution is the only constant in the cosmic playground of flux and incessant movement... <br/></div>
            <div className={styles.eventdate}><b>Date:</b> Saturday, 10 August, 2024</div>
          </div>
          <Link href={'/Amorphicchasms'} className={styles.btn}>Enter 3D View</Link>
        </div>
        <div>
          <Image src={'/virtualgallerymodels/images/AC.png'} className={styles.img} width={400} height={400} alt='image' />
        </div>
      </div>
    </div>
  )
}
