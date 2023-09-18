import Navbar from '../../components/navbar'
import Footer from '@/components/footer'
import styles from '../../styles/Artists.module.css'
import dynamic from "next/dynamic";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const getStaticProps = async () => {
  const resulting = await fetch(`${process.env.NEXT_PUBLIC_URL}/artists?populate=*`, {
    headers: {
     Authorization: "bearer "+process.env.NEXT_PUBLIC_TOKEN,
   } 
   });
  const result = await resulting.json();
  return {
    props: {
      product: result.data,
    },
  };
};

const Products = ({product}) => {

  const [count1,setCount1] = useState(0)
  const [count2,setCount2] = useState(8)

  product = product.sort((a, b) => {
    if (a.attributes.title < b.attributes.title) {
      return -1;
    }
  });


  function next(){
    setCount1((count1)=>count1+8)
    setCount2((count2)=>count2+8)
  }

  function back(){
    setCount1((count1)=>count1-8)
    setCount2((count2)=>count2-8)
  }

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
      <div className={styles.banner}>
          {/* <p className={styles.bannertext}>Modern Art</p> */}
          <h1 className={styles.bannerheading}>Artists</h1>
          {/* <p className={styles.bannertext}>Cut from light and fluid mushroom.</p> */}
        </div>

        <div className={styles.container2}>
      {product.slice(count1,count2).map(data =>{
        return(
          <div key={data.id} >
          <Link className={styles.link} href={`/Artistsartworks/${data.id}`}>
          <Image className={styles.img} loader={() => data.attributes.img1.data.attributes.url} src={data.attributes.img1.data.attributes.url} width={300} height={700} alt="image"/>
           <div className={styles.artistname}>{data.attributes.title}</div>
           </Link>
         </div>
         )}
      )}
      </div>
      <div className={styles.btncontainer}>
      <button className={!count1 ? `${styles.button} ${styles.active}` : `${styles.button}`} onClick={back} disabled={count1 ? false : true }>previous</button>
      <button className={count2 > product.length ? `${styles.button} ${styles.active}` : `${styles.button}`} onClick={next}  disabled={count2 > product.length ? true : false }>next</button>
      </div>

      </div>
      <Footer />
    </div>
  )
}

export default dynamic (() => Promise.resolve(Products), {ssr: false})
