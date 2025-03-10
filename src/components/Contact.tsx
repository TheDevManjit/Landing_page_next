import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock, MapPin, Send, Linkedin, Twitter } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState(''); // To show success/error messages

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);

    // EmailJS send function
    emailjs
      .send(
        'service_d47lf22', // Replace with your EmailJS Service ID
        'template_2hdfcgf', // Replace with your EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        'Lk7eOIeOUuFIgQ7kH' // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form
        },
        (error) => {
          console.error('Failed to send email:', error.text);
          setStatus('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Ready to elevate your brand? Contact MARKVIBE today for a tailored marketing strategy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-black rounded-lg border border-gray-700 text-white focus:outline-none focus:border-purple-400"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-black rounded-lg border border-gray-700 text-white focus:outline-none focus:border-purple-400"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-black rounded-lg border border-gray-700 text-white focus:outline-none focus:border-purple-400"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-black rounded-lg border border-gray-700 text-white focus:outline-none focus:border-purple-400"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-400 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </button>
              {status && (
                <p className={`text-center mt-2 ${status.includes('success') ? 'text-purple-400' : 'text-red-400'}`}>
                  {status}
                </p>
              )}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <Phone className="w-5 h-5 mr-3 text-purple-400" />
                  <span>+91 6205097876</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="w-5 h-5 mr-3 text-purple-400" />
                  <span>teackmark.official@gmail.com</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-5 h-5 mr-3 text-purple-400" />
                  <span>Manorma Complex , Bihari saw lane , Patna</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Business Hours</h3>
              <div className="flex items-start text-gray-300">
                <Clock className="w-5 h-5 mr-3 text-purple-400" />
                <div>
                  <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Response Time</h3>
              <p className="text-gray-300">
                We aim to respond to all inquiries within 24 hours during business days.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}