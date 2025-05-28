'use client';
import { useTranslations } from 'next-intl';

import {
  Box,
  Footer,
  Header,
  Icon,
  IconButton,
  Image,
  // LongText,
  Typography,
  faGithub,
  faLinkedin,
  faEnvelope,
  ExpandableCard,
} from '@/common/components/components';

// import { InverseParallax } from './components/inverse-parallax';
import { images } from '@/common/constants/images';
// import { ProjectCard } from './components/project-card';
import { InfoCard } from './components/info-card';

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
      {/* <Box
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
      /> */}
      <Header />
      {/* <InverseParallax /> */}
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
            </Box>
          </Box>
        </Box>
        <Box sx={{ position: 'relative', mt: '80px' }}>
          <Box
            sx={{
              position: 'absolute',
              zIndex: -1,
              top: 20,
              width: '100%',
              '& img': {
                width: '100%',
                height: 'auto',
              },
            }}
          >
            <Image
              alt="line_path"
              width={450}
              height={75}
              src={images.home.line_path}
            />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
            <ExpandableCard
              initialContent={
                <InfoCard
                  imgSrc={images.logo}
                  title="lorem ipsum"
                  description="lorem ipsum"
                />
              }
              content={<Box>Hola Mundo</Box>}
              imgSrc={images.logo}
            />

            <ExpandableCard
              initialContent={
                <InfoCard
                  imgSrc={images.logo_grey}
                  title="lorem ipsum"
                  description="lorem ipsum"
                />
              }
              content={<Box>Hola Mundo</Box>}
              imgSrc={images.logo_grey}
            />

            <ExpandableCard
              initialContent={
                <InfoCard
                  imgSrc={images.logo_red}
                  title="lorem ipsum"
                  description="lorem ipsum"
                />
              }
              content={<Box>Hola Mundo</Box>}
              imgSrc={images.logo_red}
            />
          </Box>
          {/* <Typography variant="h3" fontWeight={800} color="primary">
            {t('about.title')}
          </Typography>
          <LongText text={t('about.description')} maxChars={500} /> */}
        </Box>
        {/* <Box>
          <ProjectCard />
        </Box> */}
      </Box>
      <Footer />
    </Box>
  );
}
