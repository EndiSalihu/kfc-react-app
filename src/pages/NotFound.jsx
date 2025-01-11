import { useRouteError } from 'react-router-dom';
import ErrBtns from '../components/ErrBtns';
import err_404 from '../assets/err-404.svg';

const NotFound = () => {
  const err = useRouteError();

  if (err.status === 404) {
    return (
      <div className="h-screen flex flex-col justify-center  gap-6 items-center">
        <img className="w-72" src={err_404} alt="error-404-page-not-found" />
        <h1 className="text-red-600 text-3xl">Page not found!</h1>
        <ErrBtns />
      </div>
    );
  }

  return (
    <div className="h-screen flex-col flex gap-3 items-center justify-center">
      <h1>
        Error: <span className="font-bold text-red-600">{err.message}</span>
      </h1>
      <ErrBtns />
    </div>
  );
};

export default NotFound;
