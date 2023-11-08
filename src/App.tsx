import {useRef} from 'react';
import logo from './memonice_3.jpeg';
import './App.css';

function App() {

  const input = useRef<HTMLInputElement | null>(null);

  const sendRequest = () => {
    if (!input.current || !input.current.value) {
      console.error("Cannot send request: ", input);
      return;
    }

    fetch(`https://memonice-service.onrender.com/log?m=${input.current.value}`)
      .then((response) => console.log(response))
      .catch(e => console.error(e));
  };


  return (
    <div className="App">
      <header className="App-header">
      <label>
          <span>Test message request: </span>
          <input type="text" ref={input}/>
        </label>
        <button onClick={sendRequest}>send</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {"MEMONICE".split("").map((letter) => <span className='titler'>{letter}</span>)}
        </p>
      </header>
    </div>
  );
}

export default App;
