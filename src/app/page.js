"use client";
import FoodCategory from "@/components/FoodCategory";
import FoodList from "@/components/FoodList";
import Footer from "@/components/Footer";
import Heroes from "@/components/Heroes";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <main>
      <nav className="flex flex-col lg:flex-row items-center justify-between w-full max-w-[1440px] h-auto lg:h-[96px] lg:px-[50px] py-4">
        <div className="flex items-center mb-4 lg:mb-0">
          <Image src="/image.png" alt="logo" width={207} height={50} />
        </div>
        <ul className="flex flex-col lg:flex-row gap-4 lg:gap-[32px] items-center text-center">
          <li><a href="#" className="hover:text-blue-500">Home</a></li>
          <li><a href="#" className="hover:text-blue-500">About</a></li>
          <li className="relative"><a href="#" className="hover:text-blue-500 flex items-center gap-1">Promotions <span className="absolute bottom-[20px] left-[60px] text-xs bg-red-600 text-white px-2 py-0.5 rounded-full">HOT</span></a></li>
          <li><a href="#" className="hover:text-blue-500">Blogs</a></li>
          <li><a href="#" className="hover:text-blue-500">Contact Us</a></li>
        </ul>
        <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-[5px] mt-4 lg:mt-0">
          <button className={`cursor-pointer px-5 py-2 rounded-full transition-colors duration-300 ${isHovered ? 'bg-[rgba(139,172,62,1)] text-white' : 'bg-transparent'}`}>Masuk</button>
          <button className="bg-[rgba(139,172,62,1)] text-white px-5 py-2 rounded-full cursor-pointer hover:bg-transparent hover:text-black transition-colors duration-300" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>Daftar Sekarang</button>
        </div>
      </nav>
      <div>
      <Heroes />
      </div>
      <div>
      <FoodCategory />
      <FoodList />
      <Footer/>
      </div>
    </main>
  );
}
