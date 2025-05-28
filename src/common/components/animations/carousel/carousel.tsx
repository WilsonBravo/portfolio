'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

import { Box, IconButton } from '../../material-ui/material-ui';
import {
  Icon,
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from '../../icon/icon';

type Properties = {
  carouselItems: React.ReactNode[];
};

const Carousel: React.FC<Properties> = ({ carouselItems }) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const index =
    ((page % carouselItems.length) + carouselItems.length) %
    carouselItems.length;

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const variants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '300px',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <IconButton onClick={() => paginate(-1)}>
          <Icon icon={faArrowAltCircleLeft} />
        </IconButton>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            style={{ width: '100%', height: '100%' }}
          >
            {carouselItems[index]}
          </motion.div>
        </AnimatePresence>
        <IconButton onClick={() => paginate(1)}>
          <Icon icon={faArrowAltCircleRight} />
        </IconButton>
      </Box>
    </Box>
  );
};

export { Carousel };
