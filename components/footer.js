import styles from '../styles/footer.module.css'
import {BiUpArrow} from 'react-icons/bi'
import {BsInstagram, BsTwitter, BsYoutube} from 'react-icons/bs'
import {RiFacebookBoxFill} from 'react-icons/ri'
import Link from 'next/link'

const footer = () => {

    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      });
    };
  

  return (
    <div className={styles.container}>
            {/* <div onClick={scrollToTop} className={styles.totop}><BiUpArrow className={styles.icon} />BACK TO TOP OF THE PAGE</div> */}
      <div className={styles.left}>
        <div className={styles.logo}>Hyperglot Art</div>
        <div className={styles.desc}>Browse 3D Exhibitions</div>
        <div className={styles.desc2}>Marketplace</div>
        <div className={styles.one}>All rights reserved 2024 hyperglot Art</div>
      </div>
      <div className={styles.right}>
    <div className={styles.flex}>
      <div>
        <div className={styles.litopic}>Links</div>
        <ul className={styles.list}>
          <li><Link className={styles.link} href="/">Home</Link></li>
          <li><Link className={styles.link} href="/Artists">Artists</Link></li>
          <li><Link className={styles.link} href="/About">About</Link></li>
          <li><Link className={styles.link} href="/ContactUs">Contact Us</Link></li>
        </ul>
      </div>

      <div>
        <div className={styles.litopic}>Discover</div>
        <ul className={styles.list}>
          <li><Link className={styles.link} href="/Medium/paintings">Paintings</Link></li>
        <li><Link className={styles.link} href='/Medium/prints'>Prints</Link></li>
        <li><Link className={styles.link} href='/Medium/sculptures'>Sculptures</Link></li>
          <li><Link className={styles.link} href='/Genre/figurative'>Figurative</Link></li>
        <li><Link className={styles.link} href='/Genre/abstract'>Abstract</Link></li>
        <li><Link className={styles.link} href='/Genre/landscape'>Landscape</Link></li>
        </ul>
      </div>

      <div>
        <div className={styles.litopic}>Legals</div>
        <ul className={styles.list}>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </div>
    <div className={styles.icons}>
      <RiFacebookBoxFill />
      <BsInstagram />
      <BsTwitter />
      <BsYoutube />
    </div>
    </div>
    </div>
  )
}

export default footer