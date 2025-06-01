import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Box,
  Link as MuiLink,
  useTheme,
  Divider,
  Paper,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import LanguageIcon from '@mui/icons-material/Language';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import SearchIcon from '@mui/icons-material/Search';

interface ExternalLink {
  key: string;
  title: string;
  url: string;
  description: string;
  icon: React.ReactNode;
}

const Links: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const externalLinks: ExternalLink[] = [
    {
      key: 'ec',
      title: t('links.ec'),
      url: 'https://www.ecs.gov.bd/',
      description:
        'Official website of the Bangladesh Election Commission with all voting information.',
      icon: <LanguageIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
    },
    {
      key: 'nid',
      title: t('links.nid'),
      url: 'https://services.nidw.gov.bd/',
      description: 'National ID portal where you can apply for NID and check application status.',
      icon: <CardMembershipIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
    },
    {
      key: 'voter',
      title: t('links.voter'),
      url: 'https://services.nidw.gov.bd/voter-registration',
      description: 'Register as a voter or update your existing voter information here.',
      icon: <HowToRegIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
    },
    {
      key: 'status',
      title: t('links.status'),
      url: 'https://services.nidw.gov.bd/check-status',
      description: 'Check the status of your NID or voter registration application.',
      icon: <SearchIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
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
        <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
          {t('links.title')}
        </Typography>

        <Divider sx={{ mb: 4 }} />

        <Grid container spacing={3}>
          {externalLinks.map(link => (
            <Grid item xs={12} sm={6} md={6} key={link.key}>
              <Card
                elevation={3}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box sx={{ mr: 2 }}>{link.icon}</Box>
                    <Typography variant="h5" component="h2">
                      {link.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {link.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'flex-end', p: 2 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    component={MuiLink}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ textTransform: 'none' }}
                  >
                    {t('common.learnMore')}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>

      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          Note: All links open official government websites in a new tab. Always verify you&apos;re
          on an official government domain.
        </Typography>
      </Box>
    </Container>
  );
};

export default Links;
