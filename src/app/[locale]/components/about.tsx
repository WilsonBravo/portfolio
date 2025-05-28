import React from 'react';

import {
  Box,
  Image,
  ExpandableCard,
  InfoCard,
  Carousel,
} from '@/common/components/components';
import { images } from '@/common/constants/constants';

const About: React.FC = () => {
  const carouselItems = [
    <Box key={0} sx={{ display: 'flex', justifyContent: 'space-around' }}>
      <ExpandableCard
        initialContent={
          <InfoCard
            imgSrc={images.logo}
            title="lorem ipsum"
            description="lorem ipsum"
          />
        }
        content={<Box>Hola Mundo</Box>}
        imgSrc={images.logo}
      />

      <ExpandableCard
        initialContent={
          <InfoCard
            imgSrc={images.logo}
            title="lorem ipsum"
            description="lorem ipsum"
          />
        }
        content={<Box>Hola Mundo</Box>}
        imgSrc={images.logo}
      />

      <ExpandableCard
        initialContent={
          <InfoCard
            imgSrc={images.logo}
            title="lorem ipsum"
            description="lorem ipsum"
          />
        }
        content={<Box>Hola Mundo</Box>}
        imgSrc={images.logo}
      />
    </Box>,

    <Box key={1} sx={{ display: 'flex', justifyContent: 'space-around' }}>
      <ExpandableCard
        initialContent={
          <InfoCard
            imgSrc={images.logo_grey}
            title="lorem ipsum"
            description="lorem ipsum"
          />
        }
        content={<Box>Hola Mundo</Box>}
        imgSrc={images.logo_grey}
      />

      <ExpandableCard
        initialContent={
          <InfoCard
            imgSrc={images.logo_grey}
            title="lorem ipsum"
            description="lorem ipsum"
          />
        }
        content={<Box>Hola Mundo</Box>}
        imgSrc={images.logo_grey}
      />

      <ExpandableCard
        initialContent={
          <InfoCard
            imgSrc={images.logo_grey}
            title="lorem ipsum"
            description="lorem ipsum"
          />
        }
        content={<Box>Hola Mundo</Box>}
        imgSrc={images.logo_grey}
      />
    </Box>,

    <Box key={2} sx={{ display: 'flex', justifyContent: 'space-around' }}>
      <ExpandableCard
        initialContent={
          <InfoCard
            imgSrc={images.logo_red}
            title="lorem ipsum"
            description="lorem ipsum"
          />
        }
        content={<Box>Hola Mundo</Box>}
        imgSrc={images.logo_red}
      />

      <ExpandableCard
        initialContent={
          <InfoCard
            imgSrc={images.logo_red}
            title="lorem ipsum"
            description="lorem ipsum"
          />
        }
        content={<Box>Hola Mundo</Box>}
        imgSrc={images.logo_red}
      />

      <ExpandableCard
        initialContent={
          <InfoCard
            imgSrc={images.logo_red}
            title="lorem ipsum"
            description="lorem ipsum"
          />
        }
        content={<Box>Hola Mundo</Box>}
        imgSrc={images.logo_red}
      />
    </Box>,
  ];

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
