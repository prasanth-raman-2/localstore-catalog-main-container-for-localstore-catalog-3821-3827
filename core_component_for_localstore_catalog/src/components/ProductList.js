import React from 'react';
import { Grid, Typography, Container, Box } from '@mui/material';
import ProductCard from './ProductCard';

/**
 * ProductList component that displays a grid of product cards
 * @param {Object} props - Component props
 * @param {Array} props.products - Array of product objects
 */
const ProductList = ({ products }) => {
  return (
    <Container>
      <Box sx={{ py: 4 }}>
        <Typography 
          variant="h4" 
          component="h1" 
          gutterBottom 
          sx={{ mb: 4, fontWeight: 600 }}
        >
          Our Products
        </Typography>
        
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default ProductList;
