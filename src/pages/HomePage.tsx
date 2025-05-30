import React from 'react';
import Hero from '../components/Hero';
import FeaturedProperties from '../components/FeaturedProperties';
import PropertyCard from '../components/PropertyCard';
import { properties } from '../data/properties';
import { Building2, MapPin, ThumbsUp, Award, HeartHandshake } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <FeaturedProperties properties={properties} />
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">ทำไมต้องเลือกเรา</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              เรามุ่งมั่นที่จะมอบประสบการณ์การซื้อและเช่าอสังหาริมทรัพย์ที่ดีที่สุดในประเทศไทย ด้วยบริการที่เป็นเลิศและความเชี่ยวชาญในตลาด
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-blue-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300">
              <div className="bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">อสังหาริมทรัพย์คุณภาพ</h3>
              <p className="text-gray-600">
                เราคัดสรรอสังหาริมทรัพย์คุณภาพสูงในทำเลที่ดีที่สุดทั่วประเทศไทย
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300">
              <div className="bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">ทำเลยอดเยี่ยม</h3>
              <p className="text-gray-600">
                ทุกโครงการของเราอยู่ในทำเลที่มีศักยภาพสูง สะดวกสบาย และเดินทางง่าย
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300">
              <div className="bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ThumbsUp size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">บริการที่เป็นเลิศ</h3>
              <p className="text-gray-600">
                ทีมงานมืออาชีพพร้อมให้คำปรึกษาและดูแลคุณในทุกขั้นตอนของการซื้อหรือขาย
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300">
              <div className="bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeartHandshake size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">ความไว้วางใจ</h3>
              <p className="text-gray-600">
                เราได้รับความไว้วางใจจากลูกค้ากว่า 2,000 คนและมีประสบการณ์กว่า 10 ปี
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg')] bg-cover bg-center"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-white">พื้นที่ยอดนิยม</h2>
            <p className="text-blue-100 mt-4 max-w-2xl mx-auto">
              ค้นพบอสังหาริมทรัพย์ในทำเลที่ดีที่สุดทั่วประเทศไทย
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
              <img 
                src="https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg" 
                alt="Bangkok" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white">กรุงเทพมหานคร</h3>
                <p className="text-blue-100 mt-1">36 อสังหาริมทรัพย์</p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
              <img 
                src="https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg" 
                alt="Phuket" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white">ภูเก็ต</h3>
                <p className="text-blue-100 mt-1">24 อสังหาริมทรัพย์</p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
              <img 
                src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg" 
                alt="Pattaya" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white">พัทยา</h3>
                <p className="text-blue-100 mt-1">18 อสังหาริมทรัพย์</p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
              <img 
                src="https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg" 
                alt="Chiang Mai" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white">เชียงใหม่</h3>
                <p className="text-blue-100 mt-1">12 อสังหาริมทรัพย์</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">อสังหาริมทรัพย์ล่าสุด</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              ค้นพบอสังหาริมทรัพย์ที่เพิ่งเข้ามาใหม่ในตลาดและคว้าโอกาสก่อนใคร
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.slice(0, 3).map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <a 
              href="/properties" 
              className="inline-block px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white font-medium rounded-lg transition-colors"
            >
              ดูอสังหาริมทรัพย์ทั้งหมด
            </a>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/2">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">ได้รับความไว้วางใจจากลูกค้ากว่า 2,000 คน</h2>
              <p className="text-gray-600 mb-6">
                ด้วยประสบการณ์กว่า 10 ปีในธุรกิจอสังหาริมทรัพย์ เราได้ช่วยให้ลูกค้ากว่า 2,000 คนได้พบกับที่อยู่อาศัยในฝัน เราภูมิใจที่ได้รับความไว้วางใจจากลูกค้าของเราและมุ่งมั่นที่จะมอบบริการที่ดีที่สุด
              </p>
              
              <div className="bg-gray-100 p-6 rounded-xl mb-6">
                <div className="flex items-center text-yellow-500 mb-2">
                  ★★★★★
                </div>
                <p className="text-gray-600 italic">
                  "บริการยอดเยี่ยม! ทีมงานมืออาชีพช่วยเหลือผมในทุกขั้นตอนของการซื้อคอนโดที่กรุงเทพฯ แม้ว่าผมจะอยู่ต่างประเทศ ขอบคุณมากครับ"
                </p>
                <div className="mt-4 flex items-center">
                  <img 
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" 
                    alt="Customer" 
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-medium text-gray-900">คุณสมชาย วงศ์สุวรรณ</p>
                    <p className="text-sm text-gray-500">ลูกค้าจากญี่ปุ่น</p>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <div className="bg-blue-50 px-4 py-3 rounded-lg flex items-center">
                  <Award className="text-blue-900 mr-2" size={24} />
                  <div>
                    <p className="text-sm text-gray-600">รางวัล</p>
                    <p className="font-semibold">อสังหาริมทรัพย์ยอดเยี่ยม 2024</p>
                  </div>
                </div>
                
                <div className="bg-blue-50 px-4 py-3 rounded-lg flex items-center">
                  <ThumbsUp className="text-blue-900 mr-2" size={24} />
                  <div>
                    <p className="text-sm text-gray-600">ความพึงพอใจ</p>
                    <p className="font-semibold">98% จากลูกค้าทั้งหมด</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/1056553/pexels-photo-1056553.jpeg" 
                  alt="Customer Story" 
                  className="w-full h-auto rounded-xl shadow-lg"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg w-48">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center text-white font-bold">
                      2K+
                    </div>
                    <p className="ml-3 font-semibold">ลูกค้าที่พอใจ</p>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-900 w-[98%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;