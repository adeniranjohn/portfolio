import { Link } from 'react-router-dom'

const Navigator = () => {
    return (
        <nav>
    
         <Link to="/"> Home </Link>
            <Link to="/experience"> Experience</Link>
            <Link to="/about">About</Link>
  
    
        </nav>
    )
}

export default Navigator;