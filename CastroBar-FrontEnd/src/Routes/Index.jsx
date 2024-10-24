import React from 'react';
import { Container, Typography, Button, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// Ejemplo de platos para el menú
const menuItems = [
  {
    name: 'Ensalada César',
    description: 'Ensalada de lechuga fresca con pollo, queso parmesano y aderezo césar.',
    image: 'https://via.placeholder.com/300',
  },
  {
    name: 'Pizza Margarita',
    description: 'Pizza con salsa de tomate, mozzarella y albahaca fresca.',
    image: 'https://via.placeholder.com/300',
  },
  {
    name: 'Pasta Alfredo',
    description: 'Pasta en salsa cremosa de queso parmesano y pollo.',
    image: 'https://via.placeholder.com/300',
  },
];

const IndexPage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login'); // Ruta al login
  };

  return (
    <Container sx={{ backgroundColor: '#F5EFE6', minHeight: '100vh', paddingTop: '20px' }}>
      <Typography variant="h3" align="center" gutterBottom sx={{ color: '#A8A4CE' }}>
        Bienvenido a Nuestro Restaurante
      </Typography>
      <Typography variant="h6" align="center" sx={{ color: '#A8A4CE', marginBottom: '20px' }}>
        Disfruta de una experiencia culinaria única
      </Typography>
      
      <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
        {menuItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ backgroundColor: '#FFDFD3', borderRadius: '16px' }}>
              <CardMedia
                component="img"
                height="140"
                image={item.image}
                alt={item.name}
              />
              <CardContent>
                <Typography variant="h6" sx={{ color: '#A8A4CE' }}>
                  {item.name}
                </Typography>
                <Typography variant="body2" sx={{ color: '#726A95' }}>
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Container sx={{ textAlign: 'center', marginTop: '40px' }}>
        <Button 
          variant="contained" 
          sx={{ backgroundColor: '#B8E8FC', color: '#726A95', ':hover': { backgroundColor: '#A8A4CE' } }}
          onClick={handleLoginClick}
        >
          Ir al Login
        </Button>
      </Container>
    </Container>
  );
};

export default IndexPage;
