import styles from '../../styles/contactform.module.css'
import Image from 'next/image'
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useRouter } from 'next/router';

const contactus = () => {

  const { isAuthenticated } = useKindeBrowserClient();
  const formRef = useRef();
  const router = useRouter();
  const { id } = router.query;
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",       
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_w2imnxs',
        'template_nabwxkg',
        {
          from_name: form.name,
          to_name: "HyperglotArt",
          from_email: form.email,
          to_email: "operations@hyperglotreview.com",
          message: form.message,
        },
        'JIcpVPCi930caqp5b'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. We will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className={styles.container}>
      <div className={styles.imgcontainer}>
        <Image className={styles.img} src={"/formimg/2.jpg"} width={400} height={600} alt="image"/>
      </div>
      <div className={styles.formcontainer}>
        <form  ref={formRef}
          onSubmit={handleSubmit}
          className={styles.form}>
          <input  
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder='YOUR NAME'></input>
          <input 
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder='YOUR EMAIL'></input>
          <input placeholder='SUBJECT' type="text"></input>
          <textarea 
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder='YOUR MESSAGE' type="text"></textarea>
          {isAuthenticated ? <button className={styles.button}>{loading ? "Sending..." : "Send"}</button> : <LoginLink postLoginRedirectURL={'/ContactUs'} className={styles.buttonlink}>{loading ? "Sending..." : "Send"}</LoginLink>}
        </form>
      </div>
    </div>
  )
}

export default contactus