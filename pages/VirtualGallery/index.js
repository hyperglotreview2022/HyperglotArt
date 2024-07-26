import Navbar from "@/components/navbarforpages";
import Footer from '@/components/footer'
import styles from '../../styles/eventpage.module.css'
import Image from 'next/image';
import Link from 'next/link';

export default function index() {

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.heading}>Virtual Gallery</h1>

        <div className={styles.rflex}>
        <div className={styles.imgcont}><Image src={'/virtualgallerymodels/images/redrawingart.png'} className={styles.img} width={1200} height={1200} alt='image' /></div>
        <div className={styles.right}>
          <Link className={styles.link} href="/RedrawingArtscapes"><div className={styles.topic}>REDRAWING ARTSCAPES</div></Link>
          <div className={styles.desc}>Hyperglot Review's fourth exhibition REDRAWING ARTSCAPES, third in collaboration with HOLZIndia, has been curated with a special focus on emerging artists who have harnessed their creative ingenuity to create artworks that have the potential to ask questions about our existential conditions. Through their artistic processes, they create assemblages that both reinforce and destabilise our preconceptions and create new chasms of aesthetic, individual as well as social ideas, experiences, movements, shifts and seismic tremors.</div>
          <div className={styles.details}><b>Date:</b> Saturday, 26 August, 2023</div>
          {/* <div className={styles.details}><b>Venue:</b> Somewhere, New Delhi</div> */}
          <Link className={styles.link} href="/RedrawingArtscapes"><div className={styles.readbtn}>Read more</div></Link>
        </div>
      </div>

      <div className={styles.flex}>
        <div className={styles.imgcont}><Image src={'/virtualgallerymodels/images/redrawingart.png'} className={styles.img} width={1200} height={1200} alt='image' /></div>
        <div className={styles.right}>
        <Link className={styles.link} href="/RedrawingArtscapes"><div className={styles.topic}>REDRAWING ARTSCAPES</div></Link>
          <div className={styles.desc}>Hyperglot Review's fourth exhibition REDRAWING ARTSCAPES, third in collaboration with HOLZIndia, has been curated with a special focus on emerging artists who have harnessed their creative ingenuity to create artworks that have the potential to ask questions about our existential conditions. Through their artistic processes, they create assemblages that both reinforce and destabilise our preconceptions and create new chasms of aesthetic, individual as well as social ideas, experiences, movements, shifts and seismic tremors.</div>
          <div className={styles.details}><b>Date:</b> Saturday, 28 October, 2023</div>
          {/* <div className={styles.details}><b>Venue:</b> Somewhere, New Delhi</div> */}
          <Link className={styles.link} href="/RedrawingArtscapes"><div className={styles.readbtn}>Read more</div></Link>
        </div>
      </div>

      <div className={styles.gcont}>
        <div className={styles.heading1}>Recent Virtual Galleries</div>
        <div className={styles.gridcont}>
        <Link className={styles.link} href="/RedrawingArtscapes">
        <div className={styles.card1}>
          <div className={styles.imgcont}><Image src={'/virtualgallerymodels/images/redrawingart.png'} className={styles.img1} width={1200} height={1200} alt='image' /></div>
          <div className={styles.info}>
            <div className={styles.topic1}>REDRAWING ARTSCAPES</div>
            <div className={styles.desc1}>Hyperglot Review's fourth exhibition REDRAWING ARTSCAPES, third in collaboration with HOLZIndia, has been curated...</div>
            <div className={styles.details1}><b>Date:</b> Saturday, 26 August, 2023</div>
            {/* <div className={styles.details1}><b>Venue:</b> Somewhere, New Delhi</div> */}
            <div className={styles.readbtn1}>Read more</div>
          </div>
        </div>
        </Link>

        <Link className={styles.link} href="/RedrawingArtscapes">
        <div className={styles.card1}>
          <div className={styles.imgcont}><Image src={'/virtualgallerymodels/images/redrawingart.png'} className={styles.img1} width={1200} height={1200} alt='image' /></div>
          <div className={styles.info}>
            <div className={styles.topic1}>REDRAWING ARTSCAPES</div>
            <div className={styles.desc1}>Hyperglot Review's fourth exhibition REDRAWING ARTSCAPES, third in collaboration with HOLZIndia, has been curated...</div>
            <div className={styles.details1}><b>Date:</b> Saturday, 26 August, 2023</div>
            {/* <div className={styles.details1}><b>Venue:</b> Somewhere, New Delhi</div> */}
            <div className={styles.readbtn1}>Read more</div>
          </div>
        </div>
        </Link>

        <Link className={styles.link} href="/RedrawingArtscapes">
        <div className={styles.card1}>
          <div className={styles.imgcont}><Image src={'/virtualgallerymodels/images/redrawingart.png'} className={styles.img1} width={1200} height={1200} alt='image' /></div>
          <div className={styles.info}>
            <div className={styles.topic1}>REDRAWING ARTSCAPES</div>
            <div className={styles.desc1}>Hyperglot Review's fourth exhibition REDRAWING ARTSCAPES, third in collaboration with HOLZIndia, has been curated...</div>
            <div className={styles.details1}><b>Date:</b> Saturday, 26 August, 2023</div>
            {/* <div className={styles.details1}><b>Venue:</b> Somewhere, New Delhi</div> */}
            <div className={styles.readbtn1}>Read more</div>
          </div>
        </div>
        </Link>

        </div>
      </div>
      </div>
      <Footer />
    </div>
  )
}