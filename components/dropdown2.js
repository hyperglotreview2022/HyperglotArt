import Link from 'next/link'
import {BsChevronDown} from 'react-icons/bs'
import styles from '../styles/dropdown.module.css'

const dropdown = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navlink}>Genre<BsChevronDown /></div>
      <div className={styles.content}>
        <Link className={styles.link} href="/Genre/figurative">Figurative</Link>
        <Link className={styles.link} href='/Genre/abstract'>Abstract</Link>
        <Link className={styles.link} href='/Genre/landscape'>Landscape</Link>
      </div>
    </div>
  )
}

export default dropdown