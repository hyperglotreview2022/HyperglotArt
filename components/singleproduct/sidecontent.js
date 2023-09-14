import React, { useState } from 'react'
import styles from '../../styles/singleproduct.module.css'

const sidecontent = ({data1}) => {

  const [isactive, setIsactive] = useState(true);
  const [isactive2, setIsactive2] = useState(false)

  console.log(data1)

  function change(){
    setIsactive(!isactive);
    setIsactive2(!isactive2);
  }
  
  return (
    <div className={styles.sidecontainer}>
    <div className={styles.topcontainer}>
      <div className={styles.title}>"{data1.title}"</div>
      <div className={styles.artist}>Art by <span>{data1.artist}</span></div>
      <div className={styles.price}><span>Price - </span>Rs. {data1.price}</div>
    </div>
    <div className={styles.btncontainer}>
      <button className={styles.btn}><span>BUY NOW</span></button>
    </div>
    <div className={styles.bottomcontainer}>
      <div className={styles.btmcont}>
        <div className={isactive ? `${styles.topic} ${styles.active}` : styles.topic} onClick={change}>Details</div>
        <div className={isactive2 ? `${styles.topic} ${styles.active}` : styles.topic} onClick={change}>Description</div>
      </div>
      <div className={styles.btmbtm}>
      {isactive ? <div>
        <p><b>Size</b>: {data1.size}</p>
        <p><b>Medium</b>: {data1.medium}</p>
        <p><b>Surface</b>: {data1.surface}</p>
        <p><b>Artwork</b>: {data1.artwork}</p>
        <p><b>Created in</b>: {data1.createdin}</p>
      </div> : <p>{data1.desc}</p>}
      </div>
    </div>
    </div>
    
  )
}

export default sidecontent