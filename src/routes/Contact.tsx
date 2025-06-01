import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Container,
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
} from '@mui/material';
import Grid from '@mui/material/Grid';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HelpIcon from '@mui/icons-material/Help';

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
      title: 'Head Office',
      content: 'Election Commission Secretariat, Dhaka, Bangladesh',
      link: 'https://maps.google.com/?q=Election+Commission+Bangladesh',
    },
  ];

  const officeHours = [
    { day: 'Sunday - Thursday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Friday - Saturday', hours: 'Closed (Weekend)' },
  ];

  const faqItems = [
    {
      question: 'When can I register to vote?',
      answer:
        'You can register to vote once you turn 18 years old. The Election Commission announces specific registration periods throughout the year.',
    },
    {
      question: 'How long does it take to get an NID card?',
      answer:
        'It typically takes 30-90 days from the date of application, depending on verification processes and current workload.',
    },
    {
      question: 'Can I update my address online?',
      answer:
        'Yes, you can update your address and other information through the online portal. However, verification may require an in-person visit.',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
        {t('contact.title')}
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper
            elevation={2}
            sx={{
              p: 3,
              height: '100%',
              borderRadius: 2,
              backgroundColor:
                theme.palette.mode === 'dark'
                  ? 'rgba(255, 255, 255, 0.05)'
                  : 'rgba(255, 255, 255, 0.9)',
            }}
          >
            <Typography variant="h5" gutterBottom>
              Contact Details
            </Typography>
            <Divider sx={{ mb: 2 }} />

            <List>
              {contactDetails.map((item, index) => (
                <ListItem
                  key={index}
                  sx={{
                    px: 0,
                    '&:hover': {
                      backgroundColor:
                        theme.palette.mode === 'dark'
                          ? 'rgba(255, 255, 255, 0.05)'
                          : 'rgba(0, 0, 0, 0.03)',
                      borderRadius: 1,
                    },
                  }}
                >
                  <ListItemIcon sx={{ color: theme.palette.primary.main }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
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

            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                <AccessTimeIcon sx={{ mr: 1 }} /> Office Hours
              </Typography>
              <List dense>
                {officeHours.map((item, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemText primary={item.day} secondary={item.hours} />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper
            elevation={2}
            sx={{
              p: 3,
              height: '100%',
              borderRadius: 2,
              backgroundColor:
                theme.palette.mode === 'dark'
                  ? 'rgba(255, 255, 255, 0.05)'
                  : 'rgba(255, 255, 255, 0.9)',
            }}
          >
            <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
              <HelpIcon sx={{ mr: 1 }} /> Frequently Asked Questions
            </Typography>
            <Divider sx={{ mb: 2 }} />

            {faqItems.map((item, index) => (
              <Card
                key={index}
                elevation={1}
                sx={{
                  mb: 2,
                  backgroundColor:
                    theme.palette.mode === 'dark'
                      ? 'rgba(255, 255, 255, 0.05)'
                      : 'rgba(0, 0, 0, 0.02)',
                }}
              >
                <CardContent>
                  <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                    {item.question}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.answer}
                  </Typography>
                </CardContent>
              </Card>
            ))}

            <Box sx={{ mt: 4, textAlign: 'center' }}>
              <Typography variant="body2" color="text.secondary">
                For more questions, please visit the official
                <Link
                  href="https://www.ecs.gov.bd/faq"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ mx: 0.5 }}
                >
                  FAQ page
                </Link>
                or call the helpline.
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
