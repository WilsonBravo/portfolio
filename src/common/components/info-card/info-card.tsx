'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

import { Box, Typography, Button, useTheme } from '../material-ui/material-ui';
import { Image } from '../next/next';
import { useMediaQuery } from '@mui/material';

type Properties = {
  title: string;
  description: string;
  imgSrc: string;
};

const InfoCard: React.FC<Properties> = ({ title, description, imgSrc }) => {
  const theme = useTheme();
  const onlySmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const t = useTranslations('utils');

  return (
    <Box
      sx={{
        width: {
          xs: '100%',
          sm: '200px',
        },
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
          width: { xs: 130, sm: 150 },
          height: { xs: 130, sm: 150 },
          ml: 'auto',
          mr: 'auto',
        }}
      >
        <Image
          alt="card-image"
          src={imgSrc}
          width={onlySmallScreen ? 130 : 150}
          height={onlySmallScreen ? 130 : 150}
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
