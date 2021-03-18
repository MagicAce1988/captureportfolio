import { useState } from 'react';
import { Link } from 'react-router-dom';
import { movieState } from '../../movieState';
import {
  Hide,
  Movie,
  Work,
  Frame1,
  Frame2,
  Frame3,
  Frame4,
} from './OurWork.styled';
import {
  fade,
  lineAnimation,
  pageAnimation,
  photoAnimation2,
  slider,
  sliderContainer,
} from '../../animation';
import { motion } from 'framer-motion';

const OurWork = ({ ...props }) => {
  const [movies] = useState(movieState);
  return (
    <Work
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ backgroundColor: '#fff' }}
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider} />
        <Frame2 variants={slider} />
        <Frame3 variants={slider} />
        <Frame4 variants={slider} />
      </motion.div>
      {movies.map((movie) => (
        <Movie key={movie.id} position={movie.imageFocusPoint}>
          <motion.h2 variants={fade}>{movie.title}</motion.h2>
          <motion.div variants={lineAnimation} className="line"></motion.div>
          <Link to={`work/${movie.id}`}>
            <Hide>
              <motion.img
                variants={photoAnimation2}
                src={movie.mainImg}
                alt={movie.title}
              />
            </Hide>
          </Link>
        </Movie>
      ))}
    </Work>
  );
};

export default OurWork;
