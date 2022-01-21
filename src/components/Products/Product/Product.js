import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';


const Product = ({product, onAddToCart}) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.media.source} title={product.name}/>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom className={classes.name}>
                        {product.name}
                    </Typography>
                    <Typography variant="h6" className={classes.price}>
                        {product.price.formatted_with_symbol}
                    </Typography>
                </div>
                <div className={classes.bottomContent}>
                    <Typography className={classes.bottomText} dangerouslySetInnerHTML={{__html: product.description}} />
                    <CardActions className={classes.cardActions}>
                        <IconButton aria-label="Add to cart" onClick={() => onAddToCart(product.id, 1)}>
                            <AddShoppingCart />
                        </IconButton>
                    </CardActions>
                </div>
            </CardContent>
        </Card>
    )
}

export default Product
