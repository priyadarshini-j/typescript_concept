import { useState } from "react";
import Button from "./Button";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { decrement, increment, incrementBy, reset, selectCount } from "../store/counterSlice";

export default function ReduxCounter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [amount, setAmount] = useState<string>("5");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const n = Number(amount);
    if (amount.trim() === "" || Number.isNaN(n)) return;
    dispatch(incrementBy(n)); // payload must be a number
  };

  return (
    <div className="stack">
      <p className="counter-value" aria-live="polite">
        {count}
      </p>
      <div className="row">
        <Button label="Add 1" onClick={() => dispatch(increment())} />
        <Button label="Subtract 1" variant="secondary" onClick={() => dispatch(decrement())} />
        <Button label="Reset" variant="secondary" onClick={() => dispatch(reset())} />
      </div>
      <form onSubmit={handleSubmit} className="row nowrap">
        <label htmlFor="amount" className="visually-hidden">
          Amount
        </label>
        <input
          id="amount"
          type="text"
          inputMode="numeric"
          value={amount}
          onChange={handleChange}
          placeholder="Amount"
        />
        <button type="submit" className="btn btn-primary">
          Add amount
        </button>
      </form>
    </div>
  );
}
