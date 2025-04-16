import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { syllabusData, gradeDescriptions } from '../data/syllabus';

const GradePage = () => {
  const { grade } = useParams();
  const gradeNum = Number(grade);
  const data = syllabusData[gradeNum];
  const description = gradeDescriptions[gradeNum];

  if (!data) return <div>Grade not found</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gradient mb-4">{data.title}</h1>
        <p className="text-xl text-gray-600">{description}</p>
      </motion.div>

      <div className="space-y-8">
        {data.topics.map((topic, index) => (
          <motion.div
            key={topic.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="syllabus-card"
          >
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-semibold">{topic.name}</h2>
              <span className="text-purple-600 font-medium">{topic.duration}</span>
            </div>
            <ul className="space-y-2">
              {topic.subjects.map((subject) => (
                <li key={subject} className="flex items-center text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-purple-500 mr-3" />
                  {subject}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GradePage;
