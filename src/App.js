import './App.css';
import React, { useEffect, useState } from 'react';
import Keypad from './components/Keypad';
import Screen from './components/Screen';

function App() {
  const [value, setValue] = useState(0); // last value enetered
  const [evaluate, setEvaluate] = useState(false); // will be set to true when '=' is clicked
  
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

  function handleInputChange(inp) {
    let lastIndex = inp.length - 1;
    if(inp[lastIndex] != '=') {
      setValue(inp);
    }
    else if(inp[lastIndex]=='=' && lastIndex!=0 && inp[lastIndex-1]=='=') {
      setValue(0);
    }
    else {
      if(value!==0) {
        setEvaluate(true);
      }
    }
    /*
    if (inp === '') {
      return;
    }*/
  }
/*
  useEffect(() => {
    window.addEventListener('keypress', (event) => {
      if(event.key=='Enter') {
        event.preventDefault();
        console.log(event.key);
        if(value!=0) {
          handleInputChange(value);
        }
      }
    });
  }, [value]);*/

  return (
    <div className="App">
      <div className='calculator'>
        <Screen
        value={value}
        evaluate={evaluate}
        operators={operators}
        setValue={setValue}
        setEvaluate={setEvaluate}
        handleInputChange={handleInputChange}
        />
        <Keypad
        value={value}
        setValue={setValue}
        handleInputChange={handleInputChange}
        />
      </div>
    </div>
  );
}

export default App;
