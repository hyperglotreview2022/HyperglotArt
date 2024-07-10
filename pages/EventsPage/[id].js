import React from 'react'
import Navbar from "@/components/navbarforpages";
import Footer from '@/components/footer'
import dynamic from 'next/dynamic';
import styles from '../../styles/eventspage.module.css'
import Image from 'next/image';
import { useRouter } from 'next/router';
import events from '../api/events'

const index = () => {
  const router = useRouter();
  const { id } = router.query;
  let product = []

  events.map((data) => {
    if(data.id == id){
      product.push(data);
    }
  })

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
          <h1 className={styles.heading}>{product[0].name}</h1>
      <div className={styles.firstflex}>
        <div className={styles.text1}>{product[0].text.map((data)=><div>{data}<br/></div>)}</div>
        <div>
          <Image src={product[0].url} className={styles.img5} width={1200} height={1200} alt='image' />
        </div>
      </div>

      <div className={styles.middleflex}>
        <div>
          <Image src={product[0].url2} className={styles.img6} width={1200} height={1200} alt='image' />
        </div>
        <div className={styles.righttext}>
        <div className={styles.topic}>Details</div>
          <div className={styles.detailscont}>
            <div className={styles.topic1}>Event Details</div>
            <div className={styles.details}><b>Date:</b><span> {product[0].info.Date}</span></div>
            <div className={styles.details}><b>Time:</b><span> {product[0].info.time}</span></div>
            <div className={styles.details}><b>Venue:</b><span> {product[0].info.Venue}</span></div>
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
