import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { to: "/disease", label: "Disease" },
    { to: "/hospital_info", label: "Hospital Info" },
    { to: "/health_tips", label: "Health Tips" },
    { to: "/diet_chart", label: "Diet Chart" },
    { to: "/ambulance_near_me", label: "Ambulance Near Me" },
    { to: "/doctor_list", label: "Doctor List" },
    { to: "/contact_us", label: "Contact Us" },
    { to: "/add_disease", label: "Add Disease" },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Left Section */}
          <div className="flex items-center">
            <button
              className="lg:hidden text-gray-600 hover:text-blue-500 focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-8 6h8"}
                />
              </svg>
            </button>
            <a className="text-xl font-bold text-blue-600 ml-3">
              Medical Portal
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6">
            {menuItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `hover:text-blue-500 ${
                    isActive
                      ? "text-blue-600 font-bold border-b-2 border-blue-600"
                      : "text-gray-700"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Right Section */}
          <div>
            <button className="px-4 py-2 text-sm rounded-full text-white border-2 border-blue-500 bg-blue-500 hover:bg-blue-700">
              Admin
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden flex flex-col space-y-2 py-3 border-t border-gray-200">
            {menuItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `block px-4 py-2 text-gray-700 hover:bg-blue-100 ${
                    isActive ? "text-blue-600 font-bold" : ""
                  }`
                }
                onClick={toggleMenu}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
