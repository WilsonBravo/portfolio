'use client';
import React, { useState } from 'react';

import {
  Box,
  Typography,
  Button,
} from '@/common/components/material-ui/material-ui';
import { useTranslations } from 'next-intl';

type Properties = {
  text: string;
  maxChars?: number;
};

const LongText: React.FC<Properties> = ({ text, maxChars = 200 }) => {
  const [expanded, setExpanded] = useState(false);

  const isLong = text.length > maxChars;
  const displayedText =
    expanded || !isLong ? text : text.slice(0, maxChars) + '...';

  const t = useTranslations('utils');
  return (
    <Box>
      <Typography component="pre" sx={{ textWrap: 'wrap' }}>
        {displayedText}
      </Typography>
      {isLong && (
        <Button
          size="large"
          onClick={() => setExpanded(!expanded)}
          sx={{ textTransform: 'lowercase', padding: 0, ml: 1 }}
        >
          {expanded ? t('paragraph.less') : t('paragraph.more')}
        </Button>
      )}
    </Box>
  );
};

export { LongText };
