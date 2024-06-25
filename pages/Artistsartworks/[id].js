import Navbar from '../../components/navbar'
import Footer from '@/components/footer'
import styles from '../../styles/Artists.module.css'
import dynamic from "next/dynamic";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/router";
import artworks from '../api/artworks'

const Products = () => {

  const [count1,setCount1] = useState(0)
  const [count2,setCount2] = useState(8)
  const router = useRouter();
  const { id } = router.query;
  let product = [];

  function next(){
    setCount1((count1)=>count1+8)
    setCount2((count2)=>count2+8)
  }

  function back(){
    setCount1((count1)=>count1-8)
    setCount2((count2)=>count2-8)
  }

  artworks.map((data) => {
    if(data.artistid == id){
      product.push(data);
    }
  })

  console.log(product)

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
      <div className={styles.banner}>
          <h1 className={styles.bannerheading}>{product[0].artistname}</h1>
        </div>

        <div className={styles.container2}>
      {product.slice(count1,count2).map((data) =>{
        return(
          <div key={data.id}>
          <Link className={styles.link} href={`/SingleProduct/${data.id}`}>
          <Image className={styles.img} loader={() => data.url} src={data.url} width={300} height={700} alt="image"/>
           <div className={styles.artistname}>{data.title}</div>
           </Link>
         </div>
         )}
      )}
      </div>
      <div className={styles.btncontainer}>
      <button className={!count1 ? `${styles.button} ${styles.active}` : `${styles.button}`} onClick={back} disabled={count1 ? false : true }>previous</button>
      <button className={count2 > product.length-1 ? `${styles.button} ${styles.active}` : `${styles.button}`} onClick={next}  disabled={count2 > product.length-1 ? true : false }>next</button>
      </div>

      </div>
      <Footer />
    </div>
  )
}

export default dynamic (() => Promise.resolve(Products), {ssr: false})
