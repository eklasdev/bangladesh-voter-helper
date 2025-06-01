import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Typography, Box, Paper, useTheme } from '@mui/material';
import Grid from '@mui/material/Grid';
import ServiceCard from '../components/ServiceCard';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import EditIcon from '@mui/icons-material/Edit';
import HowToVoteIcon from '@mui/icons-material/HowToVote';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const serviceIcons = {
    nidRegistration: <CardMembershipIcon sx={{ fontSize: 60 }} />,
    voterUpdate: <EditIcon sx={{ fontSize: 60 }} />,
    firstTimeVoter: <HowToVoteIcon sx={{ fontSize: 60 }} />,
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            color: 'primary.main',
          }}
        >
          {t('app.title')}
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom color="text.secondary" sx={{ mb: 6 }}>
          {t('app.subtitle')}
        </Typography>
      </Box>

      <Paper
        elevation={0}
        sx={{
          p: 3,
          mb: 4,
          backgroundColor:
            theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
          borderRadius: 2,
        }}
      >
        <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ mb: 4 }}>
          {t('services.title')}
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <ServiceCard serviceKey="nidRegistration" icon={serviceIcons.nidRegistration} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ServiceCard serviceKey="voterUpdate" icon={serviceIcons.voterUpdate} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ServiceCard serviceKey="firstTimeVoter" icon={serviceIcons.firstTimeVoter} />
          </Grid>
        </Grid>
      </Paper>

      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="body1">{t('app.subtitle')}</Typography>
      </Box>
    </Container>
  );
};

export default Home;
