import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    root: {
        height: '430px',
        padding: '0'
    },
    media: {
        height: '210px',
        objectFit: 'contain',
        objectSize: 'cover'
    },
    name: {
        fontFamily: 'Poiret One, cursive',
        fontWeight: '600'
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    price: {
        color: 'red',
        fontFamily: 'Poiret One, cursive',
        fontWeight: '600'
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
        height: '40px'
    },
    bottomContent: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        fontFamily: 'Poiret One, cursive'
    },
    bottomText: {
        height: '100px',
        fontFamily: 'Poiret One, cursive'
    }
}))