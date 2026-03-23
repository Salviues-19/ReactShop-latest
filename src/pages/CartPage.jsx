import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cart/CartSlice";
import { removeFromCart } from "../features/cart/CartSlice";
import { formatPrice } from "../utils/formatPrice";
function CartPage() {

  const { items, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

      <h1 className="text-2xl md:text-3xl font-bold mb-6">
        Your Cart
      </h1>

      {items.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-4">

            {items.map((item) => (

              <div
                key={item.id}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between border p-4 rounded-lg gap-4"
              >

                {/* Product Info */}
                <div className="flex items-center gap-4">

                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded"
                  />

                  <div>
                    <h3 className="font-semibold">
                      {item.title}
                    </h3>

                    <p className="text-gray-500">
                      {formatPrice(item.price)}
                    </p>
                  </div>

                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-3">

                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                  >
                    −
                  </button>

                  <span className="font-semibold">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => dispatch(addToCart(item))}
                    className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                  >
                    +
                  </button>

                </div>

                {/* Item Total */}
                <div className="font-semibold">
                  {formatPrice(item.price * item.quantity)}
                </div>
              </div>

            ))}

          </div>

          {/* Total Price */}
          <div className="mt-8 text-right">
            <h2 className="text-xl font-bold">
              Total: {formatPrice(totalPrice)}
            </h2>

          </div>
        </>
      )}

    </div>
  );
}

export default CartPage;