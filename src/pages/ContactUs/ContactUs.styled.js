import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ContactContainer = styled(motion.div)`
  min-height: 90vh;
  padding: 2rem 10rem;
  color: #353535;
`;

export const Title = styled.div`
  margin-bottom: 4rem;
  color: #000000;
`;

export const Hide = styled.div`
  overflow: hidden;
`;

export const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;

export const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;
