import Image from 'next/image'
import styles from '../../styles/events.module.css'
// import EventsSlider from './EventsSlider'
// import EventsSlider2 from './EventsSlider2'

const events = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topic}>Events</div>
      <div className={styles.heading}>Stand out with 3D spaces</div>
      <div className={styles.desc}>Extend the Kunstmatrix experience by adding more spaces and props to your tool kit. From buying spaces to full customizations, we got you covered. No matter the size.</div>
      <div className={styles.up}>Upcoming Events</div>
      <div className={styles.flexflex}>
          <div className={styles.card}>
            <Image src={'/servicesimages/services (1).jpg'} className={styles.img5} width={1200} height={1200} alt='image' />
              <div className={styles.info5}>
                <h1 className={styles.sliderheading5}>Event 1</h1>
                <h3 className={styles.subheading5}>by Artist</h3>
              </div>
            </div>
            <div className={styles.card}>
            <Image src={'/servicesimages/services (2).jpg'} className={styles.img5} width={1200} height={1200} alt='image' />
              <div className={styles.info5}>
                <h1 className={styles.sliderheading5}>Event 1</h1>
                <h3 className={styles.subheading5}>by Artist</h3>
              </div>
            </div>
            <div className={styles.card}>
            <Image src={'/servicesimages/services (3).jpg'} className={styles.img5} width={1200} height={1200} alt='image' />
              <div className={styles.info5}>
                <h1 className={styles.sliderheading5}>Event 1</h1>
                <h3 className={styles.subheading5}>by Artist</h3>
              </div>
            </div>
            <div className={styles.card}>
            <Image src={'/servicesimages/services (4).jpg'} className={styles.img5} width={1200} height={1200} alt='image' />
              <div className={styles.info5}>
                <h1 className={styles.sliderheading5}>Event 1</h1>
                <h3 className={styles.subheading5}>by Artist</h3>
              </div>
            </div>
      </div>
      <div className={styles.up}>Past Events</div>
      <div className={styles.flexflex}>
          <div className={styles.card}>
            <Image src={'/servicesimages/services (1).jpg'} className={styles.img5} width={1200} height={1200} alt='image' />
              <div className={styles.info5}>
                <h1 className={styles.sliderheading5}>Event 1</h1>
                <h3 className={styles.subheading5}>by Artist</h3>
              </div>
            </div>
            <div className={styles.card}>
            <Image src={'/servicesimages/services (2).jpg'} className={styles.img5} width={1200} height={1200} alt='image' />
              <div className={styles.info5}>
                <h1 className={styles.sliderheading5}>Event 1</h1>
                <h3 className={styles.subheading5}>by Artist</h3>
              </div>
            </div>
            <div className={styles.card}>
            <Image src={'/servicesimages/services (3).jpg'} className={styles.img5} width={1200} height={1200} alt='image' />
              <div className={styles.info5}>
                <h1 className={styles.sliderheading5}>Event 1</h1>
                <h3 className={styles.subheading5}>by Artist</h3>
              </div>
            </div>
            <div className={styles.card}>
            <Image src={'/servicesimages/services (4).jpg'} className={styles.img5} width={1200} height={1200} alt='image' />
              <div className={styles.info5}>
                <h1 className={styles.sliderheading5}>Event 1</h1>
                <h3 className={styles.subheading5}>by Artist</h3>
              </div>
            </div>
      </div>
    </div>
    
  )
}

export default events