import { slide as Menu } from 'react-burger-menu'
import { Link } from "react-scroll";

const BurgerMenu = (props) => {
  return (
    <Menu {...props}>
      <Link to='header' activeClass="active" spy={true} smooth={true} className="menu-item">Home</Link>
      
      <Link to='about' activeClass="active" spy={true} smooth={true} className="menu-item">About</Link>
      
      <Link to='portfolio' activeClass="active" spy={true} smooth={true} className="menu-item">Portfolio</Link>
  
      <Link to='contact' activeClass="active" spy={true} smooth={true} className="menu-item">Contact</Link>
    </Menu>
  );
}

export default BurgerMenu