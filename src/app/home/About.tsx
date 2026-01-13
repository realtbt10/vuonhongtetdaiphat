
"use client"

export default function About({}: any) {
    return (
        <div id="about">
            <section id="story" className="py-6 sm:py-24 lg:py-4 px-4 ">
                <div className=" mx-auto">
                <div className="text-center mb-4 lg:mb-12">
                    <h3 className="text-2xl sm:text-4xl font-bold text-emerald-800 mb-4 lg:mb-6">Câu chuyện của chúng tôi</h3>
                    <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                        Vườn Hồng Tết Đại Phát của chúng tôi được trồng gần 10 năm trên mảnh đất trù phú tại Thôn lạc thành nam xã Tiền Hải Hưng Yên. Trải qua nhiều thế hệ gìn giữ và chăm sóc, chúng tôi luôn trung thành với phương pháp canh tác truyền thống, thuận theo tự nhiên và chu kỳ sinh trưởng của cây trồng.
                        Mỗi gốc cây trong vườn không chỉ mang giá trị kinh tế mà còn là một phần của cảnh quan xanh mát, được chăm sóc tỉ mỉ bằng kinh nghiệm tích lũy qua nhiều năm. Chúng tôi hạn chế tối đa việc sử dụng hóa chất, ưu tiên các biện pháp tự nhiên để đảm bảo cây phát triển khỏe mạnh, cho ra những mùa quả an toàn và chất lượng.
                        Chúng tôi trân trọng mang đến cho quý khách không chỉ là những mùa quả ngọt, mà còn là câu chuyện về đất, về cây và về sự gắn bó lâu dài của gia đình với mảnh vườn quê hương.
                    </p>
                    
                </div>
                </div>
            </section>
        </div>
    );
}