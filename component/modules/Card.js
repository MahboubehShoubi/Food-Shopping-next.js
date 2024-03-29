import styles from "./Card.module.css";

// Icons
import Location from "../icons/Location";
import Dollar from "../icons/Dollar";
import Link from "next/link";

const Card = (props) => {
    const {id , name , price , details , discount } = props;
    return (
        <div className={styles.container}>
            <Link href={`/menu/${id}`} >
                <img src={`/image/${id}.jpeg`} />
            </Link>
            <div className={styles.details}>
                <h4>{name}</h4>
                <div className={styles.location}>
                    <Location />
                    <span>{details[0].Cuisine}</span>
                </div>
            </div>
            <div className={styles.price}>
                <Dollar />
                <span>{price}$</span>
            </div>
            <Link href={`/menu/${id}`} >
                <button className={styles.detailBtn}>See Details</button>
            </Link>
                {
                  discount ? <span className={styles.discount}>{discount} %</span> : null
                }
        </div>
    );
};

export default Card;