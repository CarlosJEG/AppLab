import Navbar from './Navbar'
import Styles from '../../Styles/header.module.scss'

const Header = () => {
  return (
    <header className={Styles.header}>
      <div className={Styles.headerContainer}>
        <a href="#" className={Styles.headerLogo}>
          <div className={Styles.headerLogoTextOne}>App</div>
          <div className={Styles.headerLogoTextTwo}>Lab</div>
        </a>
        <Navbar/>
      </div>
    </header>
  )
}

export default Header