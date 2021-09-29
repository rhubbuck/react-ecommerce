import React from 'react';
import {Toolbar, Typography, Grid, List, ListItem, Box} from '@material-ui/core';
import useStyles from './styles';

const Footer = () => {
    const classes = useStyles();
    const handleClick = () => {
        window[`scrollTo`]({top:0, behavior:`smooth`})
    }

    return (
        <>
            <Box >
                <Grid className={classes.footerLinkWrapper}>
                    <List>
                        <ListItem><Typography className={classes.footerText}>About Us</Typography></ListItem>
                        <ListItem><Typography className={classes.footerText}>Careers</Typography></ListItem>
                        <ListItem><Typography className={classes.footerText}>Charity donations</Typography></ListItem>
                    </List>
                    <List className={classes.logos}>
                        <ListItem>
                        <Grid container>
                            <Grid item sm={3} xs={6}><img className={classes.social}src="./images/facebook.svg" alt="Facebook" /></Grid>
                            <Grid item sm={3} xs={6}><img className={classes.social}src="./images/instagram.svg" alt="Instagram" /></Grid>
                            <Grid item sm={3} xs={6}><img className={classes.social}src="./images/twitter.svg" alt="Twitter" /></Grid>
                            <Grid item sm={3} xs={6}><img className={classes.social}src="./images/youtube.svg" alt="Youtube" /></Grid>
                        </Grid>
                        </ListItem>
                    </List>
                    <List>
                        <ListItem><Typography className={classes.footerText}>Track your order</Typography></ListItem>
                        <ListItem><Typography className={classes.footerText}>Email us</Typography></ListItem>
                        <ListItem><Typography className={classes.footerText}>Help Center</Typography></ListItem>
                    </List>
                </Grid>
                <Toolbar position="static" className={classes.footerWrapper}>
                    <Typography variant="h4" className={classes.title}>PupExpress</Typography>
                    <Typography className={classes.toTop} onClick={handleClick} variant="body1">Back to top</Typography>
                </Toolbar>
            </Box>
        </>
    )
}

export default Footer
