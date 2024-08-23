import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../../styles/artistshome.module.css'

export default function Artists({data}) {
  return (
    <div className={styles.container}>
    <div className={styles.centre}>
      <div className={styles.topic}>Artists in Spotlight</div>
    </div>
      
      <div className={styles.flex}>
      {data.slice(0,8).map(data=>
        <Link className={styles.link} key={data.id} href={`/Artistsartworks/${data.id}`}>
          <Image className={styles.img} src={data.url} width={400} height={400} alt="image"/>
          <div className={styles.name}>{data.name}</div>
          <div className={styles.artist}>Artist</div>
        </Link>
      )}
      </div>
    </div>
  )
}
