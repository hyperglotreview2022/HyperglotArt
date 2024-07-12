import '@/styles/globals.css'
import "../styles/slick-theme.css"; 
import "../styles/slick.css";
import React from 'react';
import Loading from './loading'

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => setLoading(true), 3000);
  }, []);

  return (
    <>
      {/* {loading ? (
        <React.Fragment>
          <Component {...pageProps} />
        </React.Fragment>
      ) : (
        <Loading />
      )} */}
      <React.Fragment>
          <Component {...pageProps} />
        </React.Fragment>
  </>
  )
}
