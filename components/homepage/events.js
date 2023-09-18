import styles from '../../styles/events.module.css'
import Image from 'next/image'
import {FaLongArrowAltRight} from 'react-icons/fa'
import Link from 'next/link'

const events = () => {
  return (
    <div className={styles.container}>
      <h1 className="heading">Events & Programs</h1>
      <div className={styles.subcontainer}>
        <div>
          <Image className={styles.img} src={'/events/redrawing artscapes.JPG'} width={450} height={400} alt="image"/>
        </div>
        <div className={styles.text}>
          <div className={styles.text1}>
          <div>August 26-31, 2023</div><div className={styles.hl}></div>
          </div>
          <div className={styles.text2}>
          REDRAWING ARTSCAPES
          </div>
          <div className={styles.text3}>
          Hyperglot Review's fourth exhibition REDRAWING ARTSCAPES, third in collaboration with HOLZIndia, has been curated with a special focus on emerging artists who have harnessed their creative ingenuity to create artworks that have the potential to ask questions about our existential conditions. 
          </div>
        </div>

      </div>

      <div className={styles.subcontainerrev}>
        <div>
          <Image className={styles.img} src={'/events/interfaces 2.JPG'} width={450} height={400} alt="image"/>
        </div>
        <div className={styles.textrev}>
          <div className={styles.text1}>
          <div>July 28-31, 2023</div><div className={styles.hl}></div>
          </div>
          <div className={styles.text2}>
            INTERFACES - Part 2
          </div>
          <div className={styles.text3}>
          Interfaces - Part 2 scheduled to be held from 28-31 July will showcase exquisite prints by Olivier Deprez and Roby Comblain but will also embrace other genres such as paintings, sculpture, and mixed media with a special focus on emerging artists and women artists.
          </div>
        </div>

      </div>

      <div className={styles.subcontainer}>
        <div>
          <Image className={styles.img} src={'/events/artforpaws 2.JPG'} width={450} height={400} alt="image"/>
        </div>
        <div className={styles.text}>
          <div className={styles.text1}>
          <div>June 8-11, 2023</div><div className={styles.hl}></div>
          </div>
          <div className={styles.text2}>
          ART FOR PAWS
          </div>
          <div className={styles.text3}>
          Hyperglot Review's first exhibition, Art for Paws, was a significant milestone in our mission to promote both established and emerging artists. We recognize that emerging artists often face barriers in gaining exposure and visibility, primarily due to economic and demographic constraints.
          </div>
        </div>

      </div>

    <Link href="/Shop">
      <button className={styles.btn}><span>VIEW ALL COLLECTIONS</span><FaLongArrowAltRight className={styles.icon}/></button>
    </Link>
     
    </div>
    
  )
}

export default events