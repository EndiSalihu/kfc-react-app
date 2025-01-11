const CategoryBtns = ({ categories, setSelectedCategory }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9 gap-4 my-10 place-items-center">
      {categories.map(category => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category === 'All' ? '' : category)}
          className="btn px-6 py-2 bg-red-600 text-white rounded-xl hover:bg-red-800 w-full max-w-xs text-center"
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryBtns;
