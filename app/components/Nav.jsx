import styles from "@/app/styles/navbar.module.css"
import Link from "next/link"
const Nav = () => {
  return (
    <nav className={styles.navber}>
        <div className="">
            <ul className={styles.navbarList}>
                <li className={styles.navbarItem}>
                    <Link href="/" >
                    Home
                    </Link>
                </li>
                <li className={styles.navbarItem}>
                    <Link href="/about" >
                    About
                    </Link>
                </li>
                <li className={styles.navbarItem}>
                    <Link href="/movie" >
                    Movies
                    </Link>
                </li>
                <li className={styles.navbarItem}>
                    <Link href="/contact" >
                    Contact
                    </Link>
                </li>

            </ul>
        </div>
    </nav>
  )
}

export default Nav
