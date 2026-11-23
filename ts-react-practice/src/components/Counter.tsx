import { useState } from "react";
import Button from "./Button";

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="stack">
      <p className="counter-value" aria-live="polite">
        {count}
      </p>
      <div className="row">
        <Button label="Add 1" onClick={() => setCount((c) => c + 1)} />
        <Button label="Subtract 1" variant="secondary" onClick={() => setCount((c) => c - 1)} />
        <Button label="Reset" variant="secondary" onClick={() => setCount(0)} />
      </div>
    </div>
  );
}
