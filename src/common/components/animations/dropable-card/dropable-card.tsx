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
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    setImgIndex(1);
  }, []);
  useEffect(() => {
    setTimeout(() => setImgIndex(2), 1000);
  }, []);

  return (
    <motion.div style={{ width, height, position: 'relative' }}>
      <AnimatePresence initial={false}>
        <Card
          key={imgList[imgIndex == imgList.length - 1 ? 0 : imgIndex + 1]}
          frontCard={false}
          width={width}
          height={height}
          imgUrl={imgList[imgIndex == imgList.length - 1 ? 0 : imgIndex + 1]}
          maxIndexLength={imgList.length - 1}
        />
        <Card
          key={imgList[imgIndex]}
          frontCard={true}
          width={width}
          height={height}
          imgUrl={imgList[imgIndex]}
          maxIndexLength={imgList.length - 1}
          index={imgIndex}
          setIndex={setImgIndex}
          drag="x"
        />
      </AnimatePresence>
    </motion.div>
  );
};

export { DropableCard };
