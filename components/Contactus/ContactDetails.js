import React from 'react'
import styles from '../../styles/Contactdetails.module.css'

export default function ContactDetails() {
  return (
    <div>
      <div className={styles.heading}>Contact Details</div>
      <div className={styles.container}>
        <div className={styles.scontainer1}>
          <div className={styles.topic}>Address Info:</div>
          <div className={styles.content}>#20, Okhla Phase III,<br/>
          Okhla Industrial Estate,<br/>
          New Delhi - 110020</div>
        </div>
        <div className={styles.scontainer}>
        <div className={styles.topic}>Email Info:</div>
          <div className={styles.content}><span>Editorial:</span> editorial@hyperglotreview.com<br/>
          <span>Operations:</span> operations@hyperglotreview.com<br/>
          <span>Sales & Marketing:</span> info@hyperglotreview.com</div>
        </div>
        <div className={styles.scontainer2}>
        <div className={styles.topic}>Phone Info:</div>
          <div className={styles.content}><span>Landline:</span> 011 3569 1637<br/>
          <span>Operations:</span> +91 97171 89650/ 659<br/>
          <span>Sales:</span> +91 97170 41038/ 338 <br/> 
          <span>Editorial:</span> +91 97171 89138</div>
        </div>
      </div>
    </div>
  )
}
