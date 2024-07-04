import Navbar from "@/components/navbarforpages";
import Footer from "@/components/footer";
import styles from "../../styles/contactus.module.css";
import Contactform from "../../components/Contactus/contactus";
import Map from "../../components/Contactus/map";
import dynamic from "next/dynamic";
// import SmoothScroll from "@/components/SmoothScroll/SmoothScroll";
import ContactDetails from "@/components/Contactus/ContactDetails";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      {/* <SmoothScroll> */}
        <div className={styles.container}>
          <h1 className={styles.heading}>Contact Us</h1>
          <Contactform />
          <ContactDetails />
          <Map />
        </div>
        <Footer />
      {/* </SmoothScroll> */}
    </>
  );
};

export default dynamic(() => Promise.resolve(ContactUs), { ssr: false });
