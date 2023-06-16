import styles from '../styles/footer.module.css'
import {BiUpArrow} from 'react-icons/bi'
import {BsInstagram, BsTwitter, BsYoutube} from 'react-icons/bs'
import {RiFacebookBoxFill} from 'react-icons/Ri'

const footer = () => {

    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      });
    };
  

  return (
    <div className={styles.container}>
      <div className={styles.upper}>
        <div className={styles.list}>
            <ul>
              <li><a href='#'>WHAT'S ON</a></li>
              <li><a href='#'>COLLECTION</a></li>
              <li><a href='#'>SHOP</a></li>
              <li><a href='#'>VISIT US</a></li>
              <li><a href='#'>ABOUT US</a></li>
              <li><a href='#'>JOURNAL</a></li>
              <li><a href='#'>BUY NOW!</a></li>
            </ul>
        </div>
        <div onClick={scrollToTop} className={styles.totop}><BiUpArrow className={styles.icon} />BACK TO TOP OF THE PAGE</div>
      </div>
      <div className={styles.lower}>
        <div className={styles.left}>
          <div className={styles.icons}>
          <RiFacebookBoxFill />
          <BsInstagram />
          <BsTwitter />
          <BsYoutube />
          </div>
          <div className={styles.left1}>
            Morbi odio eros, volutpat ut pharetra vitae, lobortis sed nibh. Donec sed odio operae, eu vulputate felis rhoncus. Quo usque tandem abutere, Catilina, patientia nostra? Etiam habebis sem dicantur.
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.right1}>
            Art Gallery WP <br /> 36 Battersea Square, London <br /> Tel: 01624-621440
          </div>
          <div>
          <div className={styles.right1}>
            Terms & conditions <br /> Privacy policy & cookies <br /> Terms of use
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default footer