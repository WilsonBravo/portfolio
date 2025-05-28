import React from 'react';

import { FlipCard, Box } from '@/common/components/components';

const FrontSide = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        borderRadius: '50%',
      }}
    >
      FrontSide
    </Box>
  );
};

const BackSide = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'black',
        width: '100%',
        height: '100%',
        borderRadius: '50%',
      }}
    >
      BackSide
    </Box>
  );
};

const ProjectCard: React.FC = () => {
  return (
    <Box sx={{ width: '15rem', height: '15rem' }}>
      <FlipCard
        frontSide={<FrontSide />}
        backSide={<BackSide />}
        width="100%"
        height="100%"
      />
    </Box>
  );
};

export { ProjectCard };
