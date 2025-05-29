import React from 'react';

import { Box, ExpandableCard, InfoCard } from '@/common/components/components';

import { AboutModalContent } from './about-modal-content';
import { Card } from '../types/types';

type Properties = {
  cardContent: Card[];
};

const AboutCarouselItem: React.FC<Properties> = ({ cardContent }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
      {cardContent.map((card, index) => (
        <ExpandableCard
          key={index}
          initialContent={
            <InfoCard
              imgSrc={card.imgSrc}
              title={card.title}
              description={card.description}
            />
          }
          content={
            <AboutModalContent
              paragraph={card.modalContent.paragraph}
              imgUrlList={card.modalContent.imgUrlList ?? null}
            />
          }
          imgSrc={card.imgSrc}
        />
      ))}
    </Box>
  );
};

export { AboutCarouselItem };
