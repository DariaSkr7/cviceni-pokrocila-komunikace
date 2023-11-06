import { useState } from 'react';
import { CoinButton } from './CoinButton';
import './style.css';

/*
  Zadání: V tomto úkolu máme několik tlačítek, která představují mince. Při kliknutí na 
  tlačítko chceme do celké částky přidat hodnotu mince.

  Krok 1: Do komponenty `CoinButton` přidejte prop `onCoinClick`, která bude očekávat 
  funkci, která se zavolá při kliknutí na tlačítko. Komponenta funkci zavolá s hodnout své 
  prop `value`.

  Krok 2: V komponentě `Ukol2` založte funkci `handleCoinClick`, která bude mít jeden 
  parametr `value`. Ve funkci přidejte k hodnotě `amount` hodnotu `value`. Tuto funkci pak 
  předejte komponentě `CoinButton` jako prop `onCoinClick`.

  Vykoušejte, že jde přidat částka pomocí tlačítek.
*/

export const Ukol2 = () => {
  const [amount, setAmount] = useState(0);

  const onCoinClick = (value) => {
    setAmount(amount + value);
  };

  return (
    <>
      <p>
        <strong>Částka: {amount} kč</strong>
      </p>
      <div className="button-group">
        <CoinButton onCoinClick={onCoinClick} value={1} />
        <CoinButton onCoinClick={onCoinClick} value={2} />
        <CoinButton onCoinClick={onCoinClick} value={5} />
        <CoinButton onCoinClick={onCoinClick} value={10} />
        <CoinButton onCoinClick={onCoinClick} value={20} />
        <CoinButton onCoinClick={onCoinClick} value={50} />
      </div>
    </>
  );
};
