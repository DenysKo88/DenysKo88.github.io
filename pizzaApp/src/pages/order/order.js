import { Button } from '../../components/buttons/buttons';
import styles from './order.module.scss';
import pizza from './pizza.jpg';


export const Order = (props) => {
    const {getTotalPrice, cart, handleConfirm} = props;
    return (
      <div className={styles.order}>
        <img src={pizza} alt="pizza" className={styles.order_img} />
        <div className={styles.order_title}>Ваша піца: {getTotalPrice} UAH</div>
        <ul className={styles.order_content}>
          {cart.map((product) => (
            <li className={styles.order_item}>
              {product.name} - {product.quantity}
            </li>
          ))}
        </ul>
        <Button variant=" btn btn-primary" onClick={handleConfirm} text="Go!" />
      </div>
    );
}