import Navbar from '../../components/navbarforpages'
import Footer from '@/components/footer'
import styles from '../../styles/Artists.module.css'
import dynamic from "next/dynamic";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/router";
import artworks from '../api/artworks';
import artist from '../api/artdata'
import SmoothScroll from '@/components/SmoothScroll/SmoothScroll'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

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
      <SmoothScroll>
      <div className={styles.container}>
      <div className={styles.banner}>
          <h1 className={styles.bannerheading}>{product[0].artistname}</h1>
        </div>

        
        <div className={styles.artistsdescont}>
          <div>
            <Image src={artist[id-1].url} className={styles.img} width={500} height={500} alt="image"/>
          </div>
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </div>
        <div className={styles.bannerheading1}>Artworks</div>
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
      <button className={!count1 ? `${styles.button} ${styles.active}` : `${styles.button}`} onClick={back} disabled={count1 ? false : true }><FaArrowLeft /></button>
      <button className={count2 > product.length-1 ? `${styles.button} ${styles.active}` : `${styles.button}`} onClick={next}  disabled={count2 > product.length-1 ? true : false }><FaArrowRight /></button>
      </div>

      </div>
      <Footer />
      </SmoothScroll>
    </div>
  )
}

export default dynamic (() => Promise.resolve(Products), {ssr: false})
