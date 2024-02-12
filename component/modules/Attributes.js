import styles from "./Attributes.module.css";

// Icons
import Fast from "../icons/Fast";
import Food from "../icons/Food";
import Choice from "../icons/Choice";
import Clock from "../icons/Clock";

const Attributes = () => {
    return (
        <div className={styles.container}>
            <h2>Why us?</h2>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <Fast />
                    <span>Fast</span>
                </div>
                <div className={styles.card}>
                    <Food />
                    <span>Fast</span>
                </div>
                <div className={styles.card}>
                    <Choice />
                    <span>Fast</span>
                </div>
                <div className={styles.card}>
                    <Clock />
                    <span>Fast</span>
                </div>
            </div>
        </div>
    );
};

export default Attributes;