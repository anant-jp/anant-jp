import { motion } from "framer-motion";

const projects = [
  {
    title: "Enterprise System Integration",
    description: "Led the integration of legacy systems with modern cloud solutions, improving data flow efficiency by 40%",
    category: "System Integration",
    duration: "6 months",
  },
  {
    title: "Data Analytics Platform",
    description: "Developed a comprehensive analytics dashboard for real-time business intelligence reporting",
    category: "Data Analysis",
    duration: "4 months",
  },
  {
    title: "Process Automation Initiative",
    description: "Automated key business processes resulting in 60% reduction in manual tasks",
    category: "Process Optimization",
    duration: "3 months",
  },
];

const Projects = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-medium">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Featured Projects</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-sm bg-accent rounded-full text-secondary mb-4">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>Duration: {project.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;