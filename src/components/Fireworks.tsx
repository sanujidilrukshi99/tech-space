import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const CyberFirework = ({ x, y, color, delay }: { x: number; y: number; color: string; delay: number }) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: [0, 4, 0],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 2,
        delay,
        ease: "easeOut"
      }}
      style={{
        position: 'absolute',
        left: `${x}%`,
        top: `${y}%`,
      }}
    >
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1"
          style={{
            background: color,
            left: '50%',
            top: '50%',
            borderRadius: '50%',
          }}
          animate={{
            x: Math.cos(i * 30 * Math.PI / 180) * 100,
            y: Math.sin(i * 30 * Math.PI / 180) * 100,
            opacity: [1, 0],
            scale: [1, 0],
          }}
          transition={{
            duration: 1.5,
            delay: delay + 0.2,
            ease: "easeOut"
          }}
        />
      ))}
    </motion.div>
  );
};

const Fireworks = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  const colors = [
    'rgb(168, 85, 247)', // Purple
    'rgb(216, 180, 254)', // Light Purple
    'rgb(147, 51, 234)', // Dark Purple
    'rgb(192, 132, 252)', // Medium Purple
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 6000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-gray-900/80 backdrop-blur-lg pointer-events-none z-50 flex items-center justify-center"
        >
          {[...Array(20)].map((_, i) => (
            <CyberFirework
              key={i}
              x={Math.random() * 100}
              y={Math.random() * 100}
              color={colors[i % colors.length]}
              delay={i * 0.3}
            />
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ 
              opacity: 1, 
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute z-50 text-center px-8 py-12 rounded-2xl"
            style={{
              background: 'radial-gradient(circle at center, rgba(168,85,247,0.2), transparent)'
            }}
          >
            <motion.h1
              animate={{
                textShadow: [
                  "0 0 30px rgba(168,85,247,1), 0 0 60px rgba(168,85,247,0.8)",
                  "0 0 80px rgba(168,85,247,1), 0 0 160px rgba(168,85,247,0.8)",
                  "0 0 30px rgba(168,85,247,1), 0 0 60px rgba(168,85,247,0.8)"
                ],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-8xl font-bold tracking-wider"
              style={{
                background: 'linear-gradient(45deg, #e879f9, #c084fc, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 0 30px rgba(168,85,247,0.5))'
              }}
            >
              CONGRATULATIONS!
            </motion.h1>
            <motion.div
              animate={{
                opacity: [0.7, 1, 0.7],
                scale: [1, 1.02, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-8 cyber-card p-6 backdrop-blur-xl bg-purple-900/20"
            >
              <motion.p
                animate={{ 
                  color: ['rgb(216,180,254)', 'rgb(192,132,252)', 'rgb(216,180,254)']
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-3xl font-medium tracking-wide"
              >
                Your registration was successful!
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Fireworks;
