import Image from 'next/image';
import { getFoods } from '@/utils/getFoods';

export default function Heroes() {
  const foods = getFoods();
  const food = foods.find((item) => item.id === 1);

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between w-full max-w-[1440px] p-8 lg:px-[70px]">
      <div className="text-center lg:text-left max-w-[600px]">
        <h1 className="text-[48px] font-bold text-[rgba(85,107,47,1)] leading-tight">
          Good Food Us <br /> Good Mood
        </h1>
        <p className="text-[16px] text-gray-600 mt-4">
          I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.
        </p>
        <div className="flex gap-4 mt-6">
          <button className="bg-[rgba(139,172,62,1)] text-white px-6 py-3 rounded-full">Daftar Sekarang</button>
          <button className="border border-gray-400 text-gray-600 px-6 py-3 rounded-full">About Us</button>
        </div>
      </div>
      {food && (
        <div className="relative mt-12 lg:mt-0">
          <Image src="/images/greensalad.png" alt="Food Plate" width={412.9} height={414.75} className="rounded-full" />
          <div className="absolute bottom-[-25px] left-[-100px] bg-white opacity-90 p-4 shadow-lg rounded-[25px] flex items-center gap-4">
            <Image src={food.image} alt={food.title} width={50} height={50} className="rounded-full" />
            <div>
              <h4 className="font-semibold text-[18px]">{food.title}</h4>
              <p className="text-[14px] text-gray-500">{food.category}</p>
              <div className="flex mt-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i} className={i < food.rating ? 'text-yellow-400' : 'text-gray-300'}>★</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
