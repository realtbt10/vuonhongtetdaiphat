
"use client"

import { FaFacebookF, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { SiZalo } from "react-icons/si";


const styleTab = {padding: '4px 8px'}

export default function StickyActionButtons({phone, zaloLink, colorSocialIcon}: any) {
    return (
        <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
            <a href={zaloLink} target="_blank" rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-[#0068FF] flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform">
                <SiZalo size={26}  color={colorSocialIcon}/>
            </a>
            <a href={`tel:${phone}`}
                className="w-14 h-14 rounded-full bg-emerald-600 flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform">
                <FaPhone size={20} color={colorSocialIcon}/>
            </a>
        </div>
    );
}