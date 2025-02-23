"use client"
import React from 'react';

import { useEffect, useRef, useState } from "react";
import AnimatedGrid from '../components/grid';
export default function Crowdfund(){

  const img1 = "https://ik.imagekit.io/r70knk9pu/yeti%202.jpg?updatedAt=1739021442131"
  const img5 = "https://ik.imagekit.io/r70knk9pu/Yeti%20Racing-2.jpg?updatedAt=1739021447030"
  const img3 = "https://ik.imagekit.io/r70knk9pu/IMG_1257.JPG?updatedAt=1739023057605"
  const img4 = "https://ik.imagekit.io/r70knk9pu/WhatsApp%20Image%202025-02-08%20at%2018.59.30_ec6e9de5.jpg?updatedAt=1739021433395"
  const img2 = "https://ik.imagekit.io/r70knk9pu/mayur_6.1-08.jpg?updatedAt=1739021321620"
  const img6 = "https://ik.imagekit.io/r70knk9pu/mayur_6.1-47.jpg?updatedAt=1739018987583"
  const img7 = "https://ik.imagekit.io/r70knk9pu/DSC_0139.JPG?updatedAt=1739023634785"

    const [progress, setProgress] = useState(0);
    const progressRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            // Increment the progress gradually
            let currentProgress = 0;
            const interval = setInterval(() => {
              if (currentProgress < 75) {
                currentProgress += 1;
                setProgress(currentProgress);
              } else {
                clearInterval(interval); // Stop when it reaches 45%
              }
            }, 20); // Update every 50 milliseconds
          }
        },
        {
          threshold: 0.5, // Trigger when 50% of the section is visible
        }
      );
  
      if (progressRef.current) {
        observer.observe(progressRef.current);
      }
  
      return () => {
        if (progressRef.current) {
          observer.unobserve(progressRef.current);
        }
      };
    }, []);

    return(
        <div ref={progressRef} className=" text-white flex sm:flex-col flex-row h-screen bg-gradient-to-b from-black to-red-700 ">
           {/* <div className="z-0 mt-5 relative inset-0 h-screen w-full bg-[radial-gradient(rgba(211,211,211,0.5)_1px,transparent_1px)] [background-size:36px_36px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_40%,transparent_100%)]">
</div> */}
 <div className=" z-0 flex relative items-start fixed inset-0 h-screen w-full" >
        <AnimatedGrid className="custom-class-for-grid " />
        </div>

           {/* <img src={abstract} alt="abs" className='absolute flex z-0 h-full w-full pb-10'/> */}
            <div className="z-10 flex absolute flex-col p-4 sm:w-1/2 w-full h-screen left-0 justify-center items-center ">
           
            <div className=" relative bottom-10 flex  justify-center  md:ml-0 text-5xl lg:text-6xl xl:text-7xl font-zenDots bg-gradient-to-r from-gray-300 via-neutral-100  to-neutral-300  text-transparent bg-clip-text w-full ">Support Us</div>
      <div className="h-96 md:w-full max-w-lg bg-opacity-10 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-black  backdrop-blur-sm text-gray-100 p-8 rounded-3xl border-2 border-green-600 md:h-90 w-90">
        <div className="space-y-6 ">
          {/* Header */}
          <h1 className="text-3xl tracking-wide text-gray-200 font-Goldman">
            Join the Drive
          </h1>
          
          {/* Description */}
          <p className="md:text-xl  text-lg leading-relaxed font-Rajdhani">
            Join YETI on the fast track to innovation
            — help us bring our student-built Formula
            race car to life with your support!
          </p>
          
          {/* Amount */}
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-3 ">
          <div
            className="bg-gradient-to-r from-red-700 to-pink-500 h-3 rounded-full transition-all duration-75"
            style={{ width: `${progress}%` }}
          ></div>
        </div> 
          
          {/* Progress Percentage */}
          <div className="flex justify-end text-lg font-Rajdhani text-white-700">
            {progress}%
          </div>
          
          {/* CTA Button */}
          <div className='flex justify-center '>
          <div className="mx-auto flex w-full max-w-lg items-center justify-center">
  <div
    className=" relative z-10 flex cursor-pointer items-center overflow-hidden rounded-xl  p-[1.5px]"
  >
    <div
      className=" animate-rotate  absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#ffffff_20deg,transparent_120deg)]"
    ></div>
    <div className="hover:scale-105 relative z-20 flex w-full rounded-[0.60rem] bg-green-700  p-2 md:p-0">
      <a href='/funding'>
      <button
        type="text"
        className="mr-2 inline-block h-full flex-1 rounded-lg bg-transparent md:px-2 md:py-3  text-white focus:outline-none  font-Goldman text-xl md:text-xl "
      >        Back our team</button></a>


      
    </div>
  </div>
</div>
          </div>
        </div>
      </div>
            </div>
            <div className="md:flex h-screen  w-1/2 right-0 absolute justify-center items-center hidden ">
                <div className="hidden space-x-6  absolute z-20 right-0 md:space-x-4  sm:flex h-screen">
                <div className=" overflow-hidden ">
                  <ul className="flex flex-col items-center justify-center  min-w-max animate-infinite-scrollyr space-y-3">
                    <li>
                      <img src={img1} height="530" loading="lazy" width="210" alt="helloscore"  className='aspect-[3/4] object-cover'/>
                    </li>
                    <li>
                      <img src={img2} height="130" loading="lazy" width="210" alt="tyreguru" />
                    </li>
                    <li>
                      <img src={img3} height="130" loading="lazy" width="210" alt="eds"  />
                    </li>
                    <li>
                      <img src={img4} height="130" loading="lazy" width="210" alt="dts" className='aspect-[12/16] object-cover'/>
                    </li>
                    <li>
                      <img src={img5} height="130" loading="lazy" width="210" alt="santamonica" />
                    </li>
                
                    {/* Duplicate set */}
                    <li>
                      <img src={img6} height="130" loading="lazy" width="210" alt="helloscore" className='aspect-[4/4] object-cover'/>
                    </li>
                    <li>
                      <img src={img7} height="130" loading="lazy" width="210" alt="tyreguru" className='aspect-[4/5] object-cover'/>
                    </li>
                    <li>
                      <img src={img1} height="130" loading="lazy" width="210" alt="eds" className='aspect-[3/4] object-cover' />
                    </li>
                    <li>
                      <img src={img2} height="130" loading="lazy" width="210" alt="dts" />
                    </li>
                    <li>
                      <img src={img6} height="130" loading="lazy" width="210" alt="santamonica" />
                    </li>
                    <li>
                      <img src={img4} height="130" loading="lazy" width="210" alt="helloscore" className='aspect-[12/16] object-cover'/>
                    </li>
                  </ul>
                </div>
                <div className=" overflow-hidden pb-3">
                  <ul className="flex flex-col items-center justify-center min-w-max animate-infinite-scrollyl space-y-3">
                    <li>
                      <img src={img3} height="130" loading="lazy" width="210" alt="helloscore" />
                    </li>
                    <li>
                      <img src={img6} height="130" loading="lazy" width="210" alt="tyreguru" />
                    </li>
                    <li>
                      <img src={img2} height="130" loading="lazy" width="210" alt="eds" />
                    </li>
                    <li>
                      <img src={img1} height="130" loading="lazy" width="210" alt="dts" className='aspect-[3/4] object-cover'/>
                    </li>
                    <li>
                      <img src={img7} height="130" loading="lazy" width="210" alt="santamonica" className='aspect-[4/5] object-cover'/>
                    </li>
                
                    {/* Duplicate set */}
                    <li>
                      <img src={img1} height="130" loading="lazy" width="210" alt="helloscore" className='aspect-[3/4] object-cover'/>
                    </li>
                    <li>
                      <img src={img2} height="130" loading="lazy" width="210" alt="tyreguru"/>
                    </li>
                    <li>
                      <img src={img3} height="130" loading="lazy" width="210" alt="eds" />
                    </li>
                    <li>
                      <img src={img4} height="130" loading="lazy" width="210" alt="dts" className='aspect-[12/16] object-cover'/>
                    </li>
                    <li>
                      <img src={img5} height="130" loading="lazy" width="210" alt="santamonica" />
                    </li>
                
                    {/* Duplicate set */}
                    <li>
                      <img src={img6} height="130" loading="lazy" width="210" alt="helloscore" />
                    </li>
                    <li>
                      <img src={img7} height="130" loading="lazy" width="210" alt="tyreguru" className='aspect-[4/5] object-cover'/>
                    </li>
                    <li>
                      <img src={img1} height="130" loading="lazy" width="210" alt="eds" className='aspect-[3/4] object-cover' />
                    </li>
                    <li>
                      <img src={img2} height="130" loading="lazy" width="210" alt="dts" />
                    </li>
                    <li>
                      <img src={img6} height="130" loading="lazy" width="210" alt="santamonica" />
                    </li>
                    <li>
                      <img src={img4} height="130" loading="lazy" width="210" alt="helloscore" />
                    </li>
                  </ul>
                </div>
                
                <div className=" overflow-hidden pb-3 sm:hidden lg:hidden xl:block">
                  <ul className="flex flex-col items-center justify-center  min-w-max animate-infinite-scrollyr space-y-3">
                  <li>
                      <img src={img1} height="130" loading="lazy" width="210" alt="helloscore" className='aspect-[3/4] object-cover' />
                    </li>
                    <li>
                      <img src={img2} height="130" loading="lazy" width="210" alt="tyreguru"/>
                    </li>
                    <li>
                      <img src={img3} height="130" loading="lazy" width="210" alt="eds" />
                    </li>
                    <li>
                      <img src={img4} height="130" loading="lazy" width="210" alt="dts" className='aspect-[12/16] object-cover'/>
                    </li>
                    <li>
                      <img src={img5} height="130" loading="lazy" width="210" alt="santamonica" />
                    </li>
                
                    {/* Duplicate set */}
                    <li>
                      <img src={img6} height="130" loading="lazy" width="210" alt="helloscore" />
                    </li>
                    <li>
                      <img src={img7} height="130" loading="lazy" width="210" alt="tyreguru" className='aspect-[4/5] object-cover'/>
                    </li>
                    <li>
                      <img src={img1} height="130" loading="lazy" width="210" alt="eds" className='aspect-[3/4] object-cover'/>
                    </li>
                    <li>
                      <img src={img2} height="130" loading="lazy" width="210" alt="dts" />
                    </li>
                    <li>
                      <img src={img6} height="130" loading="lazy" width="210" alt="santamonica" />
                    </li>
                    <li>
                      <img src={img4} height="130" loading="lazy" width="210" alt="helloscore" className='aspect-[12/16] object-cover'/>
                    </li>
                
                    {/* Duplicate set */}
                    <li>
                      <img src={img1} height="130" loading="lazy" width="210" alt="helloscore" className='aspect-[3/4] object-cover' />
                    </li>
                    <li>
                      <img src={img2} height="130" loading="lazy" width="210" alt="tyreguru"/>
                    </li>
                    <li>
                      <img src={img3} height="130" loading="lazy" width="210" alt="eds" />
                    </li>
                    <li>
                      <img src={img4} height="130" loading="lazy" width="210" alt="dts" className='aspect-[12/16] object-cover'/>
                    </li>
                    <li>
                      <img src={img5} height="130" loading="lazy" width="210" alt="santamonica" />
                    </li>
                
                    {/* Duplicate set */}
                    <li>
                      <img src={img6} height="130" loading="lazy" width="210" alt="helloscore" />
                    </li>
                    <li>
                      <img src={img7} height="130" loading="lazy" width="210" alt="tyreguru" className='aspect-[4/5] object-cover'/>
                    </li>
                    <li>
                      <img src={img1} height="130" loading="lazy" width="210" alt="eds" className='aspect-[3/4] object-cover' />
                    </li>
                    <li>
                      <img src={img2} height="130" loading="lazy" width="210" alt="dts" />
                    </li>
                    <li>
                      <img src={img6} height="130" loading="lazy" width="210" alt="santamonica" />
                    </li>
                    <li>
                      <img src={img4} height="130" loading="lazy" width="210" alt="helloscore" className='aspect-[12/16] object-cover'/>
                    </li>
                  </ul>
                </div>
                </div>
            </div>
        </div>
    )
}