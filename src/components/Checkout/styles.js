import { makeStyles} from "@material-ui/core";

export default makeStyles((theme) => ({
    layout: {
        width: '50%'
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '80px'
    },
    stepper: {
        marginBottom: '20px',
        [theme.breakpoints.down('sm')]: {
            padding: '0',
        },
    },
    paper: {
        padding: '15px 15px 35px 15px'
    }
}))