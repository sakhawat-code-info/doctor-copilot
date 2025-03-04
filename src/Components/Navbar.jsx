import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
          </div>
          <a className="btn btn-ghost text-xl">Medical Portal</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="lg:flex lg:gap-x-5">
            <li>
              <Link to="/disease" className="hover:text-blue-500">
                Disease
              </Link>
            </li>
            <li>
              <Link to="/hospital_info" className="hover:text-blue-500">
                Hospital Info
              </Link>
            </li>
            <li>
              <Link to="/health_tips" className="hover:text-blue-500">
                Health Tips
              </Link>
            </li>
            <li>
              <Link to="/diet_chart" className="hover:text-blue-500">
                Diet Chart
              </Link>
            </li>
            <li>
              <Link to="/ambulance_near_me" className="hover:text-blue-500">
                Ambulance Near Me
              </Link>
            </li>
            <li>
              <Link to="/doctor_list" className="hover:text-blue-500">
                Doctor List
              </Link>
            </li>
            <li>
              <Link to="/contact_us" className="hover:text-blue-500">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/add_disease" className="hover:text-blue-500">
                Add Disease
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="px-4 py-2 text-sm rounded-full text-white border-2 border-blue-500 bg-blue-500 hover:bg-blue-700">
            Admin
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
