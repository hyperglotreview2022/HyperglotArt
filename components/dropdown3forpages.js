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
        <Link className={styles.link} href='/Genre/figurative'>Featured</Link>
        <Link className={styles.link} href='/Genre/abstract'>Spotlight</Link>
        <Link className={styles.link} href='/Genre/landscape'>Search (a - z)</Link>
      </div>
    </div>
  )
}

export default dropdown