import '../../styles/Header.scss'

import { Link } from 'react-router-dom';
import Navigator from './Navigator';

import Socials from './Socials'
const Header = () => {
    return (
        <header>
      <Link to="/"> <img className="header" src="avatar.jpeg" alt="John Adeniran Avatar" width="50"/> </Link>
       <Navigator/>
       <Socials
        hideText='hidden'
       />
      </header>
    )
}

export default Header;