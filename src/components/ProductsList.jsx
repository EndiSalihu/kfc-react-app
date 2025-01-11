import Product from './Product';

const ProductsList = ({ products }) => {
  return (
    <div className="grid grid-cols-3 max-xl:grid-cols-2 max-lg:grid-cols-1 gap-12 items-center justify-items-center">
      {products.map(({ id, title, image, description, price, category }) => (
        <Product
          key={id}
          id={id}
          title={title}
          image={image}
          description={description}
          price={price}
          category={category}
        />
      ))}
    </div>
  );
};

export default ProductsList;
