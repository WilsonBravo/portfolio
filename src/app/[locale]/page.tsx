'use client';
import { useTranslations } from 'next-intl';

import {
  Box,
  Footer,
  Header,
  Typography,
} from '@/common/components/components';

import { InverseParallax } from './components/inverse-parallax';

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
      <InverseParallax />
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box>
          <Typography>{t('projects.portfolio.title')}</Typography>
          <Typography>{t('projects.portfolio.description')}</Typography>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
