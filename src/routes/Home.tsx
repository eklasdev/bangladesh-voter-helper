import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Typography,
  Box,
  Paper,
  useTheme,
  Grid,
  Stack,
  Chip,
  Button,
  Divider,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import EditIcon from '@mui/icons-material/Edit';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const featureChips = [
    t('app.featureChips.verified'),
    t('app.featureChips.stepByStep'),
    t('app.featureChips.bilingual'),
  ];

  const serviceIcons = {
    nidRegistration: <CardMembershipIcon sx={{ fontSize: 28 }} />,
    voterUpdate: <EditIcon sx={{ fontSize: 28 }} />,
    firstTimeVoter: <HowToVoteIcon sx={{ fontSize: 28 }} />,
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 6, md: 8 } }}>
      <Paper
        elevation={0}
        sx={{
          position: 'relative',
          overflow: 'hidden',
          px: { xs: 4, md: 8 },
          py: { xs: 6, md: 10 },
          background:
            theme.palette.mode === 'light'
              ? 'linear-gradient(135deg, #e8f0fe 0%, rgba(232, 240, 254, 0.6) 45%, rgba(232, 240, 254, 0.3) 100%)'
              : 'linear-gradient(135deg, rgba(26, 115, 232, 0.3) 0%, rgba(26, 115, 232, 0.15) 100%)',
          color: theme.palette.text.primary,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              theme.palette.mode === 'light'
                ? 'radial-gradient(circle at 0% 0%, rgba(26, 115, 232, 0.15) 0%, transparent 50%)'
                : 'radial-gradient(circle at 100% 0%, rgba(138, 180, 248, 0.25) 0%, transparent 55%)',
          }}
        />
        <Stack spacing={4} sx={{ position: 'relative' }}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} alignItems="center">
            {featureChips.map(chip => (
              <Chip key={chip} label={chip} color="primary" variant="outlined" sx={{ fontWeight: 600 }} />
            ))}
          </Stack>
          <Stack spacing={2}>
            <Typography variant="h2" component="h1" sx={{ maxWidth: 680 }}>
              {t('app.title')}
            </Typography>
            <Typography variant="h5" sx={{ maxWidth: 720, color: 'text.secondary' }}>
              {t('app.tagline')}
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 640, color: 'text.secondary' }}>
              {t('app.subtitle')}
            </Typography>
          </Stack>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button
              component={RouterLink}
              to="/services"
              size="large"
              variant="contained"
              endIcon={<ArrowOutwardIcon />}
            >
              {t('app.ctaPrimary')}
            </Button>
            <Button
              component={RouterLink}
              to="/contact"
              size="large"
              variant="outlined"
              startIcon={<SupportAgentIcon />}
            >
              {t('app.ctaSecondary')}
            </Button>
          </Stack>
        </Stack>
      </Paper>

      <Box>
        <Stack spacing={1} sx={{ mb: { xs: 4, md: 6 } }}>
          <Typography variant="h4" component="h2">
            {t('services.title')}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 620 }}>
            {t('services.helper')}
          </Typography>
        </Stack>
        <Grid container spacing={{ xs: 3, md: 4 }}>
          <Grid item xs={12} md={4}>
            <ServiceCard serviceKey="nidRegistration" icon={serviceIcons.nidRegistration} />
          </Grid>
          <Grid item xs={12} md={4}>
            <ServiceCard serviceKey="voterUpdate" icon={serviceIcons.voterUpdate} />
          </Grid>
          <Grid item xs={12} md={4}>
            <ServiceCard serviceKey="firstTimeVoter" icon={serviceIcons.firstTimeVoter} />
          </Grid>
        </Grid>
      </Box>

      <Paper
        elevation={0}
        sx={{
          p: { xs: 4, md: 5 },
          backgroundColor:
            theme.palette.mode === 'light'
              ? 'rgba(255, 255, 255, 0.8)'
              : 'rgba(32, 33, 36, 0.85)',
        }}
      >
        <Stack spacing={3} alignItems={{ xs: 'flex-start', md: 'center' }} textAlign={{ xs: 'left', md: 'center' }}>
          <Typography variant="h5">{t('app.supporting')}</Typography>
          <Divider flexItem sx={{ width: { xs: '100%', md: '60%' }, mx: 'auto', opacity: 0.3 }} />
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700 }}>
            {t('services.helperDetail')}
          </Typography>
        </Stack>
      </Paper>
    </Box>
  );
};

export default Home;
