import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-primary text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-medium">Get in Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Let's Connect</h2>
        </motion.div>
        <div className="flex justify-center space-x-8">
          <motion.a
            href="mailto:your.email@example.com"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white/10 p-4 rounded-full hover:bg-white/20 transition-colors duration-300"
          >
            <Mail className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white/10 p-4 rounded-full hover:bg-white/20 transition-colors duration-300"
          >
            <Linkedin className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white/10 p-4 rounded-full hover:bg-white/20 transition-colors duration-300"
          >
            <Github className="w-6 h-6" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Contact;