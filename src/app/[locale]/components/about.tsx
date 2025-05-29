import React from 'react';

import {
  Box,
  Image,
  ExpandableCard,
  InfoCard,
  Carousel,
  Typography,
} from '@/common/components/components';
import { images } from '@/common/constants/constants';
import { useTranslations } from 'next-intl';

const About: React.FC = () => {
  const t = useTranslations('HomePage.about.sections');
  const carouselItems = [
    <Box key={0} sx={{ display: 'flex', justifyContent: 'space-around' }}>
      <ExpandableCard
        initialContent={
          <InfoCard
            imgSrc={images.home.about.pasto}
            title={t('born-city.title')}
            description={t('born-city.description')}
          />
        }
        content={
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
              {t('born-city.paragraph')}
            </Typography>
          </Box>
        }
        imgSrc={images.home.about.pasto}
      />

      <ExpandableCard
        initialContent={
          <InfoCard
            imgSrc={images.home.about.javeriana_facultad_ingenieria}
            title={t('university.title')}
            description={t('university.description')}
          />
        }
        content={
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
              <Image
                alt="icon"
                src={images.icons.raspberry}
                width={50}
                height={50}
              />
              <Image
                alt="icon"
                src={images.icons.linux}
                width={50}
                height={50}
              />
              <Image
                alt="icon"
                src={images.icons.arduino}
                width={50}
                height={50}
              />
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
                {t('university.paragraph')}
              </Typography>
            </Box>
          </>
        }
        imgSrc={images.home.about.javeriana_facultad_ingenieria}
      />

      <ExpandableCard
        initialContent={
          <InfoCard
            imgSrc={images.home.about.programming}
            title={t('programming.title')}
            description={t('programming.description')}
          />
        }
        content={
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
              <Image
                alt="icon"
                src={images.icons.python}
                width={50}
                height={50}
              />
              <Image
                alt="icon"
                src={images.icons.vscode}
                width={50}
                height={50}
              />
              <Image
                alt="icon"
                src={images.icons.mysql}
                width={50}
                height={50}
              />
              <Image
                alt="icon"
                src={images.icons.postgresql}
                width={50}
                height={50}
              />
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
                {t('programming.paragraph')}
              </Typography>
            </Box>
          </>
        }
        imgSrc={images.home.about.programming}
      />
    </Box>,

    <Box key={1} sx={{ display: 'flex', justifyContent: 'space-around' }}>
      <ExpandableCard
        initialContent={
          <InfoCard
            imgSrc={images.home.about.wom}
            title={t('wom.title')}
            description={t('wom.description')}
          />
        }
        content={
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
              <Image
                alt="icon"
                src={images.icons.python}
                width={50}
                height={50}
              />
              <Image
                alt="icon"
                src={images.icons.api}
                width={50}
                height={50}
              />
              <Image
                alt="icon"
                src={images.icons.appdynamics}
                width={50}
                height={50}
              />
              <Image
                alt="icon"
                src={images.icons.grafana}
                width={50}
                height={50}
              />
              <Image
                alt="icon"
                src={images.icons.zabbix}
                width={50}
                height={50}
              />
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
                {t('wom.paragraph')}
              </Typography>
            </Box>
          </>
        }
        imgSrc={images.home.about.wom}
      />

      <ExpandableCard
        initialContent={
          <InfoCard
            imgSrc={images.home.about.oracle}
            title={t('oracle.title')}
            description={t('oracle.description')}
          />
        }
        content={
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
              <Image
                alt="icon"
                src={images.icons.typescript}
                width={50}
                height={50}
              />
              <Image
                alt="icon"
                src={images.icons.javascript}
                width={50}
                height={50}
              />
              <Image
                alt="icon"
                src={images.icons.react}
                width={50}
                height={50}
              />
              <Image
                alt="icon"
                src={images.icons.nextjs}
                width={50}
                height={50}
              />
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
                {t('oracle.paragraph')}
              </Typography>
            </Box>
          </>
        }
        imgSrc={images.home.about.oracle}
      />

      <ExpandableCard
        initialContent={
          <InfoCard
            imgSrc={images.home.about.google}
            title={t('google.title')}
            description={t('google.description')}
          />
        }
        content={
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
              <Image
                alt="icon"
                src={images.icons.python}
                width={50}
                height={50}
              />
              <Image
                alt="icon"
                src={images.icons.linux}
                width={50}
                height={50}
              />
              <Image
                alt="icon"
                src={images.icons.postgresql}
                width={50}
                height={50}
              />
              <Image
                alt="icon"
                src={images.icons.mysql}
                width={50}
                height={50}
              />
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
                {t('google.paragraph')}
              </Typography>
            </Box>
          </>
        }
        imgSrc={images.home.about.google}
      />
    </Box>,
  ];

  return (
    <Box sx={{ position: 'relative' }}>
      <Carousel carouselItems={carouselItems} />
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
    </Box>
  );
};

export { About };
