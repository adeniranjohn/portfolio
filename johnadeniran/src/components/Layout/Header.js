import '../../styles/Header.scss';
import logo from './../../blackjohnlogo.jpg'
import { Link } from 'react-router-dom';
import Navigator from './Navigator';

import Socials from './Socials'
const Header = () => {
    return (
        <header>
      <Link to="/"> <img className="header" src={logo} alt="John Adeniran Avatar" width="50"/> </Link>
      <h2>John Adeniran</h2>
       <Navigator/>
       <Socials
        hideText='hidden'
       />
      </header>
    )
}

export default Header;