import Link from 'next/link'
import { useState } from 'react'
import {BsChevronDown} from 'react-icons/bs'
import styles from '../styles/dropdown.module.css'

const dropdown = () => {
  const [dropd, setDropd] = useState(true)

  return (
    <div className={styles.container}>
      <div onClick={()=>{setDropd(!dropd)}} className={styles.navlink}>Medium<BsChevronDown /></div>
      <div className={dropd ? `${styles.contentd}` : `${styles.content1d}`}>
        <Link className={styles.link} href="/Medium/paintings">Paintings</Link>
        <Link className={styles.link} href='/Medium/prints'>Prints</Link>
        <Link className={styles.link} href='/Medium/sculptures'>Sculptures</Link>
      </div>
    </div>
  )
}

export default dropdown