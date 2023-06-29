import Image from 'next/image'
import ArrowImage from '../../../public/arrow-right.png'
import MobileImage from '../../../public/mobile.png'
import Styles from '../../Styles/main.module.scss'

const Main = () => {
  return (
    <section className={Styles.main}>
      <div className={Styles.mainContainer}>
        <div className={Styles.mainContent}>
          <span className={Styles.mainIcon}>
            #1 Editiors Choice App of 2020
            <Image src={ArrowImage} alt='mainImage'/>
          </span>
          <h1 className={Styles.mainTitle}>
            Best app for your 
            <br />
            modern lifestyle
          </h1>
          <p className={Styles.mainDescription}>
            Increase productivity with a simple to-do app. app for 
            <br />
            managing your personal budgets.
          </p>
          <div className={Styles.mainButtonGroup}>
            <a className={Styles.mainButtonOne} href="#">Try for free</a>
            <a className={Styles.mainButtonTwo} href="#"> Watch demo video</a>
          </div>
        </div>
        <div className={Styles.mainImage}>
          <Image src={MobileImage} alt='mainImagePhone'/>
        </div>
      </div>
    </section>
  )
}

export default Main