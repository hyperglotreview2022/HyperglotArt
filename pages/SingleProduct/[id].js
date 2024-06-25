import React from "react";
import Navbar from "@/components/navbar";
import Footer from '../../components/footer'
import styles from '../../styles/singleproduct.module.css'
import Slider from '../../components/singleproduct/slider'
import dynamic from "next/dynamic";
import Sidecontent from "@/components/singleproduct/sidecontent";
import Bottomcontent from "@/components/singleproduct/bottomcontent";
import { useRouter } from "next/router";
import artworks from '../api/artworks'

const singleProduct = () => {
  let product = []
  const router = useRouter();
  const { id } = router.query;

  artworks.map((data) => {
    if(data.id == id){
      product.push(data);
    }
  })

  return (
    <div>
    <Navbar />
      <div className={styles.container}>
        <div className={styles.flex}>
        <Slider data1={product}/>
        <Sidecontent data1={product}/>
        </div>
        <div>
          <Bottomcontent data2={artworks}/>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default dynamic (() => Promise.resolve(singleProduct), {ssr: false})