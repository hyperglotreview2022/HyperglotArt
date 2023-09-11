import React from "react";
import Navbar from "@/components/navbar";
import Footer from '../../components/footer'
import styles from '../../styles/singleproduct.module.css'
import Slider from '../../components/singleproduct/slider'
import dynamic from "next/dynamic";
import Sidecontent from "@/components/singleproduct/sidecontent";
import Bottomcontent from "@/components/singleproduct/bottomcontent";

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/products`, {
    headers: {
     Authorization: "bearer "+process.env.NEXT_PUBLIC_TOKEN,
   } 
   });
  const items = await res.json();
  const paths = items.data.map(item =>{
    return{
      params:{
        id : item.id.toString(),
      } 
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const [res1,res2] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_URL}/products/${id}?populate=*`, {
          headers: {
           Authorization: "bearer "+process.env.NEXT_PUBLIC_TOKEN,
         } 
         }),
    fetch(`${process.env.NEXT_PUBLIC_URL}/products?populate=*`, {
          headers: {
           Authorization: "bearer "+process.env.NEXT_PUBLIC_TOKEN,
         } 
         }),
        ]);
  const [data1,data2] = await Promise.all([
    res1.json(),
    res2.json(),
  ])
  console.log(data1.data.attributes)

    return {
    props: {
      data1:data1.data.attributes,
      data2:data2.data,
    },
  };
};

const singleProduct = ({data1,data2}) => {


  return (
    <div>
    <Navbar />
      <div className={styles.container}>
        <div className={styles.flex}>
        <Slider data1={data1}/>
        <Sidecontent data1={data1}/>
        </div>
        <div>
          <Bottomcontent data2={data2}/>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default dynamic (() => Promise.resolve(singleProduct), {ssr: false})