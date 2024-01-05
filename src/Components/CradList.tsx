export function CardList() {
  return (
    <div>
      {[1, 2, 3, 4].map((data) => (
        <h1>{data}</h1>
      ))}
    </div>
  );
}
