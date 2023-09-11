import React from 'react'
import styles from '../../styles/singleproduct.module.css'
import Slider from '../singleproduct/bottomslider'

const bottomcontent = ({data2}) => {
  return (
    <div>
      <h2 className={styles.slidertopic}>You may also like</h2>
      <Slider product={data2}/>
    </div>
  )
}

export default bottomcontent