import React from "react";
import Navbar from "@/components/navbarforpages";
import Footer from '../../components/footer'
import styles from '../../styles/singleproduct.module.css'
import Slider from '../../components/singleproduct/slider'
import dynamic from "next/dynamic";
import Sidecontent from "@/components/singleproduct/sidecontent";
import { useRouter } from "next/router";
import artworks from '../api/artworks'
// import SmoothScroll from '@/components/SmoothScroll/SmoothScroll'
import SinglePageSlider from '../../components/homepage/SinglePageSlider'

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
    {/* <SmoothScroll> */}
      <div className={styles.container}>
        <div className={styles.flex}>
        <Slider data1={product}/>
        <Sidecontent data1={product}/>
        </div>
        <div className={styles.heading5}>You May Also Like</div>
        <div>
          <SinglePageSlider artworks={artworks}/>
        </div>
      </div>
      <Footer />
      {/* </SmoothScroll> */}
    </div>
  )
}

export default dynamic (() => Promise.resolve(singleProduct), {ssr: false})