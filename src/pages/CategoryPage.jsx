import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

function CategoryPage() {
  const { name } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/category/${name}`)
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => console.log(err));
  }, [name]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      <h1 className="text-2xl font-bold mb-6 capitalize">
        {name}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}

      </div>

    </div>
  );
}

export default CategoryPage;