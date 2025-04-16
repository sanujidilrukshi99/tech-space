import { motion } from 'framer-motion';

const resources = [
  {
    category: "Study Materials",
    items: [
      { title: "Programming Notes", format: "PDF", grade: "9-11" },
      { title: "Office Tools Guide", format: "PDF", grade: "6-8" }
    ]
  },
  {
    category: "Practice Materials",
    items: [
      { title: "Python Exercises", format: "Interactive", grade: "10-11" },
      { title: "Typing Practice", format: "Online", grade: "All" }
    ]
  }
];

const Resources = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <motion.h1 
        className="text-4xl font-bold mb-12 text-center tech-title-gradient"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Learning Resources
      </motion.h1>

      <div className="grid gap-8">
        {resources.map((section, index) => (
          <motion.div
            key={section.category}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="cyber-card p-6"
          >
            <h2 className="text-2xl font-semibold space-title-gradient mb-6">
              {section.category}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {section.items.map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ scale: 1.02 }}
                  className="glass-panel p-4 rounded-lg"
                >
                  <h3 className="text-lg font-medium text-purple-300 mb-2">
                    {item.title}
                  </h3>
                  <div className="flex justify-between text-sm">
                    <span className="text-purple-400">{item.format}</span>
                    <span className="text-purple-300/70">
                      Grades: {item.grade}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
