import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(5);

  // let counter = 5;

  const addValue = () => {
    setCounter(counter + 1);
    console.log(counter, Math.random());
  };

  const removeValue = () => {
    setCounter(counter - 1);
    console.log(counter, Math.random());
  };

  return (
    <>
      <h1>Hello World</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
