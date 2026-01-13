
"use client"

import { FaFacebookF, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { SiZalo } from "react-icons/si";


const styleTab = {padding: '4px 8px'}

export default function Contact({phone, zaloLink, facebookLink, address, googleMapsLink}: any) {
    return (
        <>
            <section id="contact" className="py-2 sm:py-6 lg:py-6 px-4 w-full">
                <div className=" mx-auto ">
                    <div className="text-center mb-4 lg:mb-12">
                    <h3 className="text-3xl sm:text-4xl font-bold text-emerald-800 mb-6">Liên hệ với chúng tôi</h3>
                    <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
                    </div>
        
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <a 
                        style={styleTab} 
                        href={`tel:${phone}`} 
                        className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-emerald-100 hover:border-emerald-300 group"
                    >
                        <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-full bg-emerald-600 flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                            <FaPhone size={22} />
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-2">Số điện thoại</h4>
                            <p className="text-2xl font-bold text-emerald-700">{phone}</p>
                            <p className="text-sm text-gray-600 mt-1">Nhấn để gọi ngay</p>
                        </div>
                        </div>
                    </a>
        
                    <a 
                        style={{padding: '4px 8px'}}
                        href={zaloLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-blue-100 hover:border-blue-300 group">
                        <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-full bg-[#0068FF] flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                            <SiZalo size={26} />
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-2">Zalo</h4>
                            <p className="text-xl font-bold text-[#0068FF]">Chat ngay</p>
                            <p className="text-sm text-gray-600 mt-1">Tư vấn & đặt hàng</p>
                        </div>
                        </div>
                    </a>
        
                    <a 
                        style={styleTab}
                        href={facebookLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-blue-100 hover:border-blue-300 group"
                    >
                        <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-full bg-[#1877F2] flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                            <FaFacebookF size={24} />
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-2">Facebook</h4>
                            <p className="text-xl font-bold text-[#1877F2]">Theo dõi trang</p>
                            <p className="text-sm text-gray-600 mt-1">Cập nhật tin tức mới nhất</p>
                        </div>
                        </div>
                    </a>
                    <div style={styleTab} className="bg-white p-8 rounded-2xl shadow-lg border border-amber-100">
                        <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-full bg-amber-500 flex items-center justify-center text-white flex-shrink-0">
                            <FaMapMarkerAlt size={22} />
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-2">Địa chỉ</h4>
                            <p className="text-gray-700 leading-relaxed">{address}</p>
                            <a href={googleMapsLink} target="_blank" rel="noopener noreferrer"
                            className="inline-block mt-3 text-emerald-700 font-semibold hover:text-emerald-800">
                            Xem bản đồ →
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
        </>
    );
}