import React from 'react';

import { Skeleton, Box } from '../material-ui/material-ui';

const GeneralSkeleton: React.FC = () => {
  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: '40px 100px',
        gap: '20px',
      }}
    >
      <Box sx={{ flex: 1, display: 'flex', gap: '40px' }}>
        <Box sx={{ flex: 1 }}>
          <Skeleton
            variant="rectangular"
            sx={{ width: '100%', height: '100%' }}
          />
        </Box>
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '50px',
          }}
        >
          <Box>
            <Skeleton variant="text" sx={{ width: '100%', height: '40px' }} />
            <Skeleton variant="text" sx={{ width: '100%', height: '40px' }} />
            <Skeleton variant="text" sx={{ width: '100%', height: '40px' }} />
          </Box>
          <Box display="flex" gap={10}>
            <Skeleton variant="circular" width={100} height={100} />
            <Skeleton variant="circular" width={100} height={100} />
            <Skeleton variant="circular" width={100} height={100} />
          </Box>
        </Box>
      </Box>
      <Box flex={1}>
        <Skeleton variant="text" sx={{ width: '100%', height: '40px' }} />
        <Skeleton variant="text" sx={{ width: '100%', height: '40px' }} />
      </Box>
    </Box>
  );
};

export { GeneralSkeleton };
