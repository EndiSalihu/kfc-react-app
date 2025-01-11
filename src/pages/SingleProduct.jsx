import axios from 'axios';
import Product from '../components/Product'
import { useLoaderData, Link } from 'react-router-dom';
import { addItem } from '../features/cartSlice';
import { useDispatch } from 'react-redux';
import { FaArrowLeft } from "react-icons/fa";


const url = import.meta.env.VITE_API_URL;

export const loader = async ({ params }) => {
  const { id } = params;
  const res = await axios(`${url}/${id}`);
  const product = res?.data;
  return { product };
};

const SingleProduct = () => {
  const dispatch = useDispatch();

  const { product } = useLoaderData();
  const { id, image, category, description, title, price } = product;

  const cartProduct = { prodId: id, id, image, description, title, price, category, amount: 1 };

  return (
    <>
        <Link className='flex gap-2 font-bold uppercase items-center my-4' to="/products"> <FaArrowLeft /> Back</Link>
      <div className="mt-4 flex flex-col items-center justify-center">
        <Product id={id} image={image} category={category} description={description} title={title} price={price} />
        <button onClick={() => dispatch(addItem({ prodId: id, product: cartProduct }))}
          className="mt-6 btn px-6 py-2 bg-red-600 text-white rounded-xl hover:bg-red-800 w-full max-w-xs uppercase"
        >
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default SingleProduct;
