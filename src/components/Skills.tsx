import { motion } from "framer-motion";
import { BarChart3, Database, Users, Globe } from "lucide-react";

const skills = [
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Data Analysis",
    description: "Advanced analytics and visualization techniques to derive actionable insights",
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "System Integration",
    description: "Seamless integration of multiple systems and databases",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Stakeholder Management",
    description: "Effective communication and relationship building across all levels",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Process Optimization",
    description: "Streamlining workflows and improving operational efficiency",
  },
];

const Skills = () => {
  return (
    <section className="py-20 px-4 bg-accent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-medium">Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Core Competencies</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4 text-secondary">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;