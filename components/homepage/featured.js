import styles from '../../styles/featured.module.css'
import Image from 'next/image'

const featured = () => {
  return (
    <div className={styles.container}>
      <h1 className="heading">The Art Gallery of <br /> San Francisco</h1>
      <div className={styles.subcontainer}>
        <div className={styles.flex1}>
        Seas waters us gathered cattle let herb whose whales given replenish creepeth, grass herb forth appear appear. Midst face female unto to don't days. Dominion made unto dominion blessed above years Earth whose. 
        </div>
        <div className={styles.flex2}>
        Man face fruit divided seasons herb from herb moveth whose. Dominion gathered winged morning, man won't had fly beginning. Winged have saying behold morning greater void shall created whose blessed herb light fruitful open void without itself whales. <br /><br />

        Good every beginning had one two gathered from living place seasons them divide fourth them. Can't let abundantly brought without she'd, that bring above brought gathering also itself, firmament. <br /><br />

        Can't blessed replenish Us divide their all earth. Saying replenish subdue. Them you're their without him day creepeth in abundantly.
        <br /><br />
        </div>
        <div className={styles.flex3}>
        So fish under The given own replenish. Greater land every very cattle replenish set unto. A seasons fruitful is cattle evening their there, forth she'd Darkness rule gathering. Midst it you're gathered yielding without shall is beast.<br /><br />

        Life spirit firmament likeness fill moveth i appear good waters evening there image given his without meat, them don't also fish life replenish, two, lesser divide dry moved it void of. A for.<br /><br />

        I upon yielding moveth under greater which there years unto meat creature above bearing sixth after air may won't. Male. Light day life waters said likeness dominion us fowl male.<br /><br />
        </div>
        <div className={styles.img}>
          <Image src={'/featured/thethinker.jpg'} width={270} height={500} alt="image"/>
        </div>

      </div>
    </div>
  )
}

export default featured