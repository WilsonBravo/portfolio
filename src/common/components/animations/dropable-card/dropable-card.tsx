'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { Card } from './card';

type Properties = {
  imgList: string[];
  width: number;
  height: number;
};

const DropableCard: React.FC<Properties> = ({
  imgList,
  width = 150,
  height = 150,
}) => {
  const [index, setIndex] = useState(0);
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    setImgIndex((prev) => {
      if (prev === imgList.length - 1) {
        return 0;
      }
      return prev + 1;
    });
  }, [index]);

  return (
    <motion.div style={{ width, height, position: 'relative' }}>
      <AnimatePresence initial={false}>
        <Card
          key={index + 1}
          frontCard={false}
          width={width}
          height={height}
          imgUrl={imgList[imgIndex == imgList.length - 1 ? 0 : imgIndex + 1]}
        />
        <Card
          key={index}
          frontCard={true}
          width={width}
          height={height}
          imgUrl={imgList[imgIndex]}
          index={index}
          setIndex={setIndex}
          drag="x"
        />
      </AnimatePresence>
    </motion.div>
  );
};

export { DropableCard };
