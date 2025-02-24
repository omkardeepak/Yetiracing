"use client"
import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { useEffect, useRef , useState } from 'react';
import confetti from 'canvas-confetti';
import AnimatedGrid from '../components/grid';
import Link from "next/link";
export default function TeamPage() {
  const confettiRef = useRef(null);

  const [yearisVisible, yearsetIsVisible] = useState(false);
  const divRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            yearsetIsVisible(true);
          } else {
            yearsetIsVisible(false);
          }
        });
      },
      { threshold: 0.3} // Adjust the threshold as needed
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };
  }, []);

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true); // Trigger the fade-in when the component mounts
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Trigger the confetti when the div is visible
          confetti({
            particleCount: 350,
            spread: 350,
            origin: { y: 0.4 },
            colors: ['#ffd700', '#ffffff'], // Customize confetti colors
          });
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the div is visible
      }
    );

    if (confettiRef.current) {
      observer.observe(confettiRef.current);
    }

    // Cleanup observer on unmount
    return () => {
      if (confettiRef.current) {
        observer.unobserve(confettiRef.current);
      }
    };
  }, []);

  const achievements = [
    { id: 1, title: "OVERALL", rank: "1", event: "FB 2025" },
    { id: 2, title: "DYNAMICS", rank: "1", event: "FB 2025" },
    { id: 3, title: "ENDURANCE RACE", rank: "1", event: "FB 2025" },
    { id: 4, title: "EFFICIENCY", rank: "1", event: "FB 2025" },
    { id: 5, title: "Eng. DESIGN", rank: "7", event: "FB 2025" },
    { id: 7, title: "OVERALL", rank: "9", event: "SAE SUPRA 2024" },
    { id: 8, title: "COST & MFG", rank: "3", event: "SAE SUPRA 2024" },
    { id: 9, title: "ENDURANCE RACE", rank: "6", event: "SAE SUPRA 2024" },
  ];

  const Badge = ({ achievement }) => (
    <div className="relative group flex flex-col items-center space-y-2 text-center">
      {/* Title */}
      <div className="md:text-lg text-red-500 font-Fn px-2 h-10">
        {achievement.title}
      </div>
      
      {/* Rank with spinning star */}
      <div className="relative">
        <div className="absolute inset-0 ">
          <img src="/assets/1st.png" alt="star"></img>
        </div>
        <div className="relative flex items-center justify-center w-24 h-24 md:w-32 md:h-32 bottom-3 ">
          <div className="text-3xl md:text-4xl font-Fb  drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-br from-gray-400 to-amber-200">
            {achievement.rank}
          </div>
        </div>
      </div>

      {/* Event */}
      <div className="text-xs md:text-sm text-neutral-300 md:font-Fb font-Fn">
        {achievement.event}
      </div>
    </div>
  );

  return (
    <div>
      
      <Navbar />
      <div className="-mt-32 z-0 flex items-start fixed inset-0 h-full w-full" >
        {/* <AnimatedGrid className="custom-class-for-grid " /> */}
        <div
  className=" z-0 mt-14 fixed inset-0 h-full w-full  bg-[radial-gradient(#d3d3d3_1px,transparent_1px)] [background-size:36px_36px] [mask-image:radial-gradient(50%_50%_at_50%_50%,#000_15%,transparent_100%)]"
></div>
        </div>
      <div className="min-h-screen bg-gradient-to-b from-red-900 via-neutral-950 to-neutral-950 pb-9 pt-28">
        <div className={`max-w-[1400px] mx-auto px-4 md:px-8 pt-16 transition-opacity duration-1000 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } `}>
          <h1 className="text-center mb-8 lg:mb-12">
            <span className="text-4xl lg:text-7xl font-zenDots text-neutral-50  flex justify-center animate-bounce">
              ABOUT<span className="text-red-600 ml-3 font-bold font-zenDots"> US</span>

            </span>
          </h1>
          
          <div
      className={`grid grid-cols-12 gap-4 md:gap-8 justify-center transition-opacity duration-1000 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >            <div className="col-span-12 md:col-start-2 md:col-span-10 mb-8 md:mb-20">
              <p className="p-7 sm:p-0 text-gray-300 md:text-2xl text-lg text-justify font-Rajdhani mb-10">
              Founded in 2016, Yeti Racing is the official Formula Student team of the School of Engineering at Cochin University of Science and Technology (CUSAT). Comprising 50 passionate and skilled members, we are driven by a shared commitment to engineering excellence and innovation. Our team designs and builds high-performance race cars to compete in prestigious motorsport events such as <span className='font-semibold'>FORMULA BHARAT, SAE SUPRA, FORMULA IMPERIAL and FFS INDIA.</span><br></br><br></br>
                 At Formula Bharat 2025, held at Kari Motor Speedway, Coimbatore, Yeti Racing made history by becoming the first team from Kerala to win the championship title in the combustion category - a landmark achievement that underscores our dedication, technical expertise, and perseverance. The team secured overall rank 1 in endurance, efficiency, and dynamics.  
              </p> 
              <p className="text-gray-300 md:text-2xl font-Rajdhani text-justify">
                    Looking ahead, Yeti Racing is gearing up for exciting challenges at Formula Imperial
                    2025 and Formula Bharat 2026 with aspirations to push the boundaries of design and performance even further.
                  </p> <br></br>
                  <p className="text-gray-300 md:text-2xl font-Rajdhani text-justify mb-10">
                   
                  </p>
                  


    <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 p-4 w-full">
      <Link href="https://www.suprasaeindia.org/">
        <button className="relative px-12 py-4 w-80 h-16 text-white text-lg font-semibold rounded-full transition-transform duration-300 ease-in-out border-2  bg-transparent border-green-400 flex justify-center items-center hover:scale-105 hover:shadow-[0_0_20px_rgba(34,197,94,0.7)]">
          SAE Supra
        </button>
      </Link>
      <Link href="https://www.formulabharat.com/">
        <button className="relative px-12 py-4 w-80 h-16 text-white text-lg font-semibold rounded-full transition-transform duration-300 ease-in-out border-2  bg-transparent border-green-400 flex justify-center items-center hover:scale-105 hover:shadow-[0_0_20px_rgba(34,197,94,0.7)]">
          Formula Bharat
        </button>
      </Link>
      <Link href="https://www.fmae.in/fmaeffsindia/">
        <button className="relative px-12 py-4 w-80 h-16 text-white text-lg font-semibold rounded-full transition-transform duration-300 ease-in-out border-2  bg-transparent border-green-400 flex justify-center items-center hover:scale-105 hover:shadow-[0_0_20px_rgba(34,197,94,0.7)]">
          FFS India
        </button>
      </Link>
    </div>
            </div>



            <div  ref={divRef} className="col-span-full grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8 mb-14">
              <div        className={`col-span-12 md:col-span-5 transition-transform duration-1000 ease-in-out transform ${
        yearisVisible ? ' md:translate-y-0 md:opacity-100 ' : 'md:translate-y-72 md:opacity-0 '
      }`}>
                {/* Two-column grid for mobile, three-column for desktop */}
                <div ref={confettiRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 gap-y-10 ">
                  {achievements.map((achievement) => (
                    <Badge key={achievement.id} achievement={achievement} />
                  ))}
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
{/* <div ref={confettiRef} className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from bg-red-950 via-black to-black">
      
    </div> */}
    <div className='relative z-20'>
      <Footer />
    </div>
      
    </div>
  );
}