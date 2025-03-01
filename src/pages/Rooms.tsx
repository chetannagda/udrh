import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Bed, Users, DollarSign, Filter } from 'lucide-react';

import RoomCard from '../components/RoomCard';

const Rooms: React.FC = () => {
  const [priceRange, setPriceRange] = useState<[number, number]>([100, 1000]);
  const [capacity, setCapacity] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [showFilters, setShowFilters] = useState<boolean>(false);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Rooms data
  const rooms = [
    {
      id: 'deluxe-king',
      name: 'Deluxe King Suite',
      description: 'Spacious suite with king-sized bed, luxury amenities, and stunning city views.',
      price: 299,
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      size: 45,
      capacity: 2,
      featured: true
    },
    {
      id: 'premium-double',
      name: 'Premium Double Room',
      description: 'Elegant room with two queen beds, perfect for families or small groups.',
      price: 249,
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
      size: 40,
      capacity: 4
    },
    {
      id: 'executive-suite',
      name: 'Executive Suite',
      description: 'Luxurious suite with separate living area, work desk, and premium amenities.',
      price: 399,
      image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      size: 60,
      capacity: 2
    },
    {
      id: 'standard-queen',
      name: 'Standard Queen Room',
      description: 'Comfortable room with a queen-sized bed and all essential amenities for a pleasant stay.',
      price: 199,
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      size: 30,
      capacity: 2
    },
    {
      id: 'family-suite',
      name: 'Family Suite',
      description: 'Spacious suite with two bedrooms, perfect for families with children.',
      price: 499,
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      size: 75,
      capacity: 6
    },
    {
      id: 'presidential-suite',
      name: 'Presidential Suite',
      description: 'Our most luxurious accommodation with panoramic views, private terrace, and butler service.',
      price: 999,
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      size: 120,
      capacity: 4,
      featured: true
    },
    {
      id: 'ocean-view',
      name: 'Ocean View Room',
      description: 'Beautiful room with a private balcony offering stunning ocean views.',
      price: 349,
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2025&q=80',
      size: 35,
      capacity: 2
    },
    {
      id: 'junior-suite',
      name: 'Junior Suite',
      description: 'Elegant suite with a comfortable seating area and premium amenities.',
      price: 329,
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      size: 50,
      capacity: 2
    },
    {
      id: 'penthouse',
      name: 'Penthouse Suite',
      description: 'Exclusive top-floor suite with multiple bedrooms, living areas, and spectacular views.',
      price: 1299,
      image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
      size: 150,
      capacity: 8
    }
  ];

  // Filter rooms based on search and filters
  const filteredRooms = rooms.filter((room) => {
    const matchesSearch = room.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          room.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = room.price >= priceRange[0] && room.price <= priceRange[1];
    const matchesCapacity = room.capacity >= capacity;
    
    return matchesSearch && matchesPrice && matchesCapacity;
  });

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (e.target.name === 'minPrice') {
      setPriceRange([value, priceRange[1]]);
    } else {
      setPriceRange([priceRange[0], value]);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-64 md:h-96">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" }}
        >
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              className="max-w-3xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4 text-shadow">
                Our Rooms & Suites
              </h1>
              <p className="text-lg text-white text-shadow">
                Discover the perfect accommodation for your stay
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-6">
          {/* Search and Filters */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div className="relative w-full md:w-1/3 mb-4 md:mb-0">
                  <input
                    type="text"
                    placeholder="Search rooms..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="input-field pl-10"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
                
                <button 
                  className="flex items-center text-gray-700 hover:text-primary transition-colors duration-300 md:hidden mb-4"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter className="h-5 w-5 mr-2" />
                  {showFilters ? 'Hide Filters' : 'Show Filters'}
                </button>
                
                <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 w-full md:w-2/3 ${showFilters ? 'block' : 'hidden md:grid'}`}>
                  <div className="flex items-center">
                    <Bed className="text-primary mr-2 h-5 w-5" />
                    <select 
                      className="input-field"
                      value={capacity}
                      onChange={(e) => setCapacity(parseInt(e.target.value))}
                    >
                      <option value={1}>Any Capacity</option>
                      <option value={2}>2+ People</option>
                      <option value={4}>4+ People</option>
                      <option value={6}>6+ People</option>
                    </select>
                  </div>
                  
                  <div className="flex items-center">
                    <DollarSign className="text-primary mr-2 h-5 w-5" />
                    <input
                      type="number"
                      name="minPrice"
                      placeholder="Min Price"
                      value={priceRange[0]}
                      onChange={handlePriceChange}
                      className="input-field"
                      min={0}
                    />
                  </div>
                  
                  <div className="flex items-center">
                    <DollarSign className="text-primary mr-2 h-5 w-5" />
                    <input
                      type="number"
                      name="maxPrice"
                      placeholder="Max Price"
                      value={priceRange[1]}
                      onChange={handlePriceChange}
                      className="input-field"
                      min={priceRange[0]}
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <p className="text-gray-600">
                  Showing <span className="font-medium">{filteredRooms.length}</span> of <span className="font-medium">{rooms.length}</span> rooms
                </p>
                <button 
                  className="text-primary hover:text-primary-dark transition-colors duration-300"
                  onClick={() => {
                    setSearchTerm('');
                    setPriceRange([100, 1000]);
                    setCapacity(1);
                  }}
                >
                  Reset Filters
                </button>
              </div>
            </div>
          </div>

          {/* Rooms Grid */}
          {filteredRooms.length > 0 ? (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {filteredRooms.map((room) => (
                <motion.div key={room.id} variants={fadeIn}>
                  <RoomCard {...room} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-2xl font-serif font-bold mb-4">No Rooms Found</h3>
              <p className="text-gray-600 mb-6">
                We couldn't find any rooms matching your search criteria. Please try adjusting your filters.
              </p>
              <button 
                className="btn-primary"
                onClick={() => {
                  setSearchTerm('');
                  setPriceRange([100, 1000]);
                  setCapacity(1);
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Rooms;