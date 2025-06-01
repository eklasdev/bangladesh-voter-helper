import React from 'react';
import { Card, CardContent, CardActions, Typography, Button, Box, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  serviceKey: 'nidRegistration' | 'voterUpdate' | 'firstTimeVoter';
  icon?: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ serviceKey, icon }) => {
  const { t } = useTranslation();
  const theme = useTheme();

  // Services background colors
  const serviceColors = {
    nidRegistration: theme.palette.mode === 'dark' ? '#1a237e' : '#e8eaf6',
    voterUpdate: theme.palette.mode === 'dark' ? '#004d40' : '#e0f2f1',
    firstTimeVoter: theme.palette.mode === 'dark' ? '#b71c1c' : '#ffebee',
  };

  return (
    <Card
      elevation={3}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: 6,
        },
        bgcolor: serviceColors[serviceKey],
      }}
    >
      {icon && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 2,
            color: theme.palette.mode === 'dark' ? 'white' : 'primary.main',
          }}
        >
          {icon}
        </Box>
      )}

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          align="center"
          sx={{
            color: theme.palette.mode === 'dark' ? 'white' : 'text.primary',
            fontWeight: 'bold',
          }}
        >
          {t(`services.${serviceKey}.title`)}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          {t(`services.${serviceKey}.description`)}
        </Typography>
      </CardContent>

      <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
        <Button
          component={Link}
          to={`/services/${serviceKey}`}
          variant="contained"
          color="primary"
          size="medium"
        >
          {t('common.learnMore')}
        </Button>
      </CardActions>
    </Card>
  );
};

export default ServiceCard;
