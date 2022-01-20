import React from 'react';
import useStyles from './styles';
import { Typography } from '@material-ui/core';

const Info = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.infoWrapper}>
                <Typography variant="h4" className={classes.infoCard}>All materials are ethically sourced</Typography>
                <Typography variant="h4" className={classes.infoCard}>Support local businesses</Typography>
                <Typography variant="h4" className={classes.infoCard}>100% satisfaction guaranteed - free refunds</Typography>
            </div>
        </>
    )
}

export default Info
