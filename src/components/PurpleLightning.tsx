import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Lightning3D = () => {
  const generateBranches = () => {
    const branches = [];
    const startX = Math.random() * 100;
    let currentY = 0;

    while (currentY < 100) {
      const length = 10 + Math.random() * 20;
      const endX = startX + (Math.random() - 0.5) * 50;
      const endY = currentY + length;
      
      // Create branch with 3D perspective
      branches.push({
        path: `M ${startX} ${currentY} L ${endX} ${endY}`,
        depth: Math.random(),
        intensity: 0.5 + Math.random() * 0.5
      });

      // Add sub-branches
      if (Math.random() > 0.7) {
        const subX = endX + (Math.random() - 0.5) * 30;
        const subY = endY + Math.random() * 10;
        branches.push({
          path: `M ${endX} ${endY} L ${subX} ${subY}`,
          depth: Math.random(),
          intensity: 0.3 + Math.random() * 0.3
        });
      }

      currentY = endY;
    }

    return branches;
  };

  return (
    <>
      {generateBranches().map((branch, index) => (
        <motion.path
          key={index}
          d={branch.path}
          stroke={`rgba(168, 85, 247, ${branch.intensity})`}
          strokeWidth={2 + branch.depth * 4}
          filter="url(#glow3D)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 0],
            opacity: [0, branch.intensity, 0],
            strokeWidth: [2, 6, 2]
          }}
          transition={{
            duration: 0.3 + Math.random() * 0.2,
            ease: "easeInOut",
            delay: index * 0.05
          }}
        />
      ))}
    </>
  );
};

const PurpleLightning = () => {
  const [strikes, setStrikes] = useState<number>(0);

  useEffect(() => {
    const createStrike = () => {
      setStrikes(prev => prev + 1);
      const nextStrike = 1000 + Math.random() * 2000;
      setTimeout(createStrike, nextStrike);
    };

    const timer = setTimeout(createStrike, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="lightning-container perspective-1000">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full transform-gpu"
      >
        <defs>
          <filter id="glow3D">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feSpecularLighting surfaceScale="5" specularConstant="0.8" specularExponent="20" lighting-color="#fff" result="specular">
              <fePointLight x="50" y="50" z="200" />
            </feSpecularLighting>
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="specular" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <Lightning3D key={strikes} />
      </svg>
    </div>
  );
};

export default PurpleLightning;
