import { useRouter } from "next/router";
import Navbar from "@/components/navbar";
import Footer from '../../components/footer'
import styles from '../../styles/genre.module.css'
import { BsCurrencyRupee } from 'react-icons/bs'
import Image from "next/image";
import dynamic from "next/dynamic";
import { useState } from "react";
import Link from "next/link";
import artworks from '../api/artworks'

const Genre = () => {

  let product = [];
  const [count1,setCount1] = useState(0);
  const [count2,setCount2] = useState(8);
  const [pricerange,setPricerange] = useState("none")
  const [sortorder,setSortorder] = useState("none")
  const [filteredarray, setFilteredarray] = useState();
  const router = useRouter();
  const { genre } = router.query;
  let newdata;

  console.log(sortorder,pricerange)

  function filter(){
    if(sortorder === 'low'){
      product.sort((a,b)=>{
        return a.price - b.price;
      })
      if(pricerange === 'none'){
        setFilteredarray(product)
      }
      if(pricerange === '1'){
        newdata = product.filter(data => data.price <= 40000)
        setFilteredarray(newdata)
      }
      if(pricerange === '2'){
        newdata = product.filter((data) => data.price <= 50000 && data.price > 40000)
        setFilteredarray(newdata)
      }
      if(pricerange === '3'){
        newdata = product.filter((data) => data.price <= 60000 && data.price > 50000)
        setFilteredarray(newdata)
      }
      if(pricerange === '4'){
        newdata = product.filter((data) => data.price <= 70000 && data.price> 60000)
        setFilteredarray(newdata)
      }
      if(pricerange === '5'){
        newdata = product.filter((data) => data.price <= 80000 && data.price > 70000)
        setFilteredarray(newdata)
      }
      if(pricerange === '6'){
        newdata = product.filter((data) => data.price <= 90000 && data.price > 80000)
        setFilteredarray(newdata)
      }
      if(pricerange === '7'){
        newdata = product.filter((data) => data.price > 90000 && data.price <= 100000)
        setFilteredarray(newdata)
      }
    } 
    if(sortorder === 'high'){
      product.sort((a,b)=>{
        return b.price - a.price;
      })
      if(pricerange === 'none'){
        setFilteredarray(product)
      }
      if(pricerange === '1'){
        newdata = product.filter(data => data.price <= 40000)
        setFilteredarray(newdata)
      }
      if(pricerange === '2'){
        newdata = product.filter((data) => data.price <= 50000 && data.price > 40000)
        setFilteredarray(newdata)
      }
      if(pricerange === '3'){
        newdata = product.filter((data) => data.price <= 60000 && data.price > 50000)
        setFilteredarray(newdata)
      }
      if(pricerange === '4'){
        newdata = product.filter((data) => data.price <= 70000 && data.price> 60000)
        setFilteredarray(newdata)
      }
      if(pricerange === '5'){
        newdata = product.filter((data) => data.price <= 80000 && data.price > 70000)
        setFilteredarray(newdata)
      }
      if(pricerange === '6'){
        newdata = product.filter((data) => data.price <= 90000 && data.price > 80000)
        setFilteredarray(newdata)
      }
      if(pricerange === '7'){
        newdata = product.filter((data) => data.price > 90000 && data.price <= 100000)
        setFilteredarray(newdata)
      }
    }
    if(sortorder === 'none'){
      product.sort((a,b)=>{
        return b.price - a.price;
      })
      if(pricerange === 'none'){
        setFilteredarray(product)
      }
      if(pricerange === '1'){
        newdata = product.filter(data => data.price <= 40000)
        setFilteredarray(newdata)
      }
      if(pricerange === '2'){
        newdata = product.filter((data) => data.price <= 50000 && data.price > 40000)
        setFilteredarray(newdata)
      }
      if(pricerange === '3'){
        newdata = product.filter((data) => data.price <= 60000 && data.price > 50000)
        setFilteredarray(newdata)
      }
      if(pricerange === '4'){
        newdata = product.filter((data) => data.price <= 70000 && data.price> 60000)
        setFilteredarray(newdata)
      }
      if(pricerange === '5'){
        newdata = product.filter((data) => data.price <= 80000 && data.price > 70000)
        setFilteredarray(newdata)
      }
      if(pricerange === '6'){
        newdata = product.filter((data) => data.price <= 90000 && data.price > 80000)
        setFilteredarray(newdata)
      }
      if(pricerange === '7'){
        newdata = product.filter((data) => data.price > 90000 && data.price <= 100000)
        setFilteredarray(newdata)
      }
    }
  }

  

  function next(){
    setCount1((count1)=>count1+8)
    setCount2((count2)=>count2+8)
  }

  function back(){
    setCount1((count1)=>count1-8)
    setCount2((count2)=>count2-8)
  }

artworks.map((data) => {
    if(data.medium == genre){
      product.push(data);
    }
  })

  function settdefault(){
    setFilteredarray();
    setSortorder("none");
    setPricerange("none")
  }

  return(
    <>
    <Navbar/>
      <div className={styles.container}>
        <div className={styles.banner}>
          <h1 className={styles.bannerheading}>{genre}</h1>
        </div>
        <div className={styles.sp}>

        <div className={styles.filtertopics}>Filter by Price:</div>
        <div className={styles.options}>
        <select className={styles.options2} defaultValue={pricerange} value={pricerange} onChange={(e) => {setPricerange(e.target.value)}}>
        <option value="none">none</option>
          <option value="1">Below 40,000</option>
          <option value="2">40,000-50,000</option>
          <option value="3">50,000-60,000</option>
          <option value="4">60,000-70,000</option>
          <option value="5">70,000-80,000</option>
          <option value="6">80,000-90,000</option>
          <option value="7">90,000-1,00,000</option>
        </select>
        </div>

        <div className={styles.filtertopics}>Sort by Price:</div>
        <div className={styles.options}>
        <select className={styles.options1} defaultValue={sortorder} value={sortorder} onChange={event => {setSortorder(event.target.value)}}>
          <option value="none">none</option>
          <option value="low">lower to higher</option>
          <option value="high">higher to lower</option>
        </select>
        </div>

        </div>

        <div className={styles.buttons}>
        <button onClick={settdefault} className={styles.filterbtn}>Remove Filter</button>
        <button onClick={filter} className={styles.filterbtn}>Apply Filter</button>
        </div>
        <div className={styles.subcontainer}>
{filteredarray ? filteredarray.map(item=><div key={item.id}>
        <div className={styles.card}>
        <Link className={styles.link} href={`/SingleProduct/${item.id}`}>
        <Image className={styles.img} loader={() => item.url} src={item.url} width={300} height={700} alt="image"/>
      <div className={styles.name}>{item.title}</div>
      <div className={styles.transition}>
        <div className={styles.price}><BsCurrencyRupee />{item.price}</div>
        <div className={styles.add}>Add To Cart</div>
      </div>
      </Link>
    </div>
    </div>) : product.map(item=><div key={item.id}>
        <div className={styles.card}>
        <Link className={styles.link} href={`/SingleProduct/${item.id}`}>
        <Image className={styles.img} loader={() => item.url} src={item.url} width={300} height={700} alt="image"/>
      <div className={styles.name}>{item.title}</div>
      <div className={styles.transition}>
        <div className={styles.price}><BsCurrencyRupee />{item.price}</div>
        <div className={styles.add}>Add To Cart</div>
      </div>
      </Link>
    </div>
    </div>)}
      

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

export default dynamic (() => Promise.resolve(Genre), {ssr: false})