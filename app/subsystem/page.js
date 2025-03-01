"use client"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import AnimatedGrid from "../components/grid";
import { useState,useRef,useEffect } from "react";
export default function Subsystem(){

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
      { threshold: 0.7 } // Adjust the threshold as needed
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

  const teamMembers = [

    { name: "Govind E S", role: "Manager " , img:"https://ik.imagekit.io/r70knk9pu/WhatsApp%20Image%202025-02-19%20at%2020.47.25_9472a724.jpg?updatedAt=1740051654881",linkedin:"" },
    { name: "Devan P Das", role: "Manager ", img:"https://ik.imagekit.io/r70knk9pu/devan.jpg?updatedAt=1739005570408",linkedin:"https://www.linkedin.com/in/devanpdas" },
    { name: "Ashwin S", role: "Powertrain" , img:"https://ik.imagekit.io/r70knk9pu/ashwins.jpg?updatedAt=1739005570483",linkedin:"https://www.linkedin.com/in/ashwin-s-595a81319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"},
    { name: "Vivek H", role: "Steering", img:"https://ik.imagekit.io/r70knk9pu/vivek.jpg?updatedAt=1739005570491",linkedin:"https://www.linkedin.com/in/vivek-h-28aa26339?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
    { name: "Saif Ali K N", role: "Rollcage", img:"https://ik.imagekit.io/r70knk9pu/WhatsApp%20Image%202025-02-19%20at%2020.47.25_98d6b650.jpg?updatedAt=1740051654412",linkedin:"https://www.linkedin.com/in/saif-ali-a24740244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { name: "Aswin A", role: "Suspension" , img:"https://ik.imagekit.io/r70knk9pu/WhatsApp%20Image%202025-02-19%20at%2020.47.26_ae756ec9.jpg?updatedAt=1740051654950",linkedin:"https://www.linkedin.com/in/aswin-a-3a87a7247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"},
    { name: "Govind E S", role: "Brake" , img:"https://ik.imagekit.io/r70knk9pu/WhatsApp%20Image%202025-02-19%20at%2020.47.25_9472a724.jpg?updatedAt=1740051654881",linkedin:""},
    { name: "Lena Alingal", role: "Statics", img:"assets/lena.webp",linkedin:"https://www.linkedin.com/in/lena-alingal-788751229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " },
    { name: "Vishnu M Krishnan", role: "Media", img:"https://ik.imagekit.io/r70knk9pu/vishnu.jpg?updatedAt=1739005570487",linkedin:"https://www.linkedin.com/in/vishnumkrishnan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  ];

  const Profile = ({ teamMember }) => (
<div className="w-64 flex justify-center h-64">
            <header class=" absolute flex flex-col justify-center  items-center text-center">
  <img class="inline-flex object-cover border-2 border-white rounded-full shadow-[5px_5px_0_0_rgba(0,0,0,1)] shadow-green-600/100 bg-indigo-50 text-indigo-600 h-36 w-36 md:h-48 md:w-48" src={teamMember.img} alt=""></img>
  <h1 class="text-xl md:text-2xl text-gray-100 font-Fn mt-2">{teamMember.name}</h1>
  <div className=" flex flex-col md:flex-row justify-center w-full items-center space-x-2">
  <h2 class="text-base md:text-lg text-gray-200 font-Orbitron">
    {teamMember.role}</h2>
    <a href={teamMember.linkedin} target="_blank"
      class="text-indigo-900  font-bold border-b-0  hover:scale-110 transition-all">
<img src="https://www.svgrepo.com/show/349436/linkedin.svg" alt='linkedin' width="30" height="30"></img></a>
</div>
</header>
</div>
  );



    return(
      <div>
        <Navbar></Navbar>
        
        <div className="min-h-screen w-full bg-gradient-to-b from-black to-red-700 pt-20 z-0 ">
        <div className="-mt-32 z-0 flex items-start fixed inset-0 h-full w-full" >
        <div
  className=" z-0 mt-14 fixed inset-0 h-full w-full  bg-[radial-gradient(#d3d3d3_1px,transparent_1px)] [background-size:46px_46px] [mask-image:radial-gradient(50%_50%_at_50%_50%,#000_15%,transparent_100%)]"
></div>
        </div>
        <div ref={divRef} className={`transition-transform duration-1000 ease-in-out transform ${
          yearisVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}>
        <div  className="relative z-20 h-60 -mb-16 w-full text-white font-zenDots text-5xl pt-16 md:pt-0 items-center justify-center md:flex sm:p-3  pl-7 ">Executive Committee</div>

        {/* advisor */} 
<div className="w-full md:h-28  h- mt-16 md:mt-2 mb-7 flex justify-center items-center font-Orbitron text-3xl sm:p-3 pl-7 md:text-4xl text-white">Guiding us beyond the finish line.</div>
</div>
<div className="w-full sm:hidden flex justify-center h-64 ">
            <header class=" absolute flex flex-col justify-center  items-center text-center">
  <img class="inline-flex object-contain border-2 border-white rounded-full shadow-[5px_5px_0_0_rgba(0,0,0,1)] shadow-green-600/100 bg-white text-indigo-600 h-36 w-36 md:h-48 md:w-48" src="https://ik.imagekit.io/r70knk9pu/WhatsApp%20Image%202025-02-08%20at%2020.28.26_a22c52b6.jpg?updatedAt=1739794940348" alt=""></img>
  <h1 class="text-xl  md:text-2xl text-gray-100 font-Fn mt-2">Dr Biju N</h1>
  <div className=" flex flex-col md:flex-row justify-center w-full items-center space-x-2">
  <h2 class="text-base md:text-lg text-gray-200 font-Orbitron">
  Faculty Advisor </h2>
    <a href="https://www.linkedin.com/in/biju-n-4287a9a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="_blank"
      class="text-indigo-900  font-bold border-b-0  hover:scale-110 transition-all">
<img src="https://www.svgrepo.com/show/349436/linkedin.svg" alt='linkedin' width="30" height="30"></img></a>
</div>
</header>
</div>
<div className=" flex mb-16 flex-row justify-center w-full space-x-0 md:space-x-32">
<div className="w-64 flex justify-center h-64">
            <header class=" absolute flex flex-col justify-center  items-center text-center">
  <img class="inline-flex object-contain border-2 border-white rounded-full shadow-[5px_5px_0_0_rgba(0,0,0,1)] shadow-green-600/100 bg-white text-indigo-600 h-36 w-36 md:h-48 md:w-48" src="https://ik.imagekit.io/r70knk9pu/WhatsApp%20Image%202025-02-22%20at%2017.16.03_fdd35ac2.jpg?updatedAt=1740226522168" alt=""></img>
  <h1 class="text-xl  md:text-2xl text-gray-100 font-Fn mt-2">Dr Gireesh Kumaran </h1>
  <div className=" flex flex-col md:flex-row justify-center w-full items-center space-x-2">
  <h2 class="text-base md:text-lg text-gray-200 font-Orbitron">
  Faculty Advisor </h2>
    <a href="https://www.linkedin.com/in/gireesh-kumaran-thampi-b-s-6711253b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"
      class="text-indigo-900  font-bold border-b-0  hover:scale-110 transition-all">
<img src="https://www.svgrepo.com/show/349436/linkedin.svg" alt='linkedin' width="30" height="30"></img></a>
</div>
</header>
</div>

 <div className="w-64 hidden sm:flex justify-center h-64 ">
            <header class=" absolute flex flex-col justify-center  items-center text-center">
  <img class="inline-flex object-contain border-2 border-white rounded-full shadow-[5px_5px_0_0_rgba(0,0,0,1)] shadow-green-600/100 bg-white text-indigo-600 h-36 w-36 md:h-48 md:w-48" src="https://ik.imagekit.io/r70knk9pu/WhatsApp%20Image%202025-02-08%20at%2020.28.26_a22c52b6.jpg?updatedAt=1739794940348" alt=""></img>
  <h1 class="text-xl  md:text-2xl text-gray-100 font-Fn mt-2">Dr Biju N</h1>
  <div className=" flex flex-col md:flex-row justify-center w-full items-center space-x-2">
  <h2 class="text-base md:text-lg text-gray-200 font-Orbitron">
  Faculty Advisor </h2>
    <a href="https://www.linkedin.com/in/biju-n-4287a9a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="_blank"
      class="text-indigo-900  font-bold border-b-0  hover:scale-110 transition-all">
<img src="https://www.svgrepo.com/show/349436/linkedin.svg" alt='linkedin' width="30" height="30"></img></a>
</div>
</header>
</div>           

<div className="w-64 flex justify-center h-64">
            <header class=" absolute flex flex-col justify-center  items-center text-center">
  <img class="inline-flex object-cover border-2 border-white rounded-full shadow-[5px_5px_0_0_rgba(0,0,0,1)] shadow-green-600/100 bg-indigo-50 text-indigo-600 h-36 w-36 md:h-48 md:w-48" src="https://ik.imagekit.io/r70knk9pu/Priyadarshi-Dutt-2.png?updatedAt=1739015920763" alt=""></img>
  <h1 class="text-xl md:text-2xl text-gray-100 font-Fn mt-2">Priyadarshi Dutt</h1>
  <div className=" flex flex-col md:flex-row  w-full justify-center items-center space-x-2">
  <h2 class="text-base md:text-lg text-gray-200 font-Orbitron">
  Faculty Advisor </h2>
    <a href="https://www.linkedin.com/in/priyadarshidutt/" target="_blank"
      class="text-indigo-900  font-bold border-b-0  hover:scale-110 transition-all">
<img src="https://www.svgrepo.com/show/349436/linkedin.svg" alt='linkedin' width="30" height="30"></img></a>
</div>
</header>
</div>
</div>
<div  className="h-32 flex justify-center w-full text-5xl  sm:text-6xl font-zenDots text-white"> <span className="text-red-700 ">[</span>24-25<span className="text-red-700">]</span></div>

        <div className="relative z-20 flex flex-row justify-center w-full space-x-2 md:space-x-14  mb-16">
            <div className="w-64 flex justify-center h-64">
            <header class=" absolute flex flex-col justify-center  items-center text-center">
  <img class="inline-flex object-cover border-2 border-white rounded-full shadow-[5px_5px_0_0_rgba(0,0,0,1)] shadow-green-600/100 bg-indigo-50 text-indigo-600 h-36 w-36 md:h-48 md:w-48 " src="https://ik.imagekit.io/r70knk9pu/asif.jpg?updatedAt=1739005570560" alt=""></img>
  <h1 class="text-xl md:text-2xl text-gray-100 font-Fn mt-2">Asif Ahammad H</h1>
  <div className=" flex flex-col md:flex-row justify-center w-full items-center space-x-2">
  <h2 class="text-base md:text-lg text-gray-200 font-Orbitron">
    Captain</h2>
    <a href="" target="_blank"
      class="text-indigo-900  font-bold border-b-0  hover:scale-110 transition-all">
<img src="https://www.svgrepo.com/show/349436/linkedin.svg" alt='linkedin' width="30" height="30"></img></a>
</div>
</header>
</div>

<div className="w-64 flex justify-center h-64">
            <header class=" absolute flex flex-col justify-center  items-center text-center">
  <img class="inline-flex object-cover border-2 border-white rounded-full shadow-[5px_5px_0_0_rgba(0,0,0,1)] shadow-green-600/100 bg-indigo-50 text-indigo-600 h-36 w-36 md:h-48 md:w-48" src="https://ik.imagekit.io/r70knk9pu/abhi.jpg?updatedAt=1739005570416" alt=""></img>
  <h1 class="text-xl md:text-2xl text-gray-100 font-Fn mt-2">Abhijith Mohan</h1>
  <div className=" flex flex-col md:flex-row justify-center w-full items-center space-x-2">
  <h2 class="text-base md:text-lg text-gray-200 font-Orbitron">
    Vice Captain</h2>
    <a href="https://www.linkedin.com/in/abhijith-mohan-642205306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"
      class="text-indigo-900  font-bold border-b-0  hover:scale-110 transition-all">
<img src="https://www.svgrepo.com/show/349436/linkedin.svg" alt='linkedin' width="30" height="30"></img></a>
</div>
</header>
</div>


</div>
        <div className="relative z-20 col-span-full grid grid-cols-2 md:grid-cols-3 gap-0 md:gap-8 mb-3">
              <div className="col-span-2 md:col-span-5 place-items-center">
                {/* Two-column grid for mobile, three-column for desktop */}
                <div className="grid grid-cols-2 md:grid-cols-3 md:gap-24 gap-y-12 place-items-center">
                  {teamMembers.map((teamMember) => (
                    <Profile key={teamMember.name} teamMember={teamMember} />
                  ))}
                </div>
              </div>
              </div>
              <div className=" relative z-20 flex flex-col w-full h-full space-y-12 mt-12 ">
              <div className=" flex flex-row justify-center w-full space-x-0 md:space-x-16 mb-6">
            <div className="w-64 flex justify-center h-64">
            <header class=" absolute flex flex-col justify-center  items-center text-center">
  <img class="inline-flex object-cover border-2 border-white rounded-full shadow-[5px_5px_0_0_rgba(0,0,0,1)] shadow-green-600/100 bg-indigo-50 text-indigo-600 h-36 w-36 md:h-48 md:w-48" src="https://ik.imagekit.io/r70knk9pu/WhatsApp%20Image%202025-02-19%20at%2023.44.38_1792ae10.jpg?updatedAt=1740051655234" alt=""></img>
  <h1 class="text-xl md:text-2xl text-gray-100 font-Fn mt-2">Pavna Suresh
  </h1>
  <div className=" flex flex-col md:flex-row justify-center w-full items-center space-x-2">
  <h2 class="text-base md:text-lg text-gray-200 font-Orbitron">
  Sponsorship    </h2>
    <a href="" target="_blank"
      class="text-indigo-900  font-bold border-b-0  hover:scale-110 transition-all">
<img src="https://www.svgrepo.com/show/349436/linkedin.svg" alt='linkedin' width="30" height="30"></img></a>
</div>
</header>
</div>

<div className="w-64 flex justify-center h-64">
            <header class=" absolute flex flex-col justify-center  items-center text-center">
  <img class="inline-flex object-cover border-2 border-white rounded-full shadow-[5px_5px_0_0_rgba(0,0,0,1)] shadow-green-600/100 bg-indigo-50 text-indigo-600 h-36 w-36 md:h-48 md:w-48" src="https://ik.imagekit.io/r70knk9pu/WhatsApp%20Image%202025-02-19%20at%2020.47.25_8a249195.jpg?updatedAt=1740051654725" alt=""></img>
  <h1 class="text-xl md:text-2xl text-gray-100 font-Fn mt-2">Rohan Kalathil </h1>
  <div className=" flex flex-col md:flex-row  w-full justify-center items-center space-x-2">
  <h2 class="text-base md:text-lg text-gray-200 font-Orbitron">
  Procurement    </h2>
    <a href="https://www.linkedin.com/in/rohan-kalathil-8004a71a0?trk=contact-info" target="_blank"
      class="text-indigo-900  font-bold border-b-0  hover:scale-110 transition-all">
<img src="https://www.svgrepo.com/show/349436/linkedin.svg" alt='linkedin' width="30" height="30"></img></a>
</div>
</header>
</div>
</div>

<div className=" flex flex-row justify-center w-full space-x-0 md:space-x-16">
            <div className="w-64 flex justify-center h-64">
            <header class=" absolute flex flex-col justify-center  items-center text-center">
  <img class="inline-flex object-cover border-2 border-white rounded-full shadow-[5px_5px_0_0_rgba(0,0,0,1)] shadow-green-600/100 bg-indigo-50 text-indigo-600 h-36 w-36 md:h-48 md:w-48" src="https://ik.imagekit.io/r70knk9pu/nandhu.jpg?updatedAt=1739005570566" alt=""></img>
  <h1 class="text-xl  md:text-2xl text-gray-100 font-Fn mt-2">Nandu K Saju</h1>
  <div className=" flex flex-col md:flex-row justify-center w-full items-center space-x-2">
  <h2 class="text-base md:text-lg text-gray-200 font-Orbitron">
  Manufacturing   </h2>
    <a href="https://www.linkedin.com/in/nandhu-achari-3283791b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="_blank"
      class="text-indigo-900  font-bold border-b-0  hover:scale-110 transition-all">
<img src="https://www.svgrepo.com/show/349436/linkedin.svg" alt='linkedin' width="30" height="30"></img></a>
</div>
</header>
</div>

<div className="w-64 flex justify-center h-64">
            <header class=" absolute flex flex-col justify-center  items-center text-center">
  <img class="inline-flex object-cover border-2 border-white rounded-full shadow-[5px_5px_0_0_rgba(0,0,0,1)] shadow-green-600/100 bg-indigo-50 text-indigo-600 h-36 w-36 md:h-48 md:w-48" src="https://ik.imagekit.io/r70knk9pu/ashwins.jpg?updatedAt=1739005570483" alt=""></img>
  <h1 class="text-xl md:text-2xl text-gray-100 font-Fn mt-2">Ashwin S</h1>
  <div className=" flex flex-col md:flex-row  w-full justify-center items-center space-x-2">
  <h2 class="text-base md:text-lg text-gray-200 font-Orbitron">
  Treasurer   </h2>
    <a href="" target="_blank"
      class="text-indigo-900  font-bold border-b-0  hover:scale-110 transition-all">
<img src="https://www.svgrepo.com/show/349436/linkedin.svg" alt='linkedin' width="30" height="30"></img></a>
</div>
</header>
</div>
</div>



</div>

 
          

          



<div className="relative  z-20 w-full flex justify-center h-52 mt-7 items-center">
<div className="h-24 flex -space-x-32 hover:scale-110 -space-y-5 w-48 justify-center items-center hidden">
  
<a><div className="w-36 pb-2 h-16   items-center justify-center flex border-2 text-white font-Goldman font-thin">
    View All
  </div></a>
  <a><div className="w-36 h-16  bg-gray-100 bg-opacity-15 items-center justify-center flex border-2 text-white font-Goldman font-thin">
  </div></a>
</div>
</div>
</div>
<div className="z-30 relative">
<Footer></Footer>
</div>
</div>

    )
}