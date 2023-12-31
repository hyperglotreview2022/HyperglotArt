import styles from '../../styles/productsgrid.module.css'
import Image from 'next/image'
import {BsCurrencyRupee} from 'react-icons/bs'


const genregrid = (props) => {
  return( 
    <div key={props.id} className={styles.card}>
      <Image className={styles.img} src={props.url} width={300} height={700} alt="image"/>
      <div className={styles.name}>{props.name}</div>
      <div className={styles.transition}>
        <div className={styles.price}><BsCurrencyRupee />{props.price}</div>
        <div className={styles.add}>Add To Cart</div>
      </div>
    </div>)
}

export default genregrid