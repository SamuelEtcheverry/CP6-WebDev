import { Link } from "react-router-dom";
import Card from "../components/Card";

const destaques = [
  { id: 1, nome: "911 Carrera", marca: "Porsche", ano: 2024, preco: 2500 },
  { id: 2, nome: "M4 Competition", marca: "BMW", ano: 2024, preco: 1800 },
  { id: 3, nome: "AMG GT", marca: "Mercedes-Benz", ano: 2023, preco: 2800 },
];

function Home() {
  return (
    <>
      <section className="bg-slate-800 px-6 py-24 text-center text-white">
        <h2 className="text-4xl font-extrabold md:text-5xl">
          Dirija o carro dos seus sonhos
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-300">
          Locacao de carros importados com conforto, luxo e performance.
        </p>
        <Link
          to="/carros"
          className="mt-8 inline-block rounded-lg bg-amber-400 px-6 py-3 font-semibold text-slate-900 transition hover:bg-amber-300"
        >
          Ver todos os carros
        </Link>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <h3 className="mb-6 text-2xl font-bold text-slate-900">Destaques</h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destaques.map((carro) => (
            <Card key={carro.id} {...carro} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
