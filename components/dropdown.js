import Link from 'next/link'
import { useState } from 'react'
import {BsChevronDown} from 'react-icons/bs'
import styles from '../styles/dropdown.module.css'

const dropdown = ({colorChange}) => {
  const [dropd, setDropd] = useState(true)

  return (
    <div className={styles.container}>
      <div onClick={()=>{setDropd(!dropd)}} className={styles.navlink}>Our Services<BsChevronDown /></div>
      <div className={dropd ? `${colorChange ? styles.content : styles.contentd}` : `${colorChange ? styles.content1 : styles.content1d}`}>
        <Link className={styles.link} href="/OurServices/Artists">Artists</Link>
        <Link className={styles.link} href='/OurServices/Buyers'>Buyers</Link>
        <div className={styles.link}>Galleries</div>
      </div>
    </div>
  )
}

export default dropdown