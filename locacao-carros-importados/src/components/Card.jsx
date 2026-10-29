function Card({ nome, marca, ano, preco }) {
  const precoFormatado = preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex h-36 items-center justify-center bg-gradient-to-br from-slate-800 to-slate-600 text-6xl">
        🚗
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-slate-900">{nome}</h3>
        <p className="text-sm text-slate-500">
          {marca} - {ano}
        </p>
        <p className="mt-2 font-semibold text-amber-600">
          {precoFormatado} <span className="text-xs text-slate-400">/ dia</span>
        </p>
        <button
          onClick={() => alert(`Reserva do ${nome} solicitada!`)}
          className="mt-4 w-full rounded-lg bg-slate-900 py-2 font-medium text-white transition hover:bg-amber-500 hover:text-slate-900"
        >
          Alugar
        </button>
      </div>
    </div>
  );
}

export default Card;
