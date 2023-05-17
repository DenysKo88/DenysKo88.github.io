import styles from './info.module.scss';
import {Button} from './../../components/buttons/buttons'
import InputMask from 'react-input-mask';
export const Info = ({value, onChange, onSubmit, password, handlePassChange, handlePhoneChange, phoneNumber, handleShowResults, passError, phoneError, dateError}) => {


    

    return (
      <div className={styles.info}>
        <h2 className={styles.title}>Тре ще інфа</h2>
        <form className={styles.form} onSubmit={onSubmit}>
          {dateError && <div style={{ color: "red" }}>{dateError}</div>}
          <input
            value={value}
            onChange={onChange}
            className={styles.input}
            type="date"
            name="date"
            pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}"
          />
          {phoneError && <div style={{ color: "red" }}>{phoneError}</div>}
          <InputMask
            type="tel"
            value={phoneNumber}
            onChange={handlePhoneChange}
            className={styles.input}
            mask="+38 (099) 999-99-99"
            maskChar="_"
            placeholder="+38 (___) ___-__-__"
          />
          {passError && <div style={{ color: "red" }}>{passError}</div>}
          <input
            className={styles.input}
            value={password}
            onChange={handlePassChange}
            type="password"
            id="password"
            name="password"
            placeholder="стоп-слово"
          />
          <Button
            type="submit"
            text="Ще чуток"
            variant="btn btn-warning"
            onClick={handleShowResults}
          />
        </form>
      </div>
    );
}