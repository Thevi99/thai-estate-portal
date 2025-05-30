import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Building, 
  DollarSign, 
  Star,
  Check,
  Share2
} from 'lucide-react';
import { properties } from '../data/properties';
import { Property } from '../types/property';
import { formatPrice, formatArea } from '../utils/formatters';
import ImageGallery from '../components/ImageGallery';
import ContactForm from '../components/ContactForm';

const PropertyDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);
  
  useEffect(() => {
    if (id) {
      const foundProperty = properties.find(p => p.id === id);
      setProperty(foundProperty || null);
      
      // Scroll to top when property changes
      window.scrollTo(0, 0);
    }
  }, [id]);
  
  if (!property) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">ไม่พบอสังหาริมทรัพย์</h2>
          <p className="text-gray-600 mb-6">ไม่พบข้อมูลอสังหาริมทรัพย์ที่คุณกำลังค้นหา</p>
          <a 
            href="/properties" 
            className="px-6 py-3 bg-blue-900 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors"
          >
            กลับไปยังรายการอสังหาริมทรัพย์
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {property.title}
              </h1>
              <div className="flex items-center text-gray-600">
                <MapPin size={18} className="mr-1" />
                <span>{property.location}</span>
              </div>
            </div>
            
            <div className="flex flex-col items-end">
              <div className="text-2xl md:text-3xl font-bold text-blue-900">
                {formatPrice(property.price)}
              </div>
              
              <div className="flex items-center mt-2">
                <button className="mr-3 flex items-center text-gray-600 hover:text-gray-900">
                  <Star size={18} className="mr-1" />
                  <span>บันทึก</span>
                </button>
                <button className="flex items-center text-gray-600 hover:text-gray-900">
                  <Share2 size={18} className="mr-1" />
                  <span>แชร์</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ImageGallery images={property.images} />
            
            <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">รายละเอียด</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center">
                  <Bed size={20} className="text-blue-900 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">ห้องนอน</p>
                    <p className="font-medium">{property.bedrooms}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Bath size={20} className="text-blue-900 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">ห้องน้ำ</p>
                    <p className="font-medium">{property.bathrooms}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Square size={20} className="text-blue-900 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">พื้นที่</p>
                    <p className="font-medium">{formatArea(property.size)}</p>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 mb-8">
                {property.description}
              </p>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-4">สิ่งอำนวยความสะดวก</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                {property.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <Check size={18} className="text-green-500 mr-2" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">ทำเลที่ตั้ง</h2>
              <div className="aspect-[16/9] bg-gray-200 rounded-lg mb-4 overflow-hidden">
                {/* In a real application, this would be an actual map component */}
                <div className="w-full h-full flex items-center justify-center bg-blue-100">
                  <div className="text-center">
                    <MapPin size={40} className="text-blue-900 mx-auto mb-2" />
                    <p className="font-medium text-gray-800">{property.location}</p>
                    <p className="text-sm text-gray-600">แผนที่จะแสดงตรงนี้</p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">สถานที่ใกล้เคียง</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <Building size={16} className="text-blue-900" />
                  </div>
                  <div>
                    <p className="font-medium">ห้างสรรพสินค้า</p>
                    <p className="text-sm text-gray-600">300 เมตร</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <Building size={16} className="text-blue-900" />
                  </div>
                  <div>
                    <p className="font-medium">สถานีรถไฟฟ้า</p>
                    <p className="text-sm text-gray-600">500 เมตร</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <Building size={16} className="text-blue-900" />
                  </div>
                  <div>
                    <p className="font-medium">โรงพยาบาล</p>
                    <p className="text-sm text-gray-600">1.2 กิโลเมตร</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <Building size={16} className="text-blue-900" />
                  </div>
                  <div>
                    <p className="font-medium">สวนสาธารณะ</p>
                    <p className="text-sm text-gray-600">800 เมตร</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <ContactForm propertyTitle={property.title} />
            
            <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">ข้อมูลโครงการ</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">ประเภทโครงการ</span>
                  <span className="font-medium">คอนโดมิเนียม</span>
                </div>
                
                <div className="border-t border-gray-200 pt-4 flex justify-between">
                  <span className="text-gray-600">ปีที่สร้างเสร็จ</span>
                  <span className="font-medium">2023</span>
                </div>
                
                <div className="border-t border-gray-200 pt-4 flex justify-between">
                  <span className="text-gray-600">จำนวนชั้น</span>
                  <span className="font-medium">32 ชั้น</span>
                </div>
                
                <div className="border-t border-gray-200 pt-4 flex justify-between">
                  <span className="text-gray-600">จำนวนยูนิต</span>
                  <span className="font-medium">350 ยูนิต</span>
                </div>
                
                <div className="border-t border-gray-200 pt-4 flex justify-between">
                  <span className="text-gray-600">ค่าส่วนกลาง</span>
                  <span className="font-medium">50 บาท/ตร.ม./เดือน</span>
                </div>
                
                <div className="border-t border-gray-200 pt-4 flex justify-between">
                  <span className="text-gray-600">เงินกองทุน</span>
                  <span className="font-medium">500 บาท/ตร.ม.</span>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-6 mt-8 border border-blue-100">
              <div className="flex items-center mb-4">
                <DollarSign size={24} className="text-blue-900 mr-2" />
                <h3 className="text-lg font-semibold">คำนวณสินเชื่อเบื้องต้น</h3>
              </div>
              
              <div className="space-y-4 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">ราคาอสังหาริมทรัพย์</span>
                  <span className="font-medium">{formatPrice(property.price)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">ดาวน์ 20%</span>
                  <span className="font-medium">{formatPrice(property.price * 0.2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">ยอดกู้</span>
                  <span className="font-medium">{formatPrice(property.price * 0.8)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">ผ่อนประมาณ (30 ปี)</span>
                  <span className="font-medium text-blue-900">{formatPrice((property.price * 0.8) / 360)}/เดือน</span>
                </div>
              </div>
              
              <button className="w-full bg-blue-900 hover:bg-blue-800 text-white font-medium py-3 rounded-lg transition-colors">
                ปรึกษาฟรี
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage;