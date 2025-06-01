import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Typography, Button, Box, Paper, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const NotFound: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: 2,
          textAlign: 'center',
          backgroundColor:
            theme.palette.mode === 'dark'
              ? 'rgba(255, 255, 255, 0.05)'
              : 'rgba(255, 255, 255, 0.9)',
        }}
      >
        <ErrorOutlineIcon
          sx={{
            fontSize: 100,
            color: theme.palette.error.main,
            mb: 2,
          }}
        />

        <Typography variant="h2" component="h1" gutterBottom>
          404
        </Typography>

        <Typography variant="h4" component="h2" gutterBottom>
          Page Not Found
        </Typography>

        <Typography variant="body1" sx={{ mb: 4 }}>
          The page you are looking for doesn&apos;t exist or has been moved.
        </Typography>

        <Button
          component={Link}
          to="/"
          variant="contained"
          color="primary"
          size="large"
          startIcon={<HomeIcon />}
        >
          {t('nav.home')}
        </Button>
      </Paper>

      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          If you believe this is an error, please contact the administrator.
        </Typography>
      </Box>
    </Container>
  );
};

export default NotFound;
