import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function CategoryDropdown() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
   <div className="bg-white text-black shadow-lg rounded w-48 max-h-80 overflow-y-auto z-50">

      {categories.map((cat) => (
        <Link
          key={cat.slug}
          to={`/category/${cat.slug}`}
          className="block px-4 py-2 hover:bg-gray-100"
        >
          {cat.name}
        </Link>
      ))}

    </div>
  );
}

export default CategoryDropdown;