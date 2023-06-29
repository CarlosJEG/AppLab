import Styles from '../../Styles/header.module.scss'

const Navbar = () => {
  return (
    <nav className={Styles.navbarContainer}>
      <ul className={Styles.navbarGroup}>
        <li className={Styles.navbarItem}>
          <a className={Styles.navbarLink} href="#">Home</a>
        </li>
        <li className={Styles.navbarItem}>
          <a className={Styles.navbarLink} href="#">Key</a>
        </li>
        <li className={Styles.navbarItem}>
          <a className={Styles.navbarLink} href="#">Features</a>
        </li>
        <li className={Styles.navbarItem}>
          <a className={Styles.navbarLink} href="#">Pricing</a>
        </li>
        <li className={Styles.navbarItem}>
          <a className={Styles.navbarLink} href="#">Testimonial</a>
        </li>
        <li className={Styles.navbarItem}>
          <a className={Styles.navbarLink} href="#">FAQ</a>
        </li>
      </ul>
      <button className={Styles.navbarBtn}>Try for free</button>
    </nav>
  )
}

export default Navbar