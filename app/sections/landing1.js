"use client"
import { useState, useEffect } from 'react';
import Loader from '../components/loader';
export default function Landing() {
  const [isLoading, setIsLoading] = useState(true);


  
    // Simulating a 3-second delay for loading
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3000); // 3-second delay
  
      return () => clearTimeout(timer); // Cleanup timer on unmount
    }, []);

  return (
    <div className="md:h-[55rem] xl:h-[60rem] h-screen w-full relative z-0 overflow-hidden">
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <>
          <div className='md:w-1/2 md:right-0 w-full  md:p-0 flex flex-col  items-center absolute h-full'>
<div className='absolute md:items-center h-1/2 lg:right-14 xl:right-20 lg:top-36 bottom-3 md:bottom-0 grid  sm:grid grid-cols-2 md:grid-rows-2 lg:gap-4 xl:gap-8 gap-6 gap-y-0 md:gap-y-0 items-end mb-16 sm:mb-72 lg:mb-10'>
  <div className='bg-black md:bg-transparent bg-opacity-50 backdrop-blur-sm rounded-3xl border-2 text-sm xl:text-base border-neutral-400 h-40 w-36 xl:h-52 xl:w-48 lg:h-40 -mb-10 lg:w-36  z-50 text-neutral-300 flex flex-col items-center p-2 text-center justify-center font-Orbitron '>
  Formula Bharat 2025
      <div className='xl:w-32 xl:h-32 lg:w-20 lg:h-24 w-20 h-24 flex items-center flex-col mt-2'>
    <img src='https://ik.imagekit.io/r70knk9pu/image.png?updatedAt=1739207713019 ' />
    </div>
    <div className='absolute xl:text-6xl text-4xl lg:text-5xl font-serif'> 
      1
    </div>
    <div className='absolute xl:text-xl bottom-1 font-serif'> 
    AIR
    </div>
    
  </div>
  <div className='backdrop-blur-sm rounded-3xl border-2  text-sm xl:text-base border-neutral-400 h-40 w-36 xl:h-52 xl:w-48 lg:h-40 lg:w-36 z-50 text-neutral-300 -mb-10 flex flex-col items-center p-2 text-center justify-center font-Orbitron '>
  Formula Bharat 2025
      <div className='xl:w-32 xl:h-32 lg:w-20 lg:h-24 w-20 h-24 flex items-center flex-col mt-2'>
    <img src='https://ik.imagekit.io/r70knk9pu/image.png?updatedAt=1739207713019 ' />
    </div>
    <div className='absolute xl:text-6xl text-4xl lg:text-5xl font-serif'> 
      1
    </div>
    <div className='absolute xl:text-xl bottom-1 font-serif'> 
      Endurance Race   </div>
    
  </div>
  <div className='hidden backdrop-blur-sm rounded-3xl border-2 text-sm xl:text-base border-neutral-400 bg-black bg-opacity-55 md:bg-transparent md:bg-opacity-0 h-40 w-36 xl:h-52 xl:w-48 lg:h-40 lg:w-36 z-50 text-neutral-300 md:flex flex-col items-center p-2 text-center justify-center font-Orbitron '>
  Formula Bharat 2025
      <div className='xl:w-32 xl:h-32 lg:w-20 lg:h-24  w-20 h-24 flex items-center flex-col mt-2'>
    <img src='https://ik.imagekit.io/r70knk9pu/image.png?updatedAt=1739207713019 ' />
    </div>
    <div className='absolute xl:text-6xl text-4xl lg:text-5xl font-serif'> 
      1
    </div>
    <div className='absolute xl:text-xl bottom-1 font-serif'> 
    Dynamics    </div>
  </div>
  <div className='hidden backdrop-blur-sm rounded-3xl border-2 text-sm xl:text-base border-neutral-400 h-40 w-36 xl:h-52 xl:w-48 lg:h-40 lg:w-36 z-50 text-neutral-300 md:flex flex-col items-center p-2 text-center justify-center font-Orbitron '>
  Formula Bharat 2025
      <div className='xl:w-32 xl:h-32 lg:w-20 lg:h-24 w-20 h-24 flex items-center flex-col mt-2'>
    <img src='https://ik.imagekit.io/r70knk9pu/image.png?updatedAt=1739207713019 ' />
    </div>
    <div className='absolute xl:text-6xl text-4xl lg:text-5xl font-serif'> 
      1
    </div>
    <div className='absolute xl:text-xl  bottom-1 font-serif'> 
    Efficiency    </div>
    
  </div>
</div>

<div className=' z-50 hidden absolute md:text-base xl:text-2xl bottom-0 xl:pt-14  h-1/6 right-0 md:flex items-center xl:p-9 lg:p-9   w-screen xl:h-1/6  text-justify font-Fn  text-neutral-200 shadow-2xl'>
    Welcome to the official website of Yeti Racing Cusat - the first ever team from Kerala to win Formula Bharat.
    </div>
    </div>
  {/* Background image */}
  <div className='w-full sm:hidden block h-full bg-black opacity-50 absolute z-10 overflow-hidden'></div>
  <img 
    src="https://ik.imagekit.io/r70knk9pu/20250124_021845_1_.jpg?updatedAt=1739204278923"
     
    loading="lazy"
    className="object-cover sm:hidden w-full h-full object-top absolute sm:relative  sm:realtive top-0 left-0 z-0"
  />



<div className='h-full overflow'>
  {/* Second Image */}
   <img 
    src="https://ik.imagekit.io/r70knk9pu/Group%2034%20(5).jpg?updatedAt=1740405888331" 

    loading="lazy"
    className="object-cover sm:block hidden  overflow  w-full h-full  absolute top-0 left-0 z-40"
  /> 
  </div>
     <img 
    src="https://ik.imagekit.io/r70knk9pu/Photoroom-20250210_215354.png?updatedAt=1739204736891" 

    loading="lazy"
    className="object-cover sm:hidden overflow-hidden  w-full h-full object-top absolute top-0 left-0 z-40"
  /> 
 <h1
      className="xl:mt-32 lg:mt-24 sm:hidden mt-40 md:ml-4 z-30 object-cover font-Inter font-extrabold lg:text-[9rem] xl:text-[14rem] text-[6rem] md:tracking-wider w-full h-full object-bottom absolute top-0 flex flex-col leading-[85px] xl:leading-[185px] lg:leading-[125px] text-gray-300  bg-gradient-to-br to-neutral-600  from-neutral-100  text-transparent bg-clip-text"
    >
      YETI <span>RACING</span>
    </h1> 
        </>
      )}
    </div>
  );
}