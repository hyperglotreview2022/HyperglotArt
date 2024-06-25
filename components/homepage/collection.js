import styles from '../../styles/collection.module.css'
import Image from 'next/image'
import {FaLongArrowAltRight} from 'react-icons/fa'
import Link from 'next/link'

const collection = ({product}) => {
  return (
    <div className={styles.container}>
      <h1 className="heading">
        Explore the Collection
      </h1>
    
      <div className={styles.images}>      
      {product.slice(0,4).map(image =>  
        <div key={image.id} className={styles.imagecontainer}>
        <Link className={styles.link} href={`/Artistsartworks/${image.id}`}>
          <div className={styles.imgcontainer}>
          <Image className={styles.img} loader={() => image.url} unoptimized={true} src={image.url} width={1000} height={1000} alt="image"/>
          </div>
          <div className={styles.imgtext}>
            <div className={styles.border}>
              <p>{image.name}</p>
            </div>
          </div>
          </Link>
        </div>
        )}

      </div>
        <div className={styles.btncontainer}>
        <Link className={styles.link} href="/Artists">
          <button className={styles.btn}><span>VIEW ALL ARTISTS</span><FaLongArrowAltRight className={styles.icon}/></button>
        </Link>
          
        </div>

    </div>
  )
}

export default collection