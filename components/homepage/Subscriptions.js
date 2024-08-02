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
          <div className={styles.three}>Limited Features</div>
          <div className={styles.four}>no Public 3D Exhibition</div>
          <Link href={'/Subscriptions#one'} className={styles.btn}>Register</Link>
        </div>

        <div className={styles.card1}>
          <div className={styles.one}></div>
          <div className={styles.two}>PREMIUM PLAN</div>
          <div className={styles.three}>Limited Features</div>
          <div className={styles.four}>no Public 3D Exhibition</div>
          <Link href={'/Subscriptions#two'} className={styles.btn}>Register</Link>
        </div>

        <div className={styles.card2}>
          <div className={styles.one}></div>
          <div className={styles.two}>PRO PLAN</div>
          <div className={styles.three}>Limited Features</div>
          <div className={styles.four}>no Public 3D Exhibition</div>
          <Link href={'/Subscriptions#three'} className={styles.btn}>Register</Link>
        </div>
      </div>
    </div>
  )
}
