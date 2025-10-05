import React from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  useTheme,
  Avatar,
  Stack,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { alpha } from '@mui/material/styles';

interface ServiceCardProps {
  serviceKey: 'nidRegistration' | 'voterUpdate' | 'firstTimeVoter';
  icon?: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ serviceKey, icon }) => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        p: 1.5,
        background:
          theme.palette.mode === 'light'
            ? `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.08)} 0%, ${alpha(
                theme.palette.primary.main,
                0.02,
              )} 100%)`
            : `linear-gradient(135deg, ${alpha(theme.palette.primary.light, 0.2)} 0%, ${alpha(
                theme.palette.primary.dark,
                0.3,
              )} 100%)`,
        borderRadius: 28,
        border: `1px solid ${alpha(theme.palette.primary.main, theme.palette.mode === 'light' ? 0.08 : 0.16)}`,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow:
            theme.palette.mode === 'light'
              ? '0px 24px 48px rgba(26, 115, 232, 0.12)'
              : '0px 28px 50px rgba(0, 0, 0, 0.7)',
        },
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: theme.palette.background.paper,
          borderRadius: 22,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        <CardContent
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            py: 4,
          }}
        >
          {icon && (
            <Avatar
              variant="rounded"
              sx={{
                width: 64,
                height: 64,
                bgcolor: alpha(theme.palette.primary.main, 0.12),
                color: theme.palette.primary.main,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
                {icon}
              </Box>
            </Avatar>
          )}
          <Stack spacing={1}>
            <Typography variant="h5" component="h3" sx={{ fontWeight: 600 }}>
              {t(`services.${serviceKey}.title`)}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {t(`services.${serviceKey}.description`)}
            </Typography>
          </Stack>
        </CardContent>

        <CardActions sx={{ px: 4, pb: 4 }}>
          <Button
            component={Link}
            to={`/services/${serviceKey}`}
            variant="contained"
            color="primary"
            endIcon={<ArrowForwardIcon />}
            fullWidth
          >
            {t('common.viewDetails')}
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
};

export default ServiceCard;
