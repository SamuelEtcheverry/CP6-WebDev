import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Carros from "./pages/Carros";

function NaoEncontrada() {
  return (
    <div className="px-6 py-24 text-center">
      <h2 className="text-4xl font-bold text-slate-900">404</h2>
      <p className="mt-2 text-slate-500">Pagina nao encontrada.</p>
      <Link to="/" className="mt-4 inline-block text-amber-600 underline">
        Voltar para a Home
      </Link>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-slate-100">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carros" element={<Carros />} />
            <Route path="*" element={<NaoEncontrada />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
