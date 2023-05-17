
export const RadioForm = ({text, onChange, value}) => {
    return (
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          value={value}
          onChange={onChange}
        />
        <label class="form-check-label" for="flexRadioDefault1">
          {text}
        </label>
      </div>
    );
}