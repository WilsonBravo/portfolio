import React from 'react';

import { Box, Image, Typography } from '@/common/components/components';

type Properties = {
  imgUrl: string;
  title: string;
  listItems: string[];
};

const InfoBanner: React.FC<Properties> = ({ imgUrl, title, listItems }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        gap: '80px',
        borderRadius: '20px',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          flex: 1,
          position: 'absolute',
          width: '100%',
          height: '100%',
          opacity: 0.6,
          zIndex: -1,
          '& img': {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          },
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            backdropFilter: 'blur(5px)',
            width: '100%',
            height: '100%',
          }}
        />
        <Image alt="background" src={imgUrl} width={1050} height={260} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          padding: '20px',
          height: '260px',
          alignItems: 'center',
        }}
      >
        <Typography variant="h1" flex={1}>
          {title}
        </Typography>
        <Box
          flex={2}
          sx={{
            display: 'flex',
            gap: '20px',
            flexDirection: 'column',
            padding: '40px',
            flexWrap: 'wrap',
            height: '100%',
          }}
        >
          {listItems.map((item, index) => (
            <Typography key={index} sx={{ textTransform: 'uppercase' }}>
              {item}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export { InfoBanner };
