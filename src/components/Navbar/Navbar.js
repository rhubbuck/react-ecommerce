import React from 'react';
import {AppBar, Toolbar, Typography, IconButton, Badge, Drawer, List, ListItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { ShoppingCart } from '@material-ui/icons';
import {Link, useLocation} from 'react-router-dom';
import { useState } from 'react';
import TitleNav from '../TitleNav/TitleNav';

import useStyles from './styles';

const Navbar = ({totalItems}) => {
    const classes = useStyles();
    const location = useLocation();
    const [state, setState] = useState(false);

    const toggleDrawer = (open) => (event) => {
        setState(open)
    };

    const list = () => (
        <div>
            <List className={classes.sidebarList}>
                <ListItem component={Link} to="/beds" button className={classes.listItem} onClick={toggleDrawer(false)}>BEDS</ListItem>
                <ListItem component={Link} to="/toys" button className={classes.listItem} onClick={toggleDrawer(false)}>TOYS</ListItem>
                <ListItem component={Link} to="/bowls" button className={classes.listItem} onClick={toggleDrawer(false)}>BOWLS</ListItem>
            </List>
        </div>
    )

    
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appbarWrapper}>
                <Toolbar className={classes.barWrap} >
                    <div className={classes.barDivider}>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="open drawer"  
                            onClick={toggleDrawer(true)}  
                            >
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            anchor={"left"}
                            open={state}
                            onClose={toggleDrawer(false)}
                            className={classes.drawer}
                        >
                            {list()}
                        </Drawer>
                        {location.pathname === '/' || location.pathname === '/toys' || location.pathname === '/beds' || location.pathname === '/bowls' ? (
                        <TitleNav />
                       ) : null}
                    </div>
                    <div className={classes.titleWrapper}>
                        <Typography className={classes.title} variant="h4" noWrap component={Link} to="/">
                            PupExpress
                        </Typography>
                    </div>
                    <div className={classes.buttons}>
                      { location.pathname === '/' || location.pathname === '/toys' || location.pathname === '/beds' || location.pathname === '/bowls' ? (
                        <IconButton className={classes.shoppingCart} color="inherit" component={Link} to="/cart" aria-label="Show cart items">
                            <Badge badgeContent={totalItems} color="secondary" >
                                <ShoppingCart />
                            </Badge>
                        </IconButton> )
                      : null }
                    </div>
                </Toolbar>
            </AppBar>
        </div> 
    )
}

export default Navbar
