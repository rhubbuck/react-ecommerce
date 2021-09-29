import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  footerWrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      backgroundColor: 'black',
      padding: '0 3vw 10px',
      color: 'white'
  },
  footerText: {
    cursor: 'pointer'
  },
  footerLinkWrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: 'black',
    padding: '40px 10vw',
    color: 'white'
  },
  logos: {
    alignItems: 'center',
    textAlign: 'center',
    fill: 'white'
  },
  toTop: {
    cursor: 'pointer'
  },
  social: {
    width: '40px',
    padding: '5px',
    cursor: 'pointer'
  }
}));