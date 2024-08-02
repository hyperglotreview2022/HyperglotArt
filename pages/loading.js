import React from 'react'
import styles from '../styles/VG.module.css'
import Image from 'next/image'

export default function () {
  return (
    <div className={styles.loadingcontainer}>
        <Image className={styles.loader} src={'/logo/loader.svg'} width={500} height={500} alt='loading'/>
    </div>
  )
}
