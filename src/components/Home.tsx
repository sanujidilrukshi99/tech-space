import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const specialties = [
    {
      id: 1,
      title: 'VLE Monitoring',
      description: 'Individual progress tracking for every student through our Virtual Learning Environment',
      icon: '📊'
    },
    {
      id: 2,
      title: 'Comprehensive Assessment',
      description: 'Regular unit exams and term tests to ensure consistent progress',
      icon: '📝'
    },
    {
      id: 3,
      title: 'Hands-on Practicals',
      description: 'In-class practical sessions for real-world experience',
      icon: '💻'
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <motion.section 
        className="mt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-purple-400">Our Specialties</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {specialties.map((specialty, index) => (
            <motion.div
              key={specialty.id}
              className="cyber-card p-6 hover:bg-purple-900/20 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="text-4xl mb-4">{specialty.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-purple-400">{specialty.title}</h3>
              <p className="text-gray-300">{specialty.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
