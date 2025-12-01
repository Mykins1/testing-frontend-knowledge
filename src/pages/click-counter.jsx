import { useState } from "react";
import Button from "../components/button";

export default function ClickCounter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col gap-2 items-center justify-center ">
      <Button
        onClick={() => setCount((currentCount) => currentCount + 1)}
        message={`clicked ${count} times`}
      />
      <p>Click me!</p>
    </div>
  );
}
