import './nav.css';
import { Link } from 'react-router-dom'; 

function Navbar() {
  return (
    <Link to="/"> 
      <img
        src='https://cdn-icons-png.flaticon.com/128/1946/1946433.png'
        className='home'
        alt='Home'
      />
    </Link>
  );
}

export default Navbar;
