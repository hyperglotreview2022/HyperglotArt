import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/events.module.css'
import eventsdata from '../../pages/api/events'
// import EventsSlider from './EventsSlider'
// import EventsSlider2 from './EventsSlider2'

const events = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topic}>Events</div>
      {/* <div className={styles.heading}>Stand out with 3D spaces</div>
      <div className={styles.desc}>Extend the Kunstmatrix experience by adding more spaces and props to your tool kit. From buying spaces to full customizations, we got you covered. No matter the size.</div> */}
      {/* <div className={styles.up}>Upcoming Events</div>
      <div className={styles.flexflex}>
          <div className={styles.card}>
          <Link className={styles.link} href={'/EventsPage'}>
            <Image src={'/servicesimages/services (5).jpg'} className={styles.img5} width={1200} height={1200} alt='image' />
              <div className={styles.info5}>
                <h1 className={styles.sliderheading5}>Event 1</h1>
                <h3 className={styles.subheading5}>by Artist</h3>
              </div>
              </Link>
            </div>
            <div className={styles.card}>
            <Link className={styles.link} href={'/EventsPage'}>
            <Image src={'/servicesimages/services (6).jpg'} className={styles.img5} width={1200} height={1200} alt='image' />
              <div className={styles.info5}>
                <h1 className={styles.sliderheading5}>Event 1</h1>
                <h3 className={styles.subheading5}>by Artist</h3>
              </div>
              </Link>
            </div>
            <div className={styles.card}>
            <Link className={styles.link} href={'/EventsPage'}>
            <Image src={'/servicesimages/services (7).jpg'} className={styles.img5} width={1200} height={1200} alt='image' />
              <div className={styles.info5}>
                <h1 className={styles.sliderheading5}>Event 1</h1>
                <h3 className={styles.subheading5}>by Artist</h3>
              </div>
              </Link>
            </div>
            <div className={styles.card}>
            <Link className={styles.link} href={'/EventsPage'}>
            <Image src={'/servicesimages/services (8).jpg'} className={styles.img5} width={1200} height={1200} alt='image' />
              <div className={styles.info5}>
                <h1 className={styles.sliderheading5}>Event 1</h1>
                <h3 className={styles.subheading5}>by Artist</h3>
              </div>
              </Link>
            </div>
      </div> */}
      <div className={styles.up}>Past Events</div>
      <div className={styles.flexflex}>
      {eventsdata.slice(0,4).map((data)=><div className={styles.card}>
          <Link className={styles.link} href={`/EventsPage/${data.id}`}>
            <img src={data.url} className={styles.img5} alt='image' />
              <div className={styles.info5}>
                <h1 className={styles.sliderheading5}>{data.name}</h1>
                <h3 className={styles.subheading5}>Date: {data.info.Date}</h3>
              </div>
              </Link>
            </div>)}
          {/* <div className={styles.card}>
          <Link className={styles.link} href={'/EventsPage'}>
            <Image src={'/servicesimages/services (5).jpg'} className={styles.img5} width={1200} height={1200} alt='image' />
              <div className={styles.info5}>
                <h1 className={styles.sliderheading5}>Event 1</h1>
                <h3 className={styles.subheading5}>by Artist</h3>
              </div>
              </Link>
            </div>
            <div className={styles.card}>
            <Link className={styles.link} href={'/EventsPage'}>
            <Image src={'/servicesimages/services (6).jpg'} className={styles.img5} width={1200} height={1200} alt='image' />
              <div className={styles.info5}>
                <h1 className={styles.sliderheading5}>Event 1</h1>
                <h3 className={styles.subheading5}>by Artist</h3>
              </div>
              </Link>
            </div>
            <div className={styles.card}>
            <Link className={styles.link} href={'/EventsPage'}>
            <Image src={'/servicesimages/services (7).jpg'} className={styles.img5} width={1200} height={1200} alt='image' />
              <div className={styles.info5}>
                <h1 className={styles.sliderheading5}>Event 1</h1>
                <h3 className={styles.subheading5}>by Artist</h3>
              </div>
              </Link>
            </div>
            <div className={styles.card}>
            <Link className={styles.link} href={'/EventsPage'}>
            <Image src={'/servicesimages/services (8).jpg'} className={styles.img5} width={1200} height={1200} alt='image' />
              <div className={styles.info5}>
                <h1 className={styles.sliderheading5}>Event 1</h1>
                <h3 className={styles.subheading5}>by Artist</h3>
              </div>
              </Link>
            </div> */}
      </div>
    </div>
    
  )
}

export default events