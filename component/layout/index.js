import styles from "./Layout.module.css";
import Link from "next/link";

const Layout = ({children}) => {
    return (
        <div className={styles.container}>
            <header className={styles.headerContainer}>
                <div className={styles.headerLeft}>
                    <Link href='/'>
                    <img src="/image/food-logo.png" alt="logo"/>
                    </Link>
                </div>
                <div className={styles.headerRight}>
                    <Link href="/menu">
                        <span>Menu</span>
                    </Link>
                    <Link href="/categories">
                        <span>Categories</span>
                    </Link>
                </div>
            </header>


            <div className={styles.children}>{children}</div>


            <footer className={styles.footer}>
                <span>Online food ordering site | </span>
                <span>Developer: <span className={styles.nameDeveloper}>M.shoubi</span> &copy;</span>

            </footer>
        </div>
    );
};

export default Layout;