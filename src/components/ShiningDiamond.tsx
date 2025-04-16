import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Diamond = ({ x, y, size, delay }: { x: number; y: number; size: number; delay: number }) => {
  return (
    <motion.g
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0, 1, 1, 0],
        scale: [0, 1, 1, 0],
        rotate: [0, 45, 45, 0]
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      style={{ transformOrigin: 'center' }}
    >
      <path
        d={`M ${x} ${y-size/2} L ${x+size/2} ${y} L ${x} ${y+size/2} L ${x-size/2} ${y} Z`}
        fill="rgba(168, 85, 247, 0.3)"
        stroke="rgba(168, 85, 247, 0.8)"
        strokeWidth="0.5"
        filter="url(#diamondGlow)"
      />
    </motion.g>
  );
};

const ShiningDiamond = () => {
  const [diamonds, setDiamonds] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([]);

  useEffect(() => {
    const createDiamonds = () => {
      const newDiamonds = Array.from({ length: 20 }, (_, i) => ({
        id: Date.now() + i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 5 + Math.random() * 15,
        delay: Math.random() * 2
      }));
      setDiamonds(newDiamonds);
    };

    createDiamonds();
    const interval = setInterval(createDiamonds, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="diamond-container">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          <filter id="diamondGlow">
            <feGaussianBlur stdDeviation="1" result="blur" />
            <feFlood floodColor="rgba(168, 85, 247, 0.5)" result="color" />
            <feComposite in="color" in2="blur" operator="in" />
            <feSpecularLighting surfaceScale="2" specularConstant="1" specularExponent="20" result="specular">
              <fePointLight x="50" y="50" z="200" />
            </feSpecularLighting>
            <feMerge>
              <feMergeNode in="SourceGraphic" />
              <feMergeNode in="specular" />
            </feMerge>
          </filter>
        </defs>
        {diamonds.map(diamond => (
          <Diamond key={diamond.id} {...diamond} />
        ))}
      </svg>
    </div>
  );
};

export default ShiningDiamond;
