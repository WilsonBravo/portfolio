'use client';

import {
  Box,
  Footer,
  Header,
  Typography,
  InfoBanner,
} from '@/common/components/components';

import { Description } from './components/description';
import { About } from './components/about';
import { Projects } from './components/projects';

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

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '200px',
          }}
        >
          <Typography variant="h1">Software Ability</Typography>
          <Box
            sx={{
              display: 'flex',
              gap: '20px',
              flexDirection: 'column',
              padding: '40px',
              flexWrap: 'wrap',
              height: '100%',
              width: '100%',
            }}
          >
            <Typography>VS Code</Typography>
            <Typography>VS Code</Typography>
            <Typography>VS Code</Typography>
            <Typography>VS Code</Typography>
            <Typography>VS Code</Typography>
            <Typography>VS Code</Typography>
            <Typography>VS Code</Typography>
          </Box>
        </Box>

        <Projects />
      </Box>
      <Footer />
    </Box>
  );
}
