import React, { useEffect, useState } from 'react'
import VirtualGallery from '../../components/VirtualGallery/virtualgallery'
import Navbar from '@/components/navbarforpages'
import Footer from '@/components/footer'
import styles from '../../styles/VG.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function index() {

  return (
    <div>
      <Navbar />
      <div className={styles.vgcontainer}>
      <div className={styles.cover}>
        <Link href={'/VirtualGalleryMobile'} className={styles.redirectmobile}>Enter Exhibition</Link>
      </div>

        <VirtualGallery />
      </div>


      <div className={styles.btmcontainer}>
        <div className={styles.heading}>REDRAWING ARTSCAPES</div>
        <div className={styles.flex}>
          <div className={styles.left}>
            <div className={styles.subheading}>Details</div>
            <div className={styles.date}>Date: Saturday, 26 August, 2023</div>
            <div className={styles.bottomcorner}>
              <div className={styles.subheading}>Artists</div>
              <ul>
                <li>Aniruddha Sarker</li>
                <li>Manoj Deb</li>
                <li>Meenu Garg</li>
                <li>Palas Biswas</li>
                <li>Preeti Sethi</li>
                <li>Prithuj Mondal</li>
                <li>Rita Kathuria</li>
                <li>Seema Singh</li>
              </ul>
            </div>
          </div>
          <div>
            <div className={styles.paragraph}>Hyperglot Review's fourth exhibition REDRAWING ARTSCAPES, third in collaboration with HOLZIndia, has been curated with a special focus on emerging artists who have harnessed their creative ingenuity to create artworks that have the potential to ask questions about our existential conditions. Through their artistic processes, they create assemblages that both reinforce and destabilise our preconceptions and create new chasms of aesthetic, individual as well as social ideas, experiences, movements, shifts and seismic tremors. <br/><br/>

The visual arts, like poetry and music, have an inherent propensity to defy definitions and demarcations. It is a 'line of flight' which "covers not only the act of fleeing or eluding but also flowing, leaking, and disappearing into the distance".<br/><br/>

We hope that you experience at least one or more of these 'events' during our show.</div>
          </div>
        </div>
      </div>


      {/* <div className={styles.recommendcontainer}>
        <div className={styles.heading}>Recent 3D Virtual Galleries</div>
        <div className={styles.gridcont}>
        <Link className={styles.link} href="/RedrawingArtscapes">
        <div className={styles.card1}>
          <div className={styles.imgcont}><Image src={'/virtualgallerymodels/images/redrawingart.png'} className={styles.img1} width={1200} height={1200} alt='image' /></div>
          <div className={styles.info}>
            <div className={styles.topic1}>REDRAWING ARTSCAPES</div>
            <div className={styles.desc1}>Hyperglot Review's fourth exhibition REDRAWING ARTSCAPES, third in collaboration with HOLZIndia, has been curated...</div>
            <div className={styles.details1}><b>Date:</b> Saturday, 26 August, 2023</div>
            <div className={styles.readbtn1}>Read more</div>
          </div>
        </div>
        </Link>

        <Link className={styles.link} href="/RedrawingArtscapes">
        <div className={styles.card1}>
          <div className={styles.imgcont}><Image src={'/virtualgallerymodels/images/redrawingart.png'} className={styles.img1} width={1200} height={1200} alt='image' /></div>
          <div className={styles.info}>
            <div className={styles.topic1}>REDRAWING ARTSCAPES</div>
            <div className={styles.desc1}>Hyperglot Review's fourth exhibition REDRAWING ARTSCAPES, third in collaboration with HOLZIndia, has been curated...</div>
            <div className={styles.details1}><b>Date:</b> Saturday, 26 August, 2023</div>
            <div className={styles.readbtn1}>Read more</div>
          </div>
        </div>
        </Link>

        <Link className={styles.link} href="/RedrawingArtscapes">
        <div className={styles.card1}>
          <div className={styles.imgcont}><Image src={'/virtualgallerymodels/images/redrawingart.png'} className={styles.img1} width={1200} height={1200} alt='image' /></div>
          <div className={styles.info}>
            <div className={styles.topic1}>REDRAWING ARTSCAPES</div>
            <div className={styles.desc1}>Hyperglot Review's fourth exhibition REDRAWING ARTSCAPES, third in collaboration with HOLZIndia, has been curated...</div>
            <div className={styles.details1}><b>Date:</b> Saturday, 26 August, 2023</div>
            <div className={styles.readbtn1}>Read more</div>
          </div>
        </div>
        </Link>

        </div>
      </div> */}

      <Footer />
    </div>
  )
}
