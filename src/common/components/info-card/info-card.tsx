import React from 'react';
import { useTranslations } from 'next-intl';

import { Box, Typography, Button } from '../material-ui/material-ui';
import { Image } from '../next/next';

type Properties = {
  title: string;
  description: string;
  imgSrc: string;
};

const InfoCard: React.FC<Properties> = ({ title, description, imgSrc }) => {
  const t = useTranslations('utils');

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
      <Box
        sx={{
          backgroundColor: 'primary',
          borderRadius: '50%',
          overflow: 'hidden',
          width: 150,
          height: 150,
          ml: 'auto',
          mr: 'auto',
        }}
      >
        <Image
          alt="card-image"
          src={imgSrc}
          width={150}
          height={150}
          style={{ objectFit: 'cover' }}
        />
      </Box>
      <Typography variant="h5" color="primary">
        {title}
      </Typography>
      <Typography>{description}</Typography>
      <Button>{t('paragraph.more')}</Button>
    </Box>
  );
};

export { InfoCard };
