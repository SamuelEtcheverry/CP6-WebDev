function Card({ nome, marca, preco }) {
  return (
    <div>
      <h3>{nome}</h3>
      <p>{marca}</p>
      <p>{preco}</p>
    </div>
  );
}

export default Card;
