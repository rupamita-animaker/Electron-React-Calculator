import logo from './logo.svg';
import './App.css';

function App() {
  const digits = [];
  for(let i=9; i>=0; i=i-3) {
    if(i==0) {
      digits.push(
        <div style={{display: 'inline-block'}} className='digit' key={i}>
          {i}
        </div>
      );
    } else {
      for(let j=(i-3+1); j<=i; j++) {
        digits.push(
          <div style={{display: 'inline-block'}} className='digit' key={j}>
            {j}
          </div>
        )
      }
      digits.push(<br/>);
    }
  }

  return (
    <div className="App">
      {digits}
    </div>
  );
}

export default App;
