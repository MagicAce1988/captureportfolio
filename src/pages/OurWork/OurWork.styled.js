import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Work = styled(motion.div)`
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
    background: #23d997;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
    object-position: ${({ position }) => position};
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;

// Frame animation

export const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

export const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
export const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
export const Frame4 = styled(Frame1)`
  background: #8effa0;
`;
