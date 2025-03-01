import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  Users, 
  Calendar, 
  HelpCircle 
} from 'lucide-react';

import BookingForm from '../components/BookingForm';

const Contact: React.FC = () => {
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

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-64 md:h-96">
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
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4 text-shadow">
                Contact Us
              </h1>
              <p className="text-lg text-white text-shadow">
                We're here to assist you with any inquiries or special requests
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Get in Touch</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600">
              Our dedicated team is ready to assist you with any questions, special requests, or booking inquiries.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeIn} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Our Location</h3>
              <p className="text-gray-600">
                123 Luxury Avenue, Prestige District<br />
                New York, NY 10001<br />
                United States
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Phone</h3>
              <p className="text-gray-600">
                Reservations: +1 (555) 123-4567<br />
                Front Desk: +1 (555) 123-4568<br />
                Concierge: +1 (555) 123-4569
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Email</h3>
              <p className="text-gray-600">
                Reservations: reservations@luxehaven.com<br />
                General Inquiries: info@luxehaven.com<br />
                Customer Service: service@luxehaven.com
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Hours</h3>
              <p className="text-gray-600">
                Front Desk: 24/7<br />
                Reservations: 8:00 AM - 10:00 PM<br />
                Concierge: 7:00 AM - 11:00 PM
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Send Us a Message</h2>
              <div className="w-20 h-1 bg-primary mb-6"></div>
              <p className="text-gray-600 mb-8">
                Whether you have a question about our accommodations, need assistance with a reservation, or want to provide feedback about your stay, we're here to help.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <MessageSquare className="h-6 w-6 text-primary mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium">General Inquiries</h3>
                    <p className="text-gray-600">For general questions about our hotel and services.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Users className="h-6 w-6 text-primary mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium">Group Bookings</h3>
                    <p className="text-gray-600">For reservations of 5 or more rooms or event planning.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Calendar className="h-6 w-6 text-primary mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium">Reservation Assistance</h3>
                    <p className="text-gray-600">For help with booking or modifying a reservation.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <HelpCircle className="h-6 w-6 text-primary mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium">Customer Support</h3>
                    <p className="text-gray-600">For any other assistance or feedback.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <BookingForm />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;