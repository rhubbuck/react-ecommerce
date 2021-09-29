import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  titleNavWrapper: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '30%',
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
    color: 'white'
  }
}));