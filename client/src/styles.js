import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  
  appBar: {
    borderRadius: 15,
    margin: '30px 0'
  },
  headBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
  },
  image: {
    marginLeft: '10px',
  },
  [theme.breakpoints.down('sm')]: {
    mainContainer: {
      flexDirection: 'column-reverse',
    }
  }
}));