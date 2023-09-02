import React from 'react';
import RootLayout from '../../components/Layouts/RootLayout';

const Home = () => {
  return (
    <div>
      <h1>This is home page</h1>
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  );
};