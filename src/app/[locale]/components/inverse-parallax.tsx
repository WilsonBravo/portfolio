import React, { useEffect } from 'react';
import { useTranslations } from 'next-intl';

import { motion, useMotionValue, useTransform } from 'framer-motion';

import { Box, Image, Typography } from '@/common/components/components';
import { images } from '@/common/constants/constants';

const InverseParallax: React.FC = () => {
  const t = useTranslations('HomePage');

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = e.clientX - innerWidth / 2;
      const y = e.clientY - innerHeight / 2;

      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const layer1X = useTransform(mouseX, (x) => x * 0.03);
  const layer1Y = useTransform(mouseY, (y) => y * 0.03);

  const layer2X = useTransform(mouseX, (x) => x * -0.02);
  const layer2Y = useTransform(mouseY, (y) => y * -0.02);

  return (
    <Box
      sx={{
        position: 'relative',
        height: '550px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          width: '100%',
          '& img': {
            width: '100%',
            height: '550px',
            objectFit: 'cover',
            position: 'absolute',
            objectPosition: 'bottom',
            top: 0,
            zIndex: -1,
          },
        }}
      >
        <Image src={images.home.drawing} alt="logo" width={1338} height={892} />
      </Box>
      <motion.div
        style={{
          flex: 1,
          position: 'absolute',
          x: layer2X,
          y: layer2Y,
          width: '100%',
          height: '100%',
          zIndex: 1,
        }}
      >
        {/* 2nd layer */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
            }}
          >
            <Image
              src={images.home.parallax.layer2}
              alt="logo"
              width={1500}
              height={550}
            />
          </Box>
          <Image src={images.logo} alt="logo" width={200} height={200} />
        </Box>
      </motion.div>
      <motion.div
        style={{
          position: 'absolute',
          x: layer1X,
          y: layer1Y,
          width: '100%',
          height: '100%',
          zIndex: 2,
        }}
      >
        {/* 1st layer */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
            }}
          >
            <Image
              src={images.home.parallax.layer1}
              alt="logo"
              width={1500}
              height={550}
            />
          </Box>
          <Typography
            variant="h2"
            sx={{
              fontFamily: 'var(--font-press-start-2p)',
              textShadow: '#000 1px 0 10px',
            }}
          >
            {`${t('title').split(' ')[0]}\u00A0\u00A0\u00A0${t('title').split(' ')[1]}`}
          </Typography>
        </Box>
      </motion.div>
    </Box>
  );
};

export { InverseParallax };
