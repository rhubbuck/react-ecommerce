import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
   mainGrid: {
       justifyContent: 'center',
       backgroundColor: 'blue',
       textAlign: 'center',
       maxWidth: '90%'
   }, 
   gridContainer: {
    padding: '0 5vw 5vh'
    },
    mainTitle: {
        textAlign: 'center',
        marginBottom: '2rem'
    }
}
))