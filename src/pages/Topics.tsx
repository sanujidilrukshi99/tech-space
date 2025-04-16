import { motion } from 'framer-motion';

const topics = [
  {
    category: "Programming",
    items: [
      { title: "Python Basics", level: "Level 3 & 4", grades: "Grade 10 & 11" },
      { title: "Web Development", level: "Level 4", grades: "Grade 11" },
      { title: "Scratch Programming", level: "Level 1", grades: "Grade 6 & 7" }
    ]
  },
  {
    category: "Computer Applications",
    items: [
      { title: "Microsoft Office", level: "All Levels", grades: "All Grades" },
      { title: "Graphic Design", level: "Level 2 & 3", grades: "Grade 8, 9 & 10" }
    ]
  },
  {
    category: "Digital Literacy",
    items: [
      { title: "Internet Safety", level: "Level 1", grades: "Grade 6 & 7" },
      { title: "Digital Communication", level: "Level 1 & 2", grades: "Grade 6-9" }
    ]
  }
];

const Topics = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <motion.h1 
        className="text-4xl font-bold mb-12 text-center neon-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Our Curriculum
      </motion.h1>

      <div className="grid gap-8">
        {topics.map((topic, index) => (
          <motion.div
            key={topic.category}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="cyber-card p-6"
          >
            <h2 className="text-2xl font-semibold text-purple-400 mb-6">{topic.category}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {topic.items.map((item, itemIndex) => (
                <motion.div
                  key={item.title}
                  whileHover={{ scale: 1.02 }}
                  className="glass-panel p-4 rounded-lg"
                >
                  <h3 className="text-lg font-medium text-white mb-2">{item.title}</h3>
                  <div className="flex justify-between text-sm">
                    <span className="text-purple-300">{item.level}</span>
                    <span className="text-purple-200">
                      Grades: {item.grades}
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

export default Topics;
