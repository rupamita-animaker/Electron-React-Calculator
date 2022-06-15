import './App.css';
import React, { useState } from 'react';
import Keypad from './components/Keypad';
import Screen from './components/Screen';

function App() {
  const operators = {
    '+' : (a, b) => {return a+b},
    '-' : (a, b) => {return a-b},
    '*' : (a, b) => {return a*b},
    '/' : (a, b) => {return a/b},
    '%' : (a) => {return a/100}
  };

  const [value, setValue] = useState(0); // last value enetered
  const [evaluate, setEvaluate] = useState(false); // will be set to true when '=' is clicked
  const [infix, setInfix] = useState([]);
  const [postfix, setPostfix] = useState([]);
  const [lastInp, setLastInp] = useState(0);

  function handleInputChange(inp) {
    let lastIndex = inp.length - 1;
    if(inp[lastIndex] != '=') {
      setValue(inp);
    }
    if (inp === '') {
      console.log('empty');
      return;
    }

    console.log('inp[lastIndex]: ' + inp[lastIndex]);

    if(inp[lastIndex] in operators || inp[lastIndex] == '=') {
      setLastInp(inp[lastIndex]); // the previous updated value will be acknowledged now and the latest value will be placed in queue
      if(inp[lastIndex] != '=') {
        setInfix([...infix, lastInp, inp[lastIndex]]);
      }
      else {
        setInfix([...infix, lastInp]);
        testFunc();
      }
    } 
    else if ((lastInp in operators || Number(lastInp) == 0) && inp[lastIndex] != '.') {
      console.log('if 2 lastInp: ' + lastInp);
      setLastInp(inp[lastIndex]);
    } 
    else {
      setLastInp(lastInp + inp[lastIndex]);
    }
    console.log('after (lastInp): ' + lastInp);
    console.log('infix: ' + infix);
  }

  function testFunc() {
    setInfix([...infix, 'eval']);
    console.log('infix: ' + infix);
  }

  return (
    <div className="App">
      <form>
        <label>Enter number</label>
        <input id='test-number' value={value} onChange={(event) => {
          handleInputChange(event.target.value);
        }}></input>
        <div>{infix}</div>
      </form>
      <Screen/>
      <Keypad/>
    </div>
  );
}

export default App;
