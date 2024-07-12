import Image from "next/image"
import styles from '../../styles/hero.module.css'


const herocomponent = () => {
  return (
    <div className={styles.herosection}>
    <div className={styles.cover}>
      <div className={styles.flex}>
        <div className={styles.top}>Art belongs to everyone</div>
        <div className={styles.btm}>Bring home an exquisite work of art</div>
      </div>
    </div>
      <video className={styles.video} src="/herovideo/herovideo.mp4" autoPlay loop muted preload="auto">
      </video>
    </div>
  )
}

export default herocomponent