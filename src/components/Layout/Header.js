import { Link } from 'react-router-dom';
import Navigator from './Navigator';
const Header = () => {
    return (
        <header>
      <Link to="/"> <img src="avatar.jpeg" alt="John Adeniran Avatar" width="50"/> </Link>
       <Navigator/>
      </header>
    )
}

export default Header;