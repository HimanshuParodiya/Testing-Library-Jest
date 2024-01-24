import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import FunctionalComponentTesting from './FunctionalComponentTesting';
import Four_GetAllByLabelText from './Components/Four_GetAllByLabelText';

function App() {
  const [data, setData] = useState("")
  return (
    <div className="App">
      {/* <h1>Test Click Event with Button</h1> */}
      {/* <button onClick={() => setData("Updated data")}>Update the data</button> */}
      {/* <h1>{data}</h1> */}
      {/* actually we want to check when we are clicking on button is the {data} is rendering on UI */}

      {/* <FunctionalComponentTesting /> */}
      <Four_GetAllByLabelText />
    </div>
  );
}

export default App;
