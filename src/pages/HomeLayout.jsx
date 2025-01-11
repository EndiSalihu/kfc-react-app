import { Navbar, Loading, ScrollToTop } from '../components/index';
import { useNavigation, Outlet } from 'react-router-dom';
import signImg from '../assets/sign.svg';

const HomeLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <>
      <ScrollToTop />
      <Navbar />

      <main className="mx-24 max-lg:mx-20 max-md:mx-10 mb-16">
        <div className="flex justify-center">
          <img src={signImg} alt="decor" />
        </div>

        {isLoading ? <Loading /> : <Outlet />}
      </main>
    </>
  );
};

export default HomeLayout;
