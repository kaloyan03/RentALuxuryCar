import './Header.css';

import { Link, Redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated, clearLocalStorage } from '../../utils.js';


function Header() {
  const navigate = useNavigate();

  function logoutOnClickHandler() {
    clearLocalStorage();
    navigate('/login');
  }

    return (
        <header className='site-header'>
        <h2>RentLuxuryCar</h2>

        <nav>
          <ul>
            <li>
              <Link to="/">Cars</Link>
            </li>


            {!isAuthenticated()
            ? <>
            <li>
<Link to="/login">Login</Link>
            </li>
            
            <li>
              <Link to="/register">Register</Link>
            </li>
            </>
            : 
            <li>
<Link to="/login" onClick={logoutOnClickHandler}>Logout</Link>
            </li>
          }
          </ul>
        </nav>
      </header>
    );
}

export default Header;