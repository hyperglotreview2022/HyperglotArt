import Navbar from '../../components/navbar' 
import Footer from '../../components/footer'
import styles from '../../styles/Artists.module.css'
import Image from 'next/image'

const artists = [ "/../public/heroimage/Heroimage.JPG",
                  "/../public/heroimage/Heroimage.JPG",
                  "/../public/heroimage/Heroimage.JPG",
                  "/../public/heroimage/Heroimage.JPG",
                  "/../public/heroimage/Heroimage.JPG",
                  "/../public/heroimage/Heroimage.JPG",
                  "/../public/heroimage/Heroimage.JPG",
                  "/../public/heroimage/Heroimage.JPG",
                  "/../public/heroimage/Heroimage.JPG", ]

const Artists = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.heading}>Featured Artists</h1>
        <div className={styles.subcontainer}>
          {artists.map(artist => 
          <div className={styles.card}>
            <Image className={styles.img} src={artist} width={700} height={500} alt="image"/>
            <p className={styles.name}>Maria Zvonareva</p>
            <p className={styles.genre}>Painter, Sculpture, Conceptual Artist</p>
          </div>)}
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Artists