import { clearCart } from "../features/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Totals = () => {
  const { cartTotal, cartShipping, cartOrderTotal } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="w-80 max-sm:w-full flex flex-col gap-6">
      <h2 className="text-2xl font-bold uppercase">Totals</h2>

      <div className="flex flex-col gap-1">
        <p>
          Total Price: <span className="font-bold">${cartTotal.toFixed(2)}</span>
        </p>
        <p>
          Delivery: <span className="font-bold">${cartShipping.toFixed(2)}</span>
        </p>
        <h3>
          Order Total: <span className="font-bold">${cartOrderTotal.toFixed(2)}</span>
        </h3>
      </div>

      <button
        onClick={() => dispatch(clearCart())}
        className="px-6 py-2 bg-red-600 text-white rounded-xl hover:bg-red-800 w-full text-center"
      >
        Clear Cart
      </button>
    </div>
  );
};

export default Totals;
