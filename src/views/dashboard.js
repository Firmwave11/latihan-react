import './style/dashboard.css';
import Nav from './nav';
import ContentInfo from './contentInfo';
import {
  Container,
  makeStyles,
  Grid
}
  from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100%',
  },
  container: {
    [theme.breakpoints.up("lg")]: {
      maxWidth: 1400
    }
  },
  head:{
    marginTop:56
  }
}));

const Dashboard = () => {
  const classes = useStyles()
  return (
    <div className="section1 bg-grey">
      <Container className={classes.container} maxWidth={false}
      >
        <Grid container spacing={4}> 
          <Grid item lg={12}>
            <Nav
            className={classes.head}
            />
          </Grid>
          <Grid item lg={12}>
            <ContentInfo/>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Dashboard;