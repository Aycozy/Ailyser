import React from 'react';
import Laptop from '../assets/laptop.jpg';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>DATA ANALYTICS DASHBOARD</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics With The Power Of Artificial intelligence</h1>
          <p>
          Artificial intelligence is the future of data analytics. Ailyser is a data analytics platform that uses artificial intelligence to generate optimum data analytics essential for revenue increase in your Business platforms.
          Check out the satisfactory results from our recent clients.
          </p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Ckeck out</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
