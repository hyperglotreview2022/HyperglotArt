import '@/styles/globals.css'
import "../styles/slick-theme.css"; 
import "../styles/slick.css";
import React from 'react';

export default function App({ Component, pageProps }) {


  return (
    <>
      <React.Fragment>
        <Component {...pageProps} />
      </React.Fragment>
  </>

  )
}
