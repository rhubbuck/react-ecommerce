import { alpha, makeStyles } from "@material-ui/core/styles";


export default makeStyles ((theme) => ({
    root: {
        flexGrow: 1,
      },
      svg: {
        height: '50px',
        marginLeft: '10px'
      },
      barWrap: {
        justifyContent: 'space-between'
        },
      appbarWrapper: {
        height: '90px',
        backgroundColor: 'black'
      },
      barDivider: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      shoppingCart: {
        [theme.breakpoints.down('md')]: {
          paddingRight: '0',
          marginRight: '0'
      }
      },
      menuButton: {
        marginRight: theme.spacing(2),
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
        color: 'white',
        display: 'none',
        [theme.breakpoints.up('xs')]: {
          display: 'block',
          overflow: 'visible',
          fontSize: '26px',
          maxWidth: '30%'
        },
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
        width: '30vw',
        justifyContent: 'space-around',
        [theme.breakpoints.down('md')]: {
          paddingRight: '5px',
          justifyContent: 'flex-end'
      }

      },
}))