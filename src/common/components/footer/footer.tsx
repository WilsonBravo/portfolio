import React from 'react';
import { useTranslations } from 'next-intl';

import { Box, Typography, IconButton } from '../material-ui/material-ui';
import { Icon, faEnvelope, faGithub, faLinkedin } from '../icon/icon';

const Footer: React.FC = () => {
  const t = useTranslations('utils.urls');

  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 2,
        flexWrap: 'wrap',
        gap: '20px',
      }}
    >
      <Box sx={{ display: 'flex', gap: '16px' }}>
        <IconButton size="large" href={t('github')} target="_blank">
          <Icon icon={faGithub} />
        </IconButton>
        <IconButton size="large" href={t('linkedin')} target="_blank">
          <Icon icon={faLinkedin} />
        </IconButton>
        <IconButton size="large" href={t('email')} target="_blank" type="email">
          <Icon icon={faEnvelope} />
        </IconButton>
      </Box>
      <Typography variant="caption" color="textSecondary">
        ©2025 By Wilson Bravo <br />
        Created with Next JS
      </Typography>
    </Box>
  );
};

export { Footer };
