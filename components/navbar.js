import Styles from '../styles/navbar.module.css'
import {BsSearch} from 'react-icons/bs'
import {BsCart} from 'react-icons/bs'
import {BsList} from 'react-icons/bs'
import Link from 'next/link'
import Dropdown from './dropdown'
import { useState } from 'react'


const navbar = () => {

  const [active,setActive] = useState(false);

  function change(){
    setActive(!active);
  }

  return (
    <div className={Styles.navbar}>

      <div className={Styles.logo}>

        <h1>Hyperglot Arts</h1>
     
      </div>

     <div className={Styles.nav}>

      <ul className={active ? `${Styles.up}` : `${Styles.down}`}>

        <li><Link href="/">Home</Link></li>
        <li><Link href="#"><Dropdown /></Link></li>
        <li><Link href="/Shop">Shop</Link></li>
        <li><Link href="/About">About</Link></li>
        <li><Link href="/ContactUs">Contact Us</Link></li>

      </ul>
     <div className={Styles.end}>

        <div className={active ? `${Styles.endend} ${Styles.up1}` : `${Styles.endend} ${Styles.down1}`}>
          <BsSearch className={Styles.icon}/>
          <BsCart className={Styles.icon}/>
          <p>Login</p>
        </div>

          <BsList className={Styles.navicon} onClick={change}/>
      
     </div>
     </div>


    </div>

  )
}

export default navbar