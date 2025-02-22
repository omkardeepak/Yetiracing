 "use client"
import { useState, useEffect, useRef, useMemo } from "react";

import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { motion } from "framer-motion";
import Image from "next/image";

// Utility function for debouncing
const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

const images = [
  "/assets/DSC_0181.webp",
  "/assets/DSC_0027.webp",
  "/assets/DSC_0139.webp",
  "/assets/DSC_0173.webp",
  "/assets/DSC_0049.webp",
  "/assets/DSC_0473.webp",
  "/assets/2.webp",
  "/assets/3.webp",
];
const images1 = [
  "/assets/f1.webp",
  "/assets/f2.webp",
  "/assets/f3.webp",
  "/assets/f4.webp",
  "/assets/f5.webp",
  "/assets/f6.webp",
  "/assets/f7.webp",
  "/assets/f8.webp",
  "/assets/f9.webp",

  "/assets/f11.webp",

  "/assets/f13.webp",

  "/assets/f15.webp",
];




const VideoGallery = () => {
  // ... VideoGallery code remains unchanged
  const [viewport, setViewport] = useState({ width: 0, height: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // This will trigger the animation when the component is loaded
    setIsLoaded(true);

    const updateViewport = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateViewport();
    const debouncedResize = debounce(updateViewport, 150);
    window.addEventListener("resize", debouncedResize);
    return () => window.removeEventListener("resize", debouncedResize);
  }, []);

  
  const calculateFontSize = () => {
    const width = viewport.width * 0.85;  // Keep original width calculation
    const height = viewport.height * 0.98;
    return Math.min(width / 4.2, height / 0.85);  // Keep width ratio but adjust height
  };

  return (
    <div className="relative w-screen h-[50vh] md:h-screen bg-gradient-to-b from-black via-red to-red-950 flex items-center justify-center overflow-hidden pt-10 md:pt-52 pr-3">
      <div className="relative">
        {/* SVG mask for the full GALLERY text */}
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <mask id="textMask">
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="font-black uppercase tracking-tighter"
                style={{
                  fontSize: calculateFontSize(),
                  letterSpacing: "-0.08em",
                  transform: "scaleY(1.7)",  // Increased from 1.2 to 1.8 to make text taller
                  transformOrigin: "center",
                }}
                fill="white"
              >
                GALLERY
              </text>
            </mask>
          </defs>
        </svg>

        {/* Video masked to show within all letters */}
        <div className="relative w-screen h-screen">
          <video
            src="/assets/reel.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            style={{
              mask: "url(#textMask)",
              WebkitMask: "url(#textMask)"
            }}
          />
        </div>
      </div>
    </div>
  );
};

