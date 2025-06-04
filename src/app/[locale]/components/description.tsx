import React from 'react';
import { useTranslations } from 'next-intl';

import {
  Box,
  Image,
  Typography,
  Icon,
  IconButton,
  faGithub,
  faEnvelope,
  faLinkedin,
  faFile,
} from '@/common/components/components';
import { images } from '@/common/constants/constants';

const Description: React.FC = () => {
  const t = useTranslations('');

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: '40px',
      }}
    >
      <Box
        sx={{
          '& img': {
            objectFit: 'cover',
            borderTopLeftRadius: '20px',
            borderTopRightRadius: '80px',
            borderBottomLeftRadius: '80px',
            borderBottomRightRadius: '20px',
          },
        }}
      >
        <Image
          src={images.photos.landscape}
          width={220}
          height={220}
          alt="photo_1"
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '300px',
          gap: '10px',
        }}
      >
        <Typography variant="h4" color="primary" fontWeight={800}>
          {t('HomePage.hello')}
        </Typography>
        <Typography fontWeight={200}>
          {t('HomePage.self-description')}
        </Typography>
        <Box>
          <IconButton href={t('utils.urls.github')} target="_blank">
            <Icon icon={faGithub} />
          </IconButton>
          <IconButton href={t('utils.urls.linkedin')} target="_blank">
            <Icon icon={faLinkedin} />
          </IconButton>
          <IconButton href={t('utils.urls.email')} target="_blank">
            <Icon icon={faEnvelope} />
          </IconButton>
          <IconButton href={t('utils.urls.cv')} target="_blank">
            <Icon icon={faFile} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export { Description };
