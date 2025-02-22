"use client"
import Image from 'next/image';
import { useEffect, useRef } from 'react';

const images2 = [
  "/assets/n1.webp", "/assets/n2.webp", "/assets/n3.webp", "/assets/n4.webp", "/assets/n5.webp", "/assets/n6.webp"
];

export default function NewspaperTheme() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let animationFrame;

    const scroll = () => {
      if (slider) {
        slider.scrollLeft += 1;
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="p-0 min-h-screen flex justify-center items-center overflow-hidden bg-gradient-to-b from-red-700 to-black">
      <div 
        ref={sliderRef} 
        className="w-full flex overflow-hidden whitespace-nowrap"
        style={{ scrollBehavior: 'smooth' }}
      >
        {[...images2, ...images2].map((src, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 mx-2 w-[300px] h-[200px] flex justify-center items-center"
          >
            <Image 
              src={src} 
              alt={`News cutting ${index % images2.length + 1}`} 
              width={300} 
              height={200} 
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}