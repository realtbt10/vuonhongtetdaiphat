"use client";
import React, { useState } from 'react';
import { FaFacebookF, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { SiZalo } from 'react-icons/si';
import QRCodeComponent from './QRCode';
import { getGalleryImages } from '@/lib/getImages';
import Gallery from './home/Gallery';

export default function GardenLandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const websiteUrl = "https://vuonnhaban.com";

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const gardenName = "Vườn Hồng Tết Đại Phát";
  const phone = "0888877869";
  const zaloLink = "https://zalo.me/0917066262";
  const facebookLink = "https://www.facebook.com/share/1BygMEwhE1/";
  const googleMapsLink = "https://maps.google.com/?q=20.416311,106.512266";
  const address = "Lạc thành nam, xã Tiền Hải, tỉnh Hưng Yên";
  const colorSocialIcon = '#fff'
  const styleTab = {padding: '4px 8px'}
  
  return (
    <>
      <QRCodeComponent open={open} setOpen={setOpen} />
      <header className={` fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-emerald-50'}`}>
        <div  className=" mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <a href="#home"><h1  className="text-sm sm:text-2xl md:text-2xl lg:text-3xl font-bold text-emerald-800">{gardenName}</h1></a>
            <nav className="hidden md:flex items-center gap-6 font-medium text-emerald-800">
              <a href="#story" className="hover:text-emerald-600 transition">
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
      {/* Hero Section */}
      <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center mt-16 sm:mt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1920&q=80')"
          }}
        ></div>
        <div className="relative z-20 text-center px-4 max-w-4xl">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            {gardenName}
          </h2>
          <p className="text-lg sm:text-xl text-white/95 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow">
            Vườn cây của gia đình chúng tôi được hình thành từ hơn 10 năm trước, nằm trên mảnh đất trù phú của xã Tiền Hải, tỉnh Hưng Yên.
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

      <div className="min-h-screen bg-white mx-4 md:mx-10 lg:mx-50">
  
        {/* Introduction Section */}
      <section id="story" className="py-6 sm:py-24 lg:py-4 px-4 ">
        <div className=" mx-auto">
          <div className="text-center mb-4 lg:mb-12">
            <h3 className="text-2xl sm:text-4xl font-bold text-emerald-800 mb-4 lg:mb-6">Câu chuyện của chúng tôi</h3>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
          </div>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              Vườn cây của gia đình chúng tôi được hình thành từ hơn 10 năm trước, nằm trên mảnh đất trù phú của xã Tiền Hải, tỉnh Hưng Yên. Trải qua nhiều thế hệ gìn giữ và chăm sóc, chúng tôi luôn trung thành với phương pháp canh tác truyền thống, thuận theo tự nhiên và chu kỳ sinh trưởng của cây trồng.
              Mỗi gốc cây trong vườn không chỉ mang giá trị kinh tế mà còn là một phần của cảnh quan xanh mát, được chăm sóc tỉ mỉ bằng kinh nghiệm tích lũy qua nhiều năm. Chúng tôi hạn chế tối đa việc sử dụng hóa chất, ưu tiên các biện pháp tự nhiên để đảm bảo cây phát triển khỏe mạnh, cho ra những mùa quả an toàn và chất lượng.
              Chúng tôi trân trọng mang đến cho quý khách không chỉ là những mùa quả ngọt, mà còn là câu chuyện về đất, về cây và về sự gắn bó lâu dài của gia đình với mảnh vườn quê hương.

            </p>
            
          </div>
        </div>
      </section>

        {/* Gallery Section */}
        {/* <section  className="py-2 sm:py-6 lg:py-6 px-4 bg-emerald-50/30">
          <div className=" mx-auto">
            <div className="text-center mb-4 lg:mb-12">
              <h3 className="text-2xl sm:text-4xl font-bold text-emerald-800 mb-6">Hình ảnh vườn hồng</h3>
              <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6 mb-12">
              {[
                '/asset/img/rose1.jpg',
                '/asset/img/rose2.jpg',
                '/asset/img/rose3.jpg',
                '/asset/img/rose4.jpg',
                '/asset/img/rose5.jpg',
                '/asset/img/rose6.jpg'
              ].map((src, idx) => (
                <div key={idx} className="relative aspect-square overflow-hidden rounded-lg shadow-lg group cursor-pointer">
                  <img 
                    src={src} 
                    alt={`Vườn trái cây ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section> */}
        <div id="gallery"><Gallery/></div>
        
        {/* Contact Section */}
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
  
        
  
        {/* Floating Contact Buttons */}
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
      </div>

      {/* Footer */}
      <footer style={{paddingTop: '10px', marginTop: '10px'}} className="bg-emerald-900 text-white py-12 px-4">
        <div className=" mx-auto text-center">
          <h4 className="text-2xl font-bold mb-1">{gardenName}</h4>
          <p className="text-emerald-200 mb-1">Vườn hồng cảnh sắc - Bền cây, bền chữ tín</p>
          <p onClick={() => setOpen(true)}  className="text-emerald-300 text-sm leading-none">© 2026 {gardenName}. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}