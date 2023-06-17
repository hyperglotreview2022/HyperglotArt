import Image from "next/image"
import styles from '../../styles/hero.module.css'


const herocomponent = () => {
  return (
    <div className={styles.herosection}>
      <div className={styles.textarea}>
        <h1 className="heading">Hyperglot, Master Drawings</h1>
        <div className={styles.herotext}>
          <p>FEBRUARY 27 - MARCH 28,2023</p>
          <p>On view at The Met First Avenue in Gallery 209</p>
          <p>Accompanied by Catalogue and an Audio Guide</p>
        </div>
      </div>
      
      <Image className={styles.img} src={"/heroimage/Heroimage.JPG"} width={2000} height={2000} alt="hero-image"/>
    </div>
  )
}

export default herocomponent