
"use client"

import { FaFacebookF, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { SiZalo } from "react-icons/si";


const styleTab = {padding: '4px 8px'}

export default function HeroSection({colorSocialIcon, zaloLink, gardenName, googleMapsLink}: any) {
    return (
        <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center mt-16 sm:mt-20">
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20 z-10"></div>
            <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1920&q=80')"
            }}
            >

            </div>
            <div className="relative z-20 text-center px-4 max-w-4xl">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                {gardenName}
            </h2>
            <p className="text-lg sm:text-xl text-white/95 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow">
                Vườn Hồng Tết Đại Phát của chúng tôi được trồng gần 10 năm trên mảnh đất trù phú tại Thôn lạc thành nam xã Tiền Hải Hưng Yên
            </p>
            <div style={{marginTop: '20px'}} className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={googleMapsLink} target="_blank" rel="noopener noreferrer"
                style={{color: '#fff'}}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition-all shadow-lg hover:shadow-xl">
                <FaMapMarkerAlt size={18} color={'yellow'} />
                Chỉ đường đến vườn
                </a>
                <a href={zaloLink} target="_blank" rel="noopener noreferrer"
                style={{color: '#fff'}}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0068FF] text-white rounded-full font-semibold hover:bg-[#0057D9] transition-all shadow-lg hover:shadow-xl">
                <SiZalo size={20} color={colorSocialIcon}/>
                Chat Zalo
                </a>
            </div>
            </div>
        </section>
    );
}