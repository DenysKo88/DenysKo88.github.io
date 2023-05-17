import styles from './textarea.module.scss';

export const TextArea = ({onBlur, onChange, value}) => {
    return (
        <textarea className={styles.textarea} onBlur={onBlur} onChange={onChange} value={value} name="complaint" id="complaint" cols="30" rows="10" placeholder="Шо, проблеми?"></textarea>
    )
}