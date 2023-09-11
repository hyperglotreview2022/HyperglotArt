import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import styles from '../../styles/contactus.module.css'
import Contactform from '../../components/Contactus/contactus'
import Map from '../../components/Contactus/map'
import dynamic from "next/dynamic";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1 className="heading">Contact Us</h1>
        <Contactform />
        <Map />
      </div>
      <Footer />
    </>
  )
}

export default dynamic (() => Promise.resolve(ContactUs), {ssr: false})