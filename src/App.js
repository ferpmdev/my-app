import { useState } from "react";
import "./App.css";

function App() {
  const [sumar, setSumar] = useState("");
  const [restar, setRestar] = useState("");
  const [multiplicar, setMultiplicar] = useState("");
  const [dividir, setDividir] = useState("");

  const sum = (a, b) => {
    let totSum = a + b;
    setSumar(totSum);
  };

  const res = (a, b) => {
    let totRes = a - b;
    setRestar(totRes);
  };

  const mul = (a, b) => {
    let totMul = a * b;
    setMultiplicar(totMul);
  };

  const div = (a, b) => {
    let totDiv = a / b;
    setDividir(totDiv);
  };
  return (
    <div className="App">
      <h1>myCalculator</h1>
      <h2>sumar</h2>
      <input
      // onChange={e => }
      />
      {sum & <h2>{sumar}</h2>}
      {res & <h2>{restar}</h2>}
      {mul & <h2>{multiplicar}</h2>}
      {div & <h2>{dividir}</h2>}
    </div>
  );
}

export default App;
