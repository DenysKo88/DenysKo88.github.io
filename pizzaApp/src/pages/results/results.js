import { Link } from 'react-router-dom';
import { Button } from '../../components/buttons/buttons';
import styles from './results.module.scss';


export const Results = ({firstName, lastName, inputText, isGay, isRevo, birthday, phoneNumber, password}) => {

    const formatdate = birthday.split("-").reverse().join(".");

    return (
      <div className={styles.results}>
        <h2>Шо ти</h2>
        <div className={styles.text}>
          Ім'я: {firstName} <br />
          Призвіще: {lastName} <br />
          gay: {isGay} <br />
          скарга: {inputText} <br />
          мекнув ревка: {isRevo} <br />
          днюха: {formatdate} <br />
          tel: {phoneNumber} <br />
          password: {password}
        </div>
        <Button
          variant="btn btn-danger"
          text={<Link to="/">Поняв</Link>}
        />
      </div>
    );
}