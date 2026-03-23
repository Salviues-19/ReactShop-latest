import { Link } from "react-router-dom";
import {useDispatch} from "react-redux";
import { addToCart } from "../features/cart/CartSlice";
function ProductCard({ product }) {
  const dispatch = useDispatch();
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition">

      <Link to={`/product/${product.id}`}>
        <img
          src={product.thumbnail}
          alt={product.title}
         className="w-full h-48 object-contain p-4"
        />
      </Link>

      <div className="p-4">
        <h2 className="font-semibold text-lg mb-2 truncate">
          {product.title}
        </h2>

        <p className="text-gray-600 text-sm mb-2 truncate">
          {product.description}
        </p>

        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-green-600">
            ${product.price}
          </span>

          <button onClick={()=>dispatch(addToCart(product))} className="bg-yellow-400 px-3 py-1 rounded hover:bg-yellow-500 transition">
           Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;