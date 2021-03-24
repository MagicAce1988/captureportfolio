import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Line, NavContainer } from './Nav.styled';

const Nav = ({ ...props }) => {
  // variables and state
  const { pathname } = useLocation();
  const [borderWidth, setBorderWidth] = useState(
    window.innerWidth < 1300 ? 110 : 50
  );

  // effects

  useEffect(() => {
    const changeBorderWidth = () => {
      setBorderWidth(window.innerWidth < 1300 ? 110 : 50);
    };
    window.addEventListener('resize', changeBorderWidth);
    return () => window.removeEventListener('resize', changeBorderWidth);
  }, []);

  return (
    <NavContainer {...props}>
      <h1>
        <Link id="logo" to="/">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">1. About Us</Link>
          {pathname === '/' && (
            <Line
              transition={{ duration: 0.5 }}
              initial={{ width: '0%' }}
              animate={{ width: `${borderWidth}%` }}
            />
          )}
        </li>
        <li>
          <Link to="/work">2. Our Work</Link>
          {pathname === '/work' && (
            <Line
              transition={{ duration: 0.5 }}
              initial={{ width: '0%' }}
              animate={{ width: `${borderWidth}%` }}
            />
          )}
        </li>
        <li>
          <Link to="/contact">3. Contact us</Link>
          {pathname === '/contact' && (
            <Line
              transition={{ duration: 0.5 }}
              initial={{ width: '0%' }}
              animate={{ width: `${borderWidth}%` }}
            />
          )}
        </li>
      </ul>
    </NavContainer>
  );
};

export default Nav;
