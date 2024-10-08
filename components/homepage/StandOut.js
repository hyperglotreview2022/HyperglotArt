import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../../styles/standout.module.css'

export default function StandOut() {
  return (
    <div className={styles.container}>
    <div className={styles.centre}>
      <div className={styles.topic}>3D Virtual Gallery</div>
    </div>
      
      <Link href={'/Amorphicchasms'}>
      <div className={styles.imgcont1}>
        <Image src={'/virtualgallerymodels/images/am.png'} className={styles.img1} width={1200} height={1200} alt='image' />
        <div className={styles.cover1}>
        <div className={styles.border1}>
          <div className={styles.heading1}>Our Latest Show</div>
          <div className={styles.eventname}>Amorphic Chasms</div>
        </div>
        </div>
      </div>
      </Link>
      <div className={styles.flex}>
        <div>
         <div className={styles.heading}><span>Recent </span>3D <span>Virtual Galleries</span></div>
          <div className={styles.info}>
             <Link className={styles.link} href={'/RedrawingArtscapes'}><div className={styles.eventname}>REDRAWING ARTSCAPES</div></Link>
            <div className={styles.eventdesc}>Hyperglot Review's fourth exhibition REDRAWING ARTSCAPES, third in collaboration with HOLZIndia, has been curated with a special focus on emerging artists who have harnessed their creative ingenuity to create artworks that have the potential to ask questions about our existential conditions. Through their artistic processes, they create assemblages that both reinforce and destabilise our preconceptions and create new chasms of aesthetic, individual as well as social ideas, experiences, movements, shifts and seismic tremors.... <br/></div>
            <div className={styles.eventdate}><b>Date:</b> Saturday, 26 August, 2023</div>
          </div>
          <Link href={'/RedrawingArtscapes'} className={styles.btn}>Enter 3D View</Link>
        </div>
        <div>
          <Image src={'/virtualgallerymodels/images/rdas.png'} className={styles.img} width={400} height={400} alt='image' />
        </div>
      </div>
    </div>
  )
}
