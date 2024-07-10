import React from 'react'
import styles from '../../../styles/ourservicespages.module.css'
import Navbar from '@/components/navbarforpages'
import Footer from '@/components/footer'
import SmoothScroll from '@/components/SmoothScroll/SmoothScroll'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import Piano from '@/components/Productspage/Piano'

const index = () => {
  return (
    <div>
      <Navbar />
      {/* <SmoothScroll> */}
          <div className={styles.container}>
            <div className={styles.banner}>
              <h1 className={styles.bannerheading}>Our Services - Artists</h1>
            </div>

            {/* <div className={styles.banner1}>
                <Image src={'/servicesimages/services (5).jpg'} className={styles.bimg} width={400} height={400} alt='image' />
                <div className={styles.border}>
                <div className={styles.over}>
                  <div className={styles.btext2}>Our Services - Artists</div>
                  <Link className={styles.button5} href={'/ContactUs'}>Contact Us</Link>
                </div>
            </div> */}

            <div className={styles.newtext}>At Hyperglot, we understand that your
talent deserves to be seen,
appreciated, and celebrated. Our
mission is to help you navigate the
complexities of the art world, enhance
your visibility, and increase your sales
both online and offline.
Join us and let’s create a masterpiece
of success together.
</div>

<div>
  <Piano />
</div>

            {/* <div className={styles.lcont}>
              <div className={styles.lheading}>Why Hyperglot Art?</div>
              <div className={styles.ltext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
            </div> */}

            <div className={styles.heading12}>Why Choose Us?</div>

            <div className={styles.flexcont}>
              <div className={styles.imgc}>
                <Image src={'/servicesimages/services (5).jpg'} className={styles.img} width={400} height={400} alt='image' />
              </div>
              <div className={styles.right}>
                <div className={styles.heading}>Expertise and Passion</div>
                <div className={styles.text}>At Hyperglot, we are a team of
experienced marketers,
artists, and art enthusiasts
who are passionate about
helping artists succeed. Our
deep understanding of the art
world and marketing trends
enables us to create
strategies that are both
innovative and effective.</div>
                <Link className={styles.button6} href={'/ContactUs'}>Raise Any Queries</Link>
              </div>
            </div>

            <div className={styles.rflexcont}>
              <div className={styles.imgc}>
                <Image src={'/servicesimages/services (5).jpg'} className={styles.img} width={400} height={400} alt='image' />
              </div>
              <div className={styles.right}>
                <div className={styles.heading}>Comprehensive Support</div>
                <div className={styles.text}>From branding and online
presence to gallery
representation and
exhibitions, we provide
comprehensive support to
ensure your success. Our
team takes care of the
marketing and administrative
tasks, allowing you to focus
on what you do best –
creating art.
</div>
                <Link className={styles.button6} href={'/ContactUs'}>Raise Any Queries</Link>
              </div>
            </div>

            <div className={styles.flexcont}>
              <div className={styles.imgc}>
                <Image src={'/servicesimages/services (5).jpg'} className={styles.img} width={400} height={400} alt='image' />
              </div>
              <div className={styles.right}>
                <div className={styles.heading}>Proven Results
                </div>
                <div className={styles.text}>Our clients have experienced
significant growth in their
visibility, engagement, and
sales.</div>
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
                  <Image src={'/servicesimages/services (5).jpg'} className={styles.img10} width={400} height={400} alt='image' />
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
