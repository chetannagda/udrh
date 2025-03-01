import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Wifi, 
  Coffee, 
  Tv, 
  Bath, 
  Users, 
  Maximize, 
  Check, 
  X,
  ArrowLeft
} from 'lucide-react';

import BookingForm from '../components/BookingForm';

const RoomDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // Rooms data (in a real app, this would come from an API)
  const rooms = [
    {
      id: 'deluxe-king',
      name: 'Deluxe King Suite',
      description: 'Spacious suite with king-sized bed, luxury amenities, and stunning city views.',
      longDescription: 'Experience the epitome of luxury in our Deluxe King Suite. This spacious accommodation features a plush king-sized bed with premium linens, a separate seating area, and floor-to-ceiling windows offering breathtaking city views. The elegant marble bathroom includes a deep soaking tub, separate rain shower, and premium toiletries. Modern amenities such as a smart TV, high-speed WiFi, and Bluetooth sound system ensure a comfortable and connected stay.',
      price: 299,
      images: [
        'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1571508601891-ca5e7a713859?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
      ],
      size: 45,
      capacity: 2,
      bedType: 'King',
      featured: true,
      amenities: [
        'Free WiFi',
        'Breakfast Included',
        'Smart TV',
        'Luxury Bath',
        'Mini Bar',
        'Safe',
        'Air Conditioning',
        'Room Service',
        'Coffee Machine',
        'Bathrobes & Slippers'
      ],
      policies: {
        checkIn: '3:00 PM',
        checkOut: '12:00 PM',
        cancellation: 'Free cancellation up to 48 hours before check-in',
        smoking: false,
        pets: false
      }
    },
    {
      id: 'premium-double',
      name: 'Premium Double Room',
      description: 'Elegant room with two queen beds, perfect for families or small groups.',
      longDescription: 'Our Premium Double Room offers comfortable accommodation for families or small groups. Featuring two plush queen-sized beds with premium linens, this elegantly designed room provides ample space for relaxation. The modern bathroom includes a combination tub and shower with premium toiletries. Enjoy entertainment on the smart TV or stay connected with high-speed WiFi. Large windows offer beautiful views and fill the room with natural light.',
      price: 249,
      images: [
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
        'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
        'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
      ],
      size: 40,
      capacity: 4,
      bedType: 'Two Queens',
      amenities: [
        'Free WiFi',
        'Breakfast Included',
        'Smart TV',
        'Luxury Bath',
        'Mini Bar',
        'Safe',
        'Air Conditioning',
        'Room Service',
        'Coffee Machine'
      ],
      policies: {
        checkIn: '3:00 PM',
        checkOut: '12:00 PM',
        cancellation: 'Free cancellation up to 48 hours before check-in',
        smoking: false,
        pets: true
      }
    },
    {
      id: 'executive-suite',
      name: 'Executive Suite',
      description: 'Luxurious suite with separate living area, work desk, and premium amenities.',
      longDescription: 'The Executive Suite is designed for the discerning business traveler who requires both comfort and functionality. This luxurious suite features a king-sized bed with premium linens and a separate living area with comfortable seating. The dedicated work space includes a large desk and ergonomic chair. The marble bathroom offers a deep soaking tub, separate rain shower, and premium toiletries. Additional amenities include a Nespresso machine, smart TV with streaming capabilities, and high-speed WiFi.',
      price: 399,
      images: [
        'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
      ],
      size: 60,
      capacity: 2,
      bedType: 'King',
      amenities: [
        'Free WiFi',
        'Breakfast Included',
        'Smart TV',
        'Luxury Bath',
        'Mini Bar',
        'Safe',
        'Air Conditioning',
        'Room Service',
        'Coffee Machine',
        'Bathrobes & Slippers',
        'Work Desk',
        'Separate Living Area',
        'Turndown Service'
      ],
      policies: {
        checkIn: '2:00 PM',
        checkOut: '12:00 PM',
        cancellation: 'Free cancellation up to 48 hours before check-in',
        smoking: false,
        pets: false
      }
    }
  ];

  const room = rooms.find(room => room.id === id);

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-serif font-bold mb-4">Room Not Found</h2>
          <p className="text-gray-600 mb-6">The room you're looking for doesn't exist or has been removed.</p>
          <Link to="/rooms" className="btn-primary">
            View All Rooms
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Room Gallery */}
      <section className="pt-20 pb-10">
        <div className="container mx-auto px-4 md:px-6">
          <Link to="/rooms" className="inline-flex items-center text-primary hover:text-primary-dark mb-6">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to All Rooms
          </Link>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div 
              className="md:col-span-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src={room.images[0]} 
                alt={room.name} 
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </motion.div>
            
            {room.images.slice(1).map((image, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 * (index + 1) }}
              >
                <img 
                  src={image} 
                  alt={`${room.name} - View ${index + 2}`} 
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Room Details */}
      <section className="py-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Room Info */}
            <motion.div 
              className="lg:col-span-2"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div>
                    <h1 className="text-3xl font-serif font-bold mb-2">{room.name}</h1>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="h-4 w-4 text-primary mr-1" />
                        <span>Max {room.capacity} {room.capacity === 1 ? 'Person' : 'People'}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Maximize className="h-4 w-4 text-primary mr-1" />
                        <span>{room.size} m² Room Size</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Bed className="h-4 w-4 text-primary mr-1" />
                        <span>{room.bedType}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 md:mt-0 text-right">
                    <div className="text-3xl font-bold text-primary">${room.price}</div>
                    <div className="text-gray-500">per night</div>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-6">
                  <h2 className="text-xl font-serif font-bold mb-4">Description</h2>
                  <p className="text-gray-600 mb-6">{room.longDescription}</p>
                </div>
                
                <div className="border-t border-gray-200 pt-6">
                  <h2 className="text-xl font-serif font-bold mb-4">Amenities</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {room.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center">
                        <Check className="h-5 w-5 text-primary mr-2" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-6 mt-6">
                  <h2 className="text-xl font-serif font-bold mb-4">Policies</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium">Check-in:</p>
                      <p className="text-gray-600">{room.policies.checkIn}</p>
                    </div>
                    <div>
                      <p className="font-medium">Check-out:</p>
                      <p className="text-gray-600">{room.policies.checkOut}</p>
                    </div>
                    <div>
                      <p className="font-medium">Cancellation:</p>
                      <p className="text-gray-600">{room.policies.cancellation}</p>
                    </div>
                    <div>
                      <p className="font-medium">Smoking:</p>
                      <div className="flex items-center">
                        {room.policies.smoking ? (
                          <Check className="h-5 w-5 text-green-500 mr-2" />
                        ) : (
                          <X className="h-5 w-5 text-red-500 mr-2" />
                        )}
                        <span>{room.policies.smoking ? 'Allowed' : 'Not allowed'}</span>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium">Pets:</p>
                      <div className="flex items-center">
                        {room.policies.pets ? (
                          <Check className="h-5 w-5 text-green-500 mr-2" />
                        ) : (
                          <X className="h-5 w-5 text-red-500 mr-2" />
                        )}
                        <span>{room.policies.pets ? 'Allowed' : 'Not allowed'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Booking Form */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <BookingForm roomType={room.name} />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RoomDetail;