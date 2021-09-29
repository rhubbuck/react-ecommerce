import React from 'react';
import useStyles from './styles';
import { Toolbar, Button } from '@material-ui/core';
import {Link} from 'react-router-dom';

const Intro = () => {
    const classes = useStyles();
    
    return (
        <div className={classes.outerWrapper}>
            <div className={classes.outerImageContainer}>
                <div className={classes.imageContainer}>
                    <img className={classes.mainImage} src="./images/dogImageThree.jpg" alt="Dog"/>
                </div>
                <div className={classes.imageContainer}>
                    <img className={classes.mainImage} src="./images/dachshund.jpg" alt="Dog"/>
                </div>
                <div className={classes.imageContainer}>
                    <img className={classes.mainImage} src="./images/dogsImage.jpg" alt="Two dogs." />
                </div>
            </div>
            <Toolbar className={classes.titleNavContainer}>
                <div className={classes.titleNavWrapper}>
                    <Button className={classes.text} component={Link} to='/beds'>Beds</Button>
                    <Button className={classes.text} component={Link} to='/toys'>Toys</Button>
                    <Button className={classes.text} component={Link} to='/bowls'>Bowls</Button>
                </div>
            </Toolbar>   
        </div>
        
    )
}

export default Intro
