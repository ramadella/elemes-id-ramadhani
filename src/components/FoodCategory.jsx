import { foodCategory } from "@/utils/foodCategory";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useSwipeable } from "react-swipeable";

export default function FoodCategory() {
    const [foods, setFoods] = useState(foodCategory());
    const [currentIndex, setCurrentIndex] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    const itemsPerPage = 5;

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1000);
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const nextPage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % foods.length);
    };

    const prevPage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + foods.length) % foods.length);
    };

    const handleDecrease = (id) => {
        setFoods((prevFoods) =>
            prevFoods.map((food) =>
                food.id === id && parseInt(food.jumlah) > 0
                    ? { ...food, jumlah: `${parseInt(food.jumlah) - 1} Items` }
                    : food
            )
        );
    };

    const getVisibleFoods = () => {
        let visible = [];
        for (let i = 0; i < itemsPerPage; i++) {
            visible.push(foods[(currentIndex + i) % foods.length]);
        }
        return visible;
    };

    // Konfigurasi swipe untuk mobile
    const handlers = useSwipeable({
        onSwipedLeft: () => nextPage(),
        onSwipedRight: () => prevPage(),
        trackMouse: true, // Biar bisa juga pakai drag di PC
    });

    return (
        <section className="mt-10">
            <div className="flex flex-col ml-[120px]">
                <h2 className="text-4xl font-bold text-[#333] mb-2">Browse Our Category</h2>
                <p className="text-4xl text-[#8bac3e] font-bold mb-8">Receipt</p>
            </div>
            
            <div {...handlers} className={isMobile ? "flex gap-4 overflow-hidden" : "flex justify-center gap-4"}>
                {getVisibleFoods().map((food, index) => (
                    <div
                        key={food.id}
                        className={`relative w-48 h-48 flex flex-col justify-center items-center rounded-xl shadow-md p-4 transition-all duration-300 ${hoveredIndex === index ? "scale-110" : "scale-100"}`}
                        style={{
                            backgroundColor: food.background,
                            backgroundImage: hoveredIndex === index ? "url('/icons/background.svg')" : "none",
                            backgroundSize: "150px",
                            backgroundRepeat: "repeat",
                            backgroundPosition: "center",
                            backgroundBlendMode: "multiply",
                        }}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onClick={() => handleDecrease(food.id)}
                    >
                        <Image src={food.icon} alt={food.category} width={64} height={64} />
                        <h3 className="text-lg font-bold mt-4 text-[#333]">{food.category}</h3>
                        <p className="text-sm text-gray-500">{food.jumlah}</p>
                    </div>
                ))}
            </div>

            {!isMobile && (
                <div className="flex justify-end mt-8 mr-[120px] gap-4">
                    <button
                        className="bg-[rgba(139,172,62,1)] text-white px-6 py-2 rounded-full flex items-center gap-2 cursor-pointer font-semibold"
                        onClick={prevPage}
                    >
                        <ChevronLeftIcon size={20} />
                        <span>PREV</span>
                    </button>
                    <button
                        className="bg-[rgba(139,172,62,1)] text-white px-6 py-2 rounded-full flex items-center gap-2 cursor-pointer font-semibold"
                        onClick={nextPage}
                    >
                        <span>NEXT</span>
                        <ChevronRightIcon size={20} />
                    </button>
                </div>
            )}
        </section>
    );
}
