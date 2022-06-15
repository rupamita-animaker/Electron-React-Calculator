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
  const [infix, setInfix] = useState([]);
  const [lastInp, setLastInp] = useState(0);

  function handleInputChange(inp) {
    let lastIndex = inp.length - 1;
    if(inp[lastIndex] != '=') {
      setValue(inp);
    }
    if (inp === '') {
      return;
    }

    if(inp[lastIndex] in operators || inp[lastIndex] == '=') {
      setLastInp(inp[lastIndex]); // the previous updated value will be acknowledged now and the latest value will be placed in queue
      if(inp[lastIndex] != '=' && inp[lastIndex] != '%') {
        console.log('inp[lastIndex]: ' + inp[lastIndex]);
        if(lastInp=='(' || lastInp==')') {
          setInfix([...infix, inp[lastIndex]]);
        }
        else {
          setInfix([...infix, lastInp, inp[lastIndex]]);
        }
      }
      else if(inp[lastIndex] == '='){
        if(lastInp!=')') {
          setInfix([...infix, lastInp]);
        }
        setEvaluate(true);
      }
      else {
        setInfix([...infix, lastInp]);
      }
    } 
    else if(((lastInp in operators || Number(lastInp) == 0) && inp[lastIndex]=='(') || inp[lastIndex]==')') {
      setLastInp(inp[lastIndex]);
      if(inp[lastIndex]=='(') {
        setInfix([...infix, inp[lastIndex]]);
      } else {
        if(!(lastInp in operators) && lastInp!='(' && lastInp!=')') {
          setInfix([...infix, lastInp, inp[lastIndex]]);
        }
        else {
          setInfix([...infix, inp[lastIndex]]);
        }
      }
    }
    else if ((lastInp in operators || Number(lastInp) == 0 || lastInp == '(') && inp[lastIndex] != '.') {
      setLastInp(inp[lastIndex]);
    } 
    else {
      setLastInp(lastInp + inp[lastIndex]);
    }
    console.log('infix: ' + infix);
  }

  return (
    <div className="App">
      <Screen
      value={value}
      evaluate={evaluate}
      infix={infix}
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
