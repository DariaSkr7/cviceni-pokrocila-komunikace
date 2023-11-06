import './style.css';

export const NumpadButton = ({ digit, onDigitClick }) => {
  const onClickHandle = () => {
    onDigitClick(digit);
  };
  return (
    <button onClick={onClickHandle} className="numpad-button">
      {digit}
    </button>
  );
};
