import { useState } from "react";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

import { routes } from "../main";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [theme, setTheme] = useTheme();

  const validRoutes = routes.filter((route) => route.name);

  function toggleMenu() {
    if (!showMenu) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  }

  return (
    <nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="nav"
      className="sm:container sm:mx-auto"
    >
      <div className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6">
        {/* Mobile */}
        <div className="flex justify-between items-center px-4 sm:px-0">
          <Link to="/">
            <h1 className="uppercase text-2xl font-extralight text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light">
              Tiago<b className="font-extrabold">Morais</b>
            </h1>
          </Link>

          <div
            onClick={() => setTheme(theme)}
            className="block sm:hidden ml-0 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
          >
            {theme === "dark" && (
              <FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
            )}

            {theme === "light" && (
              <FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
            )}
          </div>

          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"
              >
                {showMenu ? (
                  <FiX className="text-3xl" />
                ) : (
                  <FiMenu className="text-3xl" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div
          className={
            showMenu
              ? "block m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none"
              : "hidden"
          }
        >
          {validRoutes.map((route) => (
            <Link
              to={route.path}
              key={`mobile-${route.path}`}
              className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2"
            >
              {route.name}
            </Link>
          ))}
        </div>

        {/* Desktop */}
        <div className="font-general font-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
          {validRoutes.map((route) => (
            <Link
              to={route.path}
              key={`desktop-${route.path}`}
              className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
            >
              {route.name}
            </Link>
          ))}
        </div>

        <div className="hidden sm:flex justify-between items-center flex-col md:flex-row">
          <div
            onClick={() => setTheme(theme)}
            className="ml-8 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
          >
            {theme === "dark" && (
              <FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
            )}

            {theme === "light" && (
              <FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
