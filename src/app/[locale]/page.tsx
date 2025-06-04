'use client';

import React from 'react';

import {
  Box,
  Footer,
  Header,
  InfoBanner,
} from '@/common/components/components';

import { Description } from './components/description';
import { About } from './components/about';
import { Projects } from './components/projects';
import { Skills } from './components/skills';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('HomePage');

  const personalSkills = {
    title: t('personal-skills.title'),
    skills: [
      t('personal-skills.skills.communication'),
      t('personal-skills.skills.creativity'),
      t('personal-skills.skills.teamwork'),
      t('personal-skills.skills.flexibility'),
    ],
  };

  const interests = {
    title: t('interests.title'),
    items: [
      t('interests.items.drawing'),
      t('interests.items.music'),
      t('interests.items.webDevelopment'),
      t('interests.items.cybersecurity'),
      t('interests.items.ai'),
      t('interests.items.iot'),
    ],
  };

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
      <Header />
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          padding: {
            md: '40px 80px',
            sm: '40px 40px',
            xs: '40px 40px',
          },
          gap: '80px',
          overflow: 'hidden',
        }}
      >
        <Description />
        <About />

        <InfoBanner
          title={personalSkills.title}
          listItems={personalSkills.skills}
          imgUrl="/bg/greek_statue.jpg"
        />

        <InfoBanner
          title={interests.title}
          listItems={interests.items}
          imgUrl="/bg/anime.jpg"
        />

        <Skills title={t('skills.title')} />
        <Projects />
      </Box>
      <Footer />
    </Box>
  );
}
