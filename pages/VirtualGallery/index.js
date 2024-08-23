import Navbar from "@/components/navbarforpages";
import Footer from '@/components/footer'
import styles from '../../styles/eventpage.module.css'
import Image from 'next/image';
import Link from 'next/link';
import dynamic from "next/dynamic";

const Index = () => {

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.heading}>Virtual Gallery</h1>

        <div className={styles.rflex}>
        <div className={styles.imgcont}><Image src={'/virtualgallerymodels/images/am.png'} className={styles.img} width={1200} height={1200} alt='image' /></div>
        <div className={styles.right}>
        <Link className={styles.link} href="/Amorphicchasms"><div className={styles.topic}>AMORPHIC CHASMS</div></Link>
          <div className={styles.desc}>Hyperglot Review is extremely proud to present AMORPHIC CHASMS, a show that has been more than six months in the making. In keeping with the thematic and aesthetic motifs of our previous shows, this show revisits how artistic expressions and processes evolve over time both for individual artists and for their audiences. 
</div>
          <div className={styles.details}><b>Date:</b> Saturday, 10 August, 2024</div>
          <Link className={styles.link} href="/Amorphicchasms"><div className={styles.readbtn}>Enter 3D View</div></Link>
        </div>
      </div>

        <div className={styles.flex}>
        <div className={styles.imgcont}><Image src={'/virtualgallerymodels/images/rdas.png'} className={styles.img} width={1200} height={1200} alt='image' /></div>
        <div className={styles.right}>
          <Link className={styles.link} href="/RedrawingArtscapes"><div className={styles.topic}>REDRAWING ARTSCAPES</div></Link>
          <div className={styles.desc}>Hyperglot Review's fourth exhibition REDRAWING ARTSCAPES, third in collaboration with HOLZIndia, has been curated with a special focus on emerging artists who have harnessed their creative ingenuity to create artworks that have the potential to ask questions about our existential conditions. Through their artistic processes, they create assemblages that both reinforce and destabilise our preconceptions and create new chasms of aesthetic, individual as well as social ideas, experiences, movements, shifts and seismic tremors.</div>
          <div className={styles.details}><b>Date:</b> Saturday, 26 August, 2023</div>
          {/* <div className={styles.details}><b>Venue:</b> Somewhere, New Delhi</div> */}
          <Link className={styles.link} href="/RedrawingArtscapes"><div className={styles.readbtn}>Enter 3D View</div></Link>
        </div>
      </div>

      </div>
      <Footer />
    </div>
  )
}

export default dynamic (() => Promise.resolve(Index), {ssr: false})