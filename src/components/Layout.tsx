import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
  useMediaQuery,
  useTheme,
  Switch,
  FormControlLabel,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
import LinkIcon from '@mui/icons-material/Link';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import { Link, useLocation } from 'react-router-dom';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, toggleTheme, isDarkMode }) => {
  const { t, i18n } = useTranslation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'bn' : 'en';
    i18n.changeLanguage(newLang);
  };

  const navItems = [
    { key: 'home', text: t('nav.home'), path: '/', icon: <HomeIcon /> },
    { key: 'services', text: t('nav.services'), path: '/services', icon: <ListIcon /> },
    { key: 'links', text: t('nav.links'), path: '/links', icon: <LinkIcon /> },
    { key: 'contact', text: t('nav.contact'), path: '/contact', icon: <ContactSupportIcon /> },
  ];

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  const drawer = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navItems.map(item => (
          <ListItem
            key={item.key}
            component={Link}
            to={item.path}
            sx={{
              color: 'text.primary',
              bgcolor: isActivePath(item.path) ? 'action.selected' : 'transparent',
              '&:hover': {
                bgcolor: 'action.hover',
              },
            }}
          >
            <Box sx={{ mr: 2 }}>{item.icon}</Box>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      <Box sx={{ mx: 2, mt: 2 }}>
        <FormControlLabel
          control={<Switch checked={isDarkMode} onChange={toggleTheme} color="primary" />}
          label={isDarkMode ? 'Dark Mode' : 'Light Mode'}
        />
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="sticky">
        <Toolbar>
          {isMobile && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            {t('app.title')}
          </Typography>

          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {navItems.map(item => (
                <Button
                  key={item.key}
                  component={Link}
                  to={item.path}
                  sx={{
                    color: 'white',
                    bgcolor: isActivePath(item.path) ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.2)',
                    },
                    mx: 0.5,
                  }}
                  startIcon={item.icon}
                >
                  {item.text}
                </Button>
              ))}
              <FormControlLabel
                control={<Switch checked={isDarkMode} onChange={toggleTheme} color="default" />}
                label={isDarkMode ? 'Dark' : 'Light'}
                sx={{ color: 'white', ml: 2 }}
              />
            </Box>
          )}

          <Button color="inherit" onClick={toggleLanguage} sx={{ ml: 2 }}>
            {t('app.langSwitch')}
          </Button>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawer}
      </Drawer>

      <Container component="main" sx={{ flexGrow: 1, py: 3 }}>
        {children}
      </Container>

      <Footer />
    </Box>
  );
};

export default Layout;
