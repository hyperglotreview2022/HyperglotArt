import Link from 'next/link'
import {BsChevronDown} from 'react-icons/bs'
import styles from '../styles/dropdown.module.css'

const dropdown = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navlink}>Medium<BsChevronDown /></div>
      <div className={styles.content}>
        <Link className={styles.link} href="/Medium/paintings">Paintings</Link>
        <Link className={styles.link} href='/Medium/prints'>Prints</Link>
        <Link className={styles.link} href='/Medium/sculptures'>Sculptures</Link>
      </div>
    </div>
  )
}

export default dropdown