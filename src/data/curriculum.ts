export const levelCurriculum = {
  1: {
    name: 'Foundation of Technology',
    grades: [6, 7],
    modules: [
      {
        title: 'Introduction to Computing',
        topics: [
          'Importance of Computers',
          'Use the Computer Laboratory Safely',
          'Operating System and File Management',
          'Using Mouse and Keyboard to use Application Software'
        ]
      },
      {
        title: 'Programming Fundamentals',
        topics: [
          'Algorithm & Flow Charts',
          'Using the Internet for collecting Information and Communication'
        ]
      },
      {
        title: 'Computer Systems & Applications',
        topics: [
          'Central Processing Unit',
          'Operating System',
          'Security of Computer System',
          'Word Processing',
          'Programme Development',
          'Presentation Software',
          'Using Internet for Information and Communication'
        ]
      }
    ]
  },
  2: {
    name: 'Intermediate Computing',
    grades: [8, 9],
    modules: [
      {
        title: 'Grade 8 Modules',
        topics: [
          'Number Systems',
          'Configuring and Formatting a Computer',
          'Word Processing',
          'Programming',
          'Physical Computing',
          'Internet'
        ]
      },
      {
        title: 'Grade 9 Modules',
        topics: [
          'Preparation of Computer Specifications',
          'Electronic Spreadsheets',
          'Programming',
          'Use of Microcontrollers',
          'Computer Networks',
          'ICT and Society'
        ]
      }
    ],
    details: {
      grade8: {
        'Number Systems': 'Chapter 1',
        'Configuring and Formatting a Computer': 'Chapter 2 - Page 11',
        'Word Processing': 'Chapter 3 - Page 34',
        'Programming': 'Chapter 4 - Page 39',
        'Physical Computing': 'Chapter 5 - Page 55',
        'Internet': 'Chapter 6'
      },
      grade9: {
        'Preparation of Computer Specifications': 'Chapter 1 - Page 1',
        'Electronic Spreadsheets': 'Chapter 2 - Page 22',
        'Programming': 'Chapter 3 - Page 29',
        'Use of Microcontrollers': 'Chapter 4 - Page 47',
        'Computer Networks': 'Chapter 5 - Page 66',
        'ICT and Society': 'Chapter 6'
      }
    }
  },
  // ...other levels
};
