import Image from "next/image";
import styles from '../../styles/singleproduct.module.css'
import { useState } from "react";

const slider = ({data1}) => {

  const [selectedImg, setSelectedImg] = useState(0);
   
    return (
      <div>
      <div className={styles.mainImagecont}>
        <Image
        className={styles.mainImage}
        loader={() => data1[0].images[selectedImg]}
        unoptimized={true}
                src={data1[0]?.images[selectedImg]}
                width={300} 
                height={400}
                alt="image"
              />
                      {/* <Image
        className={styles.mainImage}
        loader={() => data1.url}
        unoptimized={true}
                src={data1?.[selectedImg]?.data?.attributes?.url}
                width={300} 
                height={400}
                alt="image"
              /> */}
      </div>

      <div className={styles.imagecont}>
       <Image
      className={styles.image}
       loader={() => data1[0].images[0]}
       unoptimized={true}
                src={data1[0]?.images[0]}
                width={300} 
                height={400}
                alt="image"
                onClick={(e) => setSelectedImg(0)}
              />
      <Image
      className={styles.image}
       loader={() => data1[0].images[1]}
       unoptimized={true}
                src={data1[0]?.images[1]}
                width={300} 
                height={400}
                alt="image"
                onClick={(e) => setSelectedImg(1)}
              /> 
      <Image
      className={styles.image}
       loader={() => data1[0].images[2]}
       unoptimized={true}
                src={data1[0]?.images[2]}
                width={300} 
                height={400}
                alt="image"
                onClick={(e) => setSelectedImg(2)}
              />
      <Image
      className={styles.image}
       loader={() => data1[0].images[3]}
       unoptimized={true}
                src={data1[0]?.images[3]}
                width={300} 
                height={400}
                alt="image"
                onClick={(e) => setSelectedImg(3)}
              />
      </div>
       
      </div>
    );
}
  

export default slider;