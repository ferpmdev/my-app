import { useState } from "react";
import "./App.css";

function Ejercicio5() {
  const [num, setNum] = useState("");
  const [newNum, setNewNum] = useState("");
  const [fibbo, setFibbo] = useState("");

  const handleInputChange = ({ target }) => {
    setNum(target.value);
  };

  const myOnSubmit = (e) => {
    e.preventDefault();
    const myNewNum = [...num, num];
    setNewNum(myNewNum);
    myFibbonacci(num);
  };

  const myFibbonacci = (n = 3) => {
    let a = 0;
    let b = 1;
    let myIncrement = b;
    for (let i; i <= n; i++) {
      myIncrement = a + b;
      a = b;
      b = myIncrement;
      setFibbo(myIncrement);
      return fibbo;
    }
    console.log(fibbo);
  };

  return (
    <>
      <div>Ejercicio5</div>
      <form onSubmit={myOnSubmit}>
        <input
          type="text"
          value={num}
          placeholder="ingrese el dato"
          autoComplete="off"
          onChange={handleInputChange}
        />
        <button onClick={(e) => myFibbonacci(e)}>enviar</button>
      </form>
      <h2>{newNum}</h2>
      <h3>{fibbo}</h3>
    </>
  );
}

export default Ejercicio5;
