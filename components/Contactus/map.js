import styles from '../../styles/map.module.css'

const map = () => {
  return (
    <div className={styles.container}>
      <h1 className="heading">Getting Here</h1>
      <div>
      <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14016.062502163713!2d77.25199884999999!3d28.5692935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1682511630565!5m2!1sen!2sin" width={600} height={450} style={{border:0}} allowfullscreen="" loading={"lazy"} referrerpolicy={"no-referrer-when-downgrade"}></iframe>
      </div>
      <h2>193 Sturt Street, Westbank 3216, VIC AUSTRALIA.</h2>
    </div>
  )
}

export default map