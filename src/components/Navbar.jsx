import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import CategoryDropdown from "./CategoryDropdown";
import { logout } from "../features/auth/AuthSlice";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
 

  const handleLogout = () => {
    dispatch(logout());
  };

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [showCategories, setShowCategories] = useState(false);

  return (
  <nav className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

    {/* Logo */}
    <Link
      to="/"
      className="text-2xl font-bold text-yellow-400 tracking-wide"
    >
      ReactShop
    </Link>

    {/* Mobile Menu Button */}
    {/* <button className="md:hidden text-yellow-400 focus:outline-none">
     
      ☰
    </button> */}

    {/* Search + Menu */}
    <div className="hidden md:flex items-center space-x-6">
      {/* Search */}
      <input
        type="text"
        placeholder="Search products..."
        className="px-4 py-2 rounded text-black w-40 md:w-64 lg:w-96"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            navigate(`/search/${search}`);
          }
        }}
      />

      {/* Menu Links */}
      <div className="flex items-center space-x-6 text-sm font-medium">
        <Link to="/" className="hover:text-yellow-400">Home</Link>
        <Link to="/products" className="hover:text-yellow-400">Products</Link>

        {/* Categories */}
        <div
          className="relative"
          onMouseEnter={() => setShowCategories(true)}
          onMouseLeave={() => setShowCategories(false)}
        >
          <button className="hover:text-yellow-400">Categories</button>
          {showCategories && (
            <div className="absolute top-full left-0">
              <CategoryDropdown />
            </div>
          )}
        </div>

        {/* Cart */}
        <Link to="/cart" className="relative hover:text-yellow-400">
          Cart
          {totalQuantity > 0 && (
            <span className="absolute -top-2 -right-4 bg-red-500 text-xs px-2 py-0.5 rounded-full">
              {totalQuantity}
            </span>
          )}
        </Link>

        {/* Auth Buttons */}
        {!isAuthenticated ? (
          <>
            <Link
              to="/login"
              className="px-4 py-1 border border-yellow-400 rounded hover:bg-yellow-400 hover:text-black"
            >
              Login
            </Link>
            {/* <Link
              to="/register"
              className="px-4 py-1 bg-yellow-400 text-black rounded hover:bg-yellow-500"
            >
              Register
            </Link> */}
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="px-4 py-1 bg-red-500 rounded hover:bg-red-600"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  </div>

  {/* Mobile Dropdown Menu */}
  <div className="md:hidden bg-gray-800 px-4 py-2 space-y-2">
    <input
      type="text"
      placeholder="Search..."
      className="w-full px-3 py-2 rounded text-black"
    />
    <Link to="/" className="block hover:text-yellow-400">Home</Link>
    <Link to="/products" className="block hover:text-yellow-400">Products</Link>
    <Link to="/cart" className="block hover:text-yellow-400">Cart</Link>
    {!isAuthenticated ? (
      <>
        <Link to="/login" className="block hover:text-yellow-400">Login</Link>
        {/* <Link to="/register" className="block hover:text-yellow-400">Register</Link> */}
      </>
    ) : (
      <button
        onClick={handleLogout}
        className="block w-full text-left hover:text-yellow-400"
      >
        Logout
      </button>
    )}
  </div>
</nav>

  );
}

export default Navbar;