import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { syllabusData } from '../data/syllabus';

const GradeSection = () => {
  const { grade } = useParams();
  const gradeData = syllabusData[Number(grade)];

  if (!gradeData) {
    return <div>Grade not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8 text-purple-900"
      >
        {gradeData.title} Syllabus
      </motion.h1>

      <div className="grid gap-6">
        {gradeData.topics.map((topic, index) => (
          <motion.div
            key={topic.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg"
          >
            <h2 className="text-xl font-semibold text-purple-800 mb-2">
              {topic.name}
            </h2>
            <div className="flex items-center text-gray-600">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {topic.duration}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GradeSection;
