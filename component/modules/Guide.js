import Link from "next/link";
import styles from "./Guide.module.css";


const Guide = () => {
    return (
        <div className={styles.container}>
            <Link className={styles.card} href="/menu">Menu</Link>
            <Link className={styles.card} href="categories">Categories</Link>
            <Link className={styles.card} href="/">Home</Link>    
        </div>
    );
};

export default Guide;