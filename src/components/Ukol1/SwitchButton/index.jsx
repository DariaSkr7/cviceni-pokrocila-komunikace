import './style.css';

export const SwitchButton = ({ label, onSwitch, on }) => {
  let switchOnClass = 'switch-button--on';
  if (on === false) {
    switchOnClass = '';
  }
  const onClickHandle = () => {
    onSwitch(!on);
  };
  return (
    <button
      onClick={onClickHandle}
      className={`switch-button ${switchOnClass}`}
    >
      <i className="switch-icon" />
      <div className="button-label">{label}</div>
    </button>
  );
};
