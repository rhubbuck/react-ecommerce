import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  infoWrapper: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      margin: '5rem 5vw'
  },
  infoCard: {
      padding: '2em',
      textAlign: 'center',
      borderBottom: '3px solid #00ded3',
      fontFamily: 'Poiret One, cursive'
  }
}
))