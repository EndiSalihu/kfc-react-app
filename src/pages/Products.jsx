import axios from 'axios';
import { Title, ProductsList, CategoryBtns } from '../components/index';
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';

const url = import.meta.env.VITE_API_URL;

export const loader = async () => {
  const res = await axios(url);
  const products = res.data;
  return { products };
};

const Products = () => {
  const { products } = useLoaderData();
  const [openCategories, setOpenCategories] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [visibleProductsCount, setVisibleProductsCount] = useState(6); // Initial number of products to display
  const [isLoadingMore, setIsLoadingMore] = useState(false); // Local loading state
  const categories = [
    'All',
    'Burgers',
    'Wraps',
    'Salads',
    'Sides',
    'Wings',
    'Beverages',
    'Alcohol',
    'Hot Drinks',
  ];

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  const visibleProducts = filteredProducts.slice(0, visibleProductsCount);

  const handleLoadMore = async () => {
    setIsLoadingMore(true);

    setTimeout(() => {
      setVisibleProductsCount((prevCount) => prevCount + 6); 
      setIsLoadingMore(false);
    }, 500); 
  };

  return (
    <>
      <div className="flex justify-center flex-col">
        <Title text={'real & fresh meals'} />
        <p className="text-slate-500 mb-6 text-center">
          We`re proud to serve wholesome, abundant, hot meals the way they
          should be served—made with high-quality fresh chicken, freshly
          prepared by real cooks in our kitchens.
        </p>
      </div>

      <Title text={'Menu'} />
      <button
        onClick={() => setOpenCategories(!openCategories)}
        className="btn px-6 py-2 bg-red-600 text-white rounded-xl hover:bg-red-800 w-full max-w-xs text-center"
      >
        {openCategories ? 'Close Categories' : 'Open Categories'}
      </button>
      {openCategories && (
        <CategoryBtns
          categories={categories}
          setSelectedCategory={setSelectedCategory}
        />
      )}

      <h3 className="my-6">
        Total Products:
        <span className="font-bold">{filteredProducts.length}</span>
      </h3>
      <ProductsList products={visibleProducts} />

      <div className='flex justify-center'>
      {visibleProducts.length < filteredProducts.length && (
        <button
          onClick={handleLoadMore}
          className="mt-6 btn px-6 py-2 bg-red-600 text-white rounded-xl hover:bg-red-800 "
          disabled={isLoadingMore}
        >
          {isLoadingMore ? 'Loading...' : 'Load More'}
        </button>
      )}
      </div>

    </>
  );
};

export default Products;
