import Link from 'next/link'
import { useState } from 'react'
import {BsChevronDown} from 'react-icons/bs'
import styles from '../styles/dropdown.module.css'

const dropdown = () => {
  const [dropd, setDropd] = useState(true)

  return (
    <div className={styles.container}>
      <div onClick={()=>{setDropd(!dropd)}} className={styles.navlink}>Catalogue<BsChevronDown /></div>
      <div className={dropd ? `${styles.contentd}` : `${styles.content1d}`}>
      <div className={styles.secondrel}>
        <div className={styles.link}>Medium</div>
        <div className={styles.secabd}>
        <Link className={styles.link} href="/Medium/paintings">Paintings</Link>
        <Link className={styles.link} href='/Medium/prints'>Prints</Link>
        <Link className={styles.link} href='/Medium/sculptures'>Sculptures</Link>
        </div>
      </div>
      <div className={styles.secondrel1}>
        <div className={styles.link}>Genre</div>
        <div className={styles.secab1d}>
          <Link className={styles.link} href='/Genre/figurative'>Figurative</Link>
          <Link className={styles.link} href='/Genre/abstract'>Abstract</Link>
          <Link className={styles.link} href='/Genre/landscape'>Landscape</Link>
        </div>
      </div>
      </div>
    </div>
  )
}

export default dropdown