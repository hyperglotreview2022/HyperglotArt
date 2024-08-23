import styles from '../../styles/hero.module.css'
import { useEffect, useState } from "react";


const herocomponent = () => {
  const [width, setwidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setwidth(window.innerWidth);
    };

    // Add event listener to handle window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 
  return (
    <div className={styles.herosection}>
    <div className={styles.cover}>
      <div className={styles.flex}>
        <div className={styles.top}>Art belongs to everyone</div>
        <div className={styles.btm}>Bring home an exquisite work of art</div>
      </div>
    </div>
      <video className={styles.video} 
      // controls 
      src={width < 800 ? "/herovideo/mobvideo (1).mp4" : "/herovideo/herovideo.mp4"} 
      autoPlay 
      // playsInline 
      loop muted preload="auto">
      </video>
    </div>
  )
}

export default herocomponent