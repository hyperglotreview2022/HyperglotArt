import Image from "next/image";
import styles from '../../styles/singleproduct.module.css'
import { useState } from "react";

const slider = ({data1}) => {

  const [selectedImg, setSelectedImg] = useState("img1");
   
    return (
      <div>
      <div className={styles.mainImagecont}>
        <Image
        className={styles.mainImage}
        loader={() => data1?.[selectedImg]?.data?.attributes?.url}
        unoptimized={true}
                src={data1?.[selectedImg]?.data?.attributes?.url}
                width={300} 
                height={400}
                alt="image"
              />
      </div>

      <div className={styles.imagecont}>
       <Image
      className={styles.image}
       loader={() => data1?.img1?.data?.attributes?.url}
       unoptimized={true}
                src={data1?.img1?.data?.attributes?.url}
                width={300} 
                height={400}
                alt="image"
                onClick={(e) => setSelectedImg("img1")}
              />
      <Image
      className={styles.image}
       loader={() => data1?.img2?.data?.attributes?.url}
       unoptimized={true}
                src={data1?.img2?.data?.attributes?.url}
                width={300} 
                height={400}
                alt="image"
                onClick={(e) => setSelectedImg("img2")}
              /> 
      <Image
      className={styles.image}
       loader={() => data1?.img3?.data?.attributes?.url}
       unoptimized={true}
                src={data1?.img3?.data?.attributes?.url}
                width={300} 
                height={400}
                alt="image"
                onClick={(e) => setSelectedImg("img3")}
              />
      <Image
      className={styles.image}
       loader={() => data1?.img4?.data?.attributes?.url}
       unoptimized={true}
                src={data1?.img4?.data?.attributes?.url}
                width={300} 
                height={400}
                alt="image"
                onClick={(e) => setSelectedImg("img4")}
              />
      </div>
       
      </div>
    );
}
  

export default slider;