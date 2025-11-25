import { useState } from "react";

export default function ClickCounter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button
        className="border p-2 hover:bg-amber-50 mb-2"
        onClick={() => setCount((count) => count + 1)}
      >
        clicked {count} times
      </button>
      <p>Click me!</p>
    </>
  );
}
