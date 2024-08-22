import Link from 'next/link'
import { useEffect, useState } from 'react'
import {BsChevronDown} from 'react-icons/bs'
import styles from '../styles/dropdown.module.css'

const dropdown = ({change}) => {
  const [dropd, setDropd] = useState(true)
  const [dropd1, setDropd1] = useState(true)
  const [dropd2, setDropd2] = useState(true)
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
      className={styles.navlink}>Catalogue<BsChevronDown /></div>
      <div className={dropd ? `${styles.contentd}` : `${styles.content1d}`}>
      <div className={styles.secondrel}>
        <div onClick={()=>{width < 800 && setDropd1(!dropd1)}} className={styles.link}>Medium</div>
        <div className={dropd1 ? `${styles.secabd}` : `${styles.secabd1}`}>
        <Link onClick={change} className={styles.link} href="/Medium/paintings">Paintings</Link>
        <Link onClick={change} className={styles.link} href='/Medium/prints'>Prints</Link>
        <Link onClick={change} className={styles.link} href='/Medium/sculptures'>Sculptures</Link>
        </div>
      </div>
      <div  className={styles.secondrel1}>
        <div onClick={()=>{width < 800 && setDropd2(!dropd2)}}
        className={styles.link}>Genre</div>
        <div className={dropd2 ? `${styles.secab1d}` : `${styles.secab1d1}`}>
          <Link onClick={change} className={styles.link} href='/Genre/figurative'>Figurative</Link>
          <Link onClick={change} className={styles.link} href='/Genre/abstract'>Abstract</Link>
          <Link onClick={change} className={styles.link} href='/Genre/landscape'>Landscape</Link>
        </div>
      </div>
      </div>
    </div>
  )
}

export default dropdown