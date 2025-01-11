import { NavLink } from 'react-router-dom';
import { BsCartCheck } from 'react-icons/bs';
import { useSelector } from 'react-redux';

const NavLinks = ({ setIsOpenNav }) => {
  const { cartQuantity } = useSelector((state) => state.cart);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? 'text-black transition-transform duration-300 transform scale-110'
      : 'text-white hover:text-gray-700 transition-colors duration-300';

  const handleLinkClick = () => {
    if (setIsOpenNav) {
      setIsOpenNav(false); // Close the mobile menu
    }
  };

  return (
    <div className="flex gap-6 uppercase">
      <NavLink to="/" className={navLinkClass} onClick={handleLinkClick} title="Home">
        Home
      </NavLink>
      <NavLink to="/about" className={navLinkClass} onClick={handleLinkClick} title="About">
        About
      </NavLink>
      <NavLink to="/products" className={navLinkClass} onClick={handleLinkClick} title="Our Menu">
        Our Menu
      </NavLink>
      <NavLink to="/cart" className="relative" onClick={handleLinkClick} title="Cart">
        <div className="flex items-center">
          <BsCartCheck className="text-white text-2xl" aria-label="Cart icon" />
          <span
            className="absolute top-0 right-0 translate-x-2 translate-y-[-6px] bg-black text-white text-[13.5px] font-mono rounded-full w-5 h-4 flex items-center justify-center"
          >
            {cartQuantity || 0}
          </span>
        </div>
      </NavLink>
    </div>
  );
};

export default NavLinks;
