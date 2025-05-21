'use client';
import { useTranslations } from 'next-intl';

import {
  Box,
  Footer,
  Header,
  Image,
  Typography,
} from '@/common/components/components';
import { images } from '@/common/constants/images';

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          flex: 1,
          position: 'absolute',
          background: 'url("/neuronal_network_animation.gif")',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '100%',
          opacity: 0.2,
          zIndex: -1,
        }}
      />
      <Header />
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image src={images.logo} alt="logo" width={200} height={200} />
        <Typography variant="h1">{t('title')}</Typography>
        <Box>
          <Typography>{t('projects.portfolio.title')}</Typography>
          <Typography>{t('projects.portfolio.description')}</Typography>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
