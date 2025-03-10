
import { motion } from 'framer-motion';
import { Laptop, Brain, Users, BarChart, MessageSquare } from 'lucide-react';

const services = [
  {
    icon: Laptop,
    title: "Learning Management System",
    description: "A comprehensive digital platform that streamlines course creation, delivery, and assessment. Features include interactive content hosting, real-time analytics, and seamless integration with existing tools.",
    benefits: ["Automated Assessment", "Progress Tracking", "Content Management", "Student Analytics"],
    price: "Starting at Rs 499/month"
  },
  {
    icon: Brain,
    title: "AI-Powered Digital Marketing",
    description: "Harness the power of AI to optimize campaigns, analyze customer behavior, and drive higher conversions. Automate marketing strategies and deliver personalized experiences at scale.",
    benefits: ["Automated Campaigns", "Advanced Audience Targeting", "Real-time Analytics", "Higher ROI"],
    price: "Custom Pricing Available"
},
,
  {
    icon: Users,
    title: "Virtual Classroom Solution",
    description: "Interactive virtual learning environment that enables seamless remote education. Includes features like breakout rooms, interactive whiteboards, and engagement tracking.",
    benefits: ["HD Video Conferencing", "Interactive Tools", "Session Recording", "Attendance Tracking"],
    price: "Starting at "
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Comprehensive educational technology solutions designed to transform learning experiences and improve educational outcomes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => 
            service && (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-black rounded-lg p-8 hover:transform hover:scale-105 transition-transform duration-300"
              >
                <>
                  <service.icon className="w-12 h-12 text-green-400 mb-6" />
                  <h3 className="text-2xl font-semibold mb-4 text-white">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  
                  <h4 className="text-lg font-semibold mb-3 text-white">Key Benefits:</h4>
                  <ul className="text-gray-400 mb-6 space-y-2">
                    {service.benefits.map(benefit => (
                      <li key={benefit} className="flex items-center">
                        <BarChart className="w-4 h-4 mr-2 text-green-400" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="border-t border-gray-800 pt-6">
                    <p className="text-xl font-semibold text-white mb-4">{service.price}</p>
                    <button className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Get Started
                    </button>
                  </div>
                </>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
}