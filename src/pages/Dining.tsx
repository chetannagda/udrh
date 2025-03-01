import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Coffee, Wine, Clock } from 'lucide-react';

import DiningCard from '../components/DiningCard';

const Dining: React.FC = () => {
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

  // Dining options data
  const diningOptions = [
    {
      name: 'The Grand Restaurant',
      description: 'Experience fine dining with our award-winning chefs serving international cuisine using locally sourced ingredients.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      hours: 'Breakfast: 7:00 AM - 10:30 AM, Dinner: 6:00 PM - 10:30 PM',
      location: 'Main Building, Ground Floor',
      cuisine: 'International',
      price: '₹2000 - ₹5000'
    },
    {
      name: 'Azure Lounge',
      description: 'Relax in our elegant lounge with panoramic views while enjoying afternoon tea, cocktails, or light bites.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      hours: 'Daily: 11:00 AM - 12:00 AM',
      location: 'Main Building, 15th Floor',
      cuisine: 'International & Cocktails',
      price: '₹1500 - ₹4000'
    },
    {
      name: 'Sakura Japanese Restaurant',
      description: 'Authentic Japanese cuisine featuring sushi, sashimi, and teppanyaki prepared by master chefs.',
      image: 'https://images.unsplash.com/photo-1579027989536-b7b1f875659b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      hours: 'Lunch: 12:00 PM - 2:30 PM, Dinner: 6:00 PM - 10:00 PM',
      location: 'East Wing, 2nd Floor',
      cuisine: 'Japanese',
      price: '₹2500 - ₹6000'
    },
    {
      name: 'Café Soleil',
      description: 'Casual café serving freshly brewed coffee, pastries, sandwiches, and light meals throughout the day.',
      image: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
      hours: 'Daily: 6:30 AM - 8:00 PM',
      location: 'Main Building, Lobby Level',
      cuisine: 'Café & Bakery',
      price: '₹500 - ₹1500'
    },
    {
      name: 'Vine & Dine',
      description: 'Sophisticated wine bar offering an extensive selection of wines paired with gourmet tapas and cheese platters.',
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      hours: 'Daily: 4:00 PM - 12:00 AM',
      location: 'West Wing, Ground Floor',
      cuisine: 'Wine Bar & Tapas',
      price: '₹3000 - ₹7000'
    },
    {
      name: 'Poolside Grill',
      description: 'Casual outdoor dining serving grilled specialties, refreshing beverages, and light snacks by the pool.',
      image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
      hours: 'Daily: 10:00 AM - 6:00 PM (Seasonal)',
      location: 'Pool Deck, 5th Floor',
      cuisine: 'Grill & Light Fare',
      price: '₹1000 - ₹3000'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-64 md:h-96">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" }}
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
                Dining Experiences
              </h1>
              <p className="text-lg text-white text-shadow">
                Indulge in exceptional culinary journeys at our restaurants and bars
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Culinary Excellence</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 mb-8">
              At Luxe Haven, we believe that exceptional dining is an essential part of your stay. Our talented chefs create memorable culinary experiences using the finest ingredients, innovative techniques, and authentic flavors from around the world.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Utensils className="h-8 w-8 text-primary" />
                </div>
                <p className="font-medium">6 Restaurants</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Coffee className="h-8 w-8 text-primary" />
                </div>
                <p className="font-medium">2 Cafés</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Wine className="h-8 w-8 text-primary" />
                </div>
                <p className="font-medium">3 Bars</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <p className="font-medium">24/7 Room Service</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dining Options */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Restaurants & Bars</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600">
              Explore our diverse dining venues, each offering a unique atmosphere and culinary experience.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {diningOptions.map((option, index) => (
              <motion.div key={index} variants={fadeIn}>
                <DiningCard {...option} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Private Dining */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Private Dining</h2>
              <div className="w-20 h-1 bg-primary mb-6"></div>
              <p className="text-gray-600 mb-6">
                Celebrate special occasions or host business dinners in our exclusive private dining rooms. Our dedicated team will work with you to create a customized menu and ensure an unforgettable experience for you and your guests.
              </p>
              <p className="text-gray-600 mb-6">
                Whether you're planning an intimate dinner for two, a family celebration, or a corporate event, our private dining options offer the perfect setting with personalized service.
              </p>
              <button className="btn-primary">
                Inquire About Private Dining
              </button>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <img 
                src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80" 
                alt="Private Dining Room" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Special Events */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Special Culinary Events</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600">
              Join us for special culinary events throughout the year, from seasonal tasting menus to guest chef appearances and themed dining experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <img 
                src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                alt="Wine Tasting Event" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold mb-2">Wine Tasting Evenings</h3>
                <p className="text-gray-600 mb-4">
                  Join our sommelier for an exploration of fine wines paired with gourmet bites.
                </p>
                <p className="text-sm text-gray-500">Every Friday | 7:00 PM - 9:00 PM</p>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <img 
                src="https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Chef's Table" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold mb-2">Chef's Table Experience</h3>
                <p className="text-gray-600 mb-4">
                  An exclusive dining experience with our Executive Chef preparing a custom menu.
                </p>
                <p className="text-sm text-gray-500">By Reservation | Limited Seating</p>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <img 
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Sunday Brunch" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold mb-2">Luxury Sunday Brunch</h3>
                <p className="text-gray-600 mb-4">
                  Indulge in our lavish Sunday brunch featuring live cooking stations and free-flowing champagne.
                </p>
                <p className="text-sm text-gray-500">Sundays | 11:30 AM - 3:00 PM</p>
              </div>
            </motion.div>
          </div>
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
              Reserve Your Table
            </h2>
            <p className="text-white text-lg max-w-2xl mx-auto mb-8">
              Secure your dining experience at one of our exceptional restaurants or bars.
            </p>
            <button className="btn-outline bg-transparent text-white border-white hover:bg-white hover:text-primary text-lg px-8 py-3">
              Make a Reservation
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Dining;