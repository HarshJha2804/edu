// MotionComponent.tsx
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

interface MotionComponentProps {
  children: React.ReactNode;
}

const Scrollanimation: React.FC<MotionComponentProps> = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
    >
      {children}
    </motion.div>
  );
};

export default Scrollanimation;
