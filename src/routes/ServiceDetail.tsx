import React, { useState } from 'react';
import { useParams, useNavigate, Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Typography,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Button,
  Box,
  useTheme,
  Breadcrumbs,
  Link as MuiLink,
  Grid,
  Stack,
  Avatar,
  Chip,
  Card,
  CardContent,
} from '@mui/material';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import EditIcon from '@mui/icons-material/Edit';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';
import { styled } from '@mui/material/styles';

type ServiceId = 'nidRegistration' | 'voterUpdate' | 'firstTimeVoter';

const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const { t } = useTranslation();
  const theme = useTheme();
  const navigate = useNavigate();

  const [activeStep, setActiveStep] = useState(0);

  // Type guard to check if serviceId is valid
  const isValidServiceId = (id: string | undefined): id is ServiceId => {
    return id === 'nidRegistration' || id === 'voterUpdate' || id === 'firstTimeVoter';
  };

  const StepIconRoot = styled('div')<{ ownerState: { active?: boolean; completed?: boolean } }>(
    ({ theme: muiTheme, ownerState }) => ({
      backgroundColor: ownerState.completed
        ? muiTheme.palette.primary.main
        : ownerState.active
        ? muiTheme.palette.primary.main
        : muiTheme.palette.mode === 'light'
        ? 'rgba(26, 115, 232, 0.12)'
        : 'rgba(138, 180, 248, 0.2)',
      color: ownerState.completed || ownerState.active ? muiTheme.palette.primary.contrastText : muiTheme.palette.primary.main,
      zIndex: 1,
      width: 40,
      height: 40,
      display: 'flex',
      borderRadius: '50%',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: ownerState.active ? '0px 0px 0px 6px rgba(26, 115, 232, 0.12)' : 'none',
      transition: 'all 0.3s ease',
    }),
  );

  const StepIconComponent = (props: { active?: boolean; completed?: boolean; className?: string }) => {
    const { active, completed } = props;
    return (
      <StepIconRoot ownerState={{ completed, active }}>
        {completed ? <CheckCircleRoundedIcon fontSize="small" /> : <RadioButtonUncheckedRoundedIcon fontSize="small" />}
      </StepIconRoot>
    );
  };

  const connector = (
    <StepConnector
      sx={{
        [`&.${stepConnectorClasses.alternativeLabel}`]: {
          top: 20,
        },
        [`& .${stepConnectorClasses.line}`]: {
          minHeight: 32,
          borderColor: theme.palette.mode === 'light' ? 'rgba(26,115,232,0.18)' : 'rgba(138,180,248,0.35)',
          borderLeftWidth: 2,
        },
      }}
    />
  );

  if (!isValidServiceId(serviceId)) {
    return (
      <Box sx={{ py: { xs: 6, md: 8 } }}>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 4, md: 6 },
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            alignItems: { xs: 'flex-start', md: 'center' },
            textAlign: { xs: 'left', md: 'center' },
          }}
        >
          <Typography variant="h4">{t('common.invalidServiceTitle')}</Typography>
          <Typography variant="body1" color="text.secondary">
            {t('common.invalidServiceMessage')}
          </Typography>
          <Button
            startIcon={<ArrowBackIcon />}
            variant="contained"
            onClick={() => navigate('/')}
            sx={{ alignSelf: { xs: 'stretch', md: 'center' } }}
          >
            {t('common.backToHome')}
          </Button>
        </Paper>
      </Box>
    );
  }

  const serviceIcons = {
    nidRegistration: (
      <CardMembershipIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />
    ),
    voterUpdate: <EditIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
    firstTimeVoter: <HowToVoteIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
  };

  const steps = t(`services.${serviceId}.steps`, { returnObjects: true }) as string[];

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 4 }}>
        <MuiLink component={RouterLink} to="/" color="inherit">
          {t('nav.home')}
        </MuiLink>
        <MuiLink component={RouterLink} to="/services" color="inherit">
          {t('nav.services')}
        </MuiLink>
        <Typography color="text.primary">{t(`services.${serviceId}.title`)}</Typography>
      </Breadcrumbs>

      <Paper
        elevation={0}
        sx={{
          mb: { xs: 5, md: 6 },
          p: { xs: 4, md: 6 },
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'flex-start', md: 'center' },
          gap: { xs: 3, md: 4 },
          background:
            theme.palette.mode === 'light'
              ? 'linear-gradient(120deg, rgba(26,115,232,0.12) 0%, rgba(26,115,232,0.06) 100%)'
              : 'linear-gradient(120deg, rgba(138,180,248,0.22) 0%, rgba(138,180,248,0.1) 100%)',
        }}
      >
        <Avatar
          variant="rounded"
          sx={{
            width: 72,
            height: 72,
            bgcolor: theme.palette.background.paper,
            color: theme.palette.primary.main,
            boxShadow: theme.palette.mode === 'light' ? '0px 12px 30px rgba(26,115,232,0.2)' : '0px 12px 30px rgba(0,0,0,0.45)',
          }}
        >
          {serviceIcons[serviceId]}
        </Avatar>
        <Stack spacing={1.5}>
          <Stack direction="row" spacing={1}>
            <Chip label={t('services.stepsTitle')} color="primary" variant="outlined" sx={{ fontWeight: 600 }} />
          </Stack>
          <Typography variant="h3" component="h1">
            {t(`services.${serviceId}.title`)}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 720 }}>
            {t(`services.${serviceId}.description`)}
          </Typography>
        </Stack>
      </Paper>

      <Grid container spacing={{ xs: 4, md: 6 }}>
        <Grid item xs={12} md={8}>
          <Paper elevation={0} sx={{ p: { xs: 4, md: 5 } }}>
            <Stack spacing={3}>
              <Typography variant="h5" component="h2">
                {t('services.stepsTitle')}
              </Typography>
              <Stepper activeStep={activeStep} orientation="vertical" connector={connector}>
                {steps.map((step, index) => (
                  <Step key={index}>
                    <StepLabel StepIconComponent={StepIconComponent}>
                      <Typography variant="subtitle1" fontWeight={600}>
                        {t('common.step')} {index + 1}
                      </Typography>
                    </StepLabel>
                    <Box sx={{ pl: 6, pb: 2 }}>
                      <Typography color="text.secondary">{step}</Typography>
                      <Stack direction="row" spacing={1.5} sx={{ mt: 2 }}>
                        <Button variant="contained" onClick={handleNext}>
                          {index === steps.length - 1 ? t('common.finish') : t('common.next')}
                        </Button>
                        <Button disabled={index === 0} onClick={handleBack} variant="text">
                          {t('common.previous')}
                        </Button>
                      </Stack>
                    </Box>
                  </Step>
                ))}
              </Stepper>

              {activeStep === steps.length && (
                <Card elevation={0} sx={{ backgroundColor: theme.palette.background.paper, borderRadius: 4 }}>
                  <CardContent>
                    <Stack spacing={2}>
                      <Typography variant="subtitle1" fontWeight={600}>
                        {t('common.allStepsCompleted')}
                      </Typography>
                      <Button onClick={handleReset} variant="outlined" sx={{ alignSelf: 'flex-start' }}>
                        {t('common.startOver')}
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>
              )}
            </Stack>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={0} sx={{ p: { xs: 4, md: 5 }, display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Typography variant="h6" component="h3">
              {t('services.supportTitle')}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {t('services.supportDescription')}
            </Typography>
            <Button component={RouterLink} to="/contact" variant="outlined" endIcon={<ArrowBackIcon sx={{ transform: 'rotate(180deg)' }} />}>
              {t('app.ctaSecondary')}
            </Button>
            <Button component={RouterLink} to="/links" variant="text">
              {t('common.exploreServices')}
            </Button>
          </Paper>
        </Grid>
      </Grid>

      <Box sx={{ mt: { xs: 4, md: 6 } }}>
        <Button component={RouterLink} to="/services" startIcon={<ArrowBackIcon />}> 
          {t('common.backToServices')}
        </Button>
      </Box>
    </Box>
  );
};

export default ServiceDetail;
