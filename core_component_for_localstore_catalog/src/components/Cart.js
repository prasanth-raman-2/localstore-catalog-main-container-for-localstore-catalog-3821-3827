import React from 'react';
import { 
  Typography, 
  Container, 
  Box, 
  Button,
  Card,
  CardContent,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCart } from '../contexts/CartContext';

/**
 * Cart component for displaying shopping cart items
 */
const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ pt: 10, pb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
          <IconButton 
            onClick={handleBackClick}
            sx={{ mr: 2 }}
            aria-label="back to products"
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h4" component="h1" sx={{ fontWeight: 600 }}>
            Your Cart
          </Typography>
        </Box>

        <Card sx={{ mb: 4 }}>
          <CardContent>
            {cartItems.length === 0 ? (
              <Typography variant="body1" color="text.secondary" align="center">
                Your cart is empty
              </Typography>
            ) : (
              <List>
                {cartItems.map((item) => (
                  <ListItem key={item.id} divider>
                    <ListItemText
                      primary={item.name}
                      secondary={
                        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mt: 1 }}>
                          <Typography variant="body2">
                            ${item.price.toFixed(2)} × {item.quantity}
                          </Typography>
                          <Box>
                            <Button 
                              size="small" 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              -
                            </Button>
                            <Button 
                              size="small" 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              +
                            </Button>
                          </Box>
                        </Box>
                      }
                    />
                    <ListItemSecondaryAction>
                      <Typography variant="subtitle1" sx={{ mr: 2 }}>
                        ${(item.price * item.quantity).toFixed(2)}
                      </Typography>
                      <IconButton 
                        edge="end" 
                        aria-label="delete"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            )}
          </CardContent>
        </Card>

        {cartItems.length > 0 && (
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6">
              Total: ${getCartTotal().toFixed(2)}
            </Typography>
          </Box>
        )}

        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            disabled={cartItems.length === 0}
          >
            Checkout
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Cart;