import React from 'react';
import { Link } from 'react-router-dom';

const Level3Content: React.FC = () => {
  const topics = [
    { id: 1, title: 'Information and Communication Technology' },
    { id: 2, title: 'Fundamentals of a computer system', page: 32 },
    { id: 3, title: 'Data Representation Methods in the Computer system', page: 68 },
    { id: 4, title: 'Logic Gates with Boolean Functions', page: 108 },
    { id: 5, title: 'Operating Systems', page: 129 },
    { id: 6, title: 'Word Processing', page: 154 },
    { id: 7, title: 'Electronic Spreadsheet', page: 190 },
    { id: 8, title: 'Electronic Presentations', page: 230 },
    { id: 9, title: 'Database' }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gray-800 rounded-lg shadow-xl p-6 text-white">
        <div className="mb-4">
          <Link to="/" className="text-purple-400 hover:text-purple-300 mb-4 inline-block">
            ← Back to Home
          </Link>
        </div>
        <h2 className="text-3xl font-bold mb-6 text-purple-400">Level 3</h2>
        <ul className="space-y-4">
          {topics.map((topic) => (
            <li key={topic.id} className="flex justify-between items-center border-b border-gray-700 pb-2">
              <span className="text-gray-200">{`${topic.id}. ${topic.title}`}</span>
              {topic.page && (
                <span className="text-purple-400 bg-gray-700 px-3 py-1 rounded-full text-sm">
                  Page {topic.page}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Level3Content;
