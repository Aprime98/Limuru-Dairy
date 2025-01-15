import React from "react";
import { images } from "../../constants";

const Products = () => {
  return (
    <div className='text-slate-800'>
      <div className='container mx-auto flex px-5 py-24 flex-col justify-center items-center space-y-5 lg:space-y-16'>
        {/* Titles */}
        <div className='flex justify-center items-center flex-col'>
          <h3 className='font-Poppins text-2xl lg:text-3xl font-semibold text-grass-green'>
            Freshness You Can Taste:
          </h3>
          <div className='w-1/3 h-0.5 bg-slate-700/50 mt-2 mb-4'></div>
          <h1 className='font-serif font-bold tracking-wide text-Dark-Choco text-xl lg:text-2xl'>
            Our Products.
          </h1>
        </div>

        {/* Products */}
        <div className='lg:flex justify-center items-center w-full space-y-16 lg:space-y-0 space-x-0 lg:space-x-8 font-Edu tracking-wider font-medium flex-1 text-xl'>
          {/* side 1 */}
          <div className='flex flex-col justify-center  items-center my-4 space-y-4 w-full lg:w-auto'>
            <h1 className='text-xl lg:text-2xl font-sans'>Yoghurts:</h1>
            <div className='w-full flex justify-between items-center flex-1 space-x-2'>
              <h1>Yoghurt - 50ml</h1>
              <span className='hidden lg:block'>@</span>
              <div className='w-1/5 h-[1px] bg-slate-800 lg:hidden' />
              <p>Ksh 120</p>
            </div>
            <div className='w-full flex justify-between items-center flex-1 space-x-2'>
              <h1>Yoghurt - 100ml</h1>
              <span className='hidden lg:block'>@</span>
              <div className='w-1/5 h-[1px] bg-slate-800 lg:hidden' />
              <p>Ksh 220</p>
            </div>
            <div className='w-full flex justify-between items-center flex-1 space-x-2'>
              <h1>Yoghurt - 200ml</h1>
              <span className='hidden lg:block'>@</span>
              <div className='w-1/5 h-[1px] bg-slate-800 lg:hidden' />
              <p>Ksh 420</p>
            </div>
          </div>

          {/* image */}
          <div className=' w-full lg:w-[600px]'>
            <img
              className='rounded-lg overflow-hidden w-full'
              src={images.products}
              alt='Prod image'
            />
          </div>

          {/* side 2 */}
          <div className='w-full flex flex-col justify-center  items-center my-4 space-y-4 lg:w-auto'>
            <h1 className='text-xl lg:text-2xl font-sans'>Packet Milk:</h1>
            <div className='w-full flex justify-between items-center flex-1 space-x-2'>
              <h1>Milk - 50ml</h1>
              <span className='hidden lg:block'>@</span>
              <div className='w-1/5 h-[1px] bg-slate-800 lg:hidden' />
              <p>Ksh 120</p>
            </div>
            <div className='w-full flex justify-between items-center flex-1 space-x-2'>
              <h1>Milk - 100ml</h1>
              <span className='hidden lg:block'>@</span>
              <div className='w-1/5 h-[1px] bg-slate-800 lg:hidden' />
              <p>Ksh 220</p>
            </div>
            <div className='w-full flex justify-between items-center flex-1 space-x-2'>
              <h1>Milk - 200ml</h1>
              <span className='hidden lg:block'>@</span>
              <div className='w-1/5 h-[1px] bg-slate-800 lg:hidden' />
              <p>Ksh 420</p>
            </div>
          </div>

          {/* button */}
          <div className='lg:hidden'>
            <div className='flex justify-center items-center'>
              <button className='bg-NavyBlue px-3 py-2 rounded-md text-white font-roboto font-semibold'>
                View More
              </button>
            </div>
          </div>
        </div>

        {/* button */}
        <div className='hidden lg:block'>
          <div className='flex justify-center items-center'>
            <button className='bg-NavyBlue px-3 py-2 rounded-md text-white font-roboto font-semibold'>
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
