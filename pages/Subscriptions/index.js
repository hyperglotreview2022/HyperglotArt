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
             className={styles.bannerheading}>Subscriptions - Artists</h1>
          </div>
          <div className={styles.cardflex1}>
            <div className={styles.left}>
              <div className={styles.head1}>Standard Plan</div>
              <div className={styles.head2}>700 INR/<span>month</span></div>
              {/* <div className={styles.head2}>&#36; 100 USD/<span>month</span></div> */}
              <div id={width > 1400 && 'two'} className={styles.btn}>Get Started</div>
            </div>
            <div className={styles.right}>
              {/* <div className={styles.perks}>Perks</div> */}
              <div className={styles.perk1}>
              {/* <GiCheckMark className={styles.icon}/> */}
                <div><b>Website Creation & Maintenance</b><br/>
                  <ul>
                    <li>Standard artist portfolio site with up to 100 artworks</li>
                    <li>Regular updates and maintenance</li>
                  </ul>
                </div>
              </div>
              <div className={styles.perk1}>
              {/* <GiCheckMark className={styles.icon}/> */}
                <div><b>Gallery Representation</b><br/>
                  <ul>
                    <li>Submission to 2 galleries per quarter</li>
                    <li>One 3D Virtual Exhibition per quarter and One Offline Exhibition in a year</li>
                  </ul>
                </div>
              </div>
              <div className={styles.perk1}>
              {/* <GiCheckMark className={styles.icon}/> */}
                <div id={width < 800 && 'two'}><b>Seminars and Workshops</b><br/>
                  <ul>
                    <li>Free of charge seminars, workshops and training sessions for artists</li>
                  </ul>
                </div>
              </div>
              {/* <div className={styles.perk1}><RxCross1 className={styles.icon}/><div className={styles.cross}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div></div>
              <div className={styles.perk1}><RxCross1 className={styles.icon}/><div className={styles.cross}>Lorem ipsum dolor sit amet, consectetur.</div></div>
              <div id={width < 800 && 'two'} className={styles.perk1}><RxCross1 className={styles.icon}/><div className={styles.cross}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div></div> */}
            </div>
          </div>
          <div  className={styles.cardflex2}>
            <div className={styles.left}>
              <div className={styles.head1}>Premium Plan</div>
              <div className={styles.head2}>1200 INR/<span>month</span></div>
              {/* <div className={styles.head2}>&#36; 200 USD/<span>month</span></div> */}
              <div id={width > 1400 && 'three'} className={styles.btn}>Get Started</div>
            </div>
            <div className={styles.right}>
              {/* <div className={styles.perks}>Perks</div> */}
              <div className={styles.perk2}>
               {/* <GiCheckMark className={styles.icon}/> */}
               <div><b>All Basic Plan Benefits, Plus</b><br/>
                  {/* <ul>
                    <li>Submission to 2 galleries per quarter</li>
                    <li>One 3D Virtual Exhibition per quarter and One Offline Exhibition in a year</li>
                  </ul> */}
                </div>
              </div>
              <div className={styles.perk2}>
               {/* <GiCheckMark className={styles.icon}/> */}
               <div><b>Website Upgrade</b><br/>
                  <ul>
                    <li>Two 3D Virtual Galleries with 20 artworks each</li>
                    <li>Integration of blogs and news sections</li>
                  </ul>
                </div>
              </div>
              <div className={styles.perk2}>
               {/* <GiCheckMark className={styles.icon}/> */}
               <div><b>Gallery Representation</b><br/>
                  <ul>
                    <li>Submission to an additional 3 galleries per year</li>
                    <li>Participation in 2 Offline exhibitions, including planning and promotion</li>
                  </ul>
                </div>
              </div>
              {/* <div className={styles.perk2}><GiCheckMark className={styles.icon}/><div >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div></div>
              <div className={styles.perk2}><RxCross1 className={styles.icon}/><div className={styles.cross}>Lorem ipsum dolor sit amet, consectetur.</div></div>
              <div id={width < 800 && 'three'} className={styles.perk2}><RxCross1 className={styles.icon}/><div className={styles.cross}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div></div> */}
            </div>
          </div>
          <div className={styles.cardflex}>
            <div className={styles.left}>
              <div className={styles.head1}>Elite Plan</div>
              <div className={styles.head2}>1800 INR/<span>month</span></div>
              {/* <div className={styles.head2}>&#36; 300 USD/<span>month</span></div> */}
              <div className={styles.btn}>Get Started</div>
            </div>
            <div className={styles.right}>
              {/* <div className={styles.perks}>Perks</div> */}
              <div className={styles.perk}>
                {/* <GiCheckMark className={styles.icon}/> */}
                  <div><b>All Premium Plan Benefits, Plus</b><br/></div>
                </div>
                <div className={styles.perk}>
               {/* <GiCheckMark className={styles.icon}/> */}
               <div><b>Premium Social Media Management</b><br/>
                  <ul>
                    <li>1 weekly post, bi-weekly engagement through reels/ stories</li>
                    {/* <li>Participation in 2 Offline exhibitions, including planning and promotion.</li> */}
                  </ul>
                </div>
              </div>
              <div className={styles.perk}>
               {/* <GiCheckMark className={styles.icon}/> */}
               <div><b>Website Upgrade</b><br/>
                  <ul>
                    <li>Custom design</li>
                    <li>2 Blogs and articles per month for greater reach in digital media</li>
                    <li>3 additional 3D virtual galleries with 20 artworks each</li>
                  </ul>
                </div>
              </div>
              {/* <div className={styles.perk}><GiCheckMark className={styles.icon}/><div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div></div>
              <div className={styles.perk}><GiCheckMark className={styles.icon}/><div>Lorem ipsum dolor sit amet, consectetur.</div></div>
              <div className={styles.perk}><GiCheckMark className={styles.icon}/><div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div></div> */}
            </div>
          </div>
        </div>
      <Footer/>
    </div>
  )
}

export default dynamic (() => Promise.resolve(index), {ssr: false})