import styled from 'styled-components';

export const Detail = styled.div`
  color: white;
`;

export const Headline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
    object-position: ${({ position }) => position};
  }
`;

export const Awards = styled.div`
  min-height: 80vh;
  margin: 5rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const AwardStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }

  p {
    padding: 2rem 0rem;
  }

  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
`;

export const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;
