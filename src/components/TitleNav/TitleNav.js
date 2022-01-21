import React from 'react';
import {Toolbar, Typography} from '@material-ui/core';
import useStyles from './styles';
import { Link } from 'react-router-dom';



const TitleNav = () => {
    const classes = useStyles();

    return (
        <>
            <Toolbar className={classes.titleNavContainer}>
                <div className={classes.titleNavWrapper}>
                    <Typography className={classes.button} component={Link} to='/beds'>BEDS</Typography>
                    <Typography className={classes.button} component={Link} to='/toys'>TOYS</Typography>
                    <Typography className={classes.button} component={Link} to='/bowls'>BOWLS</Typography>
                </div>
            </Toolbar>   
        </>
    )
}

export default TitleNav
