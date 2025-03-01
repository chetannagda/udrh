import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Calendar, Users, Phone, Mail, MessageSquare } from 'lucide-react';

interface BookingFormProps {
  roomType?: string;
  isContactForm?: boolean;
}

const BookingForm: React.FC<BookingFormProps> = ({ roomType = '', isContactForm = false }) => {
  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    let whatsappMessage = '';
    
    if (isContactForm) {
      whatsappMessage = `New Contact Form Submission:%0A
Name: ${name}%0A
Email: ${email}%0A
Phone: ${phone}%0A
Message: ${message}`;
    } else {
      whatsappMessage = `New Booking Request:%0A
Room Type: ${roomType || 'Not specified'}%0A
Check-in: ${checkInDate?.toLocaleDateString() || 'Not specified'}%0A
Check-out: ${checkOutDate?.toLocaleDateString() || 'Not specified'}%0A
Adults: ${adults}%0A
Children: ${children}%0A
Name: ${name}%0A
Email: ${email}%0A
Phone: ${phone}%0A
Message: ${message}`;
    }
    
    // Open WhatsApp with the pre-filled message
    // Note: In a real application, you would replace this with your actual phone number
    window.open(`https://wa.me/15551234567?text=${whatsappMessage}`);
    
    // Show success message
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setCheckInDate(null);
      setCheckOutDate(null);
      setAdults(2);
      setChildren(0);
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }, 3000);
  };

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${isContactForm ? '' : 'md:p-8'}`}>
      <h3 className="text-2xl font-serif font-bold mb-6 text-center">
        {isContactForm ? 'Send Us a Message' : 'Book Your Stay'}
      </h3>
      
      {submitted ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline"> Your {isContactForm ? 'message' : 'booking request'} has been sent via WhatsApp.</span>
        </div>
      ) : null}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {!isContactForm && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Check-in Date</label>
                <div className="relative">
                  <DatePicker
                    selected={checkInDate}
                    onChange={(date) => setCheckInDate(date)}
                    selectsStart
                    startDate={checkInDate}
                    endDate={checkOutDate}
                    minDate={new Date()}
                    placeholderText="Select date"
                    className="input-field pl-10"
                    required
                  />
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Check-out Date</label>
                <div className="relative">
                  <DatePicker
                    selected={checkOutDate}
                    onChange={(date) => setCheckOutDate(date)}
                    selectsEnd
                    startDate={checkInDate}
                    endDate={checkOutDate}
                    minDate={checkInDate || new Date()}
                    placeholderText="Select date"
                    className="input-field pl-10"
                    required
                  />
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Adults</label>
                <div className="relative">
                  <select
                    value={adults}
                    onChange={(e) => setAdults(parseInt(e.target.value))}
                    className="input-field pl-10"
                    required
                  >
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Adult' : 'Adults'}
                      </option>
                    ))}
                  </select>
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Children</label>
                <div className="relative">
                  <select
                    value={children}
                    onChange={(e) => setChildren(parseInt(e.target.value))}
                    className="input-field pl-10"
                  >
                    {[0, 1, 2, 3, 4].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Child' : 'Children'}
                      </option>
                    ))}
                  </select>
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
              </div>
            </div>
          </>
        )}
        
        <div>
          <label className="block text-gray-700 mb-2 font-medium">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-field"
            placeholder="John Doe"
            required
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-2 font-medium">Email</label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field pl-10"
                placeholder="your@email.com"
                required
              />
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 mb-2 font-medium">Phone</label>
            <div className="relative">
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="input-field pl-10"
                placeholder="+1 (555) 123-4567"
                required
              />
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
          </div>
        </div>
        
        <div>
          <label className="block text-gray-700 mb-2 font-medium">
            {isContactForm ? 'Message' : 'Special Requests'}
          </label>
          <div className="relative">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="input-field pl-10 min-h-[100px]"
              placeholder={isContactForm ? "How can we help you?" : "Any special requests or preferences?"}
            ></textarea>
            <MessageSquare className="absolute left-3 top-6 text-gray-400 h-5 w-5" />
          </div>
        </div>
        
        <button type="submit" className="w-full btn-primary py-3 text-lg">
          {isContactForm ? 'Send Message' : 'Book Now via WhatsApp'}
        </button>
        
        <p className="text-sm text-gray-500 text-center mt-4">
          By clicking the button, you'll be redirected to WhatsApp to send your {isContactForm ? 'message' : 'booking request'} directly to our manager.
        </p>
      </form>
    </div>
  );
};

export default BookingForm;