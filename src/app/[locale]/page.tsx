'use client';

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

export default function Home() {
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
          padding: '40px 80px',
          gap: '80px',
        }}
      >
        <Description />
        <About />

        <InfoBanner
          title="Personal Skills"
          listItems={['Communication', 'Creativity', 'Teamwork', 'Flexibility']}
          imgUrl="/bg/greek_statue.jpg"
        />

        <InfoBanner
          title="Interest"
          listItems={['Drawing'].concat(Array(4).fill('Drawing'))}
          imgUrl="/bg/anime.jpg"
        />

        <Skills />
        <Projects />
      </Box>
      <Footer />
    </Box>
  );
}
