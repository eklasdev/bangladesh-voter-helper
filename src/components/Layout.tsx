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
  ListItemButton,
  ListItemText,
  Container,
  useMediaQuery,
  useTheme,
  Divider,
  Stack,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LanguageIcon from '@mui/icons-material/Language';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { Link, useLocation } from 'react-router-dom';
import Footer from './Footer';
import { alpha } from '@mui/material/styles';

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
    { key: 'home', text: t('nav.home'), path: '/' },
    { key: 'services', text: t('nav.services'), path: '/services' },
    { key: 'links', text: t('nav.links'), path: '/links' },
    { key: 'contact', text: t('nav.contact'), path: '/contact' },
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
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  const drawer = (
    <Box
      sx={{ width: 280, py: 2 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Typography variant="subtitle1" sx={{ px: 3, pb: 1, fontWeight: 600 }}>
        {t('app.title')}
      </Typography>
      <List>
        {navItems.map(item => (
          <ListItemButton
            key={item.key}
            component={Link}
            to={item.path}
            selected={isActivePath(item.path)}
            sx={{
              borderRadius: 3,
              mx: 2,
              mb: 1,
              '&.Mui-selected': {
                backgroundColor: alpha(theme.palette.primary.main, 0.12),
                color: theme.palette.primary.main,
              },
              '&:hover': {
                backgroundColor: alpha(theme.palette.primary.main, 0.1),
              },
            }}
          >
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
      <Divider sx={{ my: 2 }} />
      <Box sx={{ px: 3 }}>
        <Button
          fullWidth
          variant="outlined"
          onClick={toggleTheme}
          startIcon={isDarkMode ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
          sx={{ mb: 1.5 }}
        >
          {isDarkMode ? 'Light mode' : 'Dark mode'}
        </Button>
        <Button fullWidth variant="contained" onClick={toggleLanguage} startIcon={<LanguageIcon />}>
          {t('app.langSwitch')}
        </Button>
      </Box>
    </Box>
  );

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.background.default,
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'radial-gradient(circle at 10% 20%, rgba(26, 115, 232, 0.12) 0%, transparent 55%), radial-gradient(circle at 80% 0%, rgba(52, 168, 83, 0.12) 0%, transparent 45%)'
            : 'radial-gradient(circle at 20% 20%, rgba(138, 180, 248, 0.12) 0%, transparent 55%)',
      }}
    >
      <AppBar
        position="sticky"
        sx={{
          top: 0,
          borderBottom: `1px solid ${alpha(theme.palette.common.black, theme.palette.mode === 'light' ? 0.05 : 0.2)}`,
          backgroundColor: alpha(theme.palette.background.paper, theme.palette.mode === 'light' ? 0.9 : 0.75),
        }}
      >
        <Toolbar sx={{ minHeight: { xs: 64, md: 72 } }}>
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
              color: theme.palette.text.primary,
              fontWeight: 700,
              letterSpacing: '-0.3px',
            }}
          >
            {t('app.title')}
          </Typography>

          {!isMobile && (
            <Stack direction="row" spacing={1} alignItems="center" sx={{ mr: 2 }}>
              {navItems.map(item => (
                <Button
                  key={item.key}
                  component={Link}
                  to={item.path}
                  variant={isActivePath(item.path) ? 'contained' : 'text'}
                  color={isActivePath(item.path) ? 'primary' : 'inherit'}
                  sx={{
                    color: isActivePath(item.path)
                      ? theme.palette.primary.contrastText
                      : theme.palette.text.primary,
                    fontWeight: 600,
                    px: 2.5,
                    py: 1,
                  }}
                >
                  {item.text}
                </Button>
              ))}
            </Stack>
          )}

          {!isMobile && (
            <Stack direction="row" spacing={1} alignItems="center">
              <IconButton
                color="inherit"
                onClick={toggleTheme}
                sx={{
                  borderRadius: '50%',
                  backgroundColor: alpha(theme.palette.primary.main, 0.08),
                }}
              >
                {isDarkMode ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
              </IconButton>
              <Button
                variant="outlined"
                onClick={toggleLanguage}
                startIcon={<LanguageIcon />}
                sx={{ fontWeight: 600 }}
              >
                {t('app.langSwitch')}
              </Button>
            </Stack>
          )}

          {isMobile && (
            <IconButton
              color="inherit"
              onClick={toggleTheme}
              sx={{
                ml: 1,
                borderRadius: '50%',
                backgroundColor: alpha(theme.palette.primary.main, 0.12),
              }}
            >
              {isDarkMode ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          elevation: 0,
          sx: {
            backgroundColor: theme.palette.background.paper,
          },
        }}
      >
        {drawer}
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, py: { xs: 5, md: 8 } }}>
        <Container maxWidth="lg">{children}</Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default Layout;
