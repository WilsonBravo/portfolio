import React from 'react';

import {
  Box,
  Image,
  Typography,
  Button,
} from '@/common/components/components';

type Properties = {
  title: string;
  description: string;
  imgSrc: string;
};

const InfoCard: React.FC<Properties> = ({ title, description, imgSrc }) => {
  return (
    <Box
      sx={{
        width: '200px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <Box sx={{ backgroundColor: 'primary', borderRadius: '50%' }}>
        <Image alt="card-image" src={imgSrc} width={150} height={150} />
      </Box>
      <Typography variant="h5" color="primary">
        {title}
      </Typography>
      <Typography>{description}</Typography>
      <Button>Ver Más</Button>
    </Box>
  );
};

export { InfoCard };
