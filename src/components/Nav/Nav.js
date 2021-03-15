import { Link } from 'react-router-dom';
import { NavContainer } from './Nav.styled';

const Nav = ({ ...props }) => {
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
        </li>
        <li>
          <Link to="/work">2. Our Work</Link>
        </li>
        <li>
          <Link to="/contact">3. Contact us</Link>
        </li>
      </ul>
    </NavContainer>
  );
};

export default Nav;
