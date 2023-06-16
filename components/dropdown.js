import Link from 'next/link'
import {BsChevronDown} from 'react-icons/Bs'
import styles from '../styles/dropdown.module.css'

const dropdown = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navlink}>Genre<BsChevronDown /></div>
      <div className={styles.content}>
        <Link className={styles.link} href={'/Genre/genre1'}>Genre1</Link>
        <Link className={styles.link} href={'/Genre/genre2'}>Genre2</Link>
        <Link className={styles.link} href={'/Genre/genre3'}>Genre3</Link>
        <Link className={styles.link} href={'/Genre/genre4'}>Genre4</Link>
      </div>
    </div>
  )
}

export default dropdown