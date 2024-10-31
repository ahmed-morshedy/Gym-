import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const lis = [
    { text: "Home", href: "#home", active: true },
    { text: "About", href: "#about", active: false },
    { text: "Pricing", href: "#pricing", active: false },
    { text: "Contact", href: "#contact", active: false },
  ];
  return (
    <nav className="bg-white border border-slate-950  px-2 sm:px-4 py-2.5 rounded  shadow transition ease-in-out delay-150 ">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="/" className="flex items-center">
          <img src="/Logo.png" alt="Logo" className="h-20" />
        </a>

        <div className="flex items-center">
          <button
            id="menu-toggle"
            type="button"
            onClick={toggleMenu}
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-8 w-8 text-gray-500" />
          </button>
        </div>

        <div
          className={`w-full md:block md:w-auto ${isMenuOpen ? "" : "hidden"}`}
          id="mobile-menu"
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            {lis.map((li) => (
              <a
                href={li.href}
                className={`block py-2 pr-4 pl-3  rounded md:p-0  ${
                  li.active ? "text-mainColor bg-black10" : ""
                }`}
                aria-current="page"
                key={li.text}
              >
                <li className="hover:bg-black10 hover:text-mainColor p-3 rounded-lg">
                  {li.text}
                </li>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
