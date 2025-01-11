import Text from './Text';
import { Link } from 'react-router-dom';

const Product = ({ id, title, image, description, price, category }) => {
  return (
    <Link
      to={`/products/${id}`}
      className="flex flex-col items-center justify-between h-max group"
    >
      <div className="overflow-hidden flex justify-center items-center w-full">
        <img
          className="w-full max-w-[300px] transition-transform duration-300 group-hover:scale-110 object-cover"
          src={image}
          alt={title}
        />
      </div>
      <h2 className="font-bold text-2xl text-center mb-4">{title}</h2>
      <p>{category}</p>
      <p className="text-red-600 font-bold text-2xl">${price}</p>
      <Text description={description} />
    </Link>
  );
};

export default Product;
