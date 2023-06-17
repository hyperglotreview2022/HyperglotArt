import styles from '../../styles/productsgrid.module.css'
import Image from 'next/image'
import {BsCurrencyRupee} from 'react-icons/bs'
import { useEffect,useState } from 'react'

const productsgrid = () => {
  const[cards,setCards] = useState()

  const apiurl = "http://localhost:3000/api/artdata"
  let displayData;

  function pullJson() {
    fetch(apiurl)
    .then(res => res.json())
    .then(resdata => {
      displayData = resdata.map(function(art){
        return( 
          <div key={art.id} className={styles.card}>
            <Image className={styles.img} src={art.url} width={300} height={700}/>
            <div className={styles.name}>{art.name}</div>
            <div className={styles.transition}>
              <div className={styles.price}><BsCurrencyRupee />{art.price}</div>
              <div className={styles.add}>Add To Cart</div>
            </div>
          </div>)
         
      }) 
      setCards(displayData)
    })
  }

  useEffect(()=>{
    pullJson()
  },[])

  return (
    
    <div className={styles.container}>
    {cards}
    </div>
  );
}

export default productsgrid