import React, { useState, useEffect } from 'react'
import Navbar from "@/components/navbarforpages";
import Footer from '@/components/footer'
import styles from '../../styles/subscriptionspage.module.css'
import dynamic from 'next/dynamic';
import { GiCheckMark } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const index = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  console.log(width)
  return (
    <div className={styles.smooth}>
      <Navbar/>
        <div className={styles.container}>
          <div className={styles.banner}>
            <h1 
             id={width > 1400 && 'one'}
             className={styles.bannerheading}>Subscriptions</h1>
          </div>
          <div className={styles.cardflex}>
            <div className={styles.left}>
              <div className={styles.head1}>Standard Plan</div>
              <div className={styles.head2}>&#36; 10 USD/<span>month</span></div>
              <div className={styles.head2}>&#36; 100 USD/<span>month</span></div>
              <div id={width > 1400 && 'two'} className={styles.btn}>Get Started</div>
            </div>
            <div className={styles.right}>
              <div className={styles.perks}>Perks</div>
              <div className={styles.perk}><GiCheckMark className={styles.icon}/><div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</div></div>
              <div className={styles.perk}><RxCross1 className={styles.icon}/><div className={styles.cross}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div></div>
              <div className={styles.perk}><RxCross1 className={styles.icon}/><div className={styles.cross}>Lorem ipsum dolor sit amet, consectetur.</div></div>
              <div id={width < 800 && 'two'} className={styles.perk}><RxCross1 className={styles.icon}/><div className={styles.cross}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div></div>
            </div>
          </div>
          <div  className={styles.cardflex}>
            <div className={styles.left}>
              <div className={styles.head1}>Premium Plan</div>
              <div className={styles.head2}>&#36; 20 USD/<span>month</span></div>
              <div className={styles.head2}>&#36; 200 USD/<span>month</span></div>
              <div id={width > 1400 && 'three'} className={styles.btn}>Get Started</div>
            </div>
            <div className={styles.right}>
              <div className={styles.perks}>Perks</div>
              <div className={styles.perk}><GiCheckMark className={styles.icon}/><div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</div></div>
              <div className={styles.perk}><GiCheckMark className={styles.icon}/><div >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div></div>
              <div className={styles.perk}><RxCross1 className={styles.icon}/><div className={styles.cross}>Lorem ipsum dolor sit amet, consectetur.</div></div>
              <div id={width < 800 && 'three'} className={styles.perk}><RxCross1 className={styles.icon}/><div className={styles.cross}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div></div>
            </div>
          </div>
          <div className={styles.cardflex}>
            <div className={styles.left}>
              <div className={styles.head1}>Pro Plan</div>
              <div className={styles.head2}>&#36; 30 USD/<span>month</span></div>
              <div className={styles.head2}>&#36; 300 USD/<span>month</span></div>
              <div className={styles.btn}>Get Started</div>
            </div>
            <div className={styles.right}>
              <div className={styles.perks}>Perks</div>
              <div className={styles.perk}><GiCheckMark className={styles.icon}/><div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</div></div>
              <div className={styles.perk}><GiCheckMark className={styles.icon}/><div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div></div>
              <div className={styles.perk}><GiCheckMark className={styles.icon}/><div>Lorem ipsum dolor sit amet, consectetur.</div></div>
              <div className={styles.perk}><GiCheckMark className={styles.icon}/><div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div></div>
            </div>
          </div>
        </div>
      <Footer/>
    </div>
  )
}

export default dynamic (() => Promise.resolve(index), {ssr: false})