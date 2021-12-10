import React from 'react';
import useStyles from './styles';

const Intro = () => {
    const classes = useStyles();
    
    return (
        <div className={classes.outerWrapper}>
            <div className={classes.titleWrapper}>
                <h1 className={classes.headTitle}>PupExpress</h1>
            </div>
            <div className={classes.outerImageContainer}>
                <div className={classes.altImageContainer}>
                    <img className={classes.altImage} src="./images/dogImageThree.jpg" alt="Dog"/>
                </div>
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
        </div>        
    )
}

export default Intro
