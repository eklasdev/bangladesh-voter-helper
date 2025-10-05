import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Typography,
  Paper,
  Box,
  Link,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  Card,
  CardContent,
  Grid,
  Stack,
  Chip,
  Button,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HelpIcon from '@mui/icons-material/Help';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { alpha } from '@mui/material/styles';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const contactDetails = [
    {
      icon: <PhoneIcon />,
      title: t('contact.ecHelpline'),
      content: '105',
      link: 'tel:105',
    },
    {
      icon: <EmailIcon />,
      title: t('contact.ecEmail'),
      content: 'info@ecs.gov.bd',
      link: 'mailto:info@ecs.gov.bd',
    },
    {
      icon: <LanguageIcon />,
      title: t('contact.ecWebsite'),
      content: 'www.ecs.gov.bd',
      link: 'https://www.ecs.gov.bd/',
    },
    {
      icon: <LocationOnIcon />,
      title: t('contact.ecAddress'),
      content: 'Election Commission Secretariat, Dhaka, Bangladesh',
      link: 'https://maps.google.com/?q=Election+Commission+Bangladesh',
    },
  ];

  const officeHours = t('contact.officeHours', { returnObjects: true }) as { day: string; hours: string }[];
  const faqItems = t('contact.faq', { returnObjects: true }) as { question: string; answer: string }[];

  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Paper
        elevation={0}
        sx={{
          mb: { xs: 4, md: 6 },
          p: { xs: 4, md: 6 },
          background:
            theme.palette.mode === 'light'
              ? 'linear-gradient(140deg, rgba(52,168,83,0.16) 0%, rgba(26,115,232,0.08) 100%)'
              : 'linear-gradient(140deg, rgba(129,199,132,0.25) 0%, rgba(138,180,248,0.15) 100%)',
        }}
      >
        <Stack spacing={2} alignItems={{ xs: 'flex-start', md: 'center' }} textAlign={{ xs: 'left', md: 'center' }}>
          <Chip label={t('contact.title')} color="secondary" variant="outlined" sx={{ fontWeight: 600 }} />
          <Typography variant="h3" component="h1" sx={{ maxWidth: 640 }}>
            {t('contact.headline')}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 720 }}>
            {t('contact.description')}
          </Typography>
        </Stack>
      </Paper>

      <Grid container spacing={{ xs: 4, md: 6 }}>
        <Grid item xs={12} md={6}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 4, md: 5 },
              height: '100%',
              backgroundColor: theme.palette.background.paper,
              border: `1px solid ${alpha(theme.palette.primary.main, theme.palette.mode === 'light' ? 0.08 : 0.2)}`,
            }}
          >
            <Stack spacing={2.5}>
              <Typography variant="h5" component="h2">
                {t('contact.detailsTitle')}
              </Typography>
              <List disablePadding>
                {contactDetails.map((item, index) => (
                  <ListItem
                    key={index}
                    sx={{
                      px: 0,
                      borderRadius: 2,
                      mb: 1,
                      '&:hover': {
                        backgroundColor: alpha(theme.palette.primary.main, 0.08),
                      },
                    }}
                  >
                    <ListItemIcon sx={{ color: theme.palette.primary.main, minWidth: 48 }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primaryTypographyProps={{ fontWeight: 600 }}
                      primary={item.title}
                      secondary={
                        <Link
                          href={item.link}
                          target={item.link.startsWith('http') ? '_blank' : undefined}
                          rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          color="inherit"
                          underline="hover"
                        >
                          {item.content}
                        </Link>
                      }
                    />
                  </ListItem>
                ))}
              </List>

              <Divider sx={{ my: 2 }} />

              <Stack spacing={1}>
                <Typography variant="h6" component="h3" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <AccessTimeIcon /> {t('contact.officeHoursTitle')}
                </Typography>
                <List dense disablePadding>
                  {officeHours.map((item, index) => (
                    <ListItem key={index} sx={{ px: 0 }}>
                      <ListItemText primary={item.day} secondary={item.hours} />
                    </ListItem>
                  ))}
                </List>
              </Stack>
            </Stack>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 4, md: 5 },
              height: '100%',
              backgroundColor: theme.palette.background.paper,
              border: `1px solid ${alpha(theme.palette.primary.main, theme.palette.mode === 'light' ? 0.08 : 0.2)}`,
            }}
          >
            <Stack spacing={2.5}>
              <Typography variant="h5" component="h2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <HelpIcon /> {t('contact.faqTitle')}
              </Typography>

              {faqItems.map((item, index) => (
                <Card key={index} elevation={0} sx={{ backgroundColor: alpha(theme.palette.primary.main, 0.05) }}>
                  <CardContent>
                    <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                      {item.question}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.answer}
                    </Typography>
                  </CardContent>
                </Card>
              ))}

              <Divider />

              <Stack spacing={1.5}>
                <Typography variant="body2" color="text.secondary">
                  {t('contact.faqPrompt')}{' '}
                  <Link href="https://www.ecs.gov.bd/faq" target="_blank" rel="noopener noreferrer">
                    {t('contact.faqLinkText')}
                  </Link>
                  .
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  href="https://services.nidw.gov.bd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  endIcon={<ArrowOutwardIcon />}
                >
                  {t('contact.secondaryCta')}
                </Button>
              </Stack>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
