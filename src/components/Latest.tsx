
import { motion } from "framer-motion";

const LatestWork = () => {
  const projects = [
    { id: 1, title: "Project One", image: "/images/project1.jpg" },
    { id: 2, title: "Project Two", image: "/images/project2.jpg" },
    { id: 3, title: "Project Three", image: "/images/project3.jpg" },
    { id: 4, title: "Project Four", image: "/images/project4.jpg" },
  ];

  return (
    <section className="py-16 bg-gray-900 text-white" id="portfolio">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Latest Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover group-hover:opacity-75 transition"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <p className="text-lg font-semibold">{project.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestWork;
