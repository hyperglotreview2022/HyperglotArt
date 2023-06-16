import Styles from '../styles/navbar.module.css'
import {BsSearch} from 'react-icons/Bs'
import {BsCart} from 'react-icons/Bs'
import Link from 'next/link'
import Dropdown from './dropdown'


const navbar = () => {

  return (
    <div className={Styles.navbar}>

      <div className={Styles.logo}>

        <h1>Hyperglot Arts</h1>
     
      </div>

     <div className={Styles.nav}>

      <ul>

        <li><Link href="/">Home</Link></li>
        <li><Link href="#"><Dropdown /></Link></li>
        <li><Link href="/Shop">Shop</Link></li>
        <li><Link href="/About">About</Link></li>
        <li><Link href="/ContactUs">Contact Us</Link></li>

      </ul>
     <div>

        <div className={Styles.end}>

          <BsSearch className={Styles.icon}/>
          <BsCart className={Styles.icon}/>
          <p>Login</p>

        </div>
      
     </div>
     </div>


    </div>

  )
}

export default navbar