import React, { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

import {
  Box,
  DropableCard,
  Typography,
  Fade,
  Tooltip,
} from '@/common/components/components';

const Projects: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [project, setProject] = useState({ title: '', description: '' });
  const [showToolTip, setShowToolTip] = useState(true);

  const t = useTranslations('HomePage.projects');
  const keys = ['undergraduateThesis', 'portfolio', 'lifeSwap'];

  useEffect(() => {
    setFade(false);
    setProject({
      title: t(`${keys[index]}.title`),
      description: t(`${keys[index]}.description`),
    });
    setTimeout(() => setFade(true), 200);
  }, [index]);

  return (
    <Box>
      <Typography variant="h1">Projects</Typography>
      <Box
        sx={{
          mt: '20px',
          display: 'flex',
          gap: '200px',
          alignItems: 'center',
        }}
      >
        <Tooltip
          title={<Typography variant="h6">{`Swipe ->`}</Typography>}
          placement="top"
          open={showToolTip}
          onClose={() => {
            setShowToolTip(false);
          }}
          arrow
        >
          <Box>
            <DropableCard
              imgList={[
                t(`${keys[0]}.imgUrl`),
                t(`${keys[1]}.imgUrl`),
                t(`${keys[2]}.imgUrl`),
              ]}
              index={index}
              setIndex={setIndex}
              width={220}
              height={220}
            />
          </Box>
        </Tooltip>
        {fade && (
          <Fade in={fade}>
            <Box>
              <Typography variant="h4" color="primary">
                {project.title}
              </Typography>
              <Typography>{project.description}</Typography>
            </Box>
          </Fade>
        )}
      </Box>
    </Box>
  );
};

export { Projects };
