import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  titleNavWrapper: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '220px'
  },
  titleNavContainer: {
      justifyContent: 'center',
      [theme.breakpoints.down('sm')]: {
        display: 'none',
    },
    [theme.breakpoints.down('md')]: {
      marginRight: '50px'
  }
  },
  button: {
    color: '#000',
    fontSize: '20px',
    fontWeight: '600',
    letterSpacing: '2px',
    textDecoration: 'none',
    fontFamily: 'Poiret One, cursive',
    borderRadius: '0px',
    textTransform: 'none',
    '&:hover': {
      borderBottom: '2px solid red',
      backgroundColor: '#fff'
    }
  }
}));