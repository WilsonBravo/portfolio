import React from 'react';

import { Box, Image, Typography } from '@/common/components/components';

type Properties = {
  paragraph: string;
  imgUrlList?: string[] | null;
};

const AboutModalContent: React.FC<Properties> = ({
  paragraph,
  imgUrlList = null,
}) => {
  return (
    <>
      <Box
        sx={{
          position: 'absolute',
          display: 'flex',
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
            <Image key={index} alt="icon" src={imgUrl} width={50} height={50} />
          ))}
      </Box>
      <Box
        sx={{
          padding: '2rem',
        }}
      >
        <Typography
          sx={{
            fontSize: '1.4rem',
          }}
        >
          {paragraph}
        </Typography>
      </Box>
    </>
  );
};

export { AboutModalContent };
