
export const Button = (props) => {
  const { onClick, text, variant } = props;
  return (
    <button
      className={`btn btn-${variant}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}; 