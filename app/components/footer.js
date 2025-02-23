"use client"
import Image from "next/image"
import { useEffect,useRef } from "react";

export default function Footer(){
  const logo = "https://ik.imagekit.io/r70knk9pu/logo1.png?updatedAt=1739006550479";

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
            { threshold: 0.3 } // Trigger when 10% of the div is visible
          );
      
          observer.observe(scrollDiv);
      
          return () => {
            if (scrollDiv) observer.unobserve(scrollDiv);
          };
        }, []);

    return(
      <div className=" bg-neutral-950  pr-2 pl-2 z-10 pt-5 border-t-2 " id='footer'>  
  <footer ref={scrollDivRef} className="flex sm:flex-row flex-col pt-3 space-x-2 sm:space-x-9 sm:pt-3  pb-0 text-slate-50 space-y-6 opacity-0 transform  transition-all duration-500">
    <div className="sm:flex flex-col text-sm  sm:w-1/6 justify-center items-center border-r-2 ">
      <img src={logo} width={20} height={20} alt="yeti logo" className="h-20 w-32 sm:h-24 sm:w-44 xl:h-32 xl:w-52"/>
      <div className='font-zenDots text-xl pt-2'><span className='text-red-600'>Y</span>eti Racing </div>
      <div className='font-Orbitron text-lg'>
        CUSAT
      </div>
    </div>
    <div className='flex flex-row justify-between h-full flex-1'>
    <div className="w-1/2  text-sm border-r-2 sm:border-r-2   font-Orbitron ">
      <h5 className="sm:justify-center md:text-2xl">SECTION</h5>
      <br></br>
      <ul className="">
        <li className="nav-item mb-2"><a href="/subsystem" className="nav-link p-0 text-body-secondary">Team</a></li>
        <li className="nav-item mb-2"><a href="/gallery" className="nav-link p-0 text-body-secondary">Gallery</a></li>
        <li className="nav-item mb-2"><a href="#media" className="nav-link p-0 text-body-secondary">Media</a></li>
        <li className="nav-item mb-2"><a href="/team" className="nav-link p-0 text-body-secondary"></a>About us</li>
        <li className="nav-item mb-2"><a href="/sponsors" className="nav-link p-0 text-body-secondary">Sponsors</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Contact us</a></li>
      </ul>
    </div>
    <div className="w-1/2  text-sm sm:border-r-2 font-Orbitron pl-4 sm:ml-auto">
      <h5 className="mb-4 md:text-2xl">CONTACT US</h5>
      <ul className="">
        <li className="flex space-x-2 sm:space-x-10">
         Asif Ahammad H
        </li>
        <li className="flex space-x-2 sm:space-x-10">
            +91 6238118843
        </li>
        <br></br>
        <li className="flex space-x-2 sm:space-x-10">
         Abhijith Mohan
        </li>
        <li className="flex space-x-2 sm:space-x-10">
            +91 8547177020
        </li>
      </ul>
    </div>
    </div>
    <div className="flex-1 text-sm sm:block pr-8 ">
    <iframe   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.618667966787!2d76.32889797507872!3d10.048292090059604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c3a571be335%3A0xe9d0d17ee3a87389!2sSchool%20of%20Engineering%2C%20CUSAT!5e0!3m2!1sen!2sin!4v1735200976648!5m2!1sen!2sin&q=" 
 width="380" height="200"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="md:w-full md:h-60 sm:w-50 sm:h-50 "></iframe></div>   
  </footer>
      <div className="flex text-center justify-center space-x-7 items-center h-14 mb-2 border-b-white border-b-2">
        <a href="mailto:yetiracingsoe@gmail.com" className='hover:scale-110'>
      <img  src="https://clipartcraft.com/images/email-logo-png-gmail.png" width="30" height="30" fill="white" className="bi bi-envelope"  viewBox="0 0 16 16">
</img>
</a>
<a href="https://www.instagram.com/yetiracing_cusat/" className='hover:scale-110'>
      <img  src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Instagram_Logo_png.png" width="50" height="50" fill="white" className="bi bi-envelope"  viewBox="0 0 16 16">
</img>
</a>
<a href="https://in.linkedin.com/company/yetiracing-cusat" className='hover:scale-110'>
<img  src="https://www.freepnglogos.com/uploads/official-linkedin-logo----17.png" width="27" height="27" fill="white" className="bi bi-envelope"  viewBox="0 0 16 16">
</img>
</a>
<a href="https://www.google.co.in/maps/place/SAE+LAB+CUSAT/@10.0473925,76.3299883,19z/data=!4m9!1m2!2m1!1sthermal+lab+cusat!3m5!1s0x3b080d0077994cfb:0x95f17e78871b8912!8m2!3d10.0475166!4d76.3312228!16s%2Fg%2F11w3gmhjgj?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D" className='hover:scale-110'>
<img  src="https://www.pngall.com/wp-content/uploads/5/Google-Maps-Location-Mark.png" width="20" height="20" fill="white" className="bi bi-envelope"  viewBox="0 0 16 16">
</img>
</a>
    </div>
    <div className="text-white text-center pb-2 font-Goldman justify-center flex "><span className='text-red-600'>Y</span>eti Racing</div>
    </div>

    )
}