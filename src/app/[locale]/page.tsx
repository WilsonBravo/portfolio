'use client';
import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/navigation';
import { Box, Header } from '@/common/components/components';

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Header />
      <Box
        sx={{
          flex: 1,
        }}
      >
        {t('title')}
        <Link href="/" locale="en">
          {t('about')}
        </Link>
      </Box>
      <Box
        component="footer"
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 2,
        }}
      >
        Footer
      </Box>
    </Box>
  );
}
