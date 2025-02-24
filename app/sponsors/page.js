"use client"
import Image from 'next/image'
import Link from 'next/link';
import { useState, useEffect,useRef } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import AnimatedGrid from '../components/grid';

export default function SponsorsPage() {
  
  const [visibleSections, setVisibleSections] = useState({
    santaMonica: false,
    dtsRacing: false,
    edstech: false,
    helloscore: false,
    tyreguru: false,
    wrapstyle: false
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setVisibleSections(prev => ({
              ...prev,
              [id]: true
            }));
          }
        });
      },
      { threshold: 0.2 }
    );

    const sections = document.querySelectorAll('.sponsor-section');
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  const getSlideClass = (sectionId, direction) => {
    const baseClasses = "transition-all duration-1000 transform";
    if (!visibleSections[sectionId]) {
      return `${baseClasses} ${direction === 'right' ? 'translate-x-full opacity-0' : '-translate-x-full opacity-0'}`;
    }
    return `${baseClasses} translate-x-0 opacity-100`;
  };

  return (
    <div className="bg-black">
      <Navbar />
      <div className="min-h-screen pt-28">
        {/* First Screen - Black to Dark Red Gradient */}
        <div className="bg-gradient-to-b from-black to-red-900 z-0">
        <div className="-mt-32 z-0 flex items-start fixed inset-0 h-full w-full" >
        {/* <AnimatedGrid className="custom-class-for-grid " /> */}
        </div>
        <div
  className=" z-0 mt-14 fixed inset-0 h-full w-full  bg-[radial-gradient(#d3d3d3_1px,transparent_1px)] [background-size:46px_46px] [mask-image:radial-gradient(50%_50%_at_50%_50%,#000_15%,transparent_100%)]"
></div>



          <div className=" z-50 max-w-[90%] 2xl:max-w-[1400px] mx-auto px-4 py-8 sm:py-12 md:py-16">
            <h1 className="text-center mb-8 sm:mb-12 animate-bounce text-3xl sm:text-4xl lg:text-6xl flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4">
              <span className="text-red-600 font-bold font-zenDots">OUR</span>
              <span className="text-white font-bold font-zenDots">SPONSORS</span>
            </h1>
            
            <div className="max-w-4xl mx-auto text-base sm:text-lg lg:text-2xl text-center mb-8 sm:mb-12 md:mb-16">
              <p className="mb-4 sm:mb-8 text-gray-300 text-justify font-Rajdhani px-4">
                Yeti Racing is dedicated to pushing the limits of student innovation each year. As a non-profit student team, we deeply appreciate the invaluable support from generous companies and institutions.
              </p>
              <p className="text-gray-300 text-justify font-Rajdhani px-4">
                We're constantly seeking new partners to join us on our journey, enabling us to focus on what we excel at: developing and advancing cutting-edge technology. Click the button below to become a part of our mission to rank among the top Formula Student teams globally.
              </p>
            </div>

            

            
            <div className="flex flex-col sm:flex-row sm:space-y-0 space-y-5 justify-center items-center  sm:space-x-4 p-4">
      <Link href="/funding">
        <button className="relative px-4 py-3 w-52 h-14 text-white text-lg rounded-full transition-transform duration-300 ease-in-out border-2  bg-transparent border-green-400 font-Orbitron flex justify-center items-center hover:scale-105 hover:shadow-[0_0_15px_rgba(34,197,94,0.7)]">
          Back Our Team
        </button>
      </Link>
      <Link href="#footer" >
        <button className="relative px-4 py-3 w-52 h-14 text-white font-Orbitron text-lg  rounded-full transition-transform duration-300 ease-in-out border-2  bg-transparent border-green-400 flex justify-center items-center hover:scale-105 hover:shadow-[0_0_15px_rgba(34,197,94,0.7)]">
          Sponsorship
        </button>
      </Link>
    </div>


    
   



            {/* Sponsor Section Component */}
            {[
              {
                id: "santaMonica",
                direction: "right",
                title: "Santa Monica",
                description: "Santa Monica Study Abroad, founded in 2002, is a leading educational consultancy that helps students pursue higher education opportunities overseas. With over two decades of experience, they provide expert guidance on university selection, visa processes, and scholarship options, making the study abroad journey smooth and hassle-free.",
                logo: "/assets/santa.png",
                link: "https://santamonicaedu.in/"
              },
              {
                id: "dtsRacing",
                direction: "left",
                title: "DTS Racing",
                description: "DTS Racing, founded in 2015 by National and International Champion Dilljith T S, is a prominent motorsports team in India dedicated to promoting motorsports among the younger generation. As part of DTSR Academy Pvt Ltd, the team has quickly risen to become one of India's top national and international racing teams.",
                logo: "/assets/dts.jpg",
                link: "https://dtsracing.com/"
              },
              {
                id: "edstech",
                direction: "right",
                title: "EDS Technologies",
                description: "EDS Technologies is one of India's leading providers of engineering and enterprise solutions. The company specializes in offering end-to-end solutions in areas such as CAD, CAM, CAE and 3D visual simulation. EDS Technologies serves a wide range of industries, including automotive, aerospace, defense, education, industrial machinery, and electronics.",
                logo: "/assets/eds-logo.png",
                link: "https://edstechnologies.com/"
              },
              {
                id: "helloscore",
                direction: "left",
                title: "Helloscore",
                description: "Helloscore, a subsidiary of the esteemed Analyct Group of Companies, is a premier financial services provider dedicated to empowering individuals and businesses with tailored credit solutions. Helloscore specializes in comprehensive credit management services, credit score improvement, credit monitoring, debt settlement, and wealth management.",
                logo: "/assets/helloscore-logo.png",
                link: "https://helloscore.in/"
              },
              {
                id: "tyreguru",
                direction: "right",
                title: "TyreGuru",
                description: "Tyreguru provides expert advice and education about tyres, drawing on over 20 years of experience in the industry and assisting consumers in making informed decisions. With engaging content like reels addressing tyre scams and maintenance tips, the page aims to raise awareness and transform the automotive industry through smarter choices. Tyreguru emphasises customer education and offers personalised assistance.",
                logo: "/assets/tyreguru.png",
                link: "https://www.instagram.com/tyreguru.in/?hl=en"
              },
              {
                id: "wrapstyle",
                direction: "left",
                title: "WrapStyle",
                description: "WrapStyle is a premier automotive customization company specializing in high-quality vehicle wraps and aesthetic modifications. With a commitment to excellence and innovation, they transform vehicles through state-of-the-art wrapping techniques and custom designs. Their expertise extends to paint protection films, ceramic coatings, and premium detailing services, making them a one-stop destination for automotive enthusiasts seeking to enhance their vehicles' appearance and protection.",
                logo: "/assets/wrapstyle.png",
                link: "https://wrapstyle.com/"
              }
            ].map((sponsor, index) => (
              <div 
                key={sponsor.id} 
                id={sponsor.id} 
                className={`sponsor-section max-w-6xl mx-auto ${
                  index === 0 ? 'mb-12' : index === 5 ? 'pb-24' : 'mb-24'
                }`}
              >
                <div className={getSlideClass(sponsor.id, sponsor.direction)}>
                  <div className="p-4 sm:p-8 rounded-lg">
                    <div className={`flex flex-col ${
                      sponsor.direction === 'right' ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    } gap-8 sm:gap-12 items-center lg:items-start`}>
                      <div className="flex flex-col items-center gap-4 sm:gap-6 w-full lg:w-1/3">
                        <div className="w-full max-w-[250px] sm:max-w-[300px]">
                          <Image
                            src={sponsor.logo}
                            alt={`${sponsor.title} Logo`}
                            width={300}
                            height={150}
                            className={`w-full transition-transform duration-500 ${
                              sponsor.direction === 'right' ? 'hover:rotate-2' : 'hover:-rotate-2'
                            } hover:scale-105`}
                          />
                        </div>
                        <Link href={sponsor.link}>
                          <button className="bg-transparent border border-white text-white px-6 sm:px-8 py-2 rounded-full hover:bg-white hover:text-black transition-colors duration-300 text-sm sm:text-base w-full sm:w-auto">
                            view more →
                          </button>
                        </Link>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 animate-pulse font-Orbitron text-amber-500 text-center lg:text-left">
                          {sponsor.title}
                        </h2>
                        <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-justify font-Rajdhani">
                          {sponsor.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='relative z-20'>
      <Footer />
      </div>
    </div>
  );
}