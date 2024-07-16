import React, { useState } from 'react'
import VirtualGallery from '../../components/VirtualGallery/virtualgallery'
import Navbar from '@/components/navbarforpages'
import Footer from '@/components/footer'
import styles from '../../styles/VG.module.css'
import Image from 'next/image'

export default function index() {
  return (
    <div>
      <Navbar />
      <div className={styles.vgcontainer}>
        <VirtualGallery />
      </div>


      <div className={styles.btmcontainer}>
        <div className={styles.heading}>Virtual Gallery Name</div>
        <div className={styles.flex}>
          <div className={styles.left}>
            <div className={styles.subheading}>Details</div>
            <div className={styles.date}>Date of Posting: 01/01/2024</div>
            <div className={styles.bottomcorner}>
              <div className={styles.subheading}>Artists</div>
              <ul>
                <li>Artist 1</li>
                <li>Artist 2</li>
                <li>Artist 3</li>
                <li>Artist 4</li>
                <li>Artist 5</li>
                <li>Artist 6</li>
              </ul>
            </div>
          </div>
          <div>
            <div className={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id nibh tortor id aliquet lectus proin nibh nisl. Eget nunc scelerisque viverra mauris in aliquam sem fringilla. Vestibulum morbi blandit cursus risus at ultrices. Est pellentesque elit ullamcorper dignissim cras tincidunt. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. Quis varius quam quisque id diam vel quam. Orci porta non pulvinar neque laoreet suspendisse. Aliquet nec ullamcorper sit amet risus. Sem et tortor consequat id porta nibh venenatis cras sed. Aliquam sem et tortor consequat id porta nibh venenatis. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Imperdiet dui accumsan sit amet nulla facilisi. Morbi non arcu risus quis varius quam quisque id diam. Orci eu lobortis elementum nibh tellus molestie nunc non blandit. Blandit turpis cursus in hac habitasse.<br/>

Nunc faucibus a pellentesque sit amet porttitor eget dolor. Eget nullam non nisi est sit amet facilisis. Blandit massa enim nec dui nunc mattis. Ornare suspendisse sed nisi lacus sed viverra tellus in hac. Netus et malesuada fames ac turpis egestas. Eu volutpat odio facilisis mauris sit amet massa vitae tortor. At volutpat diam ut venenatis tellus in metus vulputate eu. Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Pulvinar neque laoreet suspendisse interdum consectetur. Cras semper auctor neque vitae tempus quam pellentesque nec. Tellus in hac habitasse platea. At consectetur lorem donec massa sapien faucibus. Dolor sit amet consectetur adipiscing elit. Lobortis elementum nibh tellus molestie nunc. Neque egestas congue quisque egestas. Imperdiet proin fermentum leo vel orci porta non pulvinar. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Amet dictum sit amet justo donec enim diam. Tellus in metus vulputate eu scelerisque felis imperdiet proin.</div>
          </div>
        </div>
      </div>


      <div className={styles.recommendcontainer}>
        <div className={styles.heading}>Other Virtual Exhibitions like this</div>
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
      <Footer />
    </div>
  )
}
