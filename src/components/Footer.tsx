import React from 'react';
import { Box, Container, Link, Typography, useTheme, Stack } from '@mui/material';
import { alpha } from '@mui/material/styles';

const Footer: React.FC = () => {
  const theme = useTheme();
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: 2,
        mt: 'auto',
        backgroundColor: alpha(theme.palette.background.paper, theme.palette.mode === 'light' ? 0.95 : 0.75),
        borderTop: `1px solid ${alpha(theme.palette.common.black, theme.palette.mode === 'light' ? 0.06 : 0.2)}`,
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={1.5} alignItems="center">
          <Typography variant="body2" color="text.secondary" align="center">
            © {year} Digital Voter Info Helper. {theme.palette.mode === 'light' ? 'Crafted with civic care.' : 'Empowering voters day and night.'}
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center">
            <Link href="https://ksmp.pages.dev" target="_blank" rel="noopener noreferrer" color="inherit">
              ksmp.pages.dev
            </Link>
            <Link href="https://eklas.tech" target="_blank" rel="noopener noreferrer" color="inherit">
              eklas.tech
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;

