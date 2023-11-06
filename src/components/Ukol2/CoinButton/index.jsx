import './style.css';

export const CoinButton = ({ value, onCoinClick }) => {
  const onClickHandle = () => {
    onCoinClick(value);
  };

  return (
    <button onClick={onClickHandle} className="icon-button">
      <i className="plus-icon" />
      <div className="button-label">{value}</div>
    </button>
  );
};
