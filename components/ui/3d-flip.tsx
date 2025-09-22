'use client';

import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ReactNode, useState, useEffect } from 'react';

type Flip3DProps = {
  children: ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  duration?: number;
  className?: string;
};

export function Flip3D({
  children,
  direction = 'up',
  duration = 1,
  className = '',
}: Flip3DProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`flip-container-${key}`);
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [key]);

  const variants: Variants = {
    hidden: (dir: string) => ({
      opacity: 0,
      ...(dir === 'left' ? { x: -100, rotateY: 45 } :
         dir === 'right' ? { x: 100, rotateY: -45 } :
         dir === 'up' ? { y: -100, rotateX: 45 } :
         { y: 100, rotateX: -45 }),
      transformStyle: 'preserve-3d',
      perspective: 1000,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      transformStyle: 'preserve-3d',
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [children]);

  return (
    <div 
      id={`flip-container-${key}`}
      className={`relative w-full h-full ${className}`}
      style={{ perspective: '1000px' }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={key}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={variants}
          custom={direction}
          className="w-full h-full"
          style={{
            transformStyle: 'preserve-3d',
            transformOrigin: 'center center',
            backfaceVisibility: 'visible',
            willChange: 'transform, opacity'
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
