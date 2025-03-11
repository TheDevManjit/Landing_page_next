
import { motion } from 'framer-motion';
import { Users, Target, Award, Rocket } from 'lucide-react';

const teamMembers = [
  {
    name: "Manjit Kumar",
    role: "CEO & Founder",
    bio: "FullSatck Developer with a passion for education technology",
    image: "images/manjit.png"
  },
  {
    name: "Vipin Singh",
    role: "Co-Founder & CTO",
    bio: "Android Deleoper with 5 years of experience",
    image: "images/vipin.png"
   
  },
  {
    name: "Kameshwar kumar",
    role: "Graphic Designer",
    bio: "Graphic Designer with 5 years of experience",
    image: "images/kameshwar.png"
  },
  {
    name: "Rohit Kumar",
    role: "Teachnical Head",
    bio: "Fullsatck Developer with 5 years of experience",
    image: "images/rohit.png"
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
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-left">
            TEACHMARK is transforming digital marketing with cutting-edge technology and data-driven strategies. Founded in 2023, we’ve quickly become a leading force in AI-powered marketing, helping businesses maximize engagement, boost brand visibility, and drive measurable growth.

            Our expertise lies in leveraging AI-driven insights, automation, and advanced analytics to craft personalized marketing campaigns that deliver real impact. From targeted advertising and SEO to social media management and conversion optimization, we empower brands to stay ahead in the ever-evolving digital landscape. At TEACHMARK, we don’t just market—we create meaningful connections that drive long-term success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20rem] mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-white">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              To empower businesses with innovative marketing solutions that drive engagement, boost brand visibility, and maximize growth through data-driven strategies and AI-powered automation.            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-white">Core Values</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Innovation in Marketing</li> <li>• Customer-Centric Strategies</li> <li>• Data-Driven Growth</li> <li>• Continuous Optimization</li>
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