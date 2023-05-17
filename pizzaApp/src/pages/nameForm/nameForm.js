
import { Button } from "../../components/buttons/buttons";
import { RadioForm } from "../../components/radio/radio";
import styles from './nameForm.module.scss';


export const NameForm = ({firstName, lastName, firstNameDirty, lastNameDirty, firstNameError, isGayError, lastNameError, firstNameHandler, lastNameHandler, handleSubmit, blurHandler, handleRadioChange, handleShowComplaint}) => {

    return (
      <>
        <div className={styles.nameForm}>
          <h2 className={styles.title}>Хто ти?</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            {firstNameError && (
              <div style={{ color: "red" }}>{firstNameError}</div>
            )}
            <input
              name="firstName"
              className={styles.input}
              type="text"
              onChange={firstNameHandler}
              value={firstName}
              placeholder="Ваше Ім'я"
            />
          </form>
          <form onSubmit={handleSubmit} className={styles.form}>
            {lastNameError && (
              <div style={{ color: "red" }}>{lastNameError}</div>
            )}
            <input
              name="lastName"
              className={styles.input}
              type="text"
              onChange={lastNameHandler}
              value={lastName}
              placeholder="Ваше Призвіще"
            />
          </form>
          <Button
            variant="btn btn-warning"
            text="Далі"
            className={styles.warning}
            type="submit"
            onClick={handleShowComplaint}
          />
          {isGayError && <div style={{ color: "red" }}>{isGayError}</div>}
          <div onSubmit={handleSubmit} className={styles.radioForms}>
            <RadioForm
              onChange={handleRadioChange}
              value="я гей"
              text={"Я гей"}
            />
            <RadioForm
              onChange={handleRadioChange}
              value="Та наче нє"
              text={"Та наче нє"}
            />
          </div>
        </div>
      </>
    );
}

