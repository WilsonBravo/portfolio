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
      title: t(`items.${keys[index]}.title`),
      description: t(`items.${keys[index]}.description`),
    });
    setTimeout(() => setFade(true), 200);
  }, [index]);

  return (
    <Box>
      <Typography variant="h1">{t('title')}</Typography>
      <Box
        sx={{
          mt: '20px',
          display: 'flex',
          gap: '200px',
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
                  gap: '20px',
                  mt: '20px',
                }}
              >
                <IconButton>
                  <Icon icon={faFile} />
                </IconButton>
                <IconButton>
                  <Icon icon={faLink} />
                </IconButton>
              </Box>
            </Box>
          </Fade>
        )}
      </Box>
    </Box>
  );
};

export { Projects };
