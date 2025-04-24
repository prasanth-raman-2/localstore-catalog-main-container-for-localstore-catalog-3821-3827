import React from 'react';
import { 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Box,

  Button
} from '@mui/material';
import { useCart } from '../contexts/CartContext';

/**
 * ProductCard component for displaying individual product information
 * @param {Object} props - Component props
 * @param {Object} props.product - Product data object
 */
const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <Card 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
        }
      }}
    >
        <CardMedia
          component="img"
          height="200"
          image={product.image}
          alt={product.name}
          sx={{ objectFit: 'cover' }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h6" component="h2" sx={{ fontWeight: 600 }}>
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2, height: '60px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {product.description}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 'auto' }}>
            <Typography variant="h6" color="primary" sx={{ fontWeight: 600 }}>
              ${product.price.toFixed(2)}
            </Typography>
            <Button 
              variant="contained" 
              color="primary"
              onClick={handleAddToCart}
              sx={{ ml: 'auto' }}
            >
              Add to Cart
            </Button>
          </Box>
        </CardContent>
    </Card>
  );
};

export default ProductCard;
