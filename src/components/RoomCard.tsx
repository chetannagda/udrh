import React from 'react';
import { Link } from 'react-router-dom';
import { Wifi, Coffee, Tv, Bath } from 'lucide-react';

interface RoomCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  size: number;
  capacity: number;
  featured?: boolean;
}

const RoomCard: React.FC<RoomCardProps> = ({
  id,
  name,
  description,
  price,
  image,
  size,
  capacity,
  featured = false,
}) => {
  return (
    <div className={`room-card ${featured ? 'border-2 border-primary' : ''}`}>
      <div className="relative overflow-hidden">
        <img src={image} alt={name} className="w-full h-64 object-cover" />
        {featured && (
          <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 font-medium">
            Featured
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif font-bold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        
        <div className="flex flex-wrap gap-4 mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <Wifi className="h-4 w-4 text-primary mr-1" />
            <span>Free WiFi</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Coffee className="h-4 w-4 text-primary mr-1" />
            <span>Breakfast</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Tv className="h-4 w-4 text-primary mr-1" />
            <span>Smart TV</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Bath className="h-4 w-4 text-primary mr-1" />
            <span>Luxury Bath</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div>
            <span className="text-2xl font-bold text-primary">${price}</span>
            <span className="text-gray-500 text-sm"> / night</span>
          </div>
          <Link to={`/rooms/${id}`} className="btn-primary">
            View Details
          </Link>
        </div>
        
        <div className="flex justify-between text-sm text-gray-500 mt-4 pt-4 border-t">
          <span>{size} m² Room Size</span>
          <span>Max {capacity} {capacity === 1 ? 'Person' : 'People'}</span>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;