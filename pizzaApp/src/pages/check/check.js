
import { Button } from '../../components/buttons/buttons';
import { Link } from 'react-router-dom';

export const Check = ({ cart, onButtonClick, getTotalPrice, handleConfirmPayment }) => {

    return (
      <table className="table table-success table-hover">
        <thead>
          <tr>
            <th scope="col">Інгредієнт</th>
            <th scope="col">Вартість</th>
            <th scope="col">К-сть</th>
            <th scope="col">Ціна</th>
            <th scope="col">+/-</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>{product.price * product.quantity}</td>
              <td>
                {product.id !== 1 && (
                  <Button
                    text={"-"}
                    variant="outline-danger"
                    onClick={() => onButtonClick(product)}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
        <Button
          variant="btn btn-primary"
          onClick={handleConfirmPayment}
          text={`Замовити ${getTotalPrice()} UAH`}
        ></Button>
        <Button
          variant="btn btn-danger"
          text={<Link to="/problem">Problem</Link>}
        />
      </table>
    );
}

