import Link from 'next/link'
import { useState } from 'react'
import {BsChevronDown} from 'react-icons/bs'
import styles from '../styles/dropdown.module.css'

const dropdown = ({colorChange}) => {
  const [dropd, setDropd] = useState(true)

  return (
    <div className={styles.container}>
      <div onClick={()=>{setDropd(!dropd)}} className={styles.navlink}>Medium<BsChevronDown /></div>
      <div className={dropd ? `${colorChange ? styles.content : styles.contentd}` : `${colorChange ? styles.content1 : styles.content1d}`}>
        <Link className={styles.link} href="/Medium/paintings">Paintings</Link>
        <Link className={styles.link} href='/Medium/prints'>Prints</Link>
        <Link className={styles.link} href='/Medium/sculptures'>Sculptures</Link>
      </div>
    </div>
  )
}

export default dropdown