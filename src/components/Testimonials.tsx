
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Dr. James Wilson",
    role: "Principal, Wilson Academy",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
    quote: "TEACHMARK has revolutionized how we deliver education. Our student engagement has increased by 60% since implementing their solutions.",
    rating: 5
  },
  {
    name: "Prof. Emily Chang",
    role: "Department Head, Tech University",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
    quote: "The AI-powered tutoring system has significantly improved our students' performance. It's like having a personal tutor for each student.",
    rating: 5
  },
  {
    name: "Michael Roberts",
    role: "Director, Future School",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200",
    quote: "The virtual classroom solution made our transition to hybrid learning seamless. The support team is exceptional.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Client Testimonials
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Hear from educational leaders who have transformed their institutions with TEACHMARK.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-900 rounded-lg p-8"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-green-400">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-gray-300 italic">"{testimonial.quote}"</blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}