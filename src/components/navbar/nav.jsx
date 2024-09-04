import './nav.css';
import { Link } from 'react-router-dom'; // Correctly import Link

function Navbar() {
  return (
    <Link to="/"> {/* Correctly use Link */}
      <img
        src='https://cdn-icons-png.flaticon.com/128/1946/1946433.png'
        className='home'
        alt='Home'
      />
    </Link>
  );
}

export default Navbar;
