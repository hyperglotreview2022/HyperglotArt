'use client'
import Navbar from '../../components/navbarforpages'
import Footer from '../../components/footer'
import styles from '../../styles/about.module.css'
import Image from 'next/image'
import dynamic from "next/dynamic";
import SmoothScroll from '@/components/SmoothScroll/SmoothScroll'
// import Timeline from '@/components/Contactus/Timeline'
import Mission from '@/components/Contactus/Mission'

const index = () => {
  return (
    <>      
      <Navbar />
      {/* <SmoothScroll> */}
      <div className={styles.container}>
        <h1 className={styles.heading}>About Us</h1>
        <div className={styles.subcontainer}>
          <div className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
          <div>
            <Image className={styles.img} src={'/Artists-Artworks/ShayaniBoral/turmoilinseabed.jpg'} width={400} height={600} alt="image"/>
          </div>
        </div>
        {/* <div className={styles.btmcontainer}>
          <div className='heading'>Company History</div>
          <>
            <Timeline />
          </>
        </div> */}
        <div className={styles.btmcontainer}>
          <div className='heading'>Mission & Vision</div>
          <>
            <Mission />
          </>
        </div>
      </div>
      <Footer />
      {/* </SmoothScroll> */}
    </>
  )
}

export default dynamic (() => Promise.resolve(index), {ssr: false})