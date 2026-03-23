import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/CartSlice";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  if (!product) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
 <div className="max-w-6xl mx-auto p-10 grid grid-cols-1 md:grid-cols-2 gap-10">

      {/* Product Image */}
      <div>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full rounded shadow"
        />
      </div>

      {/* Product Info */}
      <div>

        <h1 className="text-3xl font-bold mb-4">
          {product.title}
        </h1>

        <p className="text-gray-600 mb-4">
          {product.description}
        </p>

        <p className="text-xl font-semibold mb-4">
          Brand: {product.brand}
        </p>

        <p className="text-2xl text-green-600 font-bold mb-6">
          ${product.price}
        </p>

        <button
          onClick={() => dispatch(addToCart(product))}
          className="bg-yellow-400 px-6 py-2 rounded hover:bg-yellow-500 transition"
        >
          Add to Cart
        </button>

      </div>

    </div>
  );
}

export default ProductDetails;