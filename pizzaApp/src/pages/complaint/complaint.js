import styles from './complaint.module.scss';
import { TextArea } from '../../components/textarea/textarea';
import { Button } from '../../components/buttons/buttons';

export const Complaint = ({inputText, textError, textHandler, handleCheckboxChange, isRevo, handleSubmit, handleShowInfo}) => {

    return (
      <div className={styles.complaint}>
        <h2 className={styles.title}>Шо таке?</h2>
        {textError && <div style={{ color: "red" }}>{textError}</div>}
        <TextArea
          onSubmit={handleSubmit}
          onChange={textHandler}
          value={inputText}
        />
        <div className={styles.checkbox}>
          <input
            type="checkbox"
            name="revo"
            id="revo"
            checked={isRevo === "канєша"}
            onChange={handleCheckboxChange}
          />
          <label for="revo">Да, я бахнув ревка зранку</label>
        </div>
        <Button
          onClick={handleShowInfo}
          variant="btn btn-warning"
          text="Давай далі"
        />
      </div>
    );
} 