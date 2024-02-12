import styles from "./DetailsPage.module.css";

// Icons
import Location from "../icons/Location";
import Dollar from "../icons/Dollar";

const DetailsPage = (props) => {

    const { id , name , price ,discount ,
         introduction , details , ingredients , recipe } = props;


    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Details</h1>
            <div className={styles.header}>
                <img src={`/image/${id}.jpeg`} alt={name} />
                <div className={styles.headerRight}>
                    <h3 className={styles.foodName}>{name}</h3>
                    <div className={styles.Location}>
                        <Location />
                        <span>{details[0].Cuisine}</span>
                    </div>
                    <div className={styles.price}>
                        <Dollar />
                        <span>{discount ? (price * (100 - discount) / 100) : price }$</span>
                    </div>
                    {discount ? <span className={styles.discount}>{discount}%  OFF</span> : null } 
                    
                </div>
            </div>


            {/* ------------------------introduction ---------------- */}
            <div className={styles.introduction}>
                <p>{introduction}</p>
            </div>

            {/* ------------------------- Details --------------------- */}
            <div className={styles.details}>
                <h2 className={styles.subTitle}>Details</h2>
                <ul>
                    {details.map((detail , index) => (
                        <li key={index}>
                            <p>{Object.keys(detail)[0]}: </p>
                            <span>{Object.values(detail)[0]}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* ---------------------- Ingredients ----------------------- */}

            <div className={styles.ingredients}>
                <h2 className={styles.subTitle}>Ingredients</h2>
                <ul>
                    {ingredients.map((item , index) =>(<li key={index}>{item}</li>) )}
                </ul>
            </div>

            {/* ------------------------- Recipe ------------------------ */}

            <div className={styles.recipe}>
               <h2 className={styles.subTitle}>Recipe</h2>

               {recipe.map((item , index) =>(
                 <div key={index} className={index % 2 ? styles.odd : styles.even} >
                    <span>{index + 1}: </span>
                    <p>{item}</p>
                 </div>
                ))}
            </div>

            {/* ----------------- Add to Cart ------------- */}
            <button>Add To Cart</button>
        </div>
    );
};

export default DetailsPage;