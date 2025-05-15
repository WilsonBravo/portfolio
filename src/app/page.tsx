import { Box } from '@/common/components/components';

export default function Home() {
  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Box
        component="header"
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 2,
        }}
      >
        Header
      </Box>
      <Box
        sx={{
          backgroundColor: 'primary.main',
          flex: 1,
        }}
      >
        Hola Mundo!
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
