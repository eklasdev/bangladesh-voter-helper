import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Container,
  Typography,
  Paper,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Box,
  useTheme,
  Alert,
  AlertTitle,
  Breadcrumbs,
  Link as MuiLink,
} from '@mui/material';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import EditIcon from '@mui/icons-material/Edit';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

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

  if (!isValidServiceId(serviceId)) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Alert severity="error" sx={{ mb: 3 }}>
          <AlertTitle>Invalid Service</AlertTitle>
          The requested service does not exist.
        </Alert>
        <Button startIcon={<ArrowBackIcon />} variant="contained" onClick={() => navigate('/')}>
          {t('common.previous')}
        </Button>
      </Container>
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
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 3 }}>
        <MuiLink component={Link} to="/" color="inherit">
          {t('nav.home')}
        </MuiLink>
        <MuiLink component={Link} to="/services" color="inherit">
          {t('nav.services')}
        </MuiLink>
        <Typography color="text.primary">{t(`services.${serviceId}.title`)}</Typography>
      </Breadcrumbs>

      <Paper
        elevation={2}
        sx={{
          p: 4,
          mb: 4,
          borderRadius: 2,
          backgroundColor:
            theme.palette.mode === 'dark'
              ? 'rgba(255, 255, 255, 0.05)'
              : 'rgba(255, 255, 255, 0.9)',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
          <Box sx={{ mr: 2 }}>{serviceIcons[serviceId]}</Box>
          <Typography variant="h4" component="h1">
            {t(`services.${serviceId}.title`)}
          </Typography>
        </Box>

        <Typography variant="subtitle1" sx={{ mb: 4 }}>
          {t(`services.${serviceId}.description`)}
        </Typography>

        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={index}>
              <StepLabel>
                <Typography variant="subtitle1" fontWeight="medium">
                  {t('common.next')} {index + 1}
                </Typography>
              </StepLabel>
              <StepContent>
                <Typography>{step}</Typography>
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button variant="contained" onClick={handleNext} sx={{ mt: 1, mr: 1 }}>
                      {index === steps.length - 1 ? t('common.finish') : t('common.next')}
                    </Button>
                    <Button disabled={index === 0} onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                      {t('common.previous')}
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>

        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>{t('common.allStepsCompleted')}</Typography>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              {t('common.reset')}
            </Button>
          </Paper>
        )}
      </Paper>

      <Button component={Link} to="/services" startIcon={<ArrowBackIcon />} sx={{ mt: 2 }}>
        {t('common.previous')}
      </Button>
    </Container>
  );
};

export default ServiceDetail;
