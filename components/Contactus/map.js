import styles from '../../styles/map.module.css'

const map = () => {
  return (
    <div className={styles.container}>
      <h1 className="heading">Getting Here</h1>
      <div>
      <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.729606654667!2d77.2521727!3d28.547846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3c5607cbfed%3A0x53db4c0729e6019!2s89%2C%20Nehru%20Pl%20Market%20Rd%2C%20near%20Modi%20Tower%2C%20Nehru%20Place%2C%20New%20Delhi%2C%20Delhi%20110019!5e0!3m2!1sen!2sin!4v1718014004544!5m2!1sen!2sin" width={600} height={450} style={{border:0}} allowfullscreen="" loading={"lazy"} referrerpolicy={"no-referrer-when-downgrade"}></iframe>
      </div>
      <h2>303 A, Hemkunt Chambers, Nehru Place 110019</h2>
    </div>
  )
}

export default map