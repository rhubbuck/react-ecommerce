import { alpha, makeStyles } from "@material-ui/core/styles";


export default makeStyles ((theme) => ({
    root: {
        flexGrow: 1,
      },
      barWrap: {
        justifyContent: 'space-between',
        margin: '0 44px',
        [theme.breakpoints.down('sm')]: {
          margin: '0 12px'
        }
        },
      appbarWrapper: {
        height: '80px',
        backgroundColor: '#fff',
        position: 'fixed'
      },
      titleWrapper: {
        display: 'flex'
      },
      barDivider: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      shoppingCart: {
        color: '#00ded3',
        width: '248px',
        '&:hover': {
          backgroundColor: '#fff',
        },
        [theme.breakpoints.down('md')]: {
          paddingRight: '0',
          marginRight: '0'
      },
      [theme.breakpoints.down('sm')]: {
        width: '30px',
        // marginLeft: '30px'
      }
      },
      menuButton: {
        marginRight: theme.spacing(2),
        color: '#000',
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
      },
      sidebarList: {
        padding: '45px 50px 0 50px',
       
      },
      listItem: {
        margin: '30px 0 30px 0',
        paddingBottom: '.5rem',
        borderBottom: '2px solid black',
        fontSize: '1rem'
      },
      title: {
        flexGrow: 1,
        textDecoration: 'none',
        fontFamily: 'Paytone One, sans-serif',
        color: '#000',
        display: 'none',
        fontSize: '64px',
        [theme.breakpoints.up('xs')]: {
          display: 'block',
          overflow: 'visible',
        },
        [theme.breakpoints.down('md')]: {
          fontSize: '54px',
          marginLeft: '110px'
        },
        [theme.breakpoints.down('md')]: {
          margin: '0',
          fontSize: '40px'
        }
      },
      search: {
        height: '35px',
        justifySelf: 'center',
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      buttons: {
        display: 'flex',
        // width: '30vw',
        justifyContent: 'space-around',
        [theme.breakpoints.down('md')]: {
          paddingRight: '5px',
          justifyContent: 'flex-end'
      }

      },
}))