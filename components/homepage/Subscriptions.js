import Link from 'next/link'
import React from 'react'
import styles from '../../styles/subscriptions.module.css'

export default function Subscriptions() {
  return (
    <div className={styles.container}>
      <div className={styles.topic}>Subscriptions</div>
      <div className={styles.flex}>
        <div className={styles.card}>
          <div className={styles.one}></div>
          <div className={styles.two}>STANDARD PLAN</div>
          <ul className={styles.lists}>
            <li>Standard website templates</li>
            <li>Seminars and Workshops</li>
            <li>and more...</li>
          </ul>
          <Link href={'/Subscriptions#one'} className={styles.btn}>Register</Link>
        </div>

        <div className={styles.card1}>
          <div className={styles.one}></div>
          <div className={styles.two}>PREMIUM PLAN</div>
          <ul className={styles.lists}>
            <li>Premium website templates</li>
            <li>3D virtual galleries</li>
            <li>and more...</li>
          </ul>
          <Link href={'/Subscriptions#two'} className={styles.btn}>Register</Link>
        </div>

        <div className={styles.card2}>
          <div className={styles.one}></div>
          <div className={styles.two}>ELITE PLAN</div>
          <ul className={styles.lists}>
            <li>Customized templates</li>
            <li>Digital marketing and Social media Management</li>
            <li>and more...</li>
          </ul>
          <Link href={'/Subscriptions#three'} className={styles.btn}>Register</Link>
        </div>
      </div>
    </div>
  )
}
