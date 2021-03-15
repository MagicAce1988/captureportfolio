import styled from 'styled-components';

export const NavContainer = styled.nav`
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

  #logo {
    font-size: 1.5rem;
    font-family: 'Lobster', cursive;
    font-weight: lighter;
  }
`;
