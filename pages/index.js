import Head from 'next/head'
import { Inter } from 'next/font/google'
import Navbar from '../components/navbar'
import Hero from '../components/homepage/herocomponent'
import Events from '../components/homepage/events'
import Footer from '../components/footer'
import React from 'react';
import dynamic from "next/dynamic";
import data from './api/artdata'
import OurServices from '@/components/homepage/OurServices'
import ArtworksSlider from '@/components/homepage/ArtworksSlider'
import artworks from './api/artworks'
import StandOut from '@/components/homepage/StandOut'
import Subscriptions from '@/components/homepage/Subscriptions'
import Artists from '@/components/homepage/Artists'
// import SmoothScroll from '@/components/SmoothScroll/SmoothScroll.js'
import styles from '../styles/Home.module.css'
import Partners from '@/components/homepage/Partners'

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  
  return (
    <>
      <Head>
        <title>Hyperglot Art</title>
        <link rel="icon" href="/ico.ico" />
        <meta property="og:image" content="/ico.ico" />
        <link rel="apple-touch-icon" href="/ico.ico"/>
        <title>Your Website Title</title>
  <meta name="description" content="Hyperglot Solutions is a culmination of years of research and study to address a gap in the market to provide marketing and promotional services to artists who often are not able to get the required level of exposure and visibility due to certain economic and demographic constraints." />
  <meta name="keywords" content="hyperglot art, hyperglot, art, gallery, VR, AR, digital art" />
  <meta name="author" content="Hyperglot Art" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta charSet="UTF-8" />
  <meta property="og:title" content="Hyperglot Art" />
  <meta property="og:description" content="Hyperglot Solutions is a culmination of years of research and study to address a gap in the market to provide marketing and promotional services to artists who often are not able to get the required level of exposure and visibility due to certain economic and demographic constraints." />
  <meta property="og:image" content="https://www.hyperglotart.com/HA.jpeg" />
  <meta property="og:url" content="https://www.hyperglotart.com" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="Hyperglot Art" />
  <meta name="twitter:title" content="Hyperglot Art" />
  <meta name="twitter:description" content="Hyperglot Solutions is a culmination of years of research and study to address a gap in the market to provide marketing and promotional services to artists who often are not able to get the required level of exposure and visibility due to certain economic and demographic constraints." />
  <meta name="twitter:image" content="https://www.hyperglotart.com/HA.jpeg" />
  <link rel="canonical" href="https://www.hyperglotart.com" />
  <meta name="robots" content="index, follow" />
      </Head>      
      <main className={styles.mainpage}>
          <Navbar />
          <Hero />
          <OurServices />
          <ArtworksSlider artworks={artworks}/>
          <StandOut />
          {/* <Subscriptions /> */}
          <Artists data={data}/>
          <Partners />
          <Events />

          <Footer />
      </main>        
      
    </>
  )
}

export default dynamic (() => Promise.resolve(Home), {ssr: false})
