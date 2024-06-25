import Link from 'next/link'
import { useState } from 'react'
import {BsChevronDown} from 'react-icons/bs'
import styles from '../styles/dropdown.module.css'

const dropdown = () => {
  const [dropd, setDropd] = useState(true)

  return (
    <div className={styles.container}>
      <div onClick={()=>{setDropd(!dropd)}} className={styles.navlink}>Genre<BsChevronDown /></div>
      <div className={dropd ? `${styles.contentd}` : `${styles.content1d}`}>
        <Link className={styles.link} href='/Genre/figurative'>Figurative</Link>
        <Link className={styles.link} href='/Genre/abstract'>Abstract</Link>
        <Link className={styles.link} href='/Genre/landscape'>Landscape</Link>
      </div>
    </div>
  )
}

export default dropdown