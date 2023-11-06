import { NumpadButton } from './NumpadButton';
import { FunctionButton } from './FunctionButton';
import './style.css';
import { useState } from 'react';

/*
  Zadání: Zprovozněte číselník tak, aby se po kliknutí na tlačítka správně skládalo číslo 
  na displeji.

  Krok 1: Založte stav `displayValue` a zařiďte, aby se správně zobrazoval na displeji. 
  Stav budeme chtít jako řetězec, abychom mohli snadno přidávat další cifry.

  Krok 2: Do komponenty `NumpadButton` přidejte prop `onDigitClick`, která bude očekávat 
  funkci, která se zavolá při kliknutí na tlačítko a předá se jí číslo, které je na 
  tlačítku napsané.

  Krok 3: V komponentě `Ukol4` založte funkci `handleDigitClick`, která bude mít jeden 
  parametr `digit`. Ve funkci přidejte k hodnotě `displayValue` hodnotu `digit`. Tuto 
  funkci pak předejte komponentě `NumpadButton` jako prop `onDigitClick`.

  Krok 4: Pozor na situaci, kdy je na začátku na displeji číslo nula. V takovém případě je potřeba ošetřít dvě věci:

  1. Nulu na začátku čísla nepřidáváme, tedy když uživatel klikne na tlačítko 0 a na displeji je nula, tak se nic nestane.
  2. K nule na začátku čísla nepřidáváme, ale nahradíme ji číslem, na které uživatel klikl.

  Krok 5: Do komponenty `FunctionButton` přidejte prop `onFunctionClick`, která bude očekávat funkci bez parametrů. Tímto říkáme, že uživatel kliknul na nějaké funkční tlačítko. 

  Krok 6: V komponentě `Ukol4` založte funkci `handleClearClick` bez paramtrů. V ní nastavte stav `displayValue` na nulu. Tuto funkci pak předejte komponentě `FunctionButton` jako prop `onFunctionClick`

  Vyzkoušejte, že jde číselník správně používat.
*/

export const Ukol4 = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const handleDigitClick = (digit) => {
    if (displayValue === '0') {
      setDisplayValue('' + digit);
    } else {
      setDisplayValue(displayValue + digit);
    }
  };
  const handleClearClick = () => {
    setDisplayValue('0');
  };
  return (
    <>
      <div className="display">{displayValue}</div>
      <div className="numpad">
        <NumpadButton onDigitClick={handleDigitClick} digit={1} />
        <NumpadButton onDigitClick={handleDigitClick} digit={2} />
        <NumpadButton onDigitClick={handleDigitClick} digit={3} />
        <NumpadButton onDigitClick={handleDigitClick} digit={4} />
        <NumpadButton onDigitClick={handleDigitClick} digit={5} />
        <NumpadButton onDigitClick={handleDigitClick} digit={6} />
        <NumpadButton onDigitClick={handleDigitClick} digit={7} />
        <NumpadButton onDigitClick={handleDigitClick} digit={8} />
        <NumpadButton onDigitClick={handleDigitClick} digit={9} />
        <NumpadButton onDigitClick={handleDigitClick} digit={0} />
        <FunctionButton onFunctionClick={handleClearClick} label="C" />
      </div>
    </>
  );
};
