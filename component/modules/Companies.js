import styles from "./Companies.module.css";


// Icons
import Apple from "../icons/Apple";
import SpaceX from "../icons/SpaceX";
import Binance from "../icons/Binance";
import Tesla from "../icons/Tesla";

const Companies = () => {
    return (
        <div className={styles.container}>
            <Apple />
            <SpaceX />
            <Binance />
            <Tesla />
        </div>
    );
};

export default Companies;