import React from 'react'
import Navbar from "@/components/navbarforpages";
import Footer from '@/components/footer'
import dynamic from 'next/dynamic';
import styles from '../../styles/eventspage.module.css'
import Image from 'next/image';

const index = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
          <h1 className={styles.heading}>Event Name</h1>
      <div className={styles.firstflex}>
        <div>Sed augue lacus viverra vitae congue eu. Sit amet nulla facilisi morbi tempus iaculis urna id. Diam maecenas ultricies mi eget. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Tortor pretium viverra suspendisse potenti. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. Placerat in egestas erat imperdiet sed euismod. Sed euismod nisi porta lorem mollis aliquam ut. Congue quisque egestas diam in arcu cursus euismod quis viverra. Accumsan sit amet nulla facilisi morbi tempus iaculis urna. Sodales neque sodales ut etiam sit amet. Nulla facilisi etiam dignissim diam quis. Ut placerat orci nulla pellentesque dignissim enim sit amet venenatis. Massa eget egestas purus viverra accumsan in. Integer enim neque volutpat ac. Id donec ultrices tincidunt arcu non. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue. Aliquet porttitor lacus luctus accumsan tortor posuere. Ac odio tempor orci dapibus ultrices in.</div>
        <div>
          <Image src={'/servicesimages/services (6).jpg'} className={styles.img5} width={1200} height={1200} alt='image' />
        </div>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default dynamic (() => Promise.resolve(index), {ssr: false})
