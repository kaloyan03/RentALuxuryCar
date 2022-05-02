import './Header.css';

import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className='site-header'>
        <h2>RentLuxuryCar</h2>

        <nav>
          <ul>
            <li>
              <Link to="/">Cars</Link>
            </li>

            <li>
              <Link to="/login">Login</Link>
            </li>
            
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
}

export default Header;