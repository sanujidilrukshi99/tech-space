import { motion } from 'framer-motion';

const PurpleFire = () => {
  return (
    <div className="fire-container">
      <div className="flames-wrapper">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="fire-particle"
            initial={{ y: 100, opacity: 0 }}
            animate={{
              y: [-50, -200],
              opacity: [0, 1, 0],
              x: Math.random() * 300 - 150,
              scale: [1.5, 0.5, 0]
            }}
            transition={{
              duration: 2 + Math.random(),
              repeat: Infinity,
              ease: "easeOut",
              delay: Math.random() * 2
            }}
            style={{
              left: `${Math.random() * 100}%`,
              bottom: -20
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default PurpleFire;
