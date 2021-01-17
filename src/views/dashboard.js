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
     }
}));

const Dashboard = () =>{
  const styles = useStyles()
    return (
          <div className="section1 bg-grey">
            <Container
              maxWidth="md"
            >
              <Nav/>
            </Container>
          </div>
    )
}

export default Dashboard;