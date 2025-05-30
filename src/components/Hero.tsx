import React from 'react';
import { Search } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[600px] max-h-[800px]">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black/50"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            ค้นหาที่อยู่ในฝัน<br />ในประเทศไทย
          </h1>
          
          <p className="text-xl text-white/90 mb-8">
            ที่อยู่อาศัยคุณภาพเยี่ยม ในทำเลที่ดีที่สุดทั่วประเทศไทย พร้อมให้คุณเป็นเจ้าของแล้ววันนี้
          </p>
          
          {/* Search Box */}
          <div className="bg-white rounded-lg shadow-lg p-3 md:p-4 max-w-2xl">
            <div className="flex flex-col md:flex-row">
              <div className="flex-1 mb-2 md:mb-0 md:mr-2">
                <input
                  type="text"
                  placeholder="ค้นหาตามสถานที่หรือชื่อโครงการ..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <button className="bg-blue-900 hover:bg-blue-800 text-white font-medium px-6 py-3 rounded-lg transition-colors flex items-center justify-center">
                <Search size={20} className="mr-2" />
                ค้นหา
              </button>
            </div>
            
            <div className="flex flex-wrap mt-3 gap-2">
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full transition-colors">
                กรุงเทพมหานคร
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full transition-colors">
                ภูเก็ต
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full transition-colors">
                พัทยา
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full transition-colors">
                เชียงใหม่
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full transition-colors">
                หัวหิน
              </button>
            </div>
          </div>
          
          <div className="flex items-center mt-12">
            <div className="flex -space-x-2">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
            </div>
            <div className="ml-4">
              <div className="text-yellow-400 flex">
                ★★★★★ <span className="text-white ml-1">4.9/5</span>
              </div>
              <p className="text-white text-sm">จากลูกค้ากว่า 2,000+ คน</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Curved bottom effect */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 100"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path 
            fill="#F9FAFB" 
            fillOpacity="1" 
            d="M0,64L80,64C160,64,320,64,480,53.3C640,43,800,21,960,16C1120,11,1280,21,1360,26.7L1440,32L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;