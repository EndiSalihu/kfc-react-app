import { useNavigate } from 'react-router-dom';

const ErrBtns = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-4 flex gap-4">
      <button
        onClick={() => navigate(-1)}
        className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-800"
      >
        Go Back
      </button>
      <button
        onClick={() => navigate('/')}
        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-800"
      >
        Home
      </button>
    </div>
  );
};

export default ErrBtns;
