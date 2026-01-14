
"use client"

import { Carousel, Image, Space } from "antd";

export default function Gallery({}: any) {
  
    const images = Array.from({length: 18}, (_, i) => {
        
        if ([7,8,9,10,11, 12,13,14,15,16,17].includes(i)) {
            const selectedArray = Array.from({length: 7}, (_, i) => i)
            const indexRandom = selectedArray[Math.floor(Math.random() * selectedArray.length)]
            return `/asset/img/rose${indexRandom + 1}.jpg`
        }
        return `/asset/img/rose${i+1}.jpg`
    })
    const chunk = ((arr: any, size: any) => {
        const result = []
        for (let i = 0; i < arr.length; i += size) {
          result.push(arr.slice(i, size + i))
        }
        return result
      }
    )
    
    return (
        <div id="gallery">  
            <section  className="py-2 sm:py-6 lg:py-6 px-4 bg-emerald-50/30">
                <div className=" mx-auto">
                    <div className="text-center mb-4 lg:mb-12">
                        <h3 className="text-2xl sm:text-4xl font-bold text-emerald-800 mb-6">Hình ảnh vườn hồng</h3>
                        <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
                    </div>
                        
                </div>
                
            </section>
            <div className="bg-[linear-gradient(180deg,#0f0f0f_0%,#1a1a1a_100%)] rounded-lg">
                <Carousel  arrows infinite={false} >
                    {chunk(images, 6).map((group, index) => (
                        <div key={index} >
                            <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6 my-4 " >
                                {group.map((src: any, idx: any) => (
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
                    ))}
                </Carousel>
            </div>
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
        </div>
    );
}