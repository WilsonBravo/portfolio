'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { Card } from './card';

type Properties = {
  imgList: string[];
  width: number;
  height: number;
  index: number;
  setIndex: (index: number) => void;
};

const DropableCard: React.FC<Properties> = ({
  imgList,
  index,
  setIndex,
  width = 150,
  height = 150,
}) => {
  useEffect(() => {
    setIndex(1);
  }, []);
  useEffect(() => {
    setTimeout(() => setIndex(2), 1000);
  }, []);

  return (
    <motion.div style={{ width, height, position: 'relative' }}>
      <AnimatePresence initial={false}>
        <Card
          key={imgList[index == imgList.length - 1 ? 0 : index + 1]}
          frontCard={false}
          width={width}
          height={height}
          imgUrl={imgList[index == imgList.length - 1 ? 0 : index + 1]}
          maxIndexLength={imgList.length - 1}
        />
        <Card
          key={imgList[index]}
          frontCard={true}
          width={width}
          height={height}
          imgUrl={imgList[index]}
          maxIndexLength={imgList.length - 1}
          index={index}
          setIndex={setIndex}
          drag="x"
        />
      </AnimatePresence>
    </motion.div>
  );
};

export { DropableCard };
