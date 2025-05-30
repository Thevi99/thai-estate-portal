import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { PropertyFilter as PropertyFilterType } from '../types/property';

interface PropertyFilterProps {
  onFilterChange: (filter: PropertyFilterType) => void;
}

const PropertyFilter: React.FC<PropertyFilterProps> = ({ onFilterChange }) => {
  const [filter, setFilter] = useState<PropertyFilterType>({
    location: '',
    minPrice: undefined,
    maxPrice: undefined,
    bedrooms: undefined,
    bathrooms: undefined
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Convert to number for numeric fields
    const numericFields = ['minPrice', 'maxPrice', 'bedrooms', 'bathrooms'];
    const parsedValue = numericFields.includes(name) && value !== '' 
      ? Number(value) 
      : value;
    
    setFilter(prev => ({
      ...prev,
      [name]: parsedValue
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilterChange(filter);
  };

  const clearFilters = () => {
    setFilter({
      location: '',
      minPrice: undefined,
      maxPrice: undefined,
      bedrooms: undefined,
      bathrooms: undefined
    });
    onFilterChange({
      location: ''
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">ค้นหาอสังหาริมทรัพย์</h2>
        <button
          onClick={clearFilters}
          className="text-gray-500 hover:text-gray-700 flex items-center"
        >
          <X size={16} className="mr-1" />
          <span className="text-sm">ล้างตัวกรอง</span>
        </button>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
              สถานที่
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={filter.location}
              onChange={handleInputChange}
              placeholder="เช่น กรุงเทพฯ, ภูเก็ต"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="minPrice" className="block text-sm font-medium text-gray-700 mb-1">
                ราคาต่ำสุด (฿)
              </label>
              <input
                type="number"
                id="minPrice"
                name="minPrice"
                value={filter.minPrice || ''}
                onChange={handleInputChange}
                placeholder="ราคาต่ำสุด"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="maxPrice" className="block text-sm font-medium text-gray-700 mb-1">
                ราคาสูงสุด (฿)
              </label>
              <input
                type="number"
                id="maxPrice"
                name="maxPrice"
                value={filter.maxPrice || ''}
                onChange={handleInputChange}
                placeholder="ราคาสูงสุด"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700 mb-1">
                ห้องนอน
              </label>
              <select
                id="bedrooms"
                name="bedrooms"
                value={filter.bedrooms || ''}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">ทั้งหมด</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="bathrooms" className="block text-sm font-medium text-gray-700 mb-1">
                ห้องน้ำ
              </label>
              <select
                id="bathrooms"
                name="bathrooms"
                value={filter.bathrooms || ''}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">ทั้งหมด</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
              </select>
            </div>
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-900 hover:bg-blue-800 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
          >
            <Search size={18} className="mr-2" />
            ค้นหา
          </button>
        </div>
      </form>
    </div>
  );
};

export default PropertyFilter;