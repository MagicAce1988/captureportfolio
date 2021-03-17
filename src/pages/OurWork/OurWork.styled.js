import styled from 'styled-components';

export const Work = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 1rem 6rem;
  h2 {
    padding: 1rem 0rem;
  }
`;

export const Movie = styled.div`
  padding-bottom: 5rem;
  .line {
    height: 0.5rem;
    background: #cccccc;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
    object-position: ${({ position }) => position};
  }
`;
