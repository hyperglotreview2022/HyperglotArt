import styles from '../../styles/productsgrid.module.css'
import dynamic from "next/dynamic";

const productsgrid = ({product}) => {

  return (

    <div>
      {product.map = (data) =>{
        return (
          <h1 className={styles.name}>{data.attributes.title}</h1>
        )
        
      }}
    </div>
    
    // <div className={styles.container}>
    // {product.map = (art) => {
    //  return( 
      // <div key={art.id} className={styles.card}>
      //    {/* <Image className={styles.img} src={art.attributes.url} width={300} height={700} alt="image"/> */}
      //  <div className={styles.name}>{art.attributes.title}</div>
      //   <div className={styles.transition}>
      //     <div className={styles.price}><BsCurrencyRupee />{art.attributes.price}</div>
      //   <div className={styles.add}>Add To Cart</div>
      //    </div>
      // </div>
    //   )   
    // }}
    // {/* {cards} */}
    // </div>
  );
}

export default dynamic (() => Promise.resolve(productsgrid), {ssr: false})