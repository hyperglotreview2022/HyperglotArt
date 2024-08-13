import React, { useEffect, useState } from 'react'
import VirtualGallery1 from '../../components/VirtualGallery/virtualgallery1'
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
        <Link href={'/VirtualGalleryMobile/Amorphicchasms'} className={styles.redirectmobile}>Enter Exhibition</Link>
      </div>

        <VirtualGallery1 />
      </div>


      <div className={styles.btmcontainer}>
        <div className={styles.heading}>AMORPHIC CHASMS</div>
        <div className={styles.flex}>
          <div className={styles.left}>
            <div className={styles.subheading}>Details</div>
            <div className={styles.date}>Date: Saturday, 10th August, 2024</div>
            <div className={styles.bottomcorner}>
              <div className={styles.subheading}>Artists</div>
              <ul>
                <li>Aniruddha Sarker</li>
                <li>Meenu Goyal</li>
                <li>Pabitra Pal</li>
                <li>Preeti Sethi</li>
                <li>Prithuj Mondal</li>
                <li>Shayani Boral</li>
                <li>Subrata Ghosh</li>
                <li>Susnata Chatterjee</li>
              </ul>
            </div>
          </div>
          <div>
            <div className={styles.paragraph}>Hyperglot Review is extremely proud to present AMORPHIC CHASMS, a show that has been more than six months in the making. In keeping with the thematic and aesthetic motifs of our previous shows, this show revisits how artistic expressions and processes evolve over time both for individual artists and for their audiences. 
<br/><br/>
What truly distinguishes art from other fields is the conscious effort to dismantle and create anew in each and every artistic creation the very principles that determine the viewer's perception of and response to an artist's work. Definitions, genres and styles become mere amorphic chasms and fluid in anature. They transgress against and coalesce into each other. Recursive artistic and creative evolution is the only constant in the cosmic playground of flux and incessant movement. <br/><br/>

The works curated for the show will provide a cathartic experience to the those who are disoriented by the existential crisis that has gripped the world around us. For those who have lost their ability to perceive the chaos that governs our world, it will also jolt them out of their complacency and Laodicean worldview. Therin lies the true potential of a work of art.</div>
          </div>
        </div>
      </div>


      {/* <div className={styles.recommendcontainer}>
        <div className={styles.heading}>Other Virtual Exhibitions like this</div>
        <div className={styles.gridcont}>
        <Link className={styles.link} href="/RedrawingArtscapes">
        <div className={styles.card1}>
          <div className={styles.imgcont}><Image src={'/virtualgallerymodels/images/redrawingartscapes.jpg'} className={styles.img1} width={1200} height={1200} alt='image' /></div>
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
          <div className={styles.imgcont}><Image src={'/virtualgallerymodels/images/redrawingartscapes.jpg'} className={styles.img1} width={1200} height={1200} alt='image' /></div>
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
          <div className={styles.imgcont}><Image src={'/virtualgallerymodels/images/redrawingartscapes.jpg'} className={styles.img1} width={1200} height={1200} alt='image' /></div>
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