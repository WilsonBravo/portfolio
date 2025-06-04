import React from 'react';

import { Box, Typography, Image, Button } from '@/common/components/components';
import { images } from '@/common/constants/images';

type Properties = {
  title: string;
};

const Skills: React.FC<Properties> = ({ title }) => {
  const keys = Object.keys(images.icons) as (keyof typeof images.icons)[];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h1">{title}</Typography>
      <Box
        sx={{
          display: 'flex',
          gap: '50px',
          padding: '40px',
          flexWrap: 'wrap',
          height: '100%',
          width: '100%',
          justifyContent: 'center',
        }}
      >
        {keys.map((key, index) => (
          <Button
            key={index}
            sx={{
              textTransform: 'capitalize',
              color: 'secondary.main',
              width: '110px',
              height: '90px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Image
                alt="skill-icon"
                src={images.icons[key]}
                width={50}
                height={50}
                style={{ objectFit: 'contain' }}
              />
              <Typography>{key}</Typography>
            </Box>
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export { Skills };
