import React from 'react';
import { Grid, Box, Typography} from '@material-ui/core';
import useStyles from './styles'

import Product from './Product/Product'

const Products = ({products, onAddToCart}) => {
    const classes = useStyles();
    return (
        <main>
            <Typography variant="h2" className={classes.mainTitle}>Our Products</Typography>
            <Box p={2} className={classes.gridContainer}>
                <Grid container justifyContent="center" spacing={4} alignItems="center">
                    {products.map((product) => (
                        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                            <Product product={product} onAddToCart={onAddToCart}/>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </main>
    )
}

export default Products;