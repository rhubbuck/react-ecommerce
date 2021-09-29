import React from 'react';
import useStyles from './styles';
import { Typography, Grid, Box } from '@material-ui/core';
import Product from '../Products/Product/Product';

const Toys = ({bowlProducts, onAddToCart}) => {
    const classes = useStyles();

    return (
        <main>
        <Typography variant="h3" className={classes.title}>Bowls</Typography>
        <Box p={2} className={classes.gridContainer}>
            <Grid container justifyContent="center" spacing={4} alignItems="center">
                {bowlProducts.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart}/>
                    </Grid>
                ))}
            </Grid>
        </Box>
    </main>
    )
}

export default Toys