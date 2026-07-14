import { useState } from "react";

export default function Array() {
  const [items, setItems] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddItem = (newItem: string) => {
    const trimmedItem = newItem.trim();
    if (trimmedItem === "") return;

    setItems((prevItems) => [...prevItems, trimmedItem]);
    setInputValue("");
  };

  return (
    <div>
      <h1>Array Example</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <input
        type="text"
        placeholder="Enter a new item..."
        name="newItem"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={() => handleAddItem(inputValue)}>Add Item</button>
    </div>
  );
}