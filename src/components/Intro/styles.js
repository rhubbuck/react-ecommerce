import { makeStyles } from "@material-ui/core/styles";

export default makeStyles ((theme) =>  ({
    headTitle: {
      fontSize: '56px',
      color: '#fff'
    },
    titleWrapper: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
    },
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
            height: '27vh'
          },
        [theme.breakpoints.down('xs')]: {
            display: 'none'
          }
    },
    altImage: {
      display: 'block',
        borderRadius: '5px',
        height: '100%',
        width: '100%'
    },
    altImageContainer: {
      position: 'relative',
      width: '100%',
      height: '300px',
      [theme.breakpoints.up('sm')]: {
        display: 'none'
      },
    },
    outerWrapper: {
        display: 'flex',
        background: 'linear-gradient(180deg, rgba(0,0,0,1) 12%, rgba(255,255,255,1) 85%)',
        justifyContent: 'center',
        flexDirection: 'column',
        paddingTop: '20px',
        marginBottom: '50px',
    },
    outerImageContainer: {
        display: 'flex',
        justifyContent: 'center',
        margin: '0 5vw',
        padding: '20px 0',
        [theme.breakpoints.up('sm')]: {
          padding: '25px'
        }
    },
}))
