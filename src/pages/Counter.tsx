import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState("1");

  const handleIncrement = (i: number = 1) => {
    setCount((prevCount) => prevCount + i);
  };

  const handleDecrement = (i: number = 1) => {
    setCount((prevCount) => prevCount - i);
  };

  const parsedStep = Number(step) || 1;

  return (
    <div>
      <h1>TypeScript Playground</h1>
      <p>Count: {count}</p>
      <button onClick={() => handleIncrement(parsedStep)}>Increment</button>
      <button onClick={() => handleDecrement(parsedStep)}>Decrement</button>
      <div>
        <label htmlFor="counter">Step</label>
        <input
          id="counter"
          type="number"
          name="counter"
          value={step}
          onChange={(event) => setStep(event.target.value)}
        />
      </div>
    </div>
  );
}
