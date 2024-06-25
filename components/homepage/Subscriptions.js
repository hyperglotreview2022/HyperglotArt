import React from 'react'
import styles from '../../styles/subscriptions.module.css'

export default function Subscriptions() {
  return (
    <div className={styles.container}>
      <div className={styles.topic}>Subscriptions</div>
      <div className={styles.flex}>
        <div className={styles.card}>
          <div className={styles.one}>STANDARD</div>
          <div className={styles.two}>FREE<span> TRIAL</span></div>
          <div className={styles.three}>Limited Features</div>
          <div className={styles.four}>no Public 3D Exhibition</div>
          <button className={styles.btn}>Register</button>
        </div>

        <div className={styles.card1}>
          <div className={styles.one}>PREMIUM</div>
          <div className={styles.two}>FREE<span> TRIAL</span></div>
          <div className={styles.three}>Limited Features</div>
          <div className={styles.four}>no Public 3D Exhibition</div>
          <button className={styles.btn}>Register</button>
        </div>

        <div className={styles.card2}>
          <div className={styles.one}>PRO</div>
          <div className={styles.two}>FREE<span> TRIAL</span></div>
          <div className={styles.three}>Limited Features</div>
          <div className={styles.four}>no Public 3D Exhibition</div>
          <button className={styles.btn}>Register</button>
        </div>
      </div>
    </div>
  )
}
