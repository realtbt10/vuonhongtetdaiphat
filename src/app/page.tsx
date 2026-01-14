"use client";
import React, { useState } from 'react';
import QRCodeComponent from './QRCode';
import About from './home/About';
import Contact from './home/Contact';
import Footer from './home/Footer';
import Gallery from './home/Gallery';
import Header from './home/Header';
import HeroSection from './home/HeroSection';
import StickyActionButtons from './home/StickyActionButtons';

export default function GardenLandingPage() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [open, setOpen] = useState(false);

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
    const colorSocialIcon = '#fff'
    const address = 'Địa chỉLạc thành nam, xã Tiền Hải, tỉnh Hưng Yên'
    const websiteUrl = "https://vuonhongtetdaiphat.vercel.app/"; 
    return (
        <>
            <Header 
                isScrolled={isScrolled} 
                gardenName={gardenName} 
                phone={phone} 
                zaloLink={zaloLink} 
                facebookLink={facebookLink} 
                googleMapsLink={googleMapsLink}
                colorSocialIcon={colorSocialIcon}
            />
            <HeroSection 
                id="home" 
                colorSocialIcon={colorSocialIcon} 
                zaloLink={zaloLink} 
                gardenName={gardenName} 
                googleMapsLink={googleMapsLink}
            />
            <div className="min-h-screen bg-white mx-4 md:mx-10 lg:mx-50">
                <About />
                <Gallery />
                <Contact 
                    phone={phone} 
                    zaloLink={zaloLink} 
                    facebookLink={facebookLink} 
                    address={address} 
                    googleMapsLink={googleMapsLink}
                />
                <StickyActionButtons phone={phone} zaloLink={zaloLink} colorSocialIcon={colorSocialIcon}/>
            </div>
            <Footer gardenName={gardenName} setOpen={setOpen}/>
            <QRCodeComponent websiteUrl={websiteUrl} open={open} setOpen={setOpen} />
        </>
    );
}