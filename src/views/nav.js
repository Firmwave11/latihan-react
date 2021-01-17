import Logo from '../assets/logo.svg';
import './style/nav.css';
import {
  makeStyles,
  Grid
} from '@material-ui/core';

const nav = [
  {
    title:'about me'
  },
  {
    title:'skill'
  },
  {
    title:'portofolio'
  },
  {
    title:'contact me'
  }
]

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow:1,
  }
}));


const Nav = () =>{
  const classes = useStyles();
    return (
      <nav className={`nav ${classes.root}`}>
        <Grid containter >
          <Grid item xs={2}>
            <img
            src={Logo}
            className="nav-logo"
            />
          </Grid>
          <Grid item xs={6}>
            <ul>
            { nav.map((content, index) => 
              <li key={index} >
                <a>
                  {content.title}
                </a>
              </li>
              )
            }
            </ul>
          </Grid>
        </Grid>
      </nav>
    )
}

export default Nav;