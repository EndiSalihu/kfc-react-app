import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Totals, CartItems } from '../components/index';

const Cart = () => {
  const { cartQuantity } = useSelector((state) => state.cart);

  return (
    <>
      {/* breadcrumbs */}
      <div className="flex gap-2 font-bold uppercase items-center my-4">
        <Link to="/">Home</Link>
        <MdOutlineKeyboardArrowRight className="text-xl text-slate-500" />
        <Link to="/cart">Cart</Link>
      </div>

      {cartQuantity > 0 && (
        <h2 className="text-xl">
          Items added (<span className="text-red-600">{`${cartQuantity}`}</span>
          )
        </h2>
      )}

      {/* added items & total price */}
      <div className="flex flex-col gap-10 mt-6 ">
        <CartItems />
        {cartQuantity > 0 && <Totals />}
      </div>
    </>
  );
};

export default Cart;