const Gallery = () => {
  
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped(prev => !prev);
    }, 5000); // Flip every 3 seconds

    return () => clearInterval(interval);
  }, []);
  



 
  return (
    <div className={`flex flex-col min-h-screen bg-black transition-opacity duration-500 `}>
      <Navbar />
      <VideoGallery />

      <div className="w-full min-h-screen p-8 bg-gradient-to-b from-red-950 via-red-900 to-black flex flex-col items-center">
  {/* Heading - Visible and Centered */}
  <h1 className="text-white text-4xl md:text-6xl text-center mb-8 font-zenDots">
    FORMULA BHARAT <span className="text-red-600">'</span>25
  </h1>

  <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-center gap-8">
    
    {/* Main Car Grid - Responsive Proportions */}
    <div className="relative w-full md:w-[70%] flex justify-center">
      <div className="relative w-[90%] md:w-full aspect-[3/2] border border-black overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-3 gap-0 w-full h-full">
          {/* Main Car Image - Ensuring Proper Fit */}
          <Image
            src="/assets/carhd.webp"
            alt="Full Car"
            fill
            className="object-cover object-center"
            priority
          />

          {/* Grid Overlay */}
          {images1.map((img, index) => (
            <div
              key={index}
              className="relative w-full h-full border-[.8px] border-black"
              style={{ perspective: "1000px" }}
            >
              <div
                className="absolute inset-0 w-full h-full transition-all duration-700"
                style={{
                  transformStyle: "preserve-3d",
                  transform: flipped ? "rotateY(180deg)" : "rotateY(90deg)",
                }}
              >
                {/* Front side - Transparent */}
                <div
                  className="absolute inset-0 w-full h-full bg-transparent"
                  style={{ backfaceVisibility: "hidden" }}
                />

                {/* Back side - Individual image */}
                <div
                  className="absolute inset-0 w-full h-full"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <Image
                    src={img}
                    alt={`Image ${index + 1}`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Rotating Image Section - Responsive Proportions */}
    <div className="w-full md:w-[30%] flex items-center justify-center">
      <div className="relative w-[250px] md:w-[400px] aspect-[3/4]">
        <img
          src="/assets/shi-rembg.webp"
          alt="Rotating Image"
          className="w-full h-full object-contain absolute transform-gpu"
          style={{
            transformOrigin: "center center",
            animation: "horizontalSpin 8s linear infinite",
          }}
        />
      </div>
    </div>

  </div>
</div>



    <div className="relative z-10 w-full px-4 py-8 md:py-12 lg:py-16 bg-gradient-to-b from-black via-red to-red-950">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white mb-6 sm:mb-8 md:mb-12 text-center font-zenDots">
        SAE Supra<span className="ml-3 text-red-700">'</span>24
      </h2>

      <div className="flex justify-center items-center px-2 sm:px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 w-full max-w-6xl">
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="aspect-[4/3] sm:aspect-square w-full overflow-hidden rounded-lg shadow-lg"
              whileHover={{
                rotate: 5,
                scale: .9,
                transition: { duration: 0.3 },
              }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={src}
                  alt={`Image ${index + 1}`}
                  fill
                  priority={index < 4} // Preload first viewport of images
                  className="object-cover transition-all duration-300 filter grayscale hover:grayscale-0"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>

      
      <div id="media" className="min-h-screen sm:h-screen bg-gradient-to-b from-red-950 via-red-1000 to-black text-white overflow-scroll scroll-smooth">
        <div className="text-4xl sm:text-7xl font-zenDots flex pt-3 sm:pt-9 pb-9 justify-center">Media Coverage</div>

        <div className="flex md:flex-row flex-col items-center justify-center">
          <div className="p-2 md:p-8">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/VCa9h0X5KDc?si=4YzUt2p1vywAYzYp" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="h-[200px] w-[300px] md:h-[330px] md:w-[550px]" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen loading="lazy"></iframe>
          </div>
          <div className="md:p-8 p-2">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/SLfs0he6we0?si=gKjCbQiQiC0f9rqV" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="h-[200px] w-[300px] md:h-[330px] md:w-[550px]" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen loading="lazy"></iframe>
          </div>
        </div>
        <div>
          <div className="p-2 md:p-8 flex justify-center">
            <iframe width="900" height="420" src="https://www.youtube.com/embed/N_NSTtLch1I?si=Sv5zWi2HkalrT1RR" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="h-[200px] w-[300px] md:h-[300px] md:w-[900px]" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen loading="lazy"></iframe>
          </div>
        </div>
      </div>

      <div className="h-auto w-full bg-gradient-to-b from-black to-red-700">
      
          <div className="z-50 h-40 text-5xl sm:text-6xl flex justify-center font-zenDots  pt-16 w-full  text-white pb-20">Articles</div>
        <div className="z-50 h-auto md:h-auto w-full md:pl-20 md:pr-20 pl-2 pr-2 mb-20">
        <div className="sm:flex flex-col md:flex-row space-x-10 justify-center hidden rounded-sm  h-[420px] items-center ">
        
<div className="card group h-98 w-72 hover:scale-105 border-2 border-red-600 rounded-xl transition-transform duration-500 ease-in-out drop-shadow-2xl">
  <img src="/assets/tni1.png" className="card-img-top rounded-t-xl" alt="Fissure in Sandstone"/>
  <div className="card-body bg-neutral-100  h-40 rounded-b-xl p-2">
    <p className="font-Rajdhani mb-6 font-medium text-justify"><span className="font-bold font-Rajdhani"> TNIE : </span>Yeti Racing team from Cusat’s School of Engineering with their prize-winning car at the International........</p>
    <div className="w-52">
      <img src="https://images-assettype-com.cdn.ampproject.org/ii/AW/s/images.assettype.com/newindianexpress/2024-01/513ad66b-9f6c-4c96-a3d5-ea0e785580a6/Long_Light_Mode_500_Height.png?w=600" alt="tnie"></img>
    </div>
    <div className="absolute inset-0 rounded-xl bg-neutral-500 bg-opacity-75 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 ">
    <a href="https://www-newindianexpress-com.cdn.ampproject.org/v/s/www.newindianexpress.com/amp/story/states/kerala/2025/Jan/31/students-from-cusat-win-international-formula-race-car-making-competition?amp_gsa=1&amp_js_v=a9&usqp=mq331AQIUAKwASCAAgM%3D#amp_tf=From%20%251%24s&aoh=17384271772138&referrer=https%3A%2F%2Fwww.google.com&ampshare=https%3A%2F%2Fwww.newindianexpress.com%2Fstates%2Fkerala%2F2025%2FJan%2F31%2Fstudents-from-cusat-win-international-formula-race-car-making-competition" 
       className="font-Orbitron text-white text-xl">
      Read more
    </a>
  </div>
  
  </div>
</div>
<div className="card group h-98 w-72 hover:scale-105 border-2 border-red-600 rounded-xl  transition-transform duration-500 ease-in-out drop-shadow-2xl">
  <img src="https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20250130034012_Yeti_Racing_Formula_Bharat.jpg&w=700&c=1" className="card-img-top rounded-t-xl" alt="Fissure in Sandstone"/>
  <div className="card-body bg-neutral-100 h-40 rounded-b-xl p-2">
    <p className="font-Rajdhani mb-6 font-medium text-justify"><span className="font-bold font-Rajdhani"> Autocar : </span><span>The ninth edition of Formula Bharat saw 51 teams battling it out for a shot at ultimate engineering glory.......</span></p>
    <div className="w-40">
      <img src="https://cdni.autocarindia.com/aci/prod-new/images/autocar-logo-v2.png" alt="tnie"></img>
    </div>
    <div className="absolute inset-0 rounded-xl bg-neutral-500 bg-opacity-75 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 ">
    <a href="https://www.autocarindia.com/motor-sports-news/formula-bharat-2025-yeti-racing-team-kratos-racing-electric-crowned-winners-434408" 
       className="font-Orbitron text-white text-xl">
      Read more
    </a>
  </div>
  </div>
</div>
<div className="card group h-98 w-72 hover:scale-105 border-2 border-red-600 rounded-xl  transition-transform duration-500 ease-in-out drop-shadow-2xl">
  <img src="/assets/hindu.jpg" className="card-img-top rounded-t-xl" alt="Fissure in Sandstone"/>
  <div className="card-body bg-neutral-100 h-40 rounded-b-xl p-2">
    <p className="font-Rajdhani mb-6 font-medium text-justify"><span className="font-bold font-Rajdhani"> The Hindu :</span> <span className="">Young talents at the School of Engineering at CUSAT have made a mark at an all-India engineering.......</span></p>
    <div className="w-52">
      <img src="https://www-thehindu-com.cdn.ampproject.org/ii/w220/s/www.thehindu.com/theme/images/th-online/thehindu-logo.svg" alt="tnie"></img>
    </div>
    <div className="absolute inset-0 rounded-xl bg-neutral-500 bg-opacity-75 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 ">
    <a href="https://www-thehindu-com.cdn.ampproject.org/v/s/www.thehindu.com/news/cities/Kochi/recognition-for-young-talents-at-cusat/article69151050.ece/amp/?amp_gsa=1&amp_js_v=a9&usqp=mq331AQIUAKwASCAAgM%3D#amp_tf=From%20%251%24s&aoh=17384271772138&referrer=https%3A%2F%2Fwww.google.com&ampshare=https%3A%2F%2Fwww.thehindu.com%2Fnews%2Fcities%2FKochi%2Frecognition-for-young-talents-at-cusat%2Farticle69151050.ece" 
       className="font-Orbitron text-white text-xl">
      Read more
    </a>
  </div>
  </div>
</div>
<div className="card group h-98 w-72 hover:scale-105 border-2 border-red-600 rounded-xl  transition-transform duration-500 ease-in-out drop-shadow-2xl">
  <img src="/assets/mat.jpg" className="card-img-top rounded-t-xl" alt="Fissure in Sandstone"/>
  <div className="card-body bg-neutral-100 h-40 rounded-b-xl p-2">
    <p className="font-Rajdhani mb-1 font-medium text-justify"><span className="font-bold font-Rajdhani"> Mathrubhumi :</span> <span className="font-light">അന്താരാഷ്ട്ര ഫോർമുല ഭാരത് മത്സരം കുസാറ്റിന് കിരീടം<span className="font-medium">......</span></span></p>
    <div className="w-40 ">
      <img src="/assets/mat.png" alt="tnie"></img>
    </div>
  <div className="absolute inset-0 rounded-xl bg-neutral-500 bg-opacity-75 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 ">
    <a href="https://newspaper.mathrubhumi.com/ernakulam/news/ernakulam-1.10293480" 
       className="font-Orbitron text-white text-xl">
      Read more
    </a>
  </div>
  </div>
</div>

</div>
<div className="sm:hidden p-custom !py-[1px] flex space-x-4 bg-white  rounded-xl flex-nowrap card-container !overflow-scroll md:!overflow-hidden">
  <div className="card-wrap ">
  <div className="card group h-98 w-64 hover:scale-105  transition-transform duration-500 ease-in-out ">
  <img src="/assets/tni1.png" className="card-img-top rounded-t-xl" alt="Fissure in Sandstone"/>
  <div className="card-body bg-neutral-100 h-40 p-2">
    <p className="font-Rajdhani mb-6 font-medium text-justify"><span className="font-bold font-Rajdhani"> TNIE : </span>Yeti Racing team from Cusat’s School of Engineering with their prize-winning car at the International........</p>
    <div className="w-52">
      <img src="https://images-assettype-com.cdn.ampproject.org/ii/AW/s/images.assettype.com/newindianexpress/2024-01/513ad66b-9f6c-4c96-a3d5-ea0e785580a6/Long_Light_Mode_500_Height.png?w=600" alt="tnie"></img>
    </div>
    <div className="absolute inset-0 bg-neutral-500 bg-opacity-75 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 ">
    <a href="https://www-newindianexpress-com.cdn.ampproject.org/v/s/www.newindianexpress.com/amp/story/states/kerala/2025/Jan/31/students-from-cusat-win-international-formula-race-car-making-competition?amp_gsa=1&amp_js_v=a9&usqp=mq331AQIUAKwASCAAgM%3D#amp_tf=From%20%251%24s&aoh=17384271772138&referrer=https%3A%2F%2Fwww.google.com&ampshare=https%3A%2F%2Fwww.newindianexpress.com%2Fstates%2Fkerala%2F2025%2FJan%2F31%2Fstudents-from-cusat-win-international-formula-race-car-making-competition" 
       className="font-Orbitron text-white text-xl">
      Read more
    </a>
  </div>
  
  </div>
</div>
  </div>
  <div className="card-wrap">

  <div className="card group h-98 w-64 hover:scale-105  transition-transform duration-500 ease-in-out">
  <img src="https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20250130034012_Yeti_Racing_Formula_Bharat.jpg&w=700&c=1" className="card-img-top rounded-t-xl" alt="Fissure in Sandstone"/>
  <div className="card-body bg-neutral-100 h-40 p-2">
    <p className="font-Rajdhani mb-6 font-medium text-justify"><span className="font-bold font-Rajdhani"> Autocar : </span><span>The ninth edition of Formula Bharat saw 51 teams battling it out for a shot at ultimate engineering glory.......</span></p>
    <div className="w-40">
      <img src="https://cdni.autocarindia.com/aci/prod-new/images/autocar-logo-v2.png" alt="tnie"></img>
    </div>
    <div className="absolute inset-0 bg-neutral-500 bg-opacity-75 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 ">
    <a href="https://www.autocarindia.com/motor-sports-news/formula-bharat-2025-yeti-racing-team-kratos-racing-electric-crowned-winners-434408" 
       className="font-Orbitron text-white text-xl">
      Read more
    </a>
  </div>
  </div>
</div>
  </div>
  <div className="card-wrap">

  <div className="card group h-98 w-64 hover:scale-105  transition-transform duration-500 ease-in-out">
  <img src="/assets/hindu.jpg" className="rounded-t-xl card-img-top" alt="Fissure in Sandstone"/>
  <div className="card-body bg-neutral-100 h-40 p-2">
    <p className="font-Rajdhani mb-6 font-medium text-justify"><span className="font-bold font-Rajdhani"> The Hindu :</span> <span className="">Young talents at the School of Engineering at CUSAT have made a mark at an all-India engineering.......</span></p>
    <div className="w-52">
      <img src="https://www-thehindu-com.cdn.ampproject.org/ii/w220/s/www.thehindu.com/theme/images/th-online/thehindu-logo.svg" alt="tnie" ></img>
    </div>
    <div className="absolute inset-0 bg-neutral-500 bg-opacity-75 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 ">
    <a href="https://www-thehindu-com.cdn.ampproject.org/v/s/www.thehindu.com/news/cities/Kochi/recognition-for-young-talents-at-cusat/article69151050.ece/amp/?amp_gsa=1&amp_js_v=a9&usqp=mq331AQIUAKwASCAAgM%3D#amp_tf=From%20%251%24s&aoh=17384271772138&referrer=https%3A%2F%2Fwww.google.com&ampshare=https%3A%2F%2Fwww.thehindu.com%2Fnews%2Fcities%2FKochi%2Frecognition-for-young-talents-at-cusat%2Farticle69151050.ece" 
       className="font-Orbitron text-white text-xl ">
      Read more
    </a>
  </div>
  </div>
</div>
  </div>
  <div className="card-wrap">

  <div className="card group h-98 w-64 hover:scale-105  transition-transform duration-500 ease-in-out">
  <img src="/assets/mat.jpg" className="card-img-top rounded-t-xl" alt="Fissure in Sandstone"/>
  <div className="card-body bg-neutral-100 h-40 p-2">
    <p className="font-Rajdhani mb-1 font-medium text-justify"><span className="font-bold font-Rajdhani"> Mathrubhumi :</span> <span className="font-light">അന്താരാഷ്ട്ര ഫോർമുല ഭാരത് മത്സരം കുസാറ്റിന് കിരീടം<span className="font-medium">......</span></span></p>
    <div className="w-40 ">
      <img src="/assets/mat.png" alt="tnie"></img>
    </div>
  <div className="absolute inset-0 bg-neutral-500 bg-opacity-75 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 ">
    <a href="https://newspaper.mathrubhumi.com/ernakulam/news/ernakulam-1.10293480" 
       className="font-Orbitron text-white text-xl ">
      Read more
    </a>
  </div>
  </div>
</div>
  </div>
</div>

</div> 


        </div>
      
      <Footer />
    </div>
  );
};

export default Gallery;

      
      
     


     
        
      
      
    
     






      