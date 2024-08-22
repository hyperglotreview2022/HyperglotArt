import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/events.module.css'
import eventsdata from '../../pages/api/events'
// import EventsSlider from './EventsSlider'
// import EventsSlider2 from './EventsSlider2'

const events = () => {
  return (
    <div className={styles.container}>
    <div className={styles.centre}>
<div className={styles.topic}>Events</div>
    </div>
      
      <div className={styles.flexflex}>
      {eventsdata.slice(0,4).map((data)=><div className={styles.card}>
          <Link className={styles.link} href={`/EventsPage/${data.id}`}>
            <Image src={data.url} className={styles.img5} width={1200} height={1200} alt='image' />
              <div className={styles.info5}>
                <h1 className={styles.sliderheading5}>{data.name}</h1>
                <h3 className={styles.subheading5}>Date: {data.info.Date}</h3>
              </div>
              </Link>
            </div>)}
      </div>
    </div>
    
  )
}

export default events