import { useSelector, useDispatch } from 'react-redux';
import { addItem, decreaseItem, removeItem } from '../features/cartSlice';
import { IoAddCircle, IoRemoveCircle } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const CartItems = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div className="flex flex-col items-center gap-6">
      {cartItems?.length > 0 ? (
        cartItems.map((item) => (
          <div key={item.id}
            className="w-[76%] max-lg:w-full flex justify-between items-center max-md:flex-col border rounded-xl py-2.5 px-5"
          >
            {/* Cart Product Details */}
            <div className='flex items-center max-md:flex-col'>
            <img className="w-44 max-md:w-50" src={item.image} alt={item.title} />

            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-2xl  max-md:text-lg">{item.title}</h2>
              <p className="text-red-600 font-bold text-xl">${item.price}</p>
              <p className="text-slate-500 mb-4">{item.category}</p>
            </div>
            </div>

            {/* Quantity controls and remove button */}
            <div className="flex flex-col items-center gap-4">
              <div className="flex gap-2 items-center">
                <button
                  onClick={() =>
                    dispatch(decreaseItem({ prodId: item.id, product: item }))
                  }
                  className="text-4xl text-red-600 hover:text-red-800"
                >
                  <IoRemoveCircle />
                </button>

                <p className="text-2xl font-bold text-red-600">{item.amount}</p>

                <button
                  onClick={() =>
                    dispatch(addItem({ prodId: item.id, product: item }))
                  }
                  className="text-4xl text-green-600 hover:text-green-800"
                >
                  <IoAddCircle />
                </button>
              </div>

              <div>
                <button
                  onClick={() => dispatch(removeItem({ prodId: item.id }))}
                  className="mt-4 text-lg text-red-600 hover:text-red-800"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="flex flex-col items-center mt-16 gap-3">
          <h2 className="text-3xl text-red-600 text-center">
            Your cart is empty!
          </h2>
          <Link className="hover:underline text-lg text-slate-500" to="/products">
            Explore Our Food Menu
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartItems;
