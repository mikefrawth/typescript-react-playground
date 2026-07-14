import { useState } from "react";
// import { Button } from "../components/ui/button";
import { Button } from "@/components/ui/button";

export default function Counter() {
  // Tracks the current numeric value displayed by the counter.
  const [count, setCount] = useState(0);
  // Stores the step value entered by the user as text.
  const [step, setStep] = useState("1");

  // Increases the count by the provided step value.
  const handleIncrement = (i: number = 1) => {
    setCount((prevCount) => prevCount + i);
  };

  // Decreases the count by the provided step value.
  const handleDecrement = (i: number = 1) => {
    setCount((prevCount) => prevCount - i);
  };

  // Converts the step input to a number, falling back to 1 if invalid.
  const parsedStep = Number(step) || 1;

  return (
    <div>
      <h1>TypeScript Playground</h1>
      {/* Displays the current count value to the user. */}
      <p>Count: {count}</p>
      <Button onClick={() => handleIncrement(parsedStep)}>Increment</Button>
      <Button onClick={() => handleDecrement(parsedStep)}>Decrement</Button>
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
