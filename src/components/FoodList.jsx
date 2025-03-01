import { getFoods } from '@/utils/getFoods';
import { useState } from 'react';
import Image from 'next/image';

export default function FoodList() {
    const foods = getFoods().filter(food => food.id >= 2 && food.id <= 9);
    const [hoveredIndex, setHoveredIndex] = useState(null);
  
    return (
      <section className="mt-10">
        <div className="flex flex-col ml-6 md:ml-[120px]">
          <h2 className="text-2xl md:text-4xl font-bold text-[#333] mb-2">Browser Our Trending</h2>
          <p className="text-2xl md:text-4xl text-[#8bac3e] font-bold mb-8">Receipt</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center items-center px-6 md:px-[120px]">
          {foods.map((food, index) => (
            <div
              key={food.id}
              className={`relative w-full h-auto flex flex-col justify-center items-center rounded-xl shadow-md p-4 transition-all duration-300 ${hoveredIndex === index ? 'scale-105' : 'scale-100'}`}
              style={{
                backgroundColor: food.background,
                backgroundImage: hoveredIndex === index ? "url('/icons/background.svg')" : 'none',
                backgroundSize: '150px',
                backgroundRepeat: 'repeat',
                backgroundPosition: 'center',
                backgroundBlendMode: 'multiply',
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative z-10 flex flex-col items-center">
                <Image src={food.image} alt={food.title} width={64} height={64} />
                <h3 className="text-lg font-bold mt-4 text-[#333]">{food.title}</h3>
                <p className="text-sm text-gray-500">{food.category}</p>
                <p className="text-yellow-500">{'★'.repeat(food.rating)}</p>
              </div>
              {hoveredIndex === index && (
                <div className="absolute inset-0 bg-[url('/icons/background.svg')] bg-cover bg-center opacity-1 rounded-xl"></div>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-[rgba(139,172,62,1)] text-white px-6 py-2 rounded-full font-semibold cursor-pointer">ALL Receipt</button>
        </div>
      </section>
    );
  }
  