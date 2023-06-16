import styles from '../../styles/collection.module.css'
import Image from 'next/image'
import {FaLongArrowAltRight} from 'react-icons/fa'

const images = [ { id:1 ,
                    url:"/../public/heroimage/Heroimage.JPG"},
                    { id:2 ,
                    url:"/../public/heroimage/Heroimage.JPG"},
                    { id:3 ,
                      url:"/../public/heroimage/Heroimage.JPG"},
                      { id:4 ,
                        url:"/../public/heroimage/Heroimage.JPG"}]

const collection = () => {
  return (
    <div className={styles.container}>
      <h1 className="heading">
        Explore the Collection
      </h1>
    
      <div className={styles.images}>      
      {images.map(image =>  
        <div className={styles.imagecontainer}>
          <div className={styles.imgcontainer}>
            <Image key={image.id} className={styles.img} src={image.url} width={1000} height={1000} alt="image"/>
          </div>
          <div className={styles.imgtext}>
            <div className={styles.border}>
              <p>Lady With The Blue Eyes And White Hair</p>
            </div>
          </div>
        </div>
        )}

      </div>
        <div className={styles.btncontainer}>
          <button className={styles.btn}><span>VIEW ALL EXHIBITIONS</span><FaLongArrowAltRight className={styles.icon}/></button>
        </div>

    </div>
  )
}

export default collection