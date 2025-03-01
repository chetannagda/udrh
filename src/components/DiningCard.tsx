import React from 'react';
import { Clock, MapPin } from 'lucide-react';

interface DiningCardProps {
  name: string;
  description: string;
  image: string;
  hours: string;
  location: string;
  cuisine: string;
}

const DiningCard: React.FC<DiningCardProps> = ({
  name,
  description,
  image,
  hours,
  location,
  cuisine,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-serif font-bold">{name}</h3>
          <span className="bg-primary-dark text-white text-xs px-2 py-1 rounded">
            {cuisine}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="h-4 w-4 text-primary mr-2" />
            <span>{hours}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="h-4 w-4 text-primary mr-2" />
            <span>{location}</span>
          </div>
        </div>
        
        <button className="btn-outline w-full">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default DiningCard;