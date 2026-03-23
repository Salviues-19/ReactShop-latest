import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SearchResults() {

  const { query } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/search?q=${query}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, [query]);

  return (
    <div className="p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((p) => (
        <div key={p.id} className="border p-4 rounded shadow">

          <img
            src={p.thumbnail}
            alt={p.title}
            className="w-full h-40 object-cover"
          />

          <h2 className="mt-2 font-semibold">{p.title}</h2>

          <p className="text-green-600 font-bold">${p.price}</p>

        </div>
      ))}
    </div>
  );
}

export default SearchResults;