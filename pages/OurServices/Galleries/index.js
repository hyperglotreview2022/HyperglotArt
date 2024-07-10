import React from 'react'
import styles from '../../../styles/ourservicespages.module.css'
import Navbar from '@/components/navbarforpages'
import Footer from '@/components/footer'
import SmoothScroll from '@/components/SmoothScroll/SmoothScroll'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'

const index = () => {
  return (
    <div>
      <Navbar />
      {/* <SmoothScroll> */}
          <div className={styles.container}>
            <div className={styles.banner}>
              <h1 className={styles.bannerheading}>Our Services - Galleries</h1>
            </div>

            {/* <div className={styles.banner1}>
                <Image src={'/servicesimages/services (6).jpg'} className={styles.bimg} width={400} height={400} alt='image' />
                <div className={styles.border}/>
                <div className={styles.over}>
                  <div className={styles.btext2}>Our Services - Galleries</div>
                  <Link className={styles.button5} href={'/ContactUs'}>Contact Us</Link>
                </div>
            </div> */}

            <div className={styles.lcont}>
              <div className={styles.lheading}>Why Hyperglot Art?</div>
              <div className={styles.ltext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
            </div>

            <div className={styles.flexcont}>
              <div className={styles.imgc}>
                <Image src={'/servicesimages/services (6).jpg'} className={styles.img} width={400} height={400} alt='image' />
              </div>
              <div className={styles.right}>
                <div className={styles.heading}>Lorem Ipsum Ipsum</div>
                <div className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                <Link className={styles.button6} href={'/ContactUs'}>Raise Any Queries</Link>
              </div>
            </div>

            <div className={styles.bottomcont}>
              <div className={styles.btmheading}>Work with experts for all your art needs</div>
              <div className={styles.btmflex}>
                <div className={styles.left11}>
                  <div className={styles.lefth}>Get in Touch with Us!</div>
                  <div className={styles.formflex}>
                  <input className={styles.linput} placeholder='Email Address'/>
                  <button className={styles.lbtn}>Subscribe</button>
                  </div>

                </div>
                <div className={styles.right11}>
                <div>
                  <Image src={'/servicesimages/services (6).jpg'} className={styles.img10} width={400} height={400} alt='image' />
                </div>
                <div>
                  <div className={styles.rh}>Browse the Hyperglot Art Trade Catalog</div>
                  <button className={styles.rbtn}>Download</button>
                </div>
                  
                </div>
              </div>
            </div>




          </div>
        <Footer />
      {/* </SmoothScroll> */}
    </div>
  )
}

export default dynamic (() => Promise.resolve(index), {ssr: false})
