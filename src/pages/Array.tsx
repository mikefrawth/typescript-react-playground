import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Array() {
  // Stores the list of items displayed in the UI.
  const [items, setItems] = useState<string[]>([]);
  // Tracks the text currently typed into the input field.
  const [inputValue, setInputValue] = useState("");

  // Adds a trimmed item to the list when the input is valid.
  const handleAddItem = (newItem: string) => {
    const trimmedItem = newItem.trim();
    if (trimmedItem === "") return;

    setItems((prevItems) => [...prevItems, trimmedItem]);
    setInputValue("");
  };

  // Removes the item at the specified index from the list.
  const handleRemoveItem = (indexToRemove: number) => {
    setItems((prevItems) =>
      prevItems.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <div>
      <h1>Array Example</h1>
      <ul>
        {/* Renders each item with a remove button linked to its index. */}
        {items.map((item, index) => (
          <li key={index}>
            <span>{item}</span>{" "}
            <button
              type="button"
              onClick={() => handleRemoveItem(index)}
              style={{ color: "red", marginLeft: "8px" }}
              aria-label={`Remove ${item}`}
            >
              x
            </button>
          </li>
        ))}
      </ul>

      {/* Input field for entering a new item and submitting it with Enter or the button. */}
      <Input
        type="text"
        placeholder="Enter a new item..."
        name="newItem"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            event.preventDefault();
            handleAddItem(inputValue);
          }
        }}
      />
      <Button onClick={() => handleAddItem(inputValue)}>Add Item</Button>
    </div>
  );
}
