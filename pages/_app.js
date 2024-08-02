import '@/styles/globals.css'
import "../styles/slick-theme.css"; 
import "../styles/slick.css";
import React, { Suspense } from 'react';
import Loading from './loading';

export default function App({ Component, pageProps }) {

  return (
    <>
      <Suspense fallback={<Loading />}>
        <React.Fragment>
          <Component {...pageProps} />
        </React.Fragment>
      </Suspense>
  </>
  )
}
