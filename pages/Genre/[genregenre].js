import { useRouter } from "next/router";
import Navbar from "@/components/navbar";
import Footer from '../../components/footer'
import styles from '../../styles/genre.module.css'
import { BsCurrencyRupee } from 'react-icons/bs'
import Image from "next/image";
import dynamic from "next/dynamic";
import { useState,useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const GenreGenre = () => {

  const[product,setProduct] = useState([]);
  const [count1,setCount1] = useState(0);
  const [count2,setCount2] = useState(8);
  const [value1, setValue1] = useState('none');
  const [value2, setValue2] = useState('none');
  const [filteredarray, setFilteredarray] = useState([]);
  let newProduct = [];

  console.log(product)

  function handleChange(event){
    setValue1(event.target.value);
    pricesortCheck(event);
  }

  function handleChange2(e){
    setValue2(e.target.value);
    pricefliter(e);
  }

  function pricefliter(e){
    if(e.target.value === '1'){
      let newdata = product.filter(data => data.attributes.price <= 40000)
      setFilteredarray(newdata)
    }
    if(e.target.value === '2'){
      let newdata = product.filter((data) => data.attributes.price <= 50000 && data.attributes.price > 40000)
      setFilteredarray(newdata)
    }
    if(e.target.value === '3'){
      let newdata = product.filter((data) => data.attributes.price <= 60000 && data.attributes.price > 50000)
      setFilteredarray(newdata)
    }
    if(e.target.value === '4'){
      let newdata = product.filter((data) => data.attributes.price <= 70000 && data.attributes.price > 60000)
      setFilteredarray(newdata)
    }
    if(e.target.value === '5'){
      let newdata = product.filter((data) => data.attributes.price <= 80000 && data.attributes.price > 70000)
      setFilteredarray(newdata)
    }
    if(e.target.value === '6'){
      let newdata = product.filter((data) => data.attributes.price <= 90000 && data.attributes.price > 80000)
      setFilteredarray(newdata)
    }
    if(e.target.value === '7'){
      let newdata = product.filter((data) => data.attributes.price > 90000 && data.attributes.price <= 100000)
      setFilteredarray(newdata)
    }
  }

  function pricesortCheck(event){
    if(event.target.value == 'low'){
      ascendingpriceSort()
    }
    else
    if(event.target.value == 'high'){
      descendingpriceSort()
    }
  }

  function ascendingpriceSort(){
    (filteredarray.length === 0 ? product : filteredarray).sort((a, b) => {
        return a.attributes.price - b.attributes.price;
      });
  }

  function descendingpriceSort(){
    (filteredarray.length === 0 ? product : filteredarray).sort((a, b) => {
      return b.attributes.price - a.attributes.price;
    });
}

product.forEach((data) => {
  newProduct.push(data);
})

  function next(){
    setCount1((count1)=>count1+8)
    setCount2((count2)=>count2+8)
  }

  function back(){
    setCount1((count1)=>count1-8)
    setCount2((count2)=>count2-8)
  }
  const router = useRouter();
  const { genregenre } = router.query;

  useEffect(() => {
      const fetchData = async() => {
    try{
      const res = await axios.get(process.env.NEXT_PUBLIC_URL+"/products?populate=*", {
       headers: {
        Authorization: "bearer "+process.env.NEXT_PUBLIC_TOKEN,
      } 
      });
      setProduct(res.data.data);
    } catch(err) {
      console.log(err);
    }
  };
  fetchData();
  }, []);

  return(
    <>
    <Navbar />
      <div className={styles.container}>
        <div className={styles.banner}>
          {/* <p className={styles.bannertext}>Modern Art</p> */}
          <h1 className={styles.bannerheading}>{genregenre}</h1>
          {/* <p className={styles.bannertext}>Cut from light and fluid mushroom.</p> */}
        </div>
        <div className={styles.sp}>
        <div>filter by Price:</div>
        <select className={styles.options2} defaultValue={value2} onChange={e => handleChange2(e)}>
        <option value="none">none</option>
          <option value="1">Below 40,000</option>
          <option value="2">40,000-50,000</option>
          <option value="3">50,000-60,000</option>
          <option value="4">60,000-70,000</option>
          <option value="5">70,000-80,000</option>
          <option value="6">80,000-90,000</option>
          <option value="7">90,000-1,00,000</option>
        </select>
        <div>Sort by Price:</div>
        <select className={styles.options1} defaultValue={value1} onChange={event => handleChange(event)}>
          <option value="none">none</option>
          <option value="low">lower to higher</option>
          <option value="high">higher to lower</option>
        </select>
        </div>
        <div className={styles.subcontainer}>
        {(filteredarray.length === 0 ? newProduct : filteredarray).slice(count1,count2).map(function (item) {
        if (item.attributes.genres.data[0].attributes.title === genregenre) {
          return (
            <div>
        <div key={item.id} className={styles.card}>
        <Link className={styles.link} href={`/SingleProduct/${item.id}`}>
        <Image className={styles.img} loader={() => item.attributes.img1.data.attributes.url} src={item.attributes.img1.data.attributes.url} width={300} height={700} alt="image"/>
      <div className={styles.name}>{item.attributes.title}</div>
      <div className={styles.transition}>
        <div className={styles.price}><BsCurrencyRupee />{item.attributes.price}</div>
        <div className={styles.add}>Add To Cart</div>
      </div>
      </Link>
    </div>
    </div>
          );
        }
      })}

        </div>
        <div className={styles.btncontainer}>
      <button className={!count1 ? `${styles.button} ${styles.active}` : `${styles.button}`} onClick={back} disabled={count1 ? false : true }>previous</button>
      <button className={count2 > product.length ? `${styles.button} ${styles.active}` : `${styles.button}`} onClick={next}  disabled={count2 > product.length ? true : false }>next</button>
      </div>
      </div>
      <Footer />
    </>
  )
}

export default dynamic (() => Promise.resolve(GenreGenre), {ssr: false})