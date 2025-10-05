import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography, Button, Paper, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const NotFound: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, display: 'flex', justifyContent: 'center' }}>
      <Paper
        elevation={0}
        sx={{
          maxWidth: 560,
          width: '100%',
          px: { xs: 4, md: 6 },
          py: { xs: 6, md: 8 },
          textAlign: 'center',
          background: 'linear-gradient(145deg, rgba(26,115,232,0.12) 0%, rgba(26,115,232,0.04) 100%)',
        }}
      >
        <Stack spacing={3} alignItems="center">
          <ErrorOutlineIcon sx={{ fontSize: 80, color: 'primary.main' }} />
          <Typography variant="h2" component="h1">
            404
          </Typography>
          <Typography variant="h4" component="h2">
            {t('notFound.title')}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 420 }}>
            {t('notFound.description')}
          </Typography>
          <Button
            component={RouterLink}
            to="/"
            variant="contained"
            color="primary"
            size="large"
            startIcon={<HomeIcon />}
          >
            {t('notFound.cta')}
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default NotFound;
