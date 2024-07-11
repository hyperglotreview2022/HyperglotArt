import React from 'react'
import styles from '../styles/loading.module.css'
import Image from 'next/image'

export default function loading() {
  return (
    <div className={styles.container}>
        <Image src={'/logo/newdark.png'} className={styles.logoimg} width={400} height={400} alt='logo'/>
    </div>
  )
}
