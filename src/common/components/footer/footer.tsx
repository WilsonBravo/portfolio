import React from 'react';

import { Box, Typography, IconButton } from '../material-ui/material-ui';
import { Icon, faEnvelope, faGithub, faLinkedin } from '../icon/icon';

const Footer: React.FC = () => {
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
        <IconButton size="large">
          <Icon icon={faGithub} />
        </IconButton>
        <IconButton size="large">
          <Icon icon={faLinkedin} />
        </IconButton>
        <IconButton size="large">
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
