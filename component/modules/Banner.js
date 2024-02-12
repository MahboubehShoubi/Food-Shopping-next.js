import Link from 'next/link';
import styles from "./Banner.module.css";

const Banner = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h1>Food Online</h1>
                <h4>Food Delivery and Takeout!</h4>
                <p>BotoFood is an online food ordering and delivery platform launched by Uber in 2014. 
                Meals are delivered by couriers using cars, scooters, bikes, or on foot.</p>
                <Link href="/menu">See All</Link>
            </div>
            <div className={styles.right}>
                <img src='/image/banner.png' alt='banner' />
            </div>
            
        </div> 
    );
};

export default Banner;