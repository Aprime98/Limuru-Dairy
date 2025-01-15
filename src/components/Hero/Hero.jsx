import { CowCanvas } from "../";
import { react } from "react";

import "./Hero.scss";
const Hero = () => {
  return (
    <div className='app__hero'>
      <div className='app__hero-text'>
        <div className='app__hero-inside'>
          <h1>
            KARIBU👋<span>Limuru Dairy</span>
          </h1>

          <p className='font-Poppins text-xl lg:text-2xl font-semibold text-grass-green'>
            " The hidden gem of Kenyan agriculture <br /> In the rolling hills
            of Limuru."
          </p>
        </div>
      </div>
      <CowCanvas />
    </div>
  );
};

export default Hero;
