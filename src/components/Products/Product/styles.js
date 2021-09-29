import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    root: {
        height: '430px',
        padding: '0'
    },
    media: {
        height: '210px'
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
        height: '40px'
    },
    bottomContent: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column'
    },
    bottomText: {
        height: '100px'
    }
}))