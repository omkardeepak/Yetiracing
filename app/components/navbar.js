"use client"
import Image from "next/image";
import { useRouter } from "next/navigation"; 
import Sidebar from "./sidebar";
export default function Navbar(){

    const logo = "https://ik.imagekit.io/r70knk9pu/logo1.png?updatedAt=1739006550479";
    const router = useRouter();
    const navigateTo = (path) => {
      router.push(path); // Navigate to the given path
    };

return(
    <div className="flex items-center justify-center h-20 border-b-2 sm:h-24 sm:border-b-2 bg-transparent absolute top-0 left-0 w-full z-50 ">
  {/* Logo */}
  <a href="/" className="mr-auto sm:mr-0">
    <img 
      src={logo} 
      height={20} 
      width={20} 
      alt="yeti logo" 
      className="hover:scale-105 h-12 md:h-20 w-20 ml-2 sm:ml-0 sm:h-20 sm:w-32 sm:p-1"
    />
  </a>
  <div className="hidden sm:block">

  {/* Navigation Links */}
  <div className="flex items-center text-lg space-x-9 text-white font-Orbitron justify-center mr-10">
    <a className="hover:scale-110" href="/subsystem">Team</a>
    <a className="hover:scale-110" href="/gallery">Gallery</a>
    <a className="hover:scale-110" href="/gallery#media">Media</a>
    <a className="hover:scale-110" href="/team">About us</a>
    <a className="hover:scale-110" href="/sponsors">Sponsors</a>
    <a className="hover:scale-110" href="#footer">Contact us</a>
  </div>
  </div>

  {/* Mobile Sidebar (right-aligned on small screens) */}
  <div className="sm:hidden ml-auto mr-7">
    <Sidebar />
  </div>
</div>

)
}
