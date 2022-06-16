import './App.css';
import React, { useState } from 'react';
import Keypad from './components/Keypad';
import Screen from './components/Screen';

function App() {
  const operators = {
    '+' : {
      precedence: 1,
      expression: 'a+b',
      action: (a, b) => {return a+b}
    },
    '-' : {
      precedence: 1,
      expression: 'a-b',
      action: (a, b) => {return a-b}
    },
    '*' : {
      precedence: 2,
      expression: 'a*b',
      action: (a, b) => {return a*b}
    },
    '/' : {
      precedence: 2,
      expression: 'a/b',
      action: (a, b) => {return a/b}
    },
    '%' : {
      precedence: '3',
      expression: 'a/100',
      action: (a) => {return a/100}
    }
  };

  const [value, setValue] = useState(0); // last value enetered
  const [evaluate, setEvaluate] = useState(false); // will be set to true when '=' is clicked

  function handleInputChange(inp) {
    let lastIndex = inp.length - 1;
    if(inp[lastIndex] != '=') {
      setValue(inp);
    }
    else {
      setEvaluate(true);
    }
    if (inp === '') {
      return;
    }
  }

  return (
    <div className="App">
      <Screen
      value={value}
      evaluate={evaluate}
      operators={operators}
      setValue={setValue}
      handleInputChange={handleInputChange}
      />
      <Keypad
      value={value}
      handleInputChange={handleInputChange}
      />
    </div>
  );
}

export default App;
