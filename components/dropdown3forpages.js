import Link from 'next/link'
import { useState } from 'react'
import {BsChevronDown} from 'react-icons/bs'
import styles from '../styles/dropdown.module.css'

const dropdown = () => {
  const [dropd, setDropd] = useState(true)

  return (
    <div className={styles.container}>
      <div onClick={()=>{setDropd(!dropd)}} className={styles.navlink}>Artists<BsChevronDown /></div>
      <div className={dropd ? `${styles.contentd}` : `${styles.content1d}`}>
        <Link className={styles.link} href='/Artists/Featured'>Featured</Link>
        <Link className={styles.link} href='/Artists/Spotlight'>Spotlight</Link>
        <Link className={styles.link} href='/Artists'>Search (a - z)</Link>
      </div>
    </div>
  )
}

export default dropdown