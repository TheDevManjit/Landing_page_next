import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function EnquiryPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    Phone: ''
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await emailjs.send(
        'service_d47lf22',
        'template_u8y2q9n',
        formData,
        'Lk7eOIeOUuFIgQ7kH'
      );
      alert('Message sent successfully!');
      setIsOpen(false);
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
        >
          <div className="bg-gray-900 p-6 rounded-xl w-full max-w-md border border-white/10">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-white">Get in Touch</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 text-white"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 text-white"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 text-white h-32"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg text-white font-medium flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}