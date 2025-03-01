import Image from 'next/image';
import { Mail, Phone, Instagram } from 'lucide-react';

export default function Footer(){
    return (
        <footer className="hidden md:block p-8 mt-[100px]">
            <div className="max-w-6xl mx-auto grid grid-cols-4 gap-8 bg-[rgba(249,255,246,1)] p-[20px]">
                <div>
                    <Image src="/image.png" alt="elemes.id logo" width={150} height={50} />
                    <p className="mt-4 text-sm text-gray-700">
                        Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, Kecamatan Setiabudi, Kota Jakarta Selatan,
                        Daerah Khusus Ibukota Jakarta 12950
                    </p>
                    <div className="flex gap-4 mt-4">
                        {[
                            { icon: Mail, alt: 'Email' },
                            { icon: Phone, alt: 'Phone' },
                            { icon: Instagram, alt: 'Instagram' },
                        ].map(({ icon: Icon, alt }, index) => (
                            <div
                                key={index}
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-[rgba(139,172,62,1)] text-white transition-all duration-300 cursor-pointer hover:bg-white hover:text-[rgba(139,172,62,1)] border border-[rgba(139,172,62,1)]"
                            >
                                <Icon size={20} aria-label={alt} />
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="font-bold">Categories</h3>
                    <ul className="mt-4 text-sm space-y-2">
                        <li>Cupcake</li>
                        <li>Pizza</li>
                        <li>Kebab</li>
                        <li>Salmon</li>
                        <li>Dougnut</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold">About Us</h3>
                    <ul className="mt-4 text-sm space-y-2">
                        <li>About Us</li>
                        <li>FAQ</li>
                        <li>Report Problem</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold">Newsletter</h3>
                    <p className="text-sm mt-4">
                        Get now free 50% discount for all products on your first order
                    </p>
                    <div className="flex mt-4">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="p-2 rounded-l-full border w-full"
                        />
                        <button className="bg-[rgba(139,172,62,1)] text-white px-4 rounded-r-full">
                            SEND
                        </button>
                    </div>
                    <div className="mt-4 text-sm">
                        <div className="flex items-center gap-2">
                            <Mail size={16} className="text-[rgba(139,172,62,1)]" />
                            <span>elemesid@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                            <Phone size={16} className="text-[rgba(139,172,62,1)]" />
                            <span>0888 1111 2222</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[rgba(255,255,255,1)]'>
                <p className="text-center text-sm mt-8">© 2021 ELEMES ID. ALL RIGHTS RESERVED</p>
            </div>
        </footer>
    );
};
