import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';

import useStyles from './styles';

const CartItem = ({item, handleUpdateCartQty, handleRemoveFromCart}) => {

    const classes = useStyles();

    return (
       <Card>
           <CardMedia />
           <CardContent className={classes.cardContent}>
               <Typography variant="h6">{item.name}</Typography>
               <Typography variant="h6">{item.line_total.formatted_with_symbol}</Typography>
           </CardContent>
           <CardActions className={classes.buttonContainer}>
               <Button type="button" onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
               <Typography>{item.quantity}</Typography>
               <Button type="button" onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
           </CardActions>
           <Button type="button" variant="contained" onClick={() => handleRemoveFromCart(item.id)} className={classes.removeButton}>Remove</Button>
       </Card>
    )
}

export default CartItem
