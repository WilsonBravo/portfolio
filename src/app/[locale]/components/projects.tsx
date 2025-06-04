import React, { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

import {
  Box,
  DropableCard,
  Typography,
  Fade,
  Tooltip,
  IconButton,
  Icon,
  faFile,
  faLink,
  faGithub,
} from '@/common/components/components';

const Projects: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [project, setProject] = useState({
    title: '',
    description: '',
    doc: '',
    repo: '',
    link: '',
  });
  const [showToolTip, setShowToolTip] = useState(true);

  const t = useTranslations('HomePage.projects');
  const keys = ['undergraduateThesis', 'portfolio', 'lifeSwap'];

  useEffect(() => {
    setFade(false);
    setProject({
      title: t(`items.${keys[index]}.title`),
      description: t(`items.${keys[index]}.description`),
      repo: t.has(`items.${keys[index]}.repo`)
        ? t(`items.${keys[index]}.repo`)
        : '',
      doc: t.has(`items.${keys[index]}.doc`)
        ? t(`items.${keys[index]}.doc`)
        : '',
      link: t.has(`items.${keys[index]}.link`)
        ? t(`items.${keys[index]}.link`)
        : '',
    });
    setTimeout(() => setFade(true), 200);
  }, [index]);

  return (
    <Box>
      <Typography variant="h1" sx={{ fontSize: { xs: '3.5rem' } }}>
        {t('title')}
      </Typography>
      <Box
        sx={{
          mt: '20px',
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: { xs: '40px', sm: '200px' },
          alignItems: 'center',
        }}
      >
        <Tooltip
          title={<Typography variant="h6">{`${t('swipe')} ->`}</Typography>}
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
                t(`items.${keys[0]}.imgUrl`),
                t(`items.${keys[1]}.imgUrl`),
                t(`items.${keys[2]}.imgUrl`),
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
              <Box>
                <Typography variant="h4" color="primary">
                  {project.title}
                </Typography>
                <Typography>{project.description}</Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  mt: '1.2rem',
                }}
              >
                {project.doc && (
                  <IconButton href={project.doc} target="_blank">
                    <Icon icon={faFile} />
                  </IconButton>
                )}
                {project.repo && (
                  <IconButton href={project.repo} target="_blank">
                    <Icon icon={faGithub} />
                  </IconButton>
                )}
                {project.link && (
                  <IconButton href={project.link} target="_blank">
                    <Icon icon={faLink} />
                  </IconButton>
                )}
              </Box>
            </Box>
          </Fade>
        )}
      </Box>
    </Box>
  );
};

export { Projects };
