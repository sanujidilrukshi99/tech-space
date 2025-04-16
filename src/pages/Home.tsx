import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const imageList = [
  "/images/470871140_122231423480034196_2396142416418194223_n.jpg",
  "/images/473379634_588739273798612_6568558930717143585_n.jpg",
  "/images/473387948_588746573797882_1200070977011506527_n.jpg",
  "/images/473388741_588734280465778_744046267781192256_n.jpg",
  "/images/473776013_588734147132458_6423025613479333864_n.jpg",
  "/images/473802520_596324416373431_1751654263609213246_n.jpg"
];

const learningSpaces = [
  { title: 'Interactive Learning Lab', description: 'Cutting-edge facilities with hands-on learning experience' },
  { title: 'Advanced Tech Hub', description: 'State-of-the-art technology and equipment access' },
  { title: 'Innovation Space', description: 'Collaborative space fostering innovation and creativity' },
  { title: 'Digital Workspace', description: 'Modern environment for digital skill development' },
  { title: 'Creative Tech Studio', description: 'Space for creative technology projects' }
];

const levels = [
  { level: 1, grades: [6, 7], description: 'Foundation of Technology' },
  { level: 2, grades: [8, 9], description: 'Intermediate Computing' },
  { level: 3, grades: [10], description: 'Advanced Technology' },
  { level: 4, grades: [11], description: 'Expert Programming' }
];

const Home = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <div className="container mx-auto px-4 space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section className="min-h-[80vh] md:min-h-[90vh] flex items-center justify-center -mt-10 md:-mt-20">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 z-0"
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-gray-900">
            {!isMobile && (
              <motion.div 
                className="absolute inset-0" 
                style={{
                  backgroundImage: `
                    linear-gradient(to right, rgba(168, 85, 247, 0.1) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(168, 85, 247, 0.1) 1px, transparent 1px),
                    radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.1) 0%, transparent 2px),
                    linear-gradient(45deg, transparent 48%, rgba(168, 85, 247, 0.1) 50%, transparent 52%),
                    linear-gradient(-45deg, transparent 48%, rgba(168, 85, 247, 0.1) 50%, transparent 52%)
                  `,
                  backgroundSize: '40px 40px, 40px 40px, 40px 40px, 80px 80px, 80px 80px'
                }}
              />
            )}
          </div>
        </motion.div>

        <motion.div
          initial={isMobile ? false : { opacity: 0, y: 20 }}
          animate={isMobile ? true : { opacity: 1, y: 0 }}
          className="z-10 text-center space-y-8 max-w-4xl px-4"
        >
          <div className="space-y-6 relative">
            <motion.div
              animate={{
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full"
            />
            
            <motion.h1 
              className="text-7xl md:text-8xl font-bold tracking-tight relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.span
                animate={{
                  textShadow: [
                    "0 0 20px rgba(168,85,247,0.5)",
                    "0 0 40px rgba(168,85,247,0.5)",
                    "0 0 20px rgba(168,85,247,0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="tech-title-gradient inline-block"
              >
                TECH
              </motion.span>
              <motion.span
                animate={{
                  textShadow: [
                    "0 0 20px rgba(139,92,246,0.5)",
                    "0 0 40px rgba(139,92,246,0.5)",
                    "0 0 20px rgba(139,92,246,0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="space-title-gradient inline-block ml-4"
              >
                SPACE
              </motion.span>
            </motion.h1>

            <motion.p 
              className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-500"
              animate={{ 
                opacity: [0.7, 1, 0.7],
                y: [0, -5, 0]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Explore the Future of Learning
            </motion.p>
          </div>
          
          <motion.div 
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/register">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group overflow-hidden px-8 py-4 bg-purple-600 rounded-xl"
              >
                <span className="relative z-10 text-white font-semibold text-lg">
                  Join Now
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 via-purple-400 to-purple-600"
                  animate={{
                    x: ['-100%', '100%']
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-purple-500"
                  whileHover={{ scale: 1.5 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Updated Level Selection */}
      <section className="relative">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 neon-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Choose Your Level
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {levels.map((level, index) => (
            <Link key={level.level} to={`/level/${level.level}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="cyber-card p-6 h-full"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-2xl font-bold text-purple-400"
                    >
                      L{level.level}
                    </motion.span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-400">Level {level.level}</h3>
                    <p className="text-purple-300">Grades: {level.grades.join(' & ')}</p>
                  </div>
                </div>
                <p className="text-gray-300">{level.description}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* Updated Learning Environment Section */}
      <section className="relative">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 neon-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Next-Gen Learning Spaces
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {imageList.slice(1).map((img, index) => (
            <motion.div
              key={img}
              initial={isMobile ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative aspect-video rounded-2xl overflow-hidden cyber-card"
            >
              <img 
                src={img}
                alt={`Learning Space ${index + 1}`}
                className="w-full h-full object-cover transform-gpu"
                loading="lazy"
                decoding="async"
                width="400"
                height="225"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className="space-y-4"
                >
                  <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-200">
                    {learningSpaces[index]?.title}
                  </h3>
                  <p className="text-purple-200 text-lg">
                    {learningSpaces[index]?.description}
                  </p>
                </motion.div>
              </div>
              <div className="absolute top-0 left-0 w-10 h-10 border-l-2 border-t-2 border-purple-500/50" />
              <div className="absolute top-0 right-0 w-10 h-10 border-r-2 border-t-2 border-purple-500/50" />
              <div className="absolute bottom-0 left-0 w-10 h-10 border-l-2 border-b-2 border-purple-500/50" />
              <div className="absolute bottom-0 right-0 w-10 h-10 border-r-2 border-b-2 border-purple-500/50" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="relative pb-12">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 neon-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          About TECH SPACE
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="cyber-card p-6 space-y-4"
          >
            <h3 className="text-2xl font-semibold text-purple-400">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              TECH SPACE is dedicated to empowering students with cutting-edge technology education. 
              We believe in creating an innovative learning environment where students can explore, 
              create, and master the digital skills needed for the future.
            </p>
            <div className="space-y-2">
              <h4 className="text-xl font-medium text-purple-300">What We Offer:</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-1 pl-4">
                <li>Comprehensive ICT education from Grade 6 to 11</li>
                <li>Hands-on practical learning experience</li>
                <li>Modern technology and equipment</li>
                <li>Expert guidance and support</li>
                <li>Interactive learning environment</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="cyber-card p-6 space-y-4"
          >
            <h3 className="text-2xl font-semibold text-purple-400">Why Choose Us</h3>
            <p className="text-gray-300 leading-relaxed">
              Our specialized ICT education program is designed to prepare students for the digital age. 
              With a focus on practical skills and innovative teaching methods, we ensure that every 
              student receives personalized attention and guidance.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="h-6 w-6 rounded-full bg-purple-500/40"
                  />
                </div>
                <span className="text-purple-200">Expert Instructors</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                    className="h-6 w-6 rounded-full bg-purple-500/40"
                  />
                </div>
                <span className="text-purple-200">Small Class Sizes</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                    className="h-6 w-6 rounded-full bg-purple-500/40"
                  />
                </div>
                <span className="text-purple-200">Modern Facilities</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
