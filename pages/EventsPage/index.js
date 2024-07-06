import React from 'react'
import Navbar from "@/components/navbarforpages";
import Footer from '@/components/footer'
import dynamic from 'next/dynamic';
import styles from '../../styles/eventspage.module.css'
import Image from 'next/image';

const index = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
          <h1 className={styles.heading}>Event Name</h1>
      <div className={styles.firstflex}>
        <div className={styles.text1}>Sed augue lacus viverra vitae congue eu. Sit amet nulla facilisi morbi tempus iaculis urna id. Diam maecenas ultricies mi eget. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Tortor pretium viverra suspendisse potenti. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. Placerat in egestas erat imperdiet sed euismod. Sed euismod nisi porta lorem mollis aliquam ut. Congue quisque egestas diam in arcu cursus euismod quis viverra. <br/> Accumsan sit amet nulla facilisi morbi tempus iaculis urna. Sodales neque sodales ut etiam sit amet. Nulla facilisi etiam dignissim diam quis. Ut placerat orci nulla pellentesque dignissim enim sit amet venenatis. Massa eget egestas purus viverra accumsan in. Integer enim neque volutpat ac. Id donec ultrices tincidunt arcu non. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue. Aliquet porttitor lacus luctus accumsan tortor posuere. Ac odio tempor orci dapibus ultrices in.</div>
        <div>
          <Image src={'/servicesimages/services (6).jpg'} className={styles.img5} width={1200} height={1200} alt='image' />
        </div>
      </div>

      <div className={styles.middleflex}>
        <div>
          <Image src={'/servicesimages/services (6).jpg'} className={styles.img6} width={1200} height={1200} alt='image' />
        </div>
        <div className={styles.righttext}>
        <div className={styles.topic}>Details</div>
          <div className={styles.detailscont}>
            <div className={styles.topic1}>Event Details</div>
            <div className={styles.details}><b>Date:</b><span> Saturday, 28 October, 2023</span></div>
            <div className={styles.details}><b>Time:</b><span> 10 am - 7 pm</span></div>
            <div className={styles.details}><b>Venue:</b><span> Somewhere, New Delhi</span></div>
          </div>

          <div className={styles.detailscont}>
            <div className={styles.topic1}>Contact Details</div>
            <div className={styles.details}><b>Phone:</b><span> +91-97171 89650/ 659</span></div>
            <div className={styles.details}><b>Email:</b><span> info@hyperglotreview.com</span></div>
            <div className={styles.details}><b>Website:</b><span> www.hyperglotart.com</span></div>
          </div>
        </div>
      </div>


      </div>
      <Footer />
    </div>
  )
}

export default dynamic (() => Promise.resolve(index), {ssr: false})
