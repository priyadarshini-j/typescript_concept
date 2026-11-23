import Button from "./components/Button";
import Card from "./components/Card";
import Counter from "./components/Counter";
import NameForm from "./components/NameForm";
import ReduxCounter from "./components/ReduxCounter";
import UserList from "./components/UserList";

export default function App() {
  return (
    <main className="page">
      <header className="hero">
        <h1>
          TypeScript-React 
        </h1>

      </header>

      <div className="grid">
        <Card title="Counter" tag="useState<number>(0)">
          <Counter />
        </Card>

        <Card title="Redux counter" tag="PayloadAction<number>">
          <ReduxCounter />
        </Card>

        <Card title="Name form" tag="ChangeEvent · FormEvent">
          <NameForm />
        </Card>

        <Card title="Buttons" tag='variant?: "primary" | "secondary"'>
          <div className="row">
            <Button label="Primary" onClick={() => alert("Primary clicked")} />
            <Button label="Secondary" variant="secondary" onClick={() => alert("Secondary clicked")} />
          </div>
        </Card>

        <Card title="Users" tag="useEffect + useState<User[]>([])">
          <UserList />
        </Card>
      </div>
    </main>
  );
}
