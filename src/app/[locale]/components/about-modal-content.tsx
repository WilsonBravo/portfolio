import React from 'react';

import {
  Box,
  Image,
  Typography,
  useTheme,
} from '@/common/components/components';
import { useMediaQuery } from '@mui/material';

type Properties = {
  paragraph: string;
  imgUrlList?: string[] | null;
};

const AboutModalContent: React.FC<Properties> = ({
  paragraph,
  imgUrlList = null,
}) => {
  const theme = useTheme();
  const onlySmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        overflowY: { xs: 'auto' },
        height: { xs: '50%' },
      }}
    >
      <Box
        sx={{
          padding: '2rem',
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: '1.1rem',
              sm: '1.4rem',
            },
          }}
        >
          {paragraph}
        </Typography>
      </Box>
      <Box
        sx={{
          position: {
            xs: 'static',
            sm: 'absolute',
          },
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          bottom: 0,
          left: 0,
          margin: '2rem',
          '& img': {
            objectFit: 'cover',
          },
        }}
      >
        {imgUrlList &&
          imgUrlList.map((imgUrl, index) => (
            <Image
              key={index}
              alt="icon"
              src={imgUrl}
              width={onlySmallScreen ? 30 : 50}
              height={onlySmallScreen ? 30 : 50}
            />
          ))}
      </Box>
    </Box>
  );
};

export { AboutModalContent };
