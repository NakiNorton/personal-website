import React from 'react'
import { Link } from "react-scroll";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: '1rem',
  },
  color: {
    backgroundColor: 'white',
    opacity: .9,
  },
  menuButton: {
    marginRight: theme.spacing(3),
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Shadows Into Light, cursive',
  },
}));

const ButtonAppBar = () => {
  const classes = useStyles();

  return (
   
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.color} style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Toolbar>
          <section className="nav-container">
            <ul className="nav-links">
              <li className="nav-link">
                <Link to='header' activeClass="active" spy={true} smooth={true}>
                  <h2 className="sml-h2 nav-head">SN</h2>
                </Link>
              </li>
              <li className="nav-link">
                <Link to='about' activeClass="active" spy={true} smooth={true}>ABOUT ME</Link>
              </li>
              <li className="nav-link">
                <Link to='portfolio' activeClass="active" spy={true} smooth={true} >PORTFOLIO</Link>
              </li>
              <li className="nav-link">
                <Link to='contact' activeClass="active" spy={true} smooth={true} >CONTACT</Link>
              </li>
            </ul>
          </section>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default ButtonAppBar;