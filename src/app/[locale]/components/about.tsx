import React, { useEffect, useState } from 'react';

import { Box, Image, Carousel } from '@/common/components/components';
import { images } from '@/common/constants/constants';
import { chunkArray } from '@/common/helpers/helpers';

import { AboutCarouselItem } from './about-carousel-item';
import { getCardContentList } from '../helpers/helpers';
import { Card } from '../types/types';

const About: React.FC = () => {
  const [cardContentList, setCardContentList] = useState<Card[][]>([]);

  useEffect(() => {
    getCardContentList().then((cardContentList) => {
      setCardContentList(chunkArray(cardContentList, 3));
    });
  }, []);

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
