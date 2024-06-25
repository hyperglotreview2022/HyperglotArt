import styles from '../../styles/events.module.css'
import EventsSlider from './EventsSlider'
import EventsSlider2 from './EventsSlider2'

const events = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topic}>Events</div>
      <div className={styles.heading}>Stand out with 3D spaces</div>
      <div className={styles.desc}>Extend the Kunstmatrix experience by adding more spaces and props to your tool kit. From buying spaces to full customizations, we got you covered. No matter the size.</div>
      <div className={styles.up}>Upcoming Events</div>
      <EventsSlider />
      <div className={styles.up}>Past Events</div>
      <EventsSlider2 />
    </div>
    
  )
}

export default events