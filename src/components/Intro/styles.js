import { makeStyles } from "@material-ui/core/styles";

export default makeStyles ((theme) =>  ({
    mainImage: {
        display: 'block',
        borderRadius: '5px',
        height: '100%',
        width: '120%'
    },
    imageContainer: {
        position: 'relative',
        clipPath: 'polygon(0 0, 89% 0, 100% 100%, 11% 100%)',
        marginLeft: 'auto',
        width: '30vw',
        height: '55vh',
        [theme.breakpoints.down('md')]: {
            height: '45vh'
          },
        [theme.breakpoints.down('sm')]: {
            height: '40vh'
          },
          [theme.breakpoints.down('sm')]: {
            height: '30vh'
          },
    },
    outerWrapper: {
        display: 'flex',
        background: 'linear-gradient(180deg, rgba(0,0,0,1) 12%, rgba(255,255,255,1) 85%)',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '1rem',
        [theme.breakpoints.down('md')]: {
            padding: '3rem 0'
          },
    },
    outerImageContainer: {
        display: 'flex',
        justifyContent: 'center',
        margin: '0 5vw'
    },
    titleNavWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '50%',
        margin: '4em 0',
        [theme.breakpoints.down('md')]: {
            margin: '7rem 0'
          },
    },
    titleNavContainer: {
        justifyContent: 'center',
    },
    text: {
      color: 'black',
      fontSize: '1.75em',
      margin: '1rem'
    }
}))
