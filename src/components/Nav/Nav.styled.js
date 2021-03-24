import { motion } from 'framer-motion';
import styled from 'styled-components';

export const NavContainer = styled.nav`
  position: sticky;
  top: 0;
  z-index: 10000;
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: #282828;
  a {
    color: white;
    text-decoration: none;
  }

  ul {
    display: flex;
    list-style-type: none;
  }

  li {
    padding-left: 10rem;
    position: relative;
  }

  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 0rem 0rem;
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
    }
    li {
      padding: 0;
    }
  }

  #logo {
    font-size: 1.5rem;
    font-family: 'Lobster', cursive;
    font-weight: lighter;
  }
`;

export const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 60%;

  @media (max-width: 1300px) {
    left: 0;
  }
`;
