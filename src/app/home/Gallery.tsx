
"use client"

import { Image, Space } from "antd";

export default function Gallery() {
  
    const images = Array.from({length: 6}, (_, i) => `/asset/img/rose${i+1}.jpg`)
    return (
        <>
            <section  className="py-2 sm:py-6 lg:py-6 px-4 bg-emerald-50/30">
                <div className=" mx-auto">
                    <div className="text-center mb-4 lg:mb-12">
                        <h3 className="text-2xl sm:text-4xl font-bold text-emerald-800 mb-6">Hình ảnh vườn hồng</h3>
                        <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6 mb-12">
                        {images.map((src, idx) => (
                            <div key={idx} className="relative aspect-square overflow-hidden rounded-lg shadow-lg group cursor-pointer">
                                <Image
                                    src={src}
                                    alt={`Rose ${idx + 1}`}
                                    className="object-cover"
                                    width="100%"
                                    height="100%"
                                    preview={{
                                        mask: true,
                                        cover: (
                                        <Space vertical align="center">
                                            Xem ảnh
                                        </Space>
                                        ),
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section  className="py-2 sm:py-6 lg:py-6 px-4 bg-red">
                <div className=" mx-auto">
                    <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-4 lg:mb-12"></div>
                    <div className="mx-auto bg-gray-50">
                            <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl cursor-pointer">
                                <video 
                                    controls 
                                    poster="asset/img/poster.png"
                                    className="w-full h-full object-cover"
                                >
                                    <source src="/asset/video/garden-video.mp4" type="video/mp4" />
                                    Trình duyệt của bạn không hỗ trợ video.
                                </video>
                            </div>
                    </div>
                </div>
            </section>
        </>
    );
}