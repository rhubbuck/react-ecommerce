import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  titleNavWrapper: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '200px'
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
  text: {
    color: '#000',
    fontSize: '16px',
    fontWeight: '600',
    borderRadius: '0px',
    '&:hover': {
      borderBottom: '2px solid red',
      backgroundColor: '#fff'
    }
  }
}));