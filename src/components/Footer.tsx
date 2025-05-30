import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin, 
  Clock 
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Thai Estate</h3>
            <p className="text-gray-400 mb-4">
              บริษัทชั้นนำด้านอสังหาริมทรัพย์ในประเทศไทย มุ่งมั่นสร้างที่อยู่อาศัยคุณภาพ พร้อมบริการที่เป็นเลิศ
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">ลิงค์ด่วน</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  หน้าหลัก
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-gray-400 hover:text-white transition-colors">
                  อสังหาริมทรัพย์
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  เกี่ยวกับเรา
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  ติดต่อเรา
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">
                  บทความ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">พื้นที่</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/properties?location=Bangkok" className="text-gray-400 hover:text-white transition-colors">
                  กรุงเทพมหานคร
                </Link>
              </li>
              <li>
                <Link to="/properties?location=Phuket" className="text-gray-400 hover:text-white transition-colors">
                  ภูเก็ต
                </Link>
              </li>
              <li>
                <Link to="/properties?location=Pattaya" className="text-gray-400 hover:text-white transition-colors">
                  พัทยา
                </Link>
              </li>
              <li>
                <Link to="/properties?location=Chiang Mai" className="text-gray-400 hover:text-white transition-colors">
                  เชียงใหม่
                </Link>
              </li>
              <li>
                <Link to="/properties?location=Hua Hin" className="text-gray-400 hover:text-white transition-colors">
                  หัวหิน
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">ติดต่อเรา</h3>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin size={20} className="mr-2 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-400">
                  98 ถนนสุขุมวิท แขวงคลองเตย เขตคลองเตย กรุงเทพฯ 10110
                </span>
              </li>
              <li className="flex">
                <Phone size={20} className="mr-2 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-400">+66 2 123 4567</span>
              </li>
              <li className="flex">
                <Mail size={20} className="mr-2 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-400">info@thaiestate.com</span>
              </li>
              <li className="flex">
                <Clock size={20} className="mr-2 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-400">จันทร์ - ศุกร์: 9:00 - 18:00</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Thai Estate. สงวนลิขสิทธิ์
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 text-sm hover:text-white transition-colors">
              นโยบายความเป็นส่วนตัว
            </Link>
            <Link to="/terms" className="text-gray-400 text-sm hover:text-white transition-colors">
              ข้อกำหนดการใช้งาน
            </Link>
            <Link to="/sitemap" className="text-gray-400 text-sm hover:text-white transition-colors">
              แผนผังเว็บไซต์
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;