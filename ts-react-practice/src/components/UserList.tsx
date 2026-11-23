import { useEffect, useState } from "react";
import type { User } from "../types";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadUsers() {
      try {
        const res = await fetch(USERS_URL, { signal: controller.signal });
        if (!res.ok) throw new Error(`Request failed (${res.status})`);
        const data: User[] = await res.json();
        setUsers(data);
      } catch (err) {
        if (err instanceof DOMException && err.name === "AbortError") return;
        setError(err instanceof Error ? err.message : "Something went wrong");
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    loadUsers();
    return () => controller.abort(); // cleanup when the component unmounts
  }, []);

  if (loading) return <p className="muted">Loading users…</p>;
  if (error) return <p className="error">Could not load users: {error}</p>;

  return (
    <ul className="user-list">
      {users.map((u) => (
        <li key={u.id}>
          <span className="avatar" aria-hidden="true">
            {u.name.split(" ").filter((w) => /^[A-Za-z]/.test(w)).slice(0, 2).map((w) => w[0]).join("")}
          </span>
          <div className="user-meta">
            <span className="user-name">{u.name}</span>
            <span className="muted">{u.company.name}</span>
            <a href={`mailto:${u.email}`}>{u.email}</a>
          </div>
        </li>
      ))}
    </ul>
  );
}
