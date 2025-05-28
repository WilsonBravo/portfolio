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
  const t = useTranslations('HomePage');
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
          {t('hello')}
        </Typography>
        <Typography fontWeight={200}>{t('self-description')}</Typography>
        <Box>
          <IconButton>
            <Icon icon={faGithub} />
          </IconButton>
          <IconButton>
            <Icon icon={faLinkedin} />
          </IconButton>
          <IconButton>
            <Icon icon={faEnvelope} />
          </IconButton>
          <IconButton>
            <Icon icon={faFile} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export { Description };
