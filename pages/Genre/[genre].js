import { useRouter } from "next/router";
import Navbar from "@/components/navbar";
import Footer from '../../components/footer'
import styles from '../../styles/genre.module.css'
import { BsCurrencyRupee } from 'react-icons/bs'
import Image from "next/image";

export default function Genre({dataExport}){

  const router = useRouter();
  const { genre } = router.query;

  return(
    <>
    <Navbar />
      <div className={styles.container}>
        <div className={styles.banner}>
          <p className={styles.bannertext}>Modern Art</p>
          <h1 className={styles.bannerheading}>{genre}</h1>
          <p className={styles.bannertext}>Cut from light and fluid mushroom.</p>
        </div>
        <div className={styles.subcontainer}>
        {dataExport.map(function (item) {
        if (item.genre === genre) {
          return (
        <div key={item.id} className={styles.card}>
      <Image className={styles.img} src={item.url} width={300} height={700}/>
      <div className={styles.name}>{item.name}</div>
      <div className={styles.transition}>
        <div className={styles.price}><BsCurrencyRupee />{item.price}</div>
        <div className={styles.add}>Add To Cart</div>
      </div>
    </div>
          );
        }
      })}

        </div>
      </div>
      <Footer />
    </>
  )
}

export async function getServerSideProps() {
  const url = "http://localhost:3000/api/artdata";
  const res = await fetch(url);
  const dataExport = await res.json();
  return { props: { dataExport } };
}