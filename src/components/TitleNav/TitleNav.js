import React from 'react';
import {Toolbar, Button} from '@material-ui/core';
import useStyles from './styles';
import { Link } from 'react-router-dom';



const TitleNav = () => {
    const classes = useStyles();

    return (
        <>
            <Toolbar className={classes.titleNavContainer}>
                <div className={classes.titleNavWrapper}>
                    <Button className={classes.text} component={Link} to='/beds'>Beds</Button>
                    <Button className={classes.text} component={Link} to='/toys'>Toys</Button>
                    <Button className={classes.text} component={Link} to='/bowls'>Bowls</Button>
                </div>
            </Toolbar>   
        </>
    )
}

export default TitleNav
