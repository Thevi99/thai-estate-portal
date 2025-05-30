import React, { useState, useEffect } from 'react';
import { properties } from '../data/properties';
import PropertyCard from '../components/PropertyCard';
import PropertyFilter from '../components/PropertyFilter';
import { Property, PropertyFilter as FilterType } from '../types/property';

const PropertiesPage: React.FC = () => {
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(properties);
  const [filter, setFilter] = useState<FilterType>({ location: '' });
  
  useEffect(() => {
    applyFilters(filter);
  }, [filter]);
  
  const applyFilters = (filterParams: FilterType) => {
    let result = [...properties];
    
    if (filterParams.location) {
      const locationLower = filterParams.location.toLowerCase();
      result = result.filter(property => 
        property.location.toLowerCase().includes(locationLower)
      );
    }
    
    if (filterParams.minPrice) {
      result = result.filter(property => property.price >= filterParams.minPrice!);
    }
    
    if (filterParams.maxPrice) {
      result = result.filter(property => property.price <= filterParams.maxPrice!);
    }
    
    if (filterParams.bedrooms) {
      result = result.filter(property => property.bedrooms >= filterParams.bedrooms!);
    }
    
    if (filterParams.bathrooms) {
      result = result.filter(property => property.bathrooms >= filterParams.bathrooms!);
    }
    
    if (filterParams.minSize) {
      result = result.filter(property => property.size >= filterParams.minSize!);
    }
    
    if (filterParams.maxSize) {
      result = result.filter(property => property.size <= filterParams.maxSize!);
    }
    
    setFilteredProperties(result);
  };
  
  const handleFilterChange = (newFilter: FilterType) => {
    setFilter(newFilter);
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            อสังหาริมทรัพย์ในประเทศไทย
          </h1>
          <p className="text-gray-600">
            ค้นพบอสังหาริมทรัพย์คุณภาพเยี่ยมในทำเลที่ดีที่สุดทั่วประเทศไทย
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <PropertyFilter onFilterChange={handleFilterChange} />
          </div>
          
          {/* Main content */}
          <div className="lg:w-3/4">
            {filteredProperties.length === 0 ? (
              <div className="bg-white rounded-xl shadow-lg p-10 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">ไม่พบอสังหาริมทรัพย์</h3>
                <p className="text-gray-600 mb-4">
                  ไม่มีอสังหาริมทรัพย์ที่ตรงกับเงื่อนไขการค้นหาของคุณ กรุณาลองใช้ตัวกรองอื่น
                </p>
                <button
                  onClick={() => setFilter({ location: '' })}
                  className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors"
                >
                  ล้างตัวกรอง
                </button>
              </div>
            ) : (
              <>
                <div className="mb-6 flex justify-between items-center">
                  <p className="text-gray-600">
                    แสดง <span className="font-semibold">{filteredProperties.length}</span> รายการ
                  </p>
                  <div className="flex items-center">
                    <label htmlFor="sort" className="text-sm text-gray-600 mr-2">
                      เรียงตาม:
                    </label>
                    <select
                      id="sort"
                      className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="price-low">ราคา: ต่ำไปสูง</option>
                      <option value="price-high">ราคา: สูงไปต่ำ</option>
                      <option value="newest">ใหม่ล่าสุด</option>
                      <option value="oldest">เก่าสุด</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProperties.map(property => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesPage;