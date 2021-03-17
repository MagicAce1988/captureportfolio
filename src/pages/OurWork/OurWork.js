import { useState } from 'react';
import { Link } from 'react-router-dom';
import { movieState } from '../../movieState';
import { Movie, Work } from './OurWork.styled';

const OurWork = ({ ...props }) => {
  const [movies] = useState(movieState);
  return (
    <Work>
      {movies.map((movie) => (
        <Movie key={movie.id} position={movie.imageFocusPoint}>
          <h2>{movie.title}</h2>
          <div className="line"></div>
          <Link to={`work/${movie.id}`}>
            <img src={movie.mainImg} alt={movie.title} />
          </Link>
        </Movie>
      ))}
    </Work>
  );
};

export default OurWork;
