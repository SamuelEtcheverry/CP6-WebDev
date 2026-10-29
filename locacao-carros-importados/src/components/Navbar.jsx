import { NavLink } from "react-router-dom";

const linkClass = ({ isActive }) =>
  `px-3 py-2 rounded-md text-sm font-medium transition ${
    isActive ? "bg-amber-400 text-slate-900" : "hover:text-amber-400"
  }`;

function Navbar() {
  return (
    <nav className="bg-slate-900 text-white shadow-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold tracking-wide text-amber-400">
          Prime Imports
        </h1>
        <div className="flex gap-2">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/carros" className={linkClass}>
            Carros
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
