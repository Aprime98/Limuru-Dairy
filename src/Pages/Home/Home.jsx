import React from "react";
import { Navbar, Hero, Products } from "../../components";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className=''>
        <Hero />
      </div>
      <div className='app__space'>
        <Products />
      </div>
    </>
  );
};

export default Home;
