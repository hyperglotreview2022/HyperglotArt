import styles from '../../styles/map.module.css'

const map = () => {
  return (
    <div className={styles.container}>
      <h1 className="heading">Getting Here</h1>
      <div>
      <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7009.296675897544!2d77.26835845!3d28.550288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3e5ed2f846d%3A0x595fbad7d2f742f8!2sOkhla%20Phase%20III%2C%20Okhla%20Industrial%20Estate%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1720614449188!5m2!1sen!2sin" width={600} height={450} style={{border:0}} allowfullscreen="" loading={"lazy"} referrerpolicy={"no-referrer-when-downgrade"}></iframe>
      </div>
      <h2>#20, Okhla Phase III, Okhla Industrial Estate, New Delhi - 110020</h2>
    </div>
  )
}

export default map