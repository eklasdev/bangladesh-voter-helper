import { useState, useEffect, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import type { PaletteMode } from '@mui/material';
import { green } from '@mui/material/colors';
import Layout from './components/Layout';
import Home from './routes/Home';
import ServiceDetail from './routes/ServiceDetail';
import Links from './routes/Links';
import Contact from './routes/Contact';
import NotFound from './routes/NotFound';
import './App.css';

// Import i18n instance
import './i18n';

function App() {
  // State for dark/light mode
  const [mode, setMode] = useState<PaletteMode>('light');

  // Effect to load saved theme preference from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem('themeMode');
    if (savedMode && (savedMode === 'light' || savedMode === 'dark')) {
      setMode(savedMode);
    }
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('themeMode', newMode);
  };

  // Create theme with current mode
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#1a73e8',
            contrastText: '#ffffff',
          },
          secondary: {
            main: '#34a853',
          },
          background: {
            default: mode === 'light' ? '#f1f3f4' : '#121212',
            paper: mode === 'light' ? '#ffffff' : '#1f1f1f',
          },
          text: {
            primary: mode === 'light' ? '#202124' : '#e8eaed',
            secondary: mode === 'light' ? '#5f6368' : '#bdc1c6',
          },
          success: {
            main: mode === 'light' ? green[500] : green[300],
          },
        },
        typography: {
          fontFamily: ['"Google Sans"', '"Roboto"', '"Noto Sans Bengali"', 'sans-serif'].join(','),
          h1: {
            fontSize: '3rem',
            fontWeight: 600,
            letterSpacing: '-0.5px',
          },
          h2: {
            fontSize: '2.5rem',
            fontWeight: 600,
            letterSpacing: '-0.3px',
          },
          h3: {
            fontSize: '2rem',
            fontWeight: 600,
            letterSpacing: '-0.2px',
          },
          subtitle1: {
            fontWeight: 500,
          },
          button: {
            textTransform: 'none',
            fontWeight: 600,
            letterSpacing: 0.2,
          },
        },
        shape: {
          borderRadius: 18,
        },
        components: {
          MuiCssBaseline: {
            styleOverrides: {
              body: {
                backgroundColor: mode === 'light' ? '#f1f3f4' : '#121212',
              },
            },
          },
          MuiAppBar: {
            defaultProps: {
              color: 'transparent',
              elevation: 0,
            },
            styleOverrides: {
              root: {
                backdropFilter: 'blur(24px)',
                backgroundImage: 'none',
              },
            },
          },
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: 999,
                paddingLeft: 20,
                paddingRight: 20,
              },
            },
          },
          MuiPaper: {
            styleOverrides: {
              root: {
                borderRadius: 28,
                backgroundImage: 'none',
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: 28,
                backgroundImage: 'none',
                boxShadow:
                  mode === 'light'
                    ? '0px 18px 45px rgba(26, 115, 232, 0.08)'
                    : '0px 24px 40px rgba(0, 0, 0, 0.6)',
              },
            },
          },
        },
      }),
    [mode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout toggleTheme={toggleTheme} isDarkMode={mode === 'dark'}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Home />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
            <Route path="/links" element={<Links />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
