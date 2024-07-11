import Image from "next/image"
import styles from '../../styles/hero.module.css'


const herocomponent = () => {
  return (
    <div className={styles.herosection}>
    <div className={styles.cover}>
      <div className={styles.flex}>
        <div className={styles.top}>Art investing for all</div>
        <div className={styles.btm}>What if you allocated 5% of your portfolio to Art?</div>
      </div>
    </div>
      <video className={styles.video} src="/herovideo/herovideo.mp4" autoPlay loop muted preload="auto">
      </video>
    </div>
  )
}

export default herocomponent