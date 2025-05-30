import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Square } from 'lucide-react';
import { Property } from '../types/property';
import { formatPrice, formatArea } from '../utils/formatters';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <Link 
      to={`/property/${property.id}`}
      className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative">
        {/* Main image */}
        <div className="h-64 overflow-hidden">
          <img
            src={property.images[0]}
            alt={property.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        
        {/* Featured badge */}
        {property.featured && (
          <div className="absolute top-4 left-4 bg-yellow-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
            แนะนำ
          </div>
        )}
        
        {/* Price tag */}
        <div className="absolute bottom-4 right-4 bg-blue-900/90 text-white font-bold px-4 py-2 rounded-lg">
          {formatPrice(property.price)}
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-900 transition-colors mb-2 line-clamp-1">
          {property.title}
        </h3>
        
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin size={18} className="text-blue-900" />
          <span className="ml-1 text-sm">{property.location}</span>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {property.description}
        </p>
        
        <div className="border-t border-gray-200 pt-4">
          <div className="flex justify-between text-sm">
            <div className="flex items-center">
              <Bed size={18} className="text-gray-500" />
              <span className="ml-1">{property.bedrooms} ห้องนอน</span>
            </div>
            
            <div className="flex items-center">
              <Bath size={18} className="text-gray-500" />
              <span className="ml-1">{property.bathrooms} ห้องน้ำ</span>
            </div>
            
            <div className="flex items-center">
              <Square size={18} className="text-gray-500" />
              <span className="ml-1">{formatArea(property.size)}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;