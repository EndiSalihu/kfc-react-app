import { landingDesc } from '../utils/index';
import menu1 from '../assets/remix-menu-1.jpg';
import menu2 from '../assets/remix-menu-2.jpg';
import harland from '../assets/harland.png';
import Title from './Title';

const Hero = () => {
  return (
    <section>
      <Title text={'the right way to do chicken'} />

      <div className="flex justify-evenly max-lg:flex-col items-center gap-10">
        <img className="w-[27rem]" src={menu1} alt="remix-menu-1" />
        <img className="w-[27rem]" src={menu2} alt="remix-menu-2" />
      </div>

      <div className="mt-20 flex flex-col">
        <Title text={'what made us great is still what makes us great'} />

        <div className="flex max-lg:flex-col gap-10 max-lg:gap-0 max-lg:items-center">
          <img className="w-96" src={harland} alt="harland-image" />
          <p className="text-slate-500 text-center mt-10 w-[60%] max-lg:w-full">
            {landingDesc}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
