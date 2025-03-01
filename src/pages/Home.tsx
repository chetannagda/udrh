import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Wifi, Coffee, Utensils, Car, Dumbbell, Space as Spa, ChevronRight } from 'lucide-react';

import BookingForm from '../components/BookingForm';
import RoomCard from '../components/RoomCard';
import TestimonialCard from '../components/TestimonialCard';

const Home: React.FC = () => {
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

  // Featured rooms data
  const featuredRooms = [
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
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'New York, USA',
      rating: 5,
      text: 'Absolutely amazing experience! The staff was incredibly attentive, and the room exceeded all expectations. Will definitely be returning!',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80'
    },
    {
      name: 'Michael Chen',
      location: 'Toronto, Canada',
      rating: 5,
      text: 'The attention to detail at Luxe Haven is unmatched. From the moment we arrived until checkout, everything was perfect.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80'
    },
    {
      name: 'Emma Rodriguez',
      location: 'London, UK',
      rating: 4,
      text: 'Beautiful property with excellent dining options. The spa treatments were divine! Would highly recommend for a luxury getaway.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1361&q=80'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" }}
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 text-shadow">
                Experience Luxury Like Never Before
              </h1>
              <p className="text-xl text-white mb-8 text-shadow">
                Indulge in exceptional comfort and world-class service at Luxe Haven Hotel
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/rooms" className="btn-primary text-lg px-8 py-3">
                  Explore Rooms
                </Link>
                <Link to="/contact" className="btn-outline bg-transparent text-white border-white hover:bg-white hover:text-gray-900 text-lg px-8 py-3">
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto -mt-24 relative z-10">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Welcome to Luxe Haven</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600">
              Nestled in the heart of the city, Luxe Haven Hotel offers an unparalleled blend of elegance, comfort, and exceptional service. Our commitment to excellence ensures that every moment of your stay is nothing short of extraordinary.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <img 
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Luxe Haven Hotel Lobby" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h3 className="text-2xl font-serif font-bold mb-4">A Legacy of Luxury</h3>
              <p className="text-gray-600 mb-6">
                Since our establishment, we have been dedicated to providing guests with an unforgettable experience. Our meticulously designed spaces, attentive staff, and world-class amenities create the perfect environment for both leisure and business travelers.
              </p>
              <p className="text-gray-600 mb-6">
                Whether you're enjoying a gourmet meal at our renowned restaurant, relaxing at our spa, or retiring to your luxurious room, every moment at Luxe Haven is crafted to exceed your expectations.
              </p>
              <Link to="/about" className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors duration-300">
                Learn more about us
                <ChevronRight className="ml-1 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="section-padding bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Hotel Amenities</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600">
              Discover the exceptional amenities and services that make your stay at Luxe Haven truly remarkable.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeIn} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wifi className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">High-Speed WiFi</h3>
              <p className="text-gray-600">
                Stay connected with complimentary high-speed internet access throughout the hotel.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Gourmet Breakfast</h3>
              <p className="text-gray-600">
                Start your day with our complimentary gourmet breakfast featuring local and international cuisine.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Fine Dining</h3>
              <p className="text-gray-600">
                Experience exquisite culinary creations at our award-winning restaurants and bars.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Valet Parking</h3>
              <p className="text-gray-600">
                Enjoy the convenience of our valet parking service with 24/7 access to your vehicle.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Dumbbell className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Fitness Center</h3>
              <p className="text-gray-600">
                Maintain your fitness routine in our state-of-the-art gym with modern equipment.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Spa className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Luxury Spa</h3>
              <p className="text-gray-600">
                Indulge in rejuvenating treatments and therapies at our premium spa and wellness center.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Rooms Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Featured Accommodations</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600">
              Discover our selection of exquisite rooms and suites designed for your ultimate comfort and relaxation.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {featuredRooms.map((room) => (
              <motion.div key={room.id} variants={fadeIn}>
                <RoomCard {...room} />
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link to="/rooms" className="btn-outline">
              View All Rooms
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Guest Experiences</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600">
              Hear what our guests have to say about their stay at Luxe Haven Hotel.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={fadeIn}>
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Ready to Experience Luxury?
            </h2>
            <p className="text-white text-lg max-w-2xl mx-auto mb-8">
              Book your stay today and discover why Luxe Haven is the preferred choice for discerning travelers.
            </p>
            <Link to="/rooms" className="btn-outline bg-transparent text-white border-white hover:bg-white hover:text-primary text-lg px-8 py-3">
              Book Your Stay
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;