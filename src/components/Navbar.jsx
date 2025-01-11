import { IoReorderThreeOutline } from 'react-icons/io5';
import { NavLinks } from './index';
import logo from '../assets/kfc-logo.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);

  return (
    <header className="py-3 px-6 bg-red-600 flex justify-around max-lg:justify-between max-lg:px-10 items-center">
      <Link to="/">
        <img className="w-16" src={logo} alt="kfc-logo" />
      </Link>

      <nav className="flex items-center gap-16 max-md:gap-7">
        
        {/* Desktop */}
        <div className="flex max-lg:hidden">
          <NavLinks />
        </div>

        <IoReorderThreeOutline
          onClick={() => setIsOpenNav(!isOpenNav)}
          className="max-lg:flex hidden text-4xl text-white cursor-pointer"
        />
      </nav>

      {/* Mobile Navigation */}
      {isOpenNav && (
        <div className="absolute top-0 left-0 w-full h-screen bg-red-600 flex flex-col items-center justify-center z-50">
          <button
            onClick={() => setIsOpenNav(false)}
            className="absolute top-4 right-6 text-2xl text-white"
          >
            ✕
          </button>
          <NavLinks  isOpenNav={isOpenNav} setIsOpenNav={setIsOpenNav}/>
        </div>
      )}
    </header>
  );
};

export default Navbar;
