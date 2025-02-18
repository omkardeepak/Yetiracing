"use client"

import pitlane2 from "../asset/hindu.jpg"
import Image from "next/image";
import { useEffect,useRef } from "react";
 export default function About1(){
    useEffect(() => {
        const items = document.querySelectorAll(".timeline-item");
    
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry, index) => {
              if (entry.isIntersecting) {
                setTimeout(() => {
                  entry.target.classList.add("visible");
                }, index * 200); // Stagger the appearance by 200ms per item
              } else {
                entry.target.classList.remove("visible");
              }
            });
          },
          { threshold: 0.02 } // Trigger when at least 10% of the item is visible
        );
    
        items.forEach((item) => {
          observer.observe(item);
        });
    
        return () => {
          items.forEach((item) => {
            observer.unobserve(item);
          });
        };
      }, []);

      const scrollDivRef = useRef(null);

      useEffect(() => {
        const scrollDiv = scrollDivRef.current;
    
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                scrollDiv.classList.add("-translate-y-0", "opacity-100");
              } else {
                scrollDiv.classList.remove("translate-y-0", "opacity-100");
              }
            });
          },
          { threshold: 0.5 } // Trigger when 10% of the div is visible
        );
    
        observer.observe(scrollDiv);
    
        return () => {
          if (scrollDiv) observer.unobserve(scrollDiv);
        };
      }, []);
    
      return (
        <div className="h-screen relative flex sm:flex-row flex-col items-center bg-black  z-0">
  <div className="absolute inset-0 bg-black opacity-50 z-30"></div>
  <Image src={pitlane2} loading="lazy" className="absolute  inset-0  flex item justify-center  z-20  object-cover  w-full h-full "/>
            <div className="md:w-1/2 left-0 justify-center  flex flex-col items-center absolute z-50 sm:p-7 md:h-full mb-10 md:space-y-16 space-y-3 w-full">
            <div className="text-center font-zenDots text-6xl md:text-7xl bg-gradient-to-r to-neutral-300 via-neutral-100 from-neutral-300  text-transparent bg-clip-text md:m-0 mt-12 mb-5">About us</div>
            
            <div className="border-2 md:w-5/6 md:h-4/6  justify-center  rounded-xl  bg-black bg-opacity-40 w-80  ">
            <div className="font-Goldman flex flex-col p-6 pt-2 pb-2 text-3xl lg:text-4xl xl:text-5xl md:p-6 md:pb-1 xl:pb-6 text-white"><div className="flex"><span className=""> Y</span>eti Racing</div><span className="lg:text-lg xl:text-xl text-sm text-red-600 font-Fw">CUSAT</span></div>
            <div ref={scrollDivRef} className=" opacity-0 transform  transition-all duration-700" >
            <div  className="  p-7 pb-2 pt-0  xl:pb-5 text-lg lg:text-[1rem] xl:text-2xl flex w-full  text-justify text-white font-Rajdhani">
            Yeti Racing, a leading force in Formula Student vehicle construction from Cochin University of Science and Technology, Kochi, embodies dedication and collaboration, with a strong presence in prestigious competitions like SAE SUPRA, FFS INDIA, and FORMULA BHARAT. Since our debut in SUPRA 2017, we've made significant strides in automotive engineering excellence.            </div>
            </div>
            
            <div className="justify-center w-full flex font-Rajdhani pb-4 md:pb-0"><a href="/team#achievements" className="text-white p-1 md:p-3 rounded-full border-2 flex flex-row hover:scale-110 border-green-700 hover:bg-green-500" >Know more <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right ml-2 items-center flex h-full" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
</svg></a></div>

            </div>
            </div>
          <div className=" w-full top-7 hidden h-3/2 z-40 md:w-1/2 md:right-0 flex-grow md:items-center absolute md:z-50  md:h-full  md:flex">
            <div className="relative w-full pr-5 xl:pr-20">
              {/* Timeline line */}
              <div className="absolute h-full rounded-lg w-1 bg-gradient-to-b from-orange-200 via-orange-500  to-red-700 left-1 bottom-7"></div>
    
              {/* Timeline Items */}
              <div className="relative md:mb-16 pl-10 timeline-item ">
                <div className="absolute left-0 top-0 w-3 h-3 bg-gray-100 rounded-full"></div>
                <div className="p-4 bg-black border-2 border-gray-400  bg-opacity-25 backdrop-blur-sm rounded-2xl shadow-md xl:w-full w-full h-36 space-y-3 space-x-3">
                  <h3 className="text-orange-500 md:text-lg font-Fb">SAE SUPRA 2017</h3>
                  <div className="absolute right-7 top-1 hover:scale-110">
                    <a href="/team#achievements" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="lightgreen" class="bi bi-arrow-up-right-circle" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z"/>
                </svg>
                </a>
                  </div>
                  <div className="text-gray-300 font-Fn flex flex-row md:space-x-6  xl:space-x-12  justify-center ">
                    <div className="flex flex-col font-Fw h-full items-center md:text-lg xl:text-2xl  text-red-600">
                    AIR 4<span className="font-fn md:text-xs xl:text-sm text-white">Design</span>
                    </div>
                    <div className="flex flex-col font-Fw h-full items-center md:text-lg xl:text-2xl text-red-600">
                    AIR 6<span className="font-fn md:text-xs xl:text-sm text-white">Endurance</span>
                    </div>
                    <div className="flex flex-col font-Fw h-full items-center md:text-lg xl:text-2xl text-red-600">
                    AIR 3<span className="font-fn md:text-xs xl:text-sm text-white">Cost</span>
                    </div>
                   
                  
                  </div>
                </div>
              </div>
    
              <div className="relative md:mb-16 pl-10 timeline-item ">
                <div className="absolute left-0 top-0 w-3 h-3 bg-gray-100 rounded-full"></div>
                <div className="p-4 bg-black border-2 border-gray-400  bg-opacity-25 backdrop-blur-sm rounded-2xl shadow-md xl:w-full md:w-full h-36 space-y-3 space-x-3">
                  <h3 className="text-orange-500 md:text-lg font-Fb  ">SAE SUPRA 2024</h3>
                  <div className="absolute right-7 top-1 hover:scale-110">
                    <a href="/team#achievements" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="lightgreen" class="bi bi-arrow-up-right-circle" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z"/>
                </svg>
                </a>
                  </div>
                  <div className="text-gray-300 font-Fn flex flex-row md:space-x-6  xl:space-x-12 justify-center ">
                    <div className="flex flex-col font-Fw h-full items-center md:text-lg xl:text-2xl text-red-600 ">
                    AIR 9<span className="font-fn md:text-xs xl:text-sm text-white">Overall</span>
                    </div>
                    <div className="flex flex-col font-Fw h-full items-center md:text-lg xl:text-2xl text-red-600 ">
                    AIR 6<span className="font-fn md:text-xs xl:text-sm text-white">Endurance</span>
                    </div>
                    <div className="flex flex-col font-Fw h-full items-center md:text-lg xl:text-2xl text-red-600 ">
                    AIR 3<span className="font-fn md:text-xs xl:text-sm text-white">Cost</span>
                    </div>
                   
                  
                  </div>
                  
                </div>
              </div>
    
              <div className="relative md:mb-16 pl-10 timeline-item md:block hidden">
                <div className="absolute left-0 top-0 w-3 h-3 bg-gray-100 rounded-full"></div>
                <div className="p-4 bg-black border-2 border-gray-400  bg-opacity-25 backdrop-blur-sm rounded-2xl shadow-md xl:w-full md:w-full h-36 space-y-3 space-x-3">
                  <h3 className="text-orange-500 text-lg font-Fb">Formula Bharath 2025</h3>
                  <div className="absolute right-7 top-1 hover:scale-110">
                    <a href="/team#achievements" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="lightgreen" class="bi bi-arrow-up-right-circle" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z"/>
                </svg>
                </a>
                  </div>
                  <div className="text-gray-300 font-Fn flex flex-row md:space-x-6  xl:space-x-12 justify-center">
                    <div className="flex flex-col font-Fw h-full items-center md:text-lg xl:text-2xl text-red-600 ">
                    AIR 1<span className="font-fn  md:text-xs xl:text-sm text-white">Overall</span>
                    </div>
                    <div className="flex flex-col font-Fw h-full items-center md:text-lg xl:text-2xl text-red-600 ">
                    AIR 1<span className="font-fn md:text-xs xl:text-sm text-white">Dynamics</span>
                    </div>
                    <div className="flex flex-col font-Fw h-full items-center md:text-lg xl:text-2xl text-red-600 ">
                    AIR 1<span className="font-fn md:text-xs xl:text-sm text-white">Efficiency</span>
                    </div>
                   
                  
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      );
    };
    