import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = (i: number = 1) => {
    setCount(count + i);
  };

  const handleDecrement = (i: number = 1) => {
    setCount(count - i);
  };

  return (
    <div>
      <h1>TypeScript Playground</h1>
      <p>Count: {count}</p>
      <button
        onClick={() => {
          const inputElement = document.querySelector<HTMLInputElement>(
            'input[name="counter"]'
          );
          const value = inputElement
            ? parseInt(inputElement.value, 10) || 1
            : 1;
          handleIncrement(value);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          const inputElement = document.querySelector<HTMLInputElement>(
            'input[name="counter"]'
          );
          const value = inputElement
            ? parseInt(inputElement.value, 10) || 1
            : 1;
          handleDecrement(value);
        }}
      >
        Increment
      </button>
      <div>
        <label htmlFor="counter"></label>
        <input type="number" name="counter"></input>
      </div>
    </div>
  );
}
