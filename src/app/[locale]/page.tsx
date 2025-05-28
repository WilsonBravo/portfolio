'use client';
import { useTranslations } from 'next-intl';

import {
  Box,
  Footer,
  Header,
  Image,
  LongText,
  Typography,
} from '@/common/components/components';

import { InverseParallax } from './components/inverse-parallax';
import { images } from '@/common/constants/images';
import { ProjectCard } from './components/project-card';

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
          padding: '40px 80px',
        }}
      >
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
              width={300}
              height={300}
              alt="photo_1"
            />
          </Box>
          <Box
            sx={{
              width: '300px',
            }}
          >
            <Typography variant="h4" color="primary" fontWeight={800}>
              {t('hello')}
            </Typography>
            <Typography variant="h6" fontWeight={200}>
              {t('self-description')}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography variant="h3" fontWeight={800} color="primary">
            {t('about.title')}
          </Typography>
          <LongText text={t('about.description')} maxChars={500} />
        </Box>
        <Box>
          <ProjectCard />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
