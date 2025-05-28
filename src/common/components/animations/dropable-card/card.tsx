import React, { useState } from 'react';
import {
  motion,
  PanInfo,
  useMotionValue,
  useTransform,
  Variants,
} from 'framer-motion';
import { Image } from '../../next/next';

type Properties = {
  frontCard: boolean;
  width: number;
  height: number;
  imgUrl: string;
  maxIndexLength: number;
  setIndex?: (index: number) => void;
  index?: number;
  drag?: boolean | 'x' | 'y' | undefined;
};

const Card: React.FC<Properties> = ({
  frontCard,
  width,
  height,
  imgUrl,
  maxIndexLength,
  drag,
  setIndex = () => {},
  index = -1,
}) => {
  const [exitX, setExitX] = useState(0);

  const x = useMotionValue(0);
  const scale = useTransform(x, [-150, 0, 150], [0.5, 1, 0.5]);
  const rotate = useTransform(x, [-150, 0, 150], [-45, 0, 45], {
    clamp: false,
  });

  const variantsFrontCard: Variants = {
    animate: { scale: 1, y: 0, opacity: 1 },
    exit: (custom) => ({
      x: custom,
      opacity: 0,
      scale: 0.5,
      transition: { duration: 0.2 },
    }),
  };
  const variantsBackCard: Variants = {
    initial: { scale: 0, y: 105, opacity: 0 },
    animate: { scale: 0.75, y: 50, opacity: 0.5 },
  };

  function handleDragEnd(_: Event, info: PanInfo) {
    if (info.offset.x < -100) {
      setExitX(-250);
      const newIndex = index === maxIndexLength ? 0 : index + 1;
      setIndex(newIndex);
    }
    if (info.offset.x > 100) {
      setExitX(250);
      const newIndex = index === maxIndexLength ? 0 : index + 1;
      setIndex(newIndex);
    }
    console.log(frontCard, imgUrl);
  }

  return (
    <motion.div
      style={{
        width: 150,
        height: 150,
        position: 'absolute',
        top: 0,
        x,
        rotate,
        cursor: 'grab',
      }}
      whileTap={{ cursor: 'grabbing' }}
      // Dragging
      drag={drag}
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      onDragEnd={handleDragEnd}
      // Animation
      variants={frontCard ? variantsFrontCard : variantsBackCard}
      initial="initial"
      animate="animate"
      exit="exit"
      custom={exitX}
      transition={
        frontCard
          ? { type: 'spring', stiffness: 300, damping: 20 }
          : { scale: { duration: 0.2 }, opacity: { duration: 0.4 } }
      }
    >
      <motion.div
        style={{
          position: 'relative',
          width,
          height,
          backgroundColor: '#fff',
          borderRadius: 30,
          scale,
          overflow: 'hidden',
        }}
      >
        {imgUrl && (
          <Image
            alt="card-img"
            src={imgUrl}
            width={width}
            height={height}
            draggable={false}
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        )}
      </motion.div>
    </motion.div>
  );
};

export { Card };
