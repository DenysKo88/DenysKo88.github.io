
import styles from './thanks.module.scss';
import sich from './sich.jpg';

export const Thanks = () => {
    return (
        <div className={styles.thanks}>
            <img src={sich} alt="sich" className={styles.thanks_img} />
            <div className={styles.title}>Дякуємо за замовлення!</div>
        </div>

    );
}