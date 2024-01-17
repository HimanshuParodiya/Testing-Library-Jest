import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [data, setData] = useState()
  return (
    <div className="App">
      <h1>Test onChange Event with input text</h1>
      <input type="text" value={data} onChange={(e) => setData(e.target.value)} />
    </div>
  );
}

export default App;
