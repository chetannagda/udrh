import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Users, 
  Clock, 
  Map, 
  Star, 
  Shield, 
  Heart, 
  Smile 
} from 'lucide-react';

const About: React.FC = () => {
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

  // Team members data
  const teamMembers = [
    {
      name: 'Alexander Bennett',
      position: 'General Manager',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80',
      bio: 'With over 20 years of experience in luxury hospitality, Alexander leads our team with passion and dedication to excellence.'
    },
    {
      name: 'Sophia Rodriguez',
      position: 'Executive Chef',
      image: 'https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80',
      bio: 'Award-winning chef Sophia brings her culinary expertise and creativity to create unforgettable dining experiences for our guests.'
    },
    {
      name: 'James Chen',
      position: 'Director of Operations',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      bio: 'James ensures that every aspect of our hotel operations runs smoothly to deliver exceptional service to our guests.'
    },
    {
      name: 'Olivia Thompson',
      position: 'Guest Relations Manager',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1361&q=80',
      bio: 'Olivia and her team are dedicated to making your stay memorable by attending to your every need with warmth and professionalism.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-64 md:h-96">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" }}
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
                About Luxe Haven
              </h1>
              <p className="text-lg text-white text-shadow">
                Discover our story, our values, and our commitment to excellence
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Story</h2>
              <div className="w-20 h-1 bg-primary mb-6"></div>
              <p className="text-gray-600 mb-6">
                Founded in 2010, Luxe Haven began with a vision to create a sanctuary of luxury and comfort in the heart of the city. What started as a boutique hotel with just 50 rooms has grown into a renowned luxury destination with over 200 exquisite accommodations.
              </p>
              <p className="text-gray-600 mb-6">
                Our journey has been defined by a relentless pursuit of excellence, a deep commitment to personalized service, and a passion for creating memorable experiences for our guests. Over the years, we have welcomed travelers from around the world, from business executives to celebrities, families, and couples seeking a special getaway.
              </p>
              <p className="text-gray-600">
                Today, Luxe Haven stands as a symbol of sophisticated hospitality, blending timeless elegance with modern luxury to offer an unparalleled experience to every guest who walks through our doors.
              </p>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <img 
                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Luxe Haven Hotel Exterior" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Values</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600">
              At Luxe Haven, our values guide everything we do, from how we design our spaces to how we interact with our guests.
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
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every detail, from the quality of our accommodations to the service we provide.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Passion</h3>
              <p className="text-gray-600">
                Our passion for hospitality drives us to create exceptional experiences that exceed expectations.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Integrity</h3>
              <p className="text-gray-600">
                We operate with honesty, transparency, and ethical standards in all our interactions.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smile className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Personalization</h3>
              <p className="text-gray-600">
                We believe in tailoring our service to meet the unique needs and preferences of each guest.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Achievements</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600">
              We're proud of the recognition we've received for our commitment to excellence in hospitality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="flex items-start mb-4">
                <Award className="h-10 w-10 text-primary mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-serif font-bold mb-2">Five-Star Excellence Award</h3>
                  <p className="text-gray-600">
                    Recognized for exceptional service and luxury accommodations for five consecutive years.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="flex items-start mb-4">
                <Award className="h-10 w-10 text-primary mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-serif font-bold mb-2">Best Luxury Hotel</h3>
                  <p className="text-gray-600">
                    Named "Best Luxury Hotel" by Travel & Leisure Magazine in 2022 and 2023.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="flex items-start mb-4">
                <Award className="h-10 w-10 text-primary mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-serif font-bold mb-2">Culinary Excellence Award</h3>
                  <p className="text-gray-600">
                    Our Grand Restaurant received the Culinary Excellence Award for innovative cuisine.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="flex items-start mb-4">
                <Award className="h-10 w-10 text-primary mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-serif font-bold mb-2">Sustainable Luxury Certification</h3>
                  <p className="text-gray-600">
                    Certified for our commitment to sustainable practices while maintaining luxury standards.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Facts Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeIn} className="text-center">
              <Users className="h-12 w-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">15,000+</div>
              <p className="text-lg">Happy Guests Annually</p>
            </motion.div>

            <motion.div variants={fadeIn} className="text-center">
              <Map className="h-12 w-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">200+</div>
              <p className="text-lg">Luxury Rooms & Suites</p>
            </motion.div>

            <motion.div variants={fadeIn} className="text-center">
              <Clock className="h-12 w-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">15</div>
              <p className="text-lg">Years of Excellence</p>
            </motion.div>

            <motion.div variants={fadeIn} className="text-center">
              <Award className="h-12 w-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">25+</div>
              <p className="text-lg">Industry Awards</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Leadership Team</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600">
              Meet the dedicated professionals who lead our team in delivering exceptional experiences.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index} 
                variants={fadeIn}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Experience Luxe Haven
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
              We invite you to experience our world of luxury and exceptional service. Book your stay today and discover why Luxe Haven is the preferred choice for discerning travelers.
            </p>
            <button className="btn-primary text-lg px-8 py-3">
              Book Your Stay
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;