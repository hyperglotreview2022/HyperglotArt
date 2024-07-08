import React from 'react'
import Navbar from "@/components/navbarforpages";
import Footer from '@/components/footer'
import styles from '../../styles/eventpage.module.css'
import Image from 'next/image';
import Link from 'next/link';

export default function index() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.heading}>Virtual Gallery</h1>

        <div className={styles.rflex}>
        <div className={styles.imgcont}><Image src={'/servicesimages/services (5).jpg'} className={styles.img} width={1200} height={1200} alt='image' /></div>
        <div className={styles.right}>
          <div className={styles.topic}>Showcase Name</div>
          <div className={styles.desc}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
          <div className={styles.details}><b>Date:</b> Saturday, 28 October, 2023</div>
          <div className={styles.details}><b>Venue:</b> Somewhere, New Delhi</div>
          <div className={styles.readbtn}>Read more</div>
        </div>
      </div>

      <div className={styles.flex}>
        <div className={styles.imgcont}><Image src={'/servicesimages/services (5).jpg'} className={styles.img} width={1200} height={1200} alt='image' /></div>
        <div className={styles.right}>
          <div className={styles.topic}>Showcase Name</div>
          <div className={styles.desc}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
          <div className={styles.details}><b>Date:</b> Saturday, 28 October, 2023</div>
          <div className={styles.details}><b>Venue:</b> Somewhere, New Delhi</div>
          <div className={styles.readbtn}>Read more</div>
        </div>
      </div>

      <div className={styles.gcont}>
        <div className={styles.heading1}>Recent Virtual Galleries</div>
        <div className={styles.gridcont}>

        <div className={styles.card1}>
          <div className={styles.imgcont}><Image src={'/servicesimages/services (5).jpg'} className={styles.img1} width={1200} height={1200} alt='image' /></div>
          <div className={styles.info}>
            <div className={styles.topic1}>Showcase Name</div>
            <div className={styles.desc1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius...</div>
            <div className={styles.details1}><b>Date:</b> Saturday, 28 October, 2023</div>
            <div className={styles.details1}><b>Venue:</b> Somewhere, New Delhi</div>
            <div className={styles.readbtn1}>Read more</div>
          </div>
        </div>

        <div className={styles.card1}>
          <div className={styles.imgcont}><Image src={'/servicesimages/services (5).jpg'} className={styles.img1} width={1200} height={1200} alt='image' /></div>
          <div className={styles.info}>
            <div className={styles.topic1}>Showcase Name</div>
            <div className={styles.desc1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius...</div>
            <div className={styles.details1}><b>Date:</b> Saturday, 28 October, 2023</div>
            <div className={styles.details1}><b>Venue:</b> Somewhere, New Delhi</div>
            <div className={styles.readbtn1}>Read more</div>
          </div>
        </div>

        <div className={styles.card1}>
          <div className={styles.imgcont}><Image src={'/servicesimages/services (5).jpg'} className={styles.img1} width={1200} height={1200} alt='image' /></div>
          <div className={styles.info}>
            <div className={styles.topic1}>Showcase Name</div>
            <div className={styles.desc1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius...</div>
            <div className={styles.details1}><b>Date:</b> Saturday, 28 October, 2023</div>
            <div className={styles.details1}><b>Venue:</b> Somewhere, New Delhi</div>
            <div className={styles.readbtn1}>Read more</div>
          </div>
        </div>

        </div>
      </div>
      </div>
      <Footer />
    </div>
  )
}