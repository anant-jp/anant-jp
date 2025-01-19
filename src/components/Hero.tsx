import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <span className="inline-block px-3 py-1 text-sm bg-accent rounded-full text-secondary mb-4">
          Technical Business Analyst
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          Bridging Business & Technology
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
          Transforming complex business requirements into elegant technical solutions.
          Specializing in data analysis, process optimization, and system integration.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-primary text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
        >
          View Projects
        </motion.button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-6 h-6 text-gray-400" />
      </motion.div>
    </section>
  );
};

export default Hero;