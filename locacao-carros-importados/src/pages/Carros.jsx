import { useState } from "react";
import Card from "../components/Card";

const carros = [
  { id: 1, nome: "911 Carrera", marca: "Porsche", ano: 2024, preco: 2500 },
  { id: 2, nome: "M4 Competition", marca: "BMW", ano: 2024, preco: 1800 },
  { id: 3, nome: "AMG GT", marca: "Mercedes-Benz", ano: 2023, preco: 2800 },
  { id: 4, nome: "R8 V10", marca: "Audi", ano: 2022, preco: 3200 },
  { id: 5, nome: "Roma", marca: "Ferrari", ano: 2023, preco: 4500 },
  { id: 6, nome: "Huracan EVO", marca: "Lamborghini", ano: 2023, preco: 5000 },
  { id: 7, nome: "RS6 Avant", marca: "Audi", ano: 2024, preco: 2200 },
  { id: 8, nome: "Cayenne Turbo", marca: "Porsche", ano: 2024, preco: 2100 },
];

function Carros() {
  const [marca, setMarca] = useState("Todas");

  const marcas = ["Todas", ...new Set(carros.map((c) => c.marca))];
  const filtrados =
    marca === "Todas" ? carros : carros.filter((c) => c.marca === marca);

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-3xl font-bold text-slate-900">Nossos Carros</h2>
        <select
          value={marca}
          onChange={(e) => setMarca(e.target.value)}
          className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-700"
        >
          {marcas.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filtrados.map((carro) => (
          <Card key={carro.id} {...carro} />
        ))}
      </div>
    </section>
  );
}

export default Carros;
