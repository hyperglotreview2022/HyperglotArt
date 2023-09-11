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
          <Image className={styles.img} src={'/heroimage/Heroimage.JPG'} width={450} height={400} alt="image"/>
        </div>
        <div className={styles.text}>
          <div className={styles.text1}>
          <div>August 18</div><div className={styles.hl}></div>
          </div>
          <div className={styles.text2}>
            Peasant Scenes And Landscapes
          </div>
          <div className={styles.text3}>
            The exhibition is made possible by the Laura & C. Arnold Douglas Foundation.
          </div>
        </div>

      </div>

      <div className={styles.subcontainerrev}>
        <div>
          <Image className={styles.img} src={'/heroimage/Heroimage.JPG'} width={450} height={400} alt="image"/>
        </div>
        <div className={styles.textrev}>
          <div className={styles.text1}>
          <div>August 18</div><div className={styles.hl}></div>
          </div>
          <div className={styles.text2}>
            Peasant Scenes And Landscapes
          </div>
          <div className={styles.text3}>
            The exhibition is made possible by the Laura & C. Arnold Douglas Foundation.
          </div>
        </div>

      </div>

      <div className={styles.subcontainer}>
        <div>
          <Image className={styles.img} src={'/heroimage/Heroimage.JPG'} width={450} height={400} alt="image"/>
        </div>
        <div className={styles.text}>
          <div className={styles.text1}>
          <div>August 18</div><div className={styles.hl}></div>
          </div>
          <div className={styles.text2}>
            Peasant Scenes And Landscapes
          </div>
          <div className={styles.text3}>
            The exhibition is made possible by the Laura & C. Arnold Douglas Foundation.
          </div>
        </div>

      </div>

    <Link href="/Shop">
      <button className={styles.btn}><span>VIEW ALL EXHIBITIONS</span><FaLongArrowAltRight className={styles.icon}/></button>
    </Link>
     
    </div>
    
  )
}

export default events