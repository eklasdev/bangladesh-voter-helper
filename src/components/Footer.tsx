import React from 'react';
import { Box, Container, Link, Typography, useTheme } from '@mui/material';

const Footer: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          Powered by{' '}
          <Link href="https://ksmp.pages.dev" target="_blank" rel="noopener noreferrer" color="inherit">
            ksmp.pages.dev
          </Link>
          {' • '}
          Supported by{' '}
          <Link href="https://eklas.tech" target="_blank" rel="noopener noreferrer" color="inherit">
            eklas.tech
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;

