import React from 'react'
import styles from '../../styles/about.module.css'
import { GiCheckMark } from "react-icons/gi";
import Image from 'next/image';

export default function Mission() {
  return (
    <div className={styles.mcontainer}>
    <div className={styles.smcontainer}>
      <div className={styles.imgcont}>
        <Image src={'/about/1.jpg'} className={styles.img1} width={500} height={500} alt="image"/>
      </div>
      <div>
          <div className={styles.mheading}>Lorem Ipsum Consectetur</div>
          <div className={styles.tick}><GiCheckMark className={styles.check}/> <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div></div>
          <div className={styles.tick}> <GiCheckMark className={styles.check}/><div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div></div>
          <div className={styles.tick}> <GiCheckMark className={styles.check}/><div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div></div>
      </div>
    </div>
    <div className={styles.smcontainer1}>
      <div className={styles.imgcont}>
        <Image src={'/about/2.jpg'} className={styles.img1} width={500} height={500} alt="image"/>
      </div>
      <div>
          <div className={styles.mheading}>Lorem Ipsum Consectetur</div>
          <div className={styles.tick}><GiCheckMark className={styles.check}/> <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div></div>
          <div className={styles.tick}> <GiCheckMark className={styles.check}/><div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div></div>
          <div className={styles.tick}> <GiCheckMark className={styles.check}/><div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div></div>
      </div>
    </div>
    <div className={styles.smcontainer2}>
      <div className={styles.imgcont}>
        <Image src={'/about/3.jpg'} className={styles.img1} width={500} height={500} alt="image"/>
      </div>
      <div>
          <div className={styles.mheading}>Lorem Ipsum Consectetur</div>
          <div className={styles.tick}><GiCheckMark className={styles.check}/> <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div></div>
          <div className={styles.tick}> <GiCheckMark className={styles.check}/><div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div></div>
          <div className={styles.tick}> <GiCheckMark className={styles.check}/><div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div></div>
      </div>
    </div>

    </div>
  )
}
