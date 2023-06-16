import {BsChevronDoubleDown} from 'react-icons/Bs'
import styles from '../../styles/herobtn.module.css'

const herobutton = () => {

  const scrollto = () =>{
    window.scrollTo({
      top: 900, 
      behavior: 'smooth'
    });
  };

  return (
    <div onClick={scrollto}>
      <div className={styles.border}>
        <BsChevronDoubleDown />
      </div>
    </div>
  )
}

export default herobutton