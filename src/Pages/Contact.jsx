import React, { useRef, useState } from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { BsWhatsapp, BsSend } from 'react-icons/bs';
import { IoLocationOutline } from 'react-icons/io5';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';

const Contact = () => {
  const form = useRef();
  const [isMessageSent, setIsMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ugqrpcu', 'template_iz5pcva', form.current, 'I0BXSqsH7YBt5ciXX')
      .then(() => {
        setIsMessageSent(true);
        setTimeout(() => setIsMessageSent(false), 5000);
        e.target.reset();
      }, (error) => {
        console.error('Email sending failed:', error);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-[92vh] py-6 px-4 sm:px-8 font-sans bg-white">
      <div className="w-full rounded-3xl max-w-[58rem] shadow-xl">
        <div className="w-full h-full transition-all ease-in-out duration-600">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-0">
            {/* Contact Info */}
            <div className="flex flex-col px-6 py-6 sm:px-12 bg-[#F7CE3E] text-[#0A1612] rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none">
              <h2 className="mb-3 font-serif text-2xl font-bold text-center text-[#0A1612] sm:text-3xl">Get in Touch</h2>
              <div className="flex flex-col justify-center flex-grow space-y-3">
                <ContactCard
                  icon={<HiOutlineMail className="text-3xl sm:text-4xl" />}
                  title="Email"
                  content="sk80bali@gmail.com"
                  link="mailto:sk80bali@gmail.com"
                  linkText="Send an email"
                />
                <ContactCard
                  icon={<BsWhatsapp className="text-3xl sm:text-4xl" />}
                  title="Phone"
                  content="9630678115, 9899826755"
                  link="https://api.whatsapp.com/send?phone=+919630678115&text=Hello%20there!"
                  linkText="Chat on WhatsApp"
                />
                <ContactCard
                  icon={<IoLocationOutline className="text-3xl sm:text-4xl" />}
                  title="Location"
                  content="Kalindri Bus Stand, Dharampur Malda"
                  link="https://maps.google.com/?q=Kalindri Bus Stand, Dharampur Malda"
                  linkText="Get directions"
                />
              </div>
            </div>

            {/* Contact Form */}
            <form ref={form} onSubmit={sendEmail} className="relative flex flex-col px-6 py-6 bg-white sm:px-12 rounded-b-3xl md:rounded-r-3xl md:rounded-bl-none">
              {isMessageSent && (
                <p className="absolute top-[-30px] left-0 right-0 mx-auto mb-4 text-center text-sm font-semibold text-[#0A1612] bg-[#F7CE3E] p-2 rounded-lg shadow-md w-72 animate-fadeIn">
                  Message sent successfully!
                </p>
              )}

              <h2 className="mb-6 font-serif text-2xl font-bold text-center text-[#0A1612] sm:text-3xl">Send us a message</h2>
              <div className="flex flex-col justify-center flex-grow">
                <Input 
                  name="name" 
                  placeholder="Your Full Name" 
                  className="bg-gray-100"
                />
                <Input 
                  name="email" 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-gray-100"
                />
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  required
                  className="w-full px-4 py-4 mb-4 overflow-y-auto text-sm transition-all duration-300 bg-gray-100 border-2 border-transparent rounded-lg outline-none resize-none scrollbar-thin scrollbar-thumb-bgVariant scrollbar-track-bg text-[#1A2930] focus:ring-2 focus:ring-[#F7CE3E] focus:border-[#0A1612]"
                ></textarea>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-6 py-2 mx-16 font-semibold transition-all duration-300 border-2 rounded-full text-[#0A1612] bg-[#F7CE3E] hover:bg-[#1A2930] hover:text-white border-[#F7CE3E] hover:border-[#1A2930]"
                >
                  <BsSend className="mr-2 text-base" />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactCard = ({ icon, title, content, link, linkText }) => (
  <div className="flex items-center p-3 space-x-3 transition-all duration-300 bg-white shadow-md sm:p-4 sm:space-x-4 rounded-xl hover:shadow-lg hover:transform hover:scale-105">
    <div className="m-1 rounded-full sm:p-4 text-primary bg-bg">{icon}</div>
    <div>
      <h4 className="text-base font-semibold sm:text-lg text-primary">{title}</h4>
      <p className="mb-1 text-xs text-primaryVariant sm:text-sm">{content}</p>
      <Link to={link} className="block text-xs font-semibold transition-colors duration-300 sm:text-sm text-primary hover:text-bgVariant hover:underline">
        {linkText}
      </Link>
    </div>
  </div>
);

const Input = ({ name, type = "text", placeholder, className }) => (
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    required
    className={`w-full px-4 py-2 mb-4 text-sm transition-all duration-300 bg-gray-100 border-2 border-transparent rounded-lg outline-none text-primary focus:ring-2 focus:ring-[#F7CE3E] focus:border-[#0A1612] ${className}`}
  />
);

export default Contact;
