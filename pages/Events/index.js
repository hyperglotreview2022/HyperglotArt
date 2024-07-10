import React, { useState } from 'react'
import Navbar from "@/components/navbarforpages";
import Footer from '@/components/footer'
import styles from '../../styles/eventpage.module.css'
import Image from 'next/image';
import Link from 'next/link';
import events from '../api/events'

export default function index() {
  const [data, setData] = useState(events)
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.heading}>Events</h1>

        <div className={styles.flex}>
        <div className={styles.imgcont}><Image src={data[0].url} className={styles.img} width={1200} height={1200} alt='image' /></div>
        <div className={styles.right}>
          <div className={styles.topic}>{data[0].name}</div>
          <div className={styles.desc}>{data[0].text[0]}</div>
          <div className={styles.details}><b>Date: </b>{data[0].info.Date}</div>
          <div className={styles.details}><b>Venue: </b>{data[0].info.Venue}</div>
          <Link href={`/EventsPage/${data[0].id}`} className={styles.readbtn}>Read more</Link>
        </div>
      </div>

      <div className={styles.rflex}>
        <div className={styles.imgcont}><Image src={data[1].url} className={styles.img} width={1200} height={1200} alt='image' /></div>
        <div className={styles.right}>
          <div className={styles.topic}>{data[1].name}</div>
          <div className={styles.desc}>{data[1].text[0]}</div>
          <div className={styles.details}><b>Date:</b> {data[1].info.Date}</div>
          <div className={styles.details}><b>Venue:</b> {data[1].info.Venue}</div>
          <Link href={`/EventsPage/${data[1].id}`} className={styles.readbtn}>Read more</Link>
        </div>
      </div>

      {/* <div className={styles.gcont}>
        <div className={styles.heading1}>Upcoming Events</div>
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
      </div> */}
      <div className={styles.gcont}>
        <div className={styles.heading1}>Past Events</div>
        <div className={styles.gridcont}>
        {data.slice(0,3).map((data)=><div className={styles.card1}>
          <div className={styles.imgcont}><Image src={data.url} className={styles.img1} width={1200} height={1200} alt='image' /></div>
          <div className={styles.info}>
            <div className={styles.topic1}>{data.name}</div>
            <div className={styles.desc1}>{data.text[0].slice(0,100)}...</div>
            <div className={styles.details1}><b>Date:</b> {data.info.Date}</div>
            <div className={styles.details1}><b>Venue:</b> {data.info.Venue}</div>
            <Link href={`/EventsPage/${data.id}`} className={styles.readbtn1}>Read more</Link>
          </div>
        </div>)}

        </div>
      </div>
      
      </div>

      <Footer />
    </div>
  )
}
