import React from 'react';

import { Box, DropableCard, Typography } from '@/common/components/components';
import { images } from '@/common/constants/images';

const Projects: React.FC = () => {
  return (
    <Box>
      <Typography variant="h1">Projects</Typography>
      <DropableCard
        imgList={[images.home.drawing, images.logo, images.photos.landscape]}
        width={220}
        height={220}
      />
    </Box>
  );
};

export { Projects };
