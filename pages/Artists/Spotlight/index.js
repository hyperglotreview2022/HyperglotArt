import Navbar from '@/components/navbarforpages'
import Footer from '@/components/footer'
import styles from '../../../styles/Artists.module.css'
import dynamic from "next/dynamic";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import data from '../../api/artdata'
// import SmoothScroll from '@/components/SmoothScroll/SmoothScroll'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Products = () => {

  const [count1,setCount1] = useState(0)
  const [count2,setCount2] = useState(8)
  const [artdata,setArtdata] = useState(data) 
  // const [alphabet,setAlphabet] = useState('')
  // const alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

  function next(){
    setCount1((count1)=>count1+8)
    setCount2((count2)=>count2+8)
  }

  function back(){
    setCount1((count1)=>count1-8)
    setCount2((count2)=>count2-8)
  }

  useEffect(()=>{
    let result = data.filter(f=> f.artistcategory === 'Spotlight')
    setArtdata(result)
  },[])

  // function filter(){
  //   let result = data.filter(f=>f.name.toLowerCase().startsWith(alphabet))
  //   setArtdata(result)
  // }

  // function removefilter(){
  //   setArtdata(data)
  //   setAlphabet('')
  // }


  return (
    <div>
      <Navbar />
      {/* <SmoothScroll> */}
      <div className={styles.container}>
      <div className={styles.banner}>
          <h1 className={styles.bannerheading}>Spotlight</h1>
        </div>

        {/* <div className={styles.alphacontainer}>
          {alpha.map((data) => <div onClick={()=>{setAlphabet(data)}} id={data} className={alphabet === data ? `${styles.selected}`: `${styles.alpha}`}>{data}</div>)}
        </div> */}

        {/* <div className={styles.buttons}>
        <button onClick={removefilter} className={alphabet ? `${styles.filterbtn}` : `${styles.afilterbtn}`}>Remove Filter</button>
        <button onClick={filter} className={alphabet ? `${styles.filterbtn}` : `${styles.afilterbtn}`}>Apply Filter</button>
        </div> */}
        

        <div className={styles.container3}>
      {artdata.slice(count1,count2).map(data=> <div className={styles.card} key={data.id} >
          <Link className={styles.link} href={`/Artistsartworks/${data.id}`}>
          <Image className={styles.img} loader={() => data.url} src={data.url} width={300} height={700} alt="image"/>
           <div className={styles.artistname}>{data.name}</div>
           <div className={styles.profession}>Artist</div>
           </Link>
      </div>)}
      
      </div>
      <div className={styles.btncontainer}>
      <button className={!count1 ? `${styles.button} ${styles.active}` : `${styles.button}`} onClick={back} disabled={count1 ? false : true }><FaArrowLeft /></button>
      <button className={count2 > artdata.length-1 ? `${styles.button} ${styles.active}` : `${styles.button}`} onClick={next}  disabled={count2 > artdata.length-1 ? true : false }><FaArrowRight /></button>
      </div>

      </div>
      <Footer />
      {/* </SmoothScroll> */}
    </div>
  )
}

export default dynamic (() => Promise.resolve(Products), {ssr: false})