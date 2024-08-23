import React from 'react';
import styles from "../../styles/newloader.module.css"; // Import your CSS module

const PercentageLoader = ({ percentage }) => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}>
        <div
          className={styles.loaderFill}
          style={{ height: `${percentage}%` }} // Control the height based on percentage
        ></div>
        <div className={styles.percentageText}>{percentage}%</div>
      </div>
    </div>
  );
};

export default PercentageLoader;



// import React from 'react'
// import styles from '../../styles/VG.module.css'
// import Image from 'next/image'

// export default function () {
//   return (
//     <div className={styles.loadingcontainer}>
//         <Image className={styles.loader} src={'/logo/loader.svg'} width={500} height={500} alt='loading'/>
//     </div>
//   )
// }
