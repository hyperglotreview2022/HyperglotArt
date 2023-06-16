import styles from '../../styles/contactform.module.css'
import Image from 'next/image'

const contactus = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgcontainer}>
        <Image className={styles.img} src={"/../public/formimg/formimg.JPG"} width={400} height={600} alt="image"/>
      </div>
      <div className={styles.formcontainer}>
        <form className={styles.form}>
          <input placeholder='YOUR NAME' type="text"></input>
          <input placeholder='YOUR EMAIL' type="email"></input>
          <input placeholder='SUBJECT' type="text"></input>
          <textarea placeholder='YOUR MESSAGE' type="text"></textarea>
          <button className={styles.button}>SEND</button>
        </form>
      </div>
    </div>
  )
}

export default contactus