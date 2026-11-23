interface CardProps {
  title: string;
  tag?: string;
  children: React.ReactNode;
}

export default function Card({ title, children }: CardProps) {
  return (
    <section className="card">
      <header className="card-head">
        <h2 className="card-title">{title}</h2>
      </header>
      <div className="card-body">{children}</div>
    </section>
  );
}
