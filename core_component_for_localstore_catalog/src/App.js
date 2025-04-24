import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Typography,
  Button,
  Container,
  Box,
  AppBar,
  Toolbar
} from '@mui/material';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import products from './utils/ProductData';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#E87A41', // Kavia orange
    },
    secondary: {
      main: '#19857b',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    }
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 600,
      lineHeight: 1.2,
    },
    subtitle1: {
      fontSize: '1.1rem',
      lineHeight: 1.5,
      color: '#666666',
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          padding: '10px 20px',
          fontSize: '1rem',
          textTransform: 'none',
          fontWeight: 500,
        },
        containedPrimary: {
          backgroundColor: '#E87A41',
          '&:hover': {
            backgroundColor: '#FF8B4D',
          },
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#333333', // Dark theme color
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }
      }
    }
  }
});

function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <ThemeProvider theme={theme}>
        <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Typography
              variant="h6"
              sx={{
                mr: 4,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                fontWeight: 700,
                color: '#E87A41'
              }}
            >
              <span style={{ color: '#E87A41' }}>🛒</span> LocalStore
            </Typography>
          </Box>
          <Button
            variant="contained"
            color="primary"
            sx={{ ml: 2 }}
            onClick={() => window.location.href = '/cart'}
          >
            Cart
          </Button>
        </Toolbar>
      </AppBar>

      <Box sx={{ pt: 8 }}>  
        <Container maxWidth="lg">
          <Box sx={{
            pt: 8,
            pb: 2,
            textAlign: 'center',
          }}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              LocalStore Product Catalog
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ maxWidth: '700px', mx: 'auto', mb: 4, color: 'text.primary' }}
            >
              Browse our selection of high-quality products at competitive prices
            </Typography>
          </Box>
          
          <Routes>
            <Route path="/" element={<ProductList products={products} />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Container>
      </Box>
        </ThemeProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;