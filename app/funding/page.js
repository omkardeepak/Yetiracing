"use client"
import Navbar from "../components/navbar"
import bg from "../asset/DSC_0641.JPG"
import qr from "../asset/WhatsApp Image 2025-01-04 at 21.22.27_36b3f519.jpg"
import Image from "next/image"
import Footer from "../components/footer"
export default function (){
    return (
        <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />
  
        {/* Main Section */}
        <div className="flex-grow h-screen bg-gradient-to-b from-black to-red-700">
          <div className="relative h-full">
            {/* Background Image */}
            <Image src={bg} alt="bg" className="object-cover h-full w-full" />
  
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
  
            {/* Content */}
            <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center px-6 md:px-20 space-y-10 md:space-y-0">
              {/* Left Side: Text */}
              <div className="text-white font-Goldman text-center md:text-left w-full md:w-3/5 text-3xl md:text-6xl leading-snug">
                <div className="mb-3">Fuel Our Passion:</div>
                <div>Help Us Build the Next Generation of Formula Racing!</div>
              </div>
  
              {/* Right Side: QR Code Box */}
              <div className="flex flex-col items-center bg-red-600 bg-opacity-45 p-6 rounded-xl w-full md:w-1/3">
                <Image
                  src={qr}
                  alt="QR Code"
                  className="object-contain h-40 md:h-52"
                />
                <div className="text-white text-lg md:text-xl font-Rajdhani mt-4 text-center">
                  Pay to <span className="font-bold">ashwins78@fifederal</span> using this QR code 💰
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Footer */}
        <Footer />
      </div>
    )
}