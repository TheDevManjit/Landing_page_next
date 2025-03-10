
import { motion } from 'framer-motion';
import { Users, Target, Award, Rocket } from 'lucide-react';

const teamMembers = [
  {
    name: "Manjit Kumar",
    role: "CEO & Founder",
    bio: "FullSatck Developer with a passion for education technology",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    name: "Marcus Rodriguez",
    role: "Head of Innovation",
    bio: "AI specialist focused on personalized learning algorithms",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    name: "Priya Patel",
    role: "Educational Director",
    bio: "Former principal with expertise in curriculum development",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    name: "Priya Patel",
    role: "Educational Director",
    bio: "Former principal with expertise in curriculum development",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200"
  }
];

const achievements = [
  {
    icon: Users,
    stat: "50,000+",
    label: "Students Impacted"
  },
  {
    icon: Target,
    stat: "500+",
    label: "Partner Institutions"
  },
  {
    icon: Award,
    stat: "15+",
    label: "Industry Awards"
  },
  {
    icon: Rocket,
    stat: "98%",
    label: "Client Satisfaction"
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            About TEACHMARK
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            TEACHMARK is revolutionizing education through cutting-edge technology and innovative learning solutions. Founded in 2023, we've quickly become a leading force in educational technology, combining AI-driven insights with proven pedagogical methods to create transformative learning experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-white">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              To empower educational institutions with innovative technology solutions that enhance learning outcomes and create engaging, personalized educational experiences for students worldwide.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-white">Core Values</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Innovation in Education</li>
              <li>• Student-Centered Approach</li>
              <li>• Data-Driven Excellence</li>
              <li>• Continuous Improvement</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-semibold mb-8 text-center text-white">Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-900 rounded-lg p-6 text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="text-xl font-semibold text-white mb-2">{member.name}</h4>
                <p className="text-green-400 mb-2">{member.role}</p>
                <p className="text-gray-400">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <achievement.icon className="w-8 h-8 mx-auto mb-4 text-green-400" />
              <h4 className="text-3xl font-bold text-white mb-2">{achievement.stat}</h4>
              <p className="text-gray-400">{achievement.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}