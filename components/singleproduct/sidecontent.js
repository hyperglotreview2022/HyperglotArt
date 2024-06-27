import React, { useState } from 'react'
import styles from '../../styles/singleproduct.module.css'
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useRouter } from 'next/router';
import emailjs from "@emailjs/browser";

const sidecontent = ({data1}) => {
  const { isAuthenticated, user } = useKindeBrowserClient();
  const [isactive, setIsactive] = useState(true);
  const [isactive2, setIsactive2] = useState(false)
  const router = useRouter();
  const { id } = router.query;

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_w2imnxs',
        'template_nabwxkg',
        {
          from_name: user.given_name+" "+user.family_name,
          to_name: "HyperglotArt",
          from_email: user.email,
          to_email: "operations@hyperglotreview.com",
          message: `${user.given_name} has requested a query for ${data1[0]?.title} by ${data1[0]?.artistname}`,
        },
        'JIcpVPCi930caqp5b'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. We will get back to you as soon as possible.");
          router.push("/")
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  function change(){
    setIsactive(!isactive);
    setIsactive2(!isactive2);
  }
  
  return (
  <div className={styles.sidecontainer}>
    <div className={styles.topcontainer}>
      <div className={styles.title}>{data1[0]?.title}</div>
      <div className={styles.artist}>Art by <span>{data1[0]?.artistname}</span></div>
      <div className={styles.price}>Price - <span>On Request</span>
      {/* Rs. {data1[0]?.price} */}
      </div>
    </div>
    <div className={styles.btncontainer}>
    {isAuthenticated ? <button onClick={handleSubmit} className={styles.btn}><span>{loading ? "Sending..." : "Buy"}</span></button> : <LoginLink postLoginRedirectURL={`/SingleProduct/${id}`} className={styles.btnlink}><span>Request Purchase</span></LoginLink>}
    </div>
    <div className={styles.bottomcontainer}>
      <div className={styles.btmcont}>
        <div className={isactive ? `${styles.topic} ${styles.active}` : styles.topic} onClick={change}>Details</div>
        <div className={isactive2 ? `${styles.topic} ${styles.active}` : styles.topic} onClick={change}>Description</div>
      </div>
      <div className={styles.btmbtm}>
      {isactive ? <div>
        <p><b>Size</b>: {data1[0]?.details[0]}</p>
        <p><b>Medium</b>: {data1[0]?.details[1]}</p>
        <p><b>Artwork</b>: {data1[0]?.details[2]}</p>
        {data1[0]?.details[3] && <p><b>Created in</b>: {data1[0]?.details[3]}</p>}
      </div> : <p>{data1[0]?.desc}</p>}
      </div>
    </div>
    </div>
  )
}

export default sidecontent