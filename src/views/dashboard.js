import './style/dashboard.css';
import Nav from './nav';
import {
  Container,
  makeStyles,
}
  from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100%',
  },
  container: {
    [theme.breakpoints.up("md")]: {
      width: 1400
    }
  }
}));

const Dashboard = () => {
  const classes = useStyles()
  return (
    <div className="section1 bg-grey">
      <Container maxWidth="lg">
        <Nav />
      </Container>
    </div>
  )
}

export default Dashboard;