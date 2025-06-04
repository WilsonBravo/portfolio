import React, { useEffect, useState } from 'react';

import { Box, Image, Carousel } from '@/common/components/components';
import { images } from '@/common/constants/constants';
import { chunkArray } from '@/common/helpers/helpers';

import { AboutCarouselItem } from './about-carousel-item';
import { getCardContentList } from '../helpers/helpers';
import { Card } from '../types/types';
import { useMediaQuery, useTheme } from '@mui/material';

const About: React.FC = () => {
  const [cardContentList, setCardContentList] = useState<Card[][]>([]);

  const theme = useTheme();
  const onlySmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    getCardContentList().then((cardContentList) => {
      setCardContentList(chunkArray(cardContentList, onlySmallScreen ? 1 : 3));
    });
  }, [onlySmallScreen]);

  const carouselItems = cardContentList.map((cardContent, index) => (
    <AboutCarouselItem key={index} cardContent={cardContent} />
  ));

  return (
    <Box sx={{ position: 'relative' }}>
      <Carousel carouselItems={carouselItems} />
      <Box
        sx={{
          position: 'absolute',
          zIndex: -1,
          top: 20,
          width: '100%',
          '& img': {
            width: '100%',
            height: 'auto',
          },
        }}
      >
        <Image
          alt="line_path"
          width={450}
          height={75}
          src={images.home.line_path}
        />
      </Box>
    </Box>
  );
};

export { About };
