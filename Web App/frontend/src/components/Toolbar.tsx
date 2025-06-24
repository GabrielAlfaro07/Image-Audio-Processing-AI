import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Toolbar = () => {
  return (
    <header className="w-full fixed top-0 z-50 bg-white/10 backdrop-blur-md">
      <div className="w-full px-6 py-4 flex items-center justify-between border-b border-gradient-to-b from-gray-700 to-gray-500">
        {/* Logo a la izquierda */}
        <div className="flex items-center gap-3">
          <Logo size="small" />
          <span className="text-white font-[Designer] text-3xl hidden sm:block">
            NeuroLens
          </span>
        </div>

        {/* Botones de navegación */}
        <nav className="flex flex-wrap gap-8 text-base sm:text-lg font-[Quicksand] text-white font-medium">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400"
                : "hover:text-blue-400 transition duration-200"
            }
          >
            Inicio
          </NavLink>
          <NavLink
            to="/audio"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400"
                : "hover:text-blue-400 transition duration-200"
            }
          >
            Audio
          </NavLink>
          <NavLink
            to="/images"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400"
                : "hover:text-blue-400 transition duration-200"
            }
          >
            Imágenes
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Toolbar;
