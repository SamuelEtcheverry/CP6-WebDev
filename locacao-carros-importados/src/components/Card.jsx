function Card({ nome, marca, preco }) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex h-36 items-center justify-center bg-gradient-to-br from-slate-800 to-slate-600 text-6xl">
        🚗
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-slate-900">{nome}</h3>
        <p className="text-sm text-slate-500">{marca}</p>
        <p className="mt-2 font-semibold text-amber-600">{preco}</p>
      </div>
    </div>
  );
}

export default Card;
