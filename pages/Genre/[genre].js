import { useRouter } from "next/router";
import Navbar from "@/components/navbar";
import Footer from '../../components/footer'
import styles from '../../styles/genre.module.css'
import { BsCurrencyRupee } from 'react-icons/bs'
import Image from "next/image";
import dynamic from "next/dynamic";
import { useState,useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const Genre = () => {

  const[product,setProduct] = useState([]);
  const router = useRouter();
  const { genre } = router.query;

  useEffect(() => {
      const fetchData = async() => {
    try{
      const res = await axios.get(process.env.NEXT_PUBLIC_URL+"/products?populate=*", {
       headers: {
        Authorization: "bearer "+process.env.NEXT_PUBLIC_TOKEN,
      } 
      });
      console.log(res.data.data);
      setProduct(res.data.data);
      console.log(product.attributes.categories.data[0].attributes.title)
    } catch(err) {
      console.log(err);
    }
  };
  fetchData();
  }, []);

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
        {product.map(function (item) {
        if (item.attributes.categories.data[0].attributes.title === genre) {
          return (
            <div>
        <div key={item.id} className={styles.card}>
        <Link className={styles.link} href={`/SingleProduct/${item.id}`}>
        <Image className={styles.img} loader={() => item.attributes.img1.data.attributes.url} src={item.attributes.img1.data.attributes.url} width={300} height={700} alt="image"/>
      <div className={styles.name}>{item.attributes.title}</div>
      <div className={styles.transition}>
        <div className={styles.price}><BsCurrencyRupee />{item.attributes.price}</div>
        <div className={styles.add}>Add To Cart</div>
      </div>
      </Link>
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

export default dynamic (() => Promise.resolve(Genre), {ssr: false})