import { useState } from "react";
import Button from "./Button";

export default function NameForm() {
  const [name, setName] = useState<string>("");
  const [names, setNames] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) return;
    setNames((prev) => [trimmed, ...prev]);
    setName("");
  };

  return (
    <div className="stack">
      <form onSubmit={handleSubmit} className="row nowrap">
        <label htmlFor="name" className="visually-hidden">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="Type a name"
          autoComplete="off"
        />
        <button type="submit" className="btn btn-primary" disabled={!name.trim()}>
          Add name
        </button>
      </form>

      <p className="muted">
        You typed: <span className="live">{name || "nothing yet"}</span>
      </p>

      {names.length > 0 && (
        <>
          <ul className="tags">
            {names.map((n, i) => (
              <li key={`${n}-${i}`}>{n}</li>
            ))}
          </ul>
          <div>
            <Button label="Clear names" variant="secondary" onClick={() => setNames([])} />
          </div>
        </>
      )}
    </div>
  );
}
