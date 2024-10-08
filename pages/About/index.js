'use client'
import Navbar from '../../components/navbarforpages'
import Footer from '../../components/footer'
import styles from '../../styles/about.module.css'
import Image from 'next/image'
import dynamic from "next/dynamic";
import SmoothScroll from '@/components/SmoothScroll/SmoothScroll'
// import Timeline from '@/components/Contactus/Timeline'
import Mission from '@/components/Contactus/Mission'
import Head from 'next/head'

const index = () => {
  return (
    <>      
      <Head>
        <title>Hyperglot Art</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ico.ico" />
      </Head>   
      <main>
              <Navbar />
      {/* <SmoothScroll> */}
      <div className={styles.container}>
        <h1 className={styles.heading}>About Us</h1>
        <div className={styles.subcontainer}>
          <div className={styles.text}>
          Hyperglot Solutions is a culmination of years of research and study
to address a gap in the market to provide marketing and
promotional services to artists who often are not able to get the
required level of exposure and visibility due to certain economic and
demographic constraints. <br/><br/>
At Hyperglot, we believe in the adage l'art pour l'art (art for art's
sake) and, therefore, we wish to promote not just established artists
but also emerging artists, especially in the wake of the covid-19
pandemic which has severely impacted artists and writers.

          </div>
          <div>
            <Image className={styles.img} src={'/About/5.jpg'} width={400} height={600} alt="image"/>
          </div>
        </div>
        {/* <div className={styles.btmcontainer}>
          <div className='heading'>Company History</div>
          <>
            <Timeline />
          </>
        </div> */}
        <div className={styles.btmcontainer}>
        <div>
            <Image className={styles.img11} src={'/formimg/1.jpg'} width={400} height={600} alt="image"/>
          </div>
          <div className={styles.right11}>
          <div className='heading'>Mission & Vision</div>
          <>
            <div className={styles.newtext}>The art ecosystem in India is still at its nascent stage and the
            opportunities for growth are limitless. Through our endeavours, we
support emerging artists in particular to ensure that their creative
endeavours find maximum exposure because we believe that Indian
art is all set to achieve phenomenal growth in the global art market.</div>
            {/* <Mission /> */}
          </>
          </div>

        </div>
      </div>
      <Footer />
      {/* </SmoothScroll> */}
      </main>

    </>
  )
}

export default dynamic (() => Promise.resolve(index), {ssr: false})