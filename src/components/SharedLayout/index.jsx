import { ButtonUp } from 'components/ButtonUp';
import Header from 'components/Header';
import { Loader } from 'components/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <ButtonUp />      
    </>
  );
};

export default SharedLayout;