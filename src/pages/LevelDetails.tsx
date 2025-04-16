import React from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { levelCurriculum } from '../data/curriculum';

const LevelDetails: React.FC = () => {
  const { level } = useParams();

  const level3Topics = [
    { id: 1, title: 'Information and Communication Technology' },
    { id: 2, title: 'Fundamentals of a computer system' },
    { id: 3, title: 'Data Representation Methods in the Computer system' },
    { id: 4, title: 'Logic Gates with Boolean Functions' },
    { id: 5, title: 'Operating Systems' },
    { id: 6, title: 'Word Processing' },
    { id: 7, title: 'Electronic Spreadsheet' },
    { id: 8, title: 'Electronic Presentations' },
    { id: 9, title: 'Database' }
  ];

  const level4Topics = [
    { id: 1, title: 'Programming' },
    { id: 2, title: 'System Development Life Cycle', page: 53 },
    { id: 3, title: 'The Internet and the Electronic Mail', page: 64 },
    { id: 4, title: 'Use of Multimedia', page: 81 },
    { id: 5, title: 'Web Designing Using Multimedia', page: 125 },
    { id: 6, title: 'Information and Communication', page: 168 },
    { id: 7, title: 'Technology and Society' }
  ];

  const renderContent = () => {
    if (level === '3') {
      return (
        <div className="max-w-4xl mx-auto px-4 py-12">
          <motion.h1 
            className="text-4xl font-bold mb-8 text-center tech-title-gradient"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Level 3 - Advanced Computing
          </motion.h1>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="cyber-card p-6"
            >
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">
                Course Content
              </h2>
              <div className="space-y-4">
                {level3Topics.map((topic, index) => (
                  <motion.div
                    key={topic.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group hover:bg-purple-500/10 p-3 rounded-lg transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-purple-500/50" />
                      <span className="text-gray-300">{topic.title}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      );
    }

    if (level === '4') {
      return (
        <div className="max-w-4xl mx-auto px-4 py-12">
          <motion.h1 
            className="text-4xl font-bold mb-8 text-center tech-title-gradient"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Level 4 - Advanced Computing
          </motion.h1>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="cyber-card p-6"
            >
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">
                Course Content
              </h2>
              <div className="space-y-4">
                {level4Topics.map((topic, index) => (
                  <motion.div
                    key={topic.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group hover:bg-purple-500/10 p-3 rounded-lg transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-purple-500/50" />
                      <span className="text-gray-300">{topic.title}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      );
    }

    const curriculumData = levelCurriculum[Number(level)];

    if (!curriculumData) return <div>Level not found</div>;

    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.h1 
          className="text-4xl font-bold mb-8 text-center tech-title-gradient"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Level {level} - {curriculumData.name}
        </motion.h1>

        <motion.p className="text-purple-300 text-center mb-12">
          Grades: {curriculumData.grades.join(' & ')}
        </motion.p>

        <div className="space-y-8">
          {curriculumData.modules.map((module, moduleIndex) => (
            <motion.div
              key={module.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: moduleIndex * 0.2 }}
              className="cyber-card p-6"
            >
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">
                {module.title}
              </h2>
              <div className="space-y-4">
                {module.topics.map((topic, topicIndex) => (
                  <motion.div
                    key={topic}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (moduleIndex * 0.2) + (topicIndex * 0.1) }}
                    className="group hover:bg-purple-500/10 p-3 rounded-lg transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-purple-500/50" />
                        <span className="text-gray-300">{topic}</span>
                      </div>
                      {curriculumData.details && (
                        <span className="text-sm text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
                          {curriculumData.details[moduleIndex === 0 ? 'grade8' : 'grade9'][topic]}
                        </span>
                      )}
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

  return <>{renderContent()}</>;
};

export default LevelDetails;
