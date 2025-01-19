import React from 'react';
import { motion } from 'framer-motion';

const FadeOut = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }} // Duration of the fade-in effect
        >
            <h1 className="text-6xl font-bold mb-4 ">Anant Parmar</h1>
        </motion.div>
    );
};

export default FadeOut;
