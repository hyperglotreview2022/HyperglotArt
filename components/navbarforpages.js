"use client"
import Styles from '../styles/navbar.module.css'
import {BsSearch} from 'react-icons/bs'
import {BsList} from 'react-icons/bs'
import Link from 'next/link'
import Dropdown from './dropdownforpages'
import Dropdown2 from './dropdown2forpages'
import Dropdown3 from './dropdown3forpages'
import { useEffect, useState } from 'react'
import artworks from '@/pages/api/artworks'
import Image from 'next/image'
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { FaUserCircle } from "react-icons/fa";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useRouter } from "next/router";

const navbar = () => {
  const { isAuthenticated, user } = useKindeBrowserClient();
  const [active,setActive] = useState(false);
  const [open,setOpen] = useState(false)
  const [searchinput, setSearchinput] = useState("")
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [colorChange, setColorchange] = useState(true);
  const router = useRouter();
  const { query } = router;

  console.log(query)

  let result = [];

  function change(){
    setActive(!active);
  }

  artworks.map((data)=>{
    if(data.title.toLowerCase().startsWith(searchinput) || data.artistname.toLowerCase().startsWith(searchinput)){
      result.push(data)
    }
  })

  const changeNavbarColor = () => {
    if (window.scrollY >= 1) {
        setColorchange(false);
    } else {
        setColorchange(true);
    }
  };

  const controlNavbar = () => {
    if (typeof window !== 'undefined') { 
      if (window.scrollY > lastScrollY && window.scrollY > 100) { // if scroll down hide the navbar
        setShow(false); 
      } else { // if scroll up show the navbar
        setShow(true);  
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY); 
    }
  };

  useEffect(() => {   
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      window.addEventListener('scroll', changeNavbarColor);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
        window.removeEventListener('scroll', changeNavbarColor);
      };
    }  

  }, [lastScrollY]);

  return (
    <div className={`${show ? Styles.navbar : Styles.none}`}>
    <div className={`${Styles.dark}`}>

    {open && <div onClick={()=>{[setOpen(false)],setSearchinput("")}} className={Styles.exit}/>}

      <div className={Styles.logo}>

        <h1>Hyperglot Art</h1>
     
      </div>

     <div className={Styles.nav}>

      <ul className={active ? `${Styles.up}` : `${Styles.down}`}>

        <li><Link href="/">Home</Link></li>
        <li><div className={Styles.hover}><Dropdown2 colorChange={colorChange}/></div></li>
        <li><div className={Styles.hover}><Dropdown3 colorChange={colorChange}/></div></li>
        <li><div className={Styles.hover}><Dropdown colorChange={colorChange}/></div></li>
        <li><Link href="/Subscriptions">Subscription</Link></li>
        <li><Link href="/VirtualGallery">Virtual Gallery</Link></li>
        <li><Link href="/Events">Events</Link></li>
        <li><Link href="/About">About</Link></li>
        <li><Link href="/ContactUs">Contact Us</Link></li>

      </ul>
     <div className={Styles.end}>

        <div className={active ? `${Styles.endend} ${Styles.up1}` : `${Styles.endend} ${Styles.down1}`}>
          <BsSearch onClick={()=>{setOpen(!open)}} className={Styles.icon}/>
          {/* {user ? <div>{user.given_name}</div> : <div className={Styles.logincont}>
            <LoginLink postLoginRedirectURL="/" className={Styles.login}>Sign In</LoginLink>
            <RegisterLink postLoginRedirectURL="/" className={Styles.login}>Sign Up</RegisterLink>
          </div>} */}

          {isAuthenticated ? <div className={Styles.usercont}>
            {user.picture ? <Image className={Styles.userimage} src={user.picture} width={50} height={50} alt="image"/> : <FaUserCircle className={Styles.userimage}/>}
            <div className={Styles.username}>Hi, {user.given_name}</div>
            <LogoutLink postLoginRedirectURL="/" className={Styles.logout}>Log Out</LogoutLink>
          </div> :<div className={Styles.logincont}>
          <LoginLink postLoginRedirectURL="/"><FaUserCircle className={Styles.mobileuser}/></LoginLink>
            <LoginLink postLoginRedirectURL="/" className={Styles.login}>Log In</LoginLink>
          </div>}
          

          {open && <div className={`${Styles.searchmodald}`}>
            <div className={Styles.inputcont}><BsSearch className={Styles.searchicon1}/><input
            value={searchinput}
            onChange={(e) => setSearchinput(e.target.value)}
            placeholder='Search'/></div>
            <div className={Styles.lists}>
            {result.length === artworks.length ? <div className={Styles.no}>No matching results</div> : result.map(data=><div className={Styles.no} key={data.id}>
            <Link href={`/SingleProduct/${data.id}`} className={Styles.link}>
            <div onClick={()=>{[setOpen(false),setSearchinput("")]}} className={Styles.searchedcont}>
              <div className={Styles.searchedtitle}>{data.title}</div>
              <div className={Styles.searchedname}>{data.artistname}</div>
            </div>
            </Link></div>)}
            </div>
          </div>}
        </div>
      
     </div>
     </div>

     <BsList className={Styles.navicon} onClick={change}/>

      
    </div>
    </div>

  )
}

export default navbar