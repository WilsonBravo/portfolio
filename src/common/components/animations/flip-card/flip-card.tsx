'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

type Properties = {
  width?: string;
  height?: string;
  frontSide: React.ReactNode;
  backSide: React.ReactNode;
};

const FlipCard: React.FC<Properties> = ({
  frontSide,
  backSide,
  width = '15rem',
  height = '15rem',
}) => {
  const [flip, setFlip] = useState(false);

  return (
    <motion.div
      style={{
        width,
        height,
        perspective: 1000,
      }}
      onHoverStart={() => setFlip(true)}
      onHoverEnd={() => setFlip(false)}
    >
      <motion.div
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          transformStyle: 'preserve-3d',
        }}
        animate={{ rotateY: flip ? 180 : 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Front Side */}
        <motion.div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {frontSide}
        </motion.div>

        {/* Back Side */}
        <motion.div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {backSide}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export { FlipCard };
