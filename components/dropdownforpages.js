import Link from 'next/link'
import { useEffect, useState } from 'react'
import {BsChevronDown} from 'react-icons/bs'
import styles from '../styles/dropdown.module.css'

const dropdown = () => {
  const [dropd, setDropd] = useState(true)
  const [width, setwidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setwidth(window.innerWidth);
    };

    // Add event listener to handle window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  return (
    <div className={styles.container}>
      <div 
      onClick={()=>{width < 800 && setDropd(!dropd)}}
      className={styles.navlink}>Our Services<BsChevronDown /></div>
      <div className={dropd ? `${styles.contentd}` : `${styles.content1d}`}>
      <Link className={styles.link} href="/OurServices/Artists">Artists</Link>
        <Link className={styles.link} href='/OurServices/Buyers'>Buyers</Link>
        <div className={styles.link}>Galleries</div>
      </div>
    </div>
  )
}

export default dropdown