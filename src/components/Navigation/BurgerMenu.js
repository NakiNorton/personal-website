import { slide as BurgerMenu } from 'react-burger-menu'
import { Link } from "react-scroll";

  export default props => {
    return (
      <BurgerMenu {...props}>
        <Link to='header' activeClass="active" spy={true} smooth={true} className="menu-item">Home</Link>
        
        <Link to='about' activeClass="active" spy={true} smooth={true} className="menu-item">About</Link>
        
        <Link to='portfolio' activeClass="active" spy={true} smooth={true} className="menu-item">Portfolio</Link>
    
        <Link to='contact' activeClass="active" spy={true} smooth={true} className="menu-item">Contact</Link>
      </BurgerMenu>
  );
}
