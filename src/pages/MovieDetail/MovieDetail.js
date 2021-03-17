import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { movieState } from '../../movieState';
import { pageAnimation } from '../../animation';
import {
  Awards,
  Detail,
  Headline,
  AwardStyle,
  ImageDisplay,
} from './MovieDetail.styled';

const MovieDetail = ({ ...props }) => {
  const history = useHistory();
  const [movie, setMovie] = useState(null);
  const [movies] = useState(movieState);
  const url = history.location.pathname;
  const { id } = useParams(url);

  useEffect(() => {
    const movie = movies.find((movie) => movie.id === +id);
    setMovie(movie);
  }, [movies, id]);

  return (
    <>
      {movie && (
        <Detail
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
          {...props}
        >
          <Headline position={movie.imageFocusPoint}>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt={movie.title} />
          </Headline>
          <Awards>
            {movie.awards.map((award, index) => (
              <Award
                key={award.title}
                title={award.title}
                description={award.description}
              />
            ))}
          </Awards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt={movie.title} />
          </ImageDisplay>
        </Detail>
      )}
    </>
  );
};

const Award = ({ title, description }) => (
  <AwardStyle>
    <h3>{title}</h3>
    <div className="line"></div>
    <p>{description}</p>
  </AwardStyle>
);

export default MovieDetail;
