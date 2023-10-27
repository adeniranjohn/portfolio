import '../../styles/Header.scss';
import logo from './../../blackjohnlogo.jpg'
import { Link } from 'react-router-dom';
import Navigator from './Navigator';

import Socials from './Socials'
const Header = () => {
    return (
        <header>
          <section className="img-name">
      <Link to="/"> <img className="header" src={logo} alt="John Adeniran Avatar" width="50px" height="50px" /> </Link>
      <h2>John Adeniran</h2>
      </section>
       <Navigator/>
       <Socials
        hideText='hidden'
       />
      </header>
    )
}

export default Header;