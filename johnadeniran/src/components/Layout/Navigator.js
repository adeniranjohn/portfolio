import { NavLink } from 'react-router-dom'
import '../../styles/Navigator.scss';

const Navigator = () => {
    return (
        <nav class="navigator">
    
         <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}> Home </NavLink>
            <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}> Projects</NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink>
  
    
        </nav>
    )
}

export default Navigator;