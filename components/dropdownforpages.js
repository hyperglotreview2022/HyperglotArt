import Link from 'next/link'
import { useState } from 'react'
import {BsChevronDown} from 'react-icons/bs'
import styles from '../styles/dropdown.module.css'

const dropdown = () => {
  const [dropd, setDropd] = useState(true)

  return (
    <div className={styles.container}>
      <div onClick={()=>{setDropd(!dropd)}} className={styles.navlink}>Our Services<BsChevronDown /></div>
      <div className={dropd ? `${styles.contentd}` : `${styles.content1d}`}>
      <Link className={styles.link} href="/OurServices/Artists">Artists</Link>
        <Link className={styles.link} href='/OurServices/Buyers'>Buyers</Link>
        <div className={styles.link}>Galleries</div>
      </div>
    </div>
  )
}

export default dropdown