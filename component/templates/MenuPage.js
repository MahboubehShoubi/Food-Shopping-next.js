import styles from "./MenuPage.module.css";

// Component
import Card from "../modules/Card";


const menu = ({data}) => {
    
    return (
        <div className={styles.container}>
            <h1>Menu </h1>
            <div className={styles.subContainer}>
                {
                    data.map(food => (<Card key={food.id} {...food} />))
                    
                }
            </div>
        </div>
    );
};

export default menu;
