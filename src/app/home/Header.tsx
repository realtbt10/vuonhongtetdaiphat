
"use client"

import { FaFacebookF, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { SiZalo } from "react-icons/si";


const styleTab = {padding: '4px 8px'}

export default function Header({isScrolled,gardenName, phone, zaloLink, facebookLink, colorSocialIcon}: any) {
    return (
        <header className={` fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-emerald-50'}`}>
            <div className=" mx-auto px-2 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16 sm:h-20">
                <a href="#home"><h1  className="text-sm sm:text-2xl md:text-2xl lg:text-3xl font-bold text-emerald-800">{gardenName}</h1></a>
                <nav className="hidden md:flex items-center gap-6 font-medium text-emerald-800">
                <a href="#about" className="hover:text-emerald-600 transition">
                    Câu chuyện
                </a>
                <a href="#gallery" className="hover:text-emerald-600 transition">
                    Hình ảnh
                </a>
                <a href="#contact" className="hover:text-emerald-600 transition">
                    Liên hệ
                </a>
                </nav>

                <div className="flex items-center gap-3 sm:gap-4">
                <a href={facebookLink} target="_blank" rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:scale-110 transition-transform">
                    <FaFacebookF size={18} color={colorSocialIcon} />
                </a>
                <a href={zaloLink} target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#0068FF] flex items-center justify-center text-white hover:scale-110 transition-transform">
                    <SiZalo size={20} color={colorSocialIcon}/>
                </a>
                <a href={`tel:${phone}`}
                    className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white hover:scale-110 transition-transform">
                    <FaPhone size={16} color={colorSocialIcon}/>
                </a>
                </div>
            </div>
            </div>
        </header>
    );
}