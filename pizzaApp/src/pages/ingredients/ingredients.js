
import './ingredients.module.scss';
import '../../components/buttons/buttons';
import { Button } from '../../components/buttons/buttons';



export const Ingredients = (props) => {
    const {products, onButtonClick} = props;
    const filteredIngredients = products.filter(product => product.id !==1);
    return (
      <table className="table table-warning table-hover">
        <thead>
          <tr>
            <th scope="col">Інгредієнт</th>
            <th scope="col">Вартість</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {filteredIngredients.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price} UAH</td>
              <td>
                <Button
                  text={"Add"}
                  onClick={() => onButtonClick(product)}
                  variant="outline-success"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
}
