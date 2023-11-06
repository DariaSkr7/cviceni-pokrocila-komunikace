import { useState } from 'react';
import { SwitchButton } from './SwitchButton';
import './style.css';

export const Ukol1 = () => {
  const [bulbOn, setBulbOn] = useState(true);

  let bulbOnClass = 'bulb--on';
  if (bulbOn === false) {
    bulbOnClass = '';
  }
  const onSwitchHandle = (isOn) => {
    const answer = window.confirm('Do you want to turn-on/turn off the bulb?');
    if (answer === true) {
      setBulbOn(isOn);
    }
  };
  return (
    <>
      <div className={`bulb ${bulbOnClass}`} />
      <SwitchButton onSwitch={onSwitchHandle} on={bulbOn} label="Vypnout" />
    </>
  );
};
