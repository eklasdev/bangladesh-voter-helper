import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Box,
  Link as MuiLink,
  useTheme,
  Paper,
  Grid,
  Stack,
  Chip,
} from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import SearchIcon from '@mui/icons-material/Search';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { alpha } from '@mui/material/styles';

const Links: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const externalLinks = [
    {
      key: 'ec',
      url: 'https://www.ecs.gov.bd/',
      icon: <LanguageIcon sx={{ fontSize: 28 }} />,
    },
    {
      key: 'nid',
      url: 'https://services.nidw.gov.bd/',
      icon: <CardMembershipIcon sx={{ fontSize: 28 }} />,
    },
    {
      key: 'voter',
      url: 'https://services.nidw.gov.bd/voter-registration',
      icon: <HowToRegIcon sx={{ fontSize: 28 }} />,
    },
    {
      key: 'status',
      url: 'https://services.nidw.gov.bd/check-status',
      icon: <SearchIcon sx={{ fontSize: 28 }} />,
    },
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Paper
        elevation={0}
        sx={{
          mb: { xs: 4, md: 6 },
          p: { xs: 4, md: 6 },
          background:
            theme.palette.mode === 'light'
              ? 'linear-gradient(135deg, rgba(26,115,232,0.12) 0%, rgba(26,115,232,0.05) 100%)'
              : 'linear-gradient(135deg, rgba(138,180,248,0.2) 0%, rgba(138,180,248,0.1) 100%)',
        }}
      >
        <Stack spacing={2} alignItems={{ xs: 'flex-start', md: 'center' }} textAlign={{ xs: 'left', md: 'center' }}>
          <Chip label={t('links.title')} color="primary" variant="outlined" sx={{ fontWeight: 600 }} />
          <Typography variant="h3" component="h1" sx={{ maxWidth: 640 }}>
            {t('links.heading')}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700 }}>
            {t('links.description')}
          </Typography>
        </Stack>
      </Paper>

      <Grid container spacing={{ xs: 3, md: 4 }}>
        {externalLinks.map(link => {
          const content = t(`links.items.${link.key}`, { returnObjects: true }) as {
            title: string;
            description: string;
          };

          return (
            <Grid item xs={12} md={6} key={link.key}>
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 28,
                  backgroundColor: theme.palette.background.paper,
                  border: `1px solid ${alpha(theme.palette.primary.main, theme.palette.mode === 'light' ? 0.08 : 0.2)}`,
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow:
                      theme.palette.mode === 'light'
                        ? '0px 24px 48px rgba(26, 115, 232, 0.12)'
                        : '0px 28px 50px rgba(0, 0, 0, 0.7)',
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: 3,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: alpha(theme.palette.primary.main, 0.12),
                        color: theme.palette.primary.main,
                      }}
                    >
                      {link.icon}
                    </Box>
                    <Typography variant="h5" component="h2">
                      {content.title}
                    </Typography>
                  </Stack>
                  <Typography variant="body2" color="text.secondary">
                    {content.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'space-between', px: 3, pb: 3 }}>
                  <Typography variant="caption" color="text.secondary">
                    {t('links.officialLabel')}
                  </Typography>
                  <Button
                    variant="contained"
                    component={MuiLink}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    endIcon={<OpenInNewIcon />}
                  >
                    {t('common.openLink')}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      <Box sx={{ mt: { xs: 4, md: 6 }, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          {t('links.disclaimer')}
        </Typography>
      </Box>
    </Box>
  );
};

export default Links;
