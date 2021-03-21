import styled from 'styled-components';
import { Layout } from '../../CommonStyles.styled';

export const Faq = styled(Layout)`
  display: block;

  span {
    display: block;
  }

  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }

  .question {
    padding: 1rem 0rem;
    cursor: pointer;
  }

  .answer {
    padding: 2rem 0rem;

    p {
      padding: 1rem 0rem;
    }
  }

  .question:after {
    display: block;
    content: '';
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0 0rem;
    width: 100%;
  }
`;
