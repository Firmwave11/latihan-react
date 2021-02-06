import Logo from '../assets/logo.svg';
import './style/nav.css';
import {
  makeStyles,
  Grid
} from '@material-ui/core';
import clsx from 'clsx';

const nav = [
  {
    title: 'About me'
  },
  {
    title: 'Skill'
  },
  {
    title: 'Portofolio'
  },
  {
    title: 'CONTACT ME'
  }
]

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  buttonNav:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    height:46,
    width:147,
    borderRadius:30,
    backgroundColor:"white",
    color:"black !important"
  }
}));


const Nav = ({
  className,
}) => {
  const classes = useStyles();
  return (
    <nav className={`nav ${clsx(classes.root,className)}`}>
      <Grid container alignItems="center" justify="space-between">
        <Grid item xs={6}>
          <img
            src={Logo}
            className="nav-logo"
          />
        </Grid>
        <Grid item xs={6} sm="auto">
          <ul>
            {nav.map((content, index) =>
              <li key={index} >
                {content.title != "CONTACT ME"?
                <a>
                  {content.title}
                </a>
                 :
                <a className={classes.buttonNav}>
                  {content.title}
                </a>
                }
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